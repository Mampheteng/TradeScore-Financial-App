import re
from datetime import datetime
import numpy as np

sample_sms = [
 "Transact ID 00W3EVMEDCVG Confirmed.You have received M150.00 from 26658044398 - BOLAOANE MPAKANYANE on 10/5/25 at 4:30 PM New M-Pesa balance is M151.80 Customer Care :114",
 "Transact ID 01FTIZQN492S Confirmed.You have received M48.00 from 26657455954 - BOKANG PHAKOE on 11/5/25 at 6:28 AM New M-Pesa balance is M98.07.Customer Care :114",
 "08RL9B7XCP03 Confirmed. M100.00 paid to Tholo Energy on 10/5/25 at 4:41 PM.New M-Pesa balance is M50.07. .Customer Care :114", 
 "Ecocash: CashOut Confirmation: M 50 from 10608-Boiketlo General Maseru .Approval Code :CO250511.1028.A42313. New Wallet balance: M 2.27.Thank you!",
 "You have paid M2 from your wallet for 4 Daily Minutes @ M2 purchase for 62338327.New balance: M 0.27.Post your Moments on Sasai & enjoy Econet All in One App",
 "EcoCash: Transfer Confirmation. M 30 from KATLEHO TOTI Approval Code: PP250514.0842.A96731. New wallet balance: M 30.27.",
 "EcoCash: Transfer Confirmation. M 80 from BOLAOANE MPAKANYANE Approval Code: PP250515.0839.B40992. New wallet balance: M 90.47.",
 "Your Interest has been credited successfully from EcoCash with Transaction ID MD250514.2004.B64031. Amount 9.8 M. New Balance 10.47 M."

]

def parse_sms(sms: str):
 parsed = {}
 lower_sms = sms.lower()

 # Transaction type
 if "received" in lower_sms or "transfer confirmation" in lower_sms or "interest has been credited" in lower_sms:
    parsed["type"] = "credit"
 elif "paid" in lower_sms or "cashout" in lower_sms:
    parsed["type"] = "debit"
 else:
    parsed["type"] = "unknown"

 # Extract amount
 amount_match = re.search(r'(?:amount\s*)?([Mm])\s?([0-9,.]+)', sms, re.IGNORECASE)
 if amount_match:
     try:
        parsed["amount"] = float(re.sub(r'[^\d.]', '', amount_match.group(2)))
     except ValueError:
        parsed["amount"] = None

 # Extract balance
 balance_match = re.search(r'new(?:\s\w+)?\s+balance(?:[:\s]*)[^\d]*([Mm])?\s?([0-9,.]+)', sms, re.IGNORECASE)
 if not balance_match:
     balance_match = re.search(r'new(?:\s\w+)?\s+wallet\s+balance(?:[:\s]*)[^\d]*([Mm])?\s?([0-9,.]+)', sms, re.IGNORECASE)
 if balance_match:
     try:
        parsed["balance"] = float(re.sub(r'[^\d.]', '', balance_match.group(2)))
     except ValueError:
        parsed["balance"] = None

 # Extract sender
 sender_match = sender_match = re.search(r'from\s(?:\+?\d{5,15}[-:\s]*)?([A-Z][A-Z\s]+?)(?=\s+on|\s+Approval|\.|$)', sms, re.IGNORECASE)
 if sender_match:
     parsed["sender"] = sender_match.group(1).strip()
 else:
    parsed["sender"] = "Unknown"

 # Extract timestamp - M-Pesa
 mpesa_time = re.search(r'on\s(\d{1,2}/\d{1,2}/\d{2})\s+at\s+(\d{1,2}:\d{2}\s?[APMapm]{2})', sms)
 if mpesa_time:
    date_str = mpesa_time.group(1)
    time_str = mpesa_time.group(2).upper().replace(" ", "")
    dt_str = f"{date_str} {time_str}"
    try:
        parsed["timestamp"] = datetime.strptime(dt_str, "%d/%m/%y%I:%M%p").isoformat()
    except ValueError:
        parsed["timestamp"] = dt_str # fallback if parsing fails
 else:
    # Extract timestamp - EcoCash
    ecocash_code = re.search(r'(?:CO|PP|MD)(\d{6})\.(\d{4})', sms)
    if ecocash_code:
         date_part = ecocash_code.group(1) # YYMMDD
         time_part = ecocash_code.group(2) # HHMM
         try:
            dt = datetime.strptime(date_part + time_part, "%y%m%d%H%M")
            parsed["timestamp"] = dt.isoformat()
         except ValueError:
            parsed["timestamp"] = f"{date_part}.{time_part}"

 return parsed


def extract_advanced_features(transactions):
 total_credits = 0
 total_debits = 0
 credit_count = 0
 debit_count = 0
 balances = []
 senders = set()
 dates = []

 for tx in transactions:
 # Balance list for volatility and trend
    if tx.get("balance") is not None:
        balances.append(tx["balance"])

 # Fix: parse timestamp into datetime object
 timestamp = tx.get("timestamp")
 if timestamp:
    try:
        dates.append(datetime.fromisoformat(timestamp))
    except ValueError:
        pass # skip malformed timestamp

 # Credit and debit handling
 amount = tx.get("amount")
 if amount is not None:
    if tx.get("type") == "credit":
        total_credits += amount
        credit_count += 1
        if tx.get("sender") != "Unknown":
            senders.add(tx["sender"])
 elif tx.get("type") == "debit":
    total_debits += amount
    debit_count += 1

 # Aggregate features
 features = {
 "total_transactions": credit_count + debit_count,
 "credit_count": credit_count,
 "debit_count": debit_count,
 "unique_credit_senders": len(senders),
 "total_inflows": total_credits,
 "total_outflows": total_debits,
 }

 # Averages and spending rate
 features["avg_credit"] = total_credits / credit_count if credit_count else 0
 features["avg_debit"] = total_debits / debit_count if debit_count else 0
 features["spending_rate"] = total_debits / (total_credits + 1e-6)

 # Balance statistics
 if balances:
    features["avg_balance"] = sum(balances) / len(balances)
    features["min_balance"] = min(balances)
    features["max_balance"] = max(balances)
    features["balance_trend"] = balances[-1] - balances[0] if len(balances) >= 2 else 0
    features["balance_volatility"] = float(np.std(balances)) if len(balances) > 1 else 0

 # Time-based metrics
 if len(dates) >= 2:
    date_span = max(dates) - min(dates)
    date_span_days = date_span.total_seconds() / (60 * 60 * 24) + 1
    features["transaction_freq_per_day"] = features["total_transactions"] / date_span_days
    features["date_range_days"] = date_span_days
    features["first_transaction"] = min(dates)
    features["last_transaction"] = max(dates)
    features["income_freq"] = credit_count / date_span_days
 else:
    features["transaction_freq_per_day"] = features["total_transactions"]
    features["date_range_days"] = 1
    features["income_freq"] = credit_count

 return features

def generate_credit_score(features):
 """
 Generates a proxy credit score based on extracted financial features.
 Score is between 0 (high risk) and 100 (creditworthy).
 """

 # Get values with fallbacks
 income_freq = features.get("income_freq", 0)
 avg_balance = features.get("avg_balance", 0)
 inflows = features.get("total_inflows", 0)
 outflows = features.get("total_outflows", 0)
 spending_rate = features.get("spending_rate", 1)
 volatility = features.get("balance_volatility", 0)
 duration_days = features.get("date_range_days", 0)

 score = 0

 # Income frequency (up to 25 pts)
 if income_freq >= 5:
    score += 25
 elif income_freq >= 3:
    score += 15
 elif income_freq >= 1:
    score += 8

 # Average balance (up to 25 pts)
 if avg_balance >= 5000:
    score += 25
 elif avg_balance >= 2000:
    score += 15
 elif avg_balance >= 1000:
    score += 10
 elif avg_balance >= 500:
    score += 5

 # Inflow to outflow ratio (up to 20 pts)
 if inflows > outflows:
    score += 20
 elif inflows == outflows:
    score += 10
 else:
    score += 5

 # Spending rate (up to 15 pts)
 if spending_rate < 0.5:
     score += 15
 elif spending_rate < 0.8:
     score += 10
 elif spending_rate <= 1.0:
     score += 5

 # Balance volatility (up to 15 pts)
 if volatility < 100:
    score += 15
 elif volatility < 500:
    score += 10
 elif volatility < 1000:
    score += 5

 # Transaction duration (up to 15 pts)
 if duration_days >= 90:
    score += 15
 elif duration_days >= 60:
    score += 10
 elif duration_days >= 30:
    score += 5
 else:
    score += 0

 return min(score, 100)

# Parse the sample messages
parsed_transactions = [parse_sms(sms) for sms in sample_sms]

# Print parsed SMS data
print("Parsed Transactions:")
for tx in parsed_transactions:
 print(tx)

# Extract and print advanced features
print("\nAdvanced Features:")
features = extract_advanced_features(parsed_transactions)
for key, value in features.items():
 print(f"{key}: {value}")

# Assign and print label
features = extract_advanced_features(parsed_transactions)
raw_score = generate_credit_score(features)
credit_score = 300 + (raw_score * 550 / 100) 
print(f"""\nRaw Score: {raw_score}
Final Credit Score: {credit_score}""")