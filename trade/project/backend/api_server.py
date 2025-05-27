from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import parse_sms, extract_advanced_features, generate_credit_score, sample_sms

app = FastAPI()

# CORS setup for frontend
app.add_middleware(
 CORSMiddleware,
 allow_origins=["*"], # In production, set your actual frontend URL
 allow_credentials=True,
 allow_methods=["*"],
 allow_headers=["*"],
)

@app.get("/credit-score")
def get_credit_score():
 parsed_transactions = [parse_sms(sms) for sms in sample_sms]
 features = extract_advanced_features(parsed_transactions)
 raw_score = generate_credit_score(features)
 credit_score = 300 + (raw_score * 550 / 100)

 return {
 "credit_score": round(credit_score),
 "features": features,
 "parsed_transactions": parsed_transactions
 }
