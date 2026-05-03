import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function Medical() {
  return (
    <IndustryPageTemplate
      industry="Medical Practices"
      industryKey="medical"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/b0e398401_generated_22c0f882.png"
      heroTitle="Financial Solutions for Medical Practitioners"
      heroSubtitle="Tailored accounting, practice management, and compliance services for doctors, specialists, and healthcare providers."
      overview={[
        "South Africa's healthcare sector is a vital pillar of the national economy, encompassing private practitioners, specialist groups, physiotherapists, dentists, psychologists, and allied health professionals. Medical practices face unique financial challenges — from navigating medical aid billing and ICD-10 coding complexities to managing practice overheads and ensuring Health Professions Council of South Africa (HPCSA) compliance.",
        "At Hedged, we provide comprehensive financial services specifically tailored for the medical industry. We understand the intricacies of medical practice accounting, including split billing, co-payments, gap cover claims, and the often-delayed revenue cycle associated with medical aid reimbursements. Our team helps practitioners maintain healthy cash flow while ensuring full SARS and regulatory compliance.",
        "Whether you're a GP running a solo practice in a rural town, a group of specialists sharing consulting rooms in Sandton, or a physiotherapy clinic in Cape Town, Hedged offers the financial backbone your practice needs. We handle the numbers so you can focus on patient care. From registering new practices with CIPC and SARS to optimising your tax position through practice structuring advice, we're your partner in medical financial management.",
      ]}
      challenges={[
        "Complex revenue cycles with delayed medical aid payments and claim rejections",
        "Managing practice cash flow while waiting for medical aid reimbursements",
        "Navigating tax obligations for both personal services income and practice entities",
        "HPCSA registration fees, CPD compliance, and professional indemnity costs",
        "Staff management including nurses, receptionists, and locum doctors on payroll",
        "Tracking medical equipment depreciation and practice asset management",
      ]}
      solutions={[
        "Cash flow management strategies tailored to medical aid payment cycles",
        "Practice structuring advice for optimal tax efficiency (PTY, Trust, or sole proprietor)",
        "Full bookkeeping including tracking of patient accounts, co-payments, and medical aid reconciliation",
        "Payroll for practice staff — nurses, receptionists, locums, and administrative support",
        "Tax compliance including provisional tax, VAT (where applicable), and annual returns",
        "CIPC registration for new practices and ongoing secretarial services",
        "Financial reporting and budgeting to plan for equipment upgrades and practice expansion",
      ]}
      benefits={[
        "Improved cash flow through professional debtor management strategies",
        "Tax-efficient practice structures saving thousands in annual tax",
        "Accurate payroll ensuring compliant staff remuneration",
        "Time saved on admin — more time for patient consultations",
        "Financial clarity with monthly management reports",
        "Compliance peace of mind with SARS, CIPC, and HPCSA requirements",
      ]}
    />
  );
}