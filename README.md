# Project Name
Final Project for Software Engineering Capstone.
## 📄 Abstract
We developed Ninerbay, a local-first e-commerce web application for UNC Charlotte students to buy, sell, and exchange items. 
Many college students, especially recent freshmen or grads, have belongings to buy/sell. Existing solutions force students to 
rely on social media platforms like Snapchat or Facebook Marketplace to find decorations and other items. However, these platforms
have no restriction to UNC Charlotte students, causing a sense of distrust of meeting with someone who may not be a fellow peer.
Ninerbay ensures that only UNC Charlotte students can access the platform, creating a feeling of trust and camarederie between
the buyer and seller. Students can create listings with ease, uploading a product image, adding a description, and managing listings
from their profile.

## 🪄 Features
- **UNC Charlotte Verification:** Ensures that only verified @charlotte.edu emails can sign up for the platform.
- **AWS File Storage:** Uses Amazon's Simple Storage Service (S3) to store listing images.
- **File Compression:** Utilizes the sharp library for super fast image compression and conversion to .webp format, reducing overall file sizes by 10-50x

## 💾 Installation
### Requirements
- NodeJS
- AWS S3 Bucket
### Installation Steps
1. **Clone the repository:**
```bash
git clone https://github.com/zenatron/Ninerbay.git
```
2. **Navigate into the directory:**
```bash
 cd Ninerbay
```
3. **Install dependencies:**
```bash
npm install
```
4. **Additional configuration:**
Add your AWS S3 configuration secrets into the environment variables file `.env`
   
## ⚙️ Usage
Provide examples and code snippets to show how to use the project. Include common commands and scenarios.
```bash
npm start
```
## 💬 Contribution
As this project is not in active development, contributions are not accepted.

## 🧪 Tests
```bash
npm test
```
## ©️ License
Please review the LICENSE file for details.

## 🤝 Acknowledgements
Thank you to my team members: Zach S., Harrison H., and Stone Z.
