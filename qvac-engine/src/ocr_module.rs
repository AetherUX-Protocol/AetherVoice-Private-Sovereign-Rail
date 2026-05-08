use image::DynamicImage;
use qvac_sdk::{ocr, ModelType};

pub async fn extract_text_locally(img: DynamicImage) -> Result<String> {
    // Uses Tether QVAC's local OCR plugin
    let ocr_model = load_model("qvac-ocr-standard.onnx", ModelType::OCR).await?;
    
    let text = ocr(ocr_model, img).await?;
    Ok(text)
}
