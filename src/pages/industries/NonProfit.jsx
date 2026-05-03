import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function NonProfit() {
  return (
    <IndustryPageTemplate
      industry="Non-Profit Organisations"
      industryKey="non_profit"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/3625814f2_generated_6e541b7f.png"
      heroTitle="Financial Solutions for Non-Profit Organisations"
      heroSubtitle="Specialised accounting, compliance, and reporting services for NPOs, NGOs, and Section 18A organisations in South Africa."
      overview={[
        "South Africa has one of the most vibrant non-profit sectors in Africa, with over 200,000 registered NPOs working across areas from education and healthcare to community development, environmental conservation, and social welfare. Non-profit organisations face unique financial challenges — they must demonstrate fiscal responsibility and transparency to donors, comply with complex regulatory requirements, and often operate with limited administrative capacity and tight budgets.",
        "At Hedged, we are passionate about supporting NPOs in South Africa. We understand that every Rand must be accounted for, and that donor confidence depends on impeccable financial management. We provide comprehensive accounting services tailored to the non-profit sector, including fund accounting (tracking restricted vs unrestricted funds), donor reporting, compliance with the NPO Act, and preparation for external audits required by funders and the Department of Social Development.",
        "Whether you're a community-based organisation in Soweto running feeding schemes, an environmental NPO in KwaZulu-Natal, a faith-based charity in the Western Cape, or a national foundation managing multi-million Rand programmes, Hedged provides the financial management expertise you need. We also assist organisations with Section 18A registration with SARS (enabling tax-deductible donations), PBO compliance, and navigating the unique tax exemptions available to qualifying non-profit entities in South Africa.",
      ]}
      challenges={[
        "Fund accounting — tracking restricted and unrestricted funds across multiple projects and donors",
        "Compliance with the NPO Act, including annual reporting to the Department of Social Development",
        "Preparing donor reports meeting diverse funder requirements and standards",
        "Maintaining Section 18A status and PBO compliance with SARS",
        "Managing limited budgets while meeting financial management best practice standards",
        "Audit preparation for external funders, the DSD, and board oversight requirements",
      ]}
      solutions={[
        "Fund accounting systems tracking project-specific income and expenditure",
        "Annual NPO compliance returns and DSD reporting",
        "Donor report preparation meeting specific funder templates and requirements",
        "Section 18A and PBO registration, compliance, and annual tax exemption renewals",
        "Payroll for NPO staff including compliance with Sectoral Determinations",
        "Financial statement preparation and audit file compilation",
        "Budget preparation for funding proposals and grant applications",
      ]}
      benefits={[
        "Full compliance with NPO Act and DSD requirements",
        "Accurate fund tracking building donor confidence and trust",
        "Section 18A compliance enabling tax-deductible donations",
        "Professional financial statements supporting funding applications",
        "Reduced admin burden letting NPO leaders focus on their mission",
        "Transparent reporting strengthening stakeholder relationships",
      ]}
    />
  );
}