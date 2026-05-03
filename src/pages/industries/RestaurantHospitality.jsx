import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function RestaurantHospitality() {
  return (
    <IndustryPageTemplate
      industry="Restaurant & Hospitality"
      industryKey="restaurant_hospitality"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/c18f86f1f_generated_b21fa69a.png"
      heroTitle="Financial Solutions for Restaurants & Hospitality"
      heroSubtitle="Specialised accounting for restaurants, guesthouses, hotels, and hospitality businesses across South Africa."
      overview={[
        "South Africa's restaurant and hospitality industry is a cornerstone of the tourism economy, ranging from world-renowned fine dining establishments in Cape Town to family-owned guesthouses in the Winelands, boutique hotels in Johannesburg, and township eateries serving communities across the country. The industry was profoundly impacted by COVID-19 and continues to face challenges including rising input costs, load shedding (and the cost of generators and inverters), and evolving consumer preferences.",
        "At Hedged, we understand the hospitality industry inside out. We work with restaurant owners, guest house operators, B&B proprietors, hotel managers, and catering companies to manage their finances efficiently. Hospitality accounting is uniquely complex — involving daily cash reconciliation, tip management, food cost control, beverage stock management, seasonal cash flow variations, and compliance with tourism levy requirements.",
        "Whether you're opening a new coffee shop, running a beachfront restaurant, managing a game lodge in Limpopo, or operating a chain of fast-food franchises, Hedged delivers the financial clarity you need. From tourism levy registration and VAT compliance to staff payroll (including gratuity management) and financial forecasting for seasonal businesses, we ensure your hospitality business remains financially healthy year-round.",
      ]}
      challenges={[
        "Daily cash reconciliation and managing tips/gratuities for staff",
        "Food and beverage cost control — maintaining target margins in a volatile input market",
        "Managing seasonal cash flow variations (peak vs off-peak tourism periods)",
        "Compliance with tourism levies, liquor licence requirements, and health regulations",
        "Payroll for a diverse workforce including chefs, waiters, cleaners, and seasonal staff",
        "Rising operational costs from load shedding (generators, diesel, inverters)",
      ]}
      solutions={[
        "Daily/weekly POS reconciliation and cash management procedures",
        "Food cost analysis and menu profitability reporting",
        "Cash flow forecasting incorporating seasonal trends and tourism patterns",
        "Tourism levy registration and compliance management",
        "Full payroll including tip allocation, UIF, and SDL compliance",
        "VAT compliance for mixed supplies (accommodation, food, liquor)",
        "Financial modelling for expansion, renovation, or new venue launches",
      ]}
      benefits={[
        "Tighter cash control reducing losses and leakage",
        "Food cost insights helping optimise menu pricing and profitability",
        "Seasonal cash flow planning preventing off-peak financial strain",
        "Compliant payroll keeping staff satisfied and labour laws met",
        "Tourism and liquor levy compliance avoiding penalties",
        "Financial clarity for growth decisions and investor engagement",
      ]}
    />
  );
}