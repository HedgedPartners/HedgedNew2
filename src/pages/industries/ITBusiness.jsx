import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function ITBusiness() {
  return (
    <IndustryPageTemplate
      industry="IT & Business Services"
      industryKey="it_business"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/91fa6293d_generated_4b6e48e4.png"
      heroTitle="Financial Solutions for IT & Business Services"
      heroSubtitle="Tailored accounting and financial management for tech companies, consultancies, and professional service providers in South Africa."
      overview={[
        "South Africa's IT and business services sector is one of the fastest-growing segments of the economy, driven by digital transformation, remote work adoption, and the country's position as a hub for African tech innovation. From software development companies and managed service providers (MSPs) to management consultancies, digital marketing agencies, and freelance IT professionals, this sector demands agile financial management that keeps pace with rapid growth and evolving business models.",
        "At Hedged, we work extensively with IT and business services companies, understanding the unique financial dynamics of project-based revenue, recurring subscription models (SaaS), contractor-heavy workforces, and the R&D tax incentives available under Section 11D of the Income Tax Act. We help tech companies and service providers maintain clean books, optimise their tax position, manage payroll for diverse team structures, and generate the financial reports needed for investor engagement and business scaling.",
        "Whether you're a two-person startup building the next great South African app, a mid-size IT consultancy servicing corporate clients, or an established BPO operation employing hundreds, Hedged provides scalable financial services that grow with your business. We speak your language, we understand SaaS metrics and project accounting, and we deliver the financial clarity that tech founders and business owners need to make confident decisions.",
      ]}
      challenges={[
        "Revenue recognition complexity across project-based, retainer, and SaaS subscription models",
        "Managing contractor payments alongside permanent staff payroll",
        "R&D tax incentive claims under Section 11D of the Income Tax Act",
        "Cash flow management during rapid growth or between large project payments",
        "Financial reporting for investor relations, funding rounds, and board presentations",
        "Multi-currency transactions for companies with international clients",
      ]}
      solutions={[
        "Revenue recognition policies aligned with different billing models",
        "Payroll management for mixed teams — permanent, contract, and remote workers",
        "R&D tax incentive identification and Section 11D claim preparation",
        "Cash flow forecasting and working capital management for growth-phase companies",
        "Investor-ready financial statements and board reporting packs",
        "Multi-currency bookkeeping and foreign exchange management",
        "Process optimisation for billing, invoicing, and financial workflows",
      ]}
      benefits={[
        "Accurate financials across complex revenue models",
        "Tax savings through R&D incentives and optimal structuring",
        "Scalable accounting that grows with your business",
        "Investor-ready reporting supporting funding and growth",
        "Streamlined payroll for diverse workforce types",
        "Financial clarity enabling confident business decisions",
      ]}
    />
  );
}