use anyhow::Result;
use qvac_sdk::{load_model, completion, ModelType};

pub struct AuditReport {
    pub trust_score: u8,
    pub risk_flags: Vec<String>,
    pub audit_hash: String,
}

pub async fn perform_sovereign_audit(document_text: &str) -> Result<AuditReport> {
    // 1. Load the localized Fraud Detection model
    let model = load_model("trade-security-v1.onnx", ModelType::LLM).await?;

    // 2. Perform Semantic Risk Analysis
    // We prompt the local model to look for "Manipulation Patterns"
    let prompt = format!(
        "Analyze the following trade mandate for fraud signals. 
        Focus on: Urgency, Bank Detail Changes, and Identity Inconsistency.
        Mandate Text: {}", 
        document_text
    );

    let analysis = completion(model, &prompt).await?;

    // 3. Score the Result
    let mut risk_flags = Vec::new();
    let mut score = 100;

    if analysis.contains("URGENCY_SENSE") {
        risk_flags.push("High Urgency detected".to_string());
        score -= 30;
    }
    if analysis.contains("PAYMENT_DIVERSION") {
        risk_flags.push("Suspicious payment instructions".to_string());
        score -= 60;
    }

    Ok(AuditReport {
        trust_score: score,
        risk_flags,
        audit_hash: format!("{:x}", md5::compute(document_text)),
    })
}
