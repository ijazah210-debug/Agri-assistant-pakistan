# 🌾 Agri Assistant – AI Smart Farming Platform for Pakistan

> **Final Project Submission / Capstone Project**  
> **Repository Status:** Public  
> **Target Region:** Pakistan (Punjab, Sindh, KPK, Balochistan)  

---

## 📌 Problem Statement

In Pakistan, over 40% of the national labor force is engaged in agriculture, yet small-holder farmers face severe yield losses every season due to critical information gaps:

1. **Lack of Agricultural Expertise:** Traditional farming relies on guesswork or delayed advice, leading to improper crop selection and poor fertilizer usage.
2. **Unaware of Mandi Rates:** Farmers lack real-time access to district-level market prices (Mandi rates), leading to financial exploitation by middlemen.
3. **Pest & Disease Outbreaks:** Plant diseases (like leaf blight and rust) are diagnosed too late, destroying entire harvests.
4. **Climate & Water Shortages:** Irrigation is managed inefficiently due to lack of localized weather and rain alerts.

---

## 💡 Solution

**Agri Assistant** is a unified, end-to-end AI-powered web platform designed specifically for Pakistani farmers, agriculture students, extension officers, and experts. It bridges the gap between technology and traditional farming by providing intelligent crop recommendations, disease diagnosis, real-time market tracking, and weather insights.

---

## 👥 Target Audience & User Roles

- **Farmers:** Receive simple AI advice, market prices, weather updates, and disease solutions.
- **Agriculture Students:** Study regional crop patterns, disease causes, and recommended treatments.
- **Agricultural Experts:** Connect with farmers for consultations and provide verified guidance.
- **Govt Agriculture Officers:** Monitor agricultural trends and regional market rate fluctuations.

---

## 🚀 Key Features & Functionalities

1. **⭐ AI Crop Advisor:**
   - Input parameters: District/Location, Soil Type (Loamy, Clay, Sandy, Silt), Season (Kharif, Rabi, Zaid), and Water Availability.
   - Output: Generates customized crop recommendations, safe NPK fertilizer dosages, and irrigation schedules.

2. **⭐ Plant Disease Diagnosis:**
   - Upload leaf/plant images to detect fungal and bacterial infections.
   - Provides confidence scores, underlying causes, organic/chemical treatment, and preventive measures.

3. **📊 Live Mandi Market Prices:**
   - Displays real-time market rates for major crops (Wheat, Basmati Rice, Cotton, Maize, Sugarcane, Potato) across key markets (Multan, Sahiwal, Gujranwala, Faisalabad, Okara).

4. **🌤️ Smart Weather Dashboard:**
   - Provides 7-day weather forecasts, humidity, wind speed, and rain alerts for agricultural planning.

5. **👨‍🌾 Expert Consultation & Community Forum:**
   - Allows farmers to ask community questions and connect with certified agricultural experts.

---

## 🤖 AI Engine & System Instructions

The core intelligence is powered by **Google Gemini API (`gemini-1.5-flash`)**, configured with customized system prompts to ensure accurate and safe localized advice.

### System Prompt / Instructions Used in Code:

```text
You are an expert Agriculture Assistant tailored specifically for Pakistani farmers.
Your job is to provide accurate, practical, and safe farming advice.

When recommending crops:
- Consider the user's Location/District in Pakistan.
- Match crops to Soil Type (Loamy, Clay, Sandy, Silt) and Water Availability.
- Align recommendations with Pakistan's agricultural seasons (Kharif, Rabi, Zaid).
- Provide safe NPK fertilizer doses and irrigation guidelines.

If the user asks about plant diseases:
- Provide probable disease name, causes, treatment (organic & chemical), and prevention.
- NEVER invent dangerous advice or unverified chemicals.
- If uncertain, advise consulting a local agriculture expert.
- Keep language simple, clear, and direct.
