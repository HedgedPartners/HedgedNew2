import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function Construction() {
  return (
    <IndustryPageTemplate
      industry="Construction"
      industryKey="construction"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/f0b4e0922_generated_7f54405b.png"
      heroTitle="Financial Solutions for Construction & Trade Services"
      heroSubtitle="Specialised accounting for construction companies, plumbers, electricians, and trade contractors in South Africa."
      overview={[
        "The South African construction industry is one of the country's largest employers and economic contributors, ranging from major civil engineering projects to residential builders, plumbing services, electrical contractors, and general maintenance companies. The financial management of construction businesses is uniquely complex — with project-based accounting, retention payments, subcontractor management, and compliance with the Construction Industry Development Board (CIDB) regulations.",
        "At Hedged, we work with construction companies and trade service providers of all sizes, from a sole-proprietor plumber registering their first company to established construction firms managing multi-million Rand projects. We understand the project-based nature of construction finances, including milestone billing, contract variations, materials procurement, and the critical importance of cash flow management in an industry known for tight margins and long payment cycles.",
        "South Africa's construction sector faces ongoing challenges including load shedding, material price volatility, and regulatory changes. Our team stays abreast of these developments to provide proactive financial advice that protects your bottom line. Whether you're tendering for government contracts, managing subcontractors, or expanding into new trade areas, Hedged provides the financial expertise to keep your projects — and your business — on track.",
      ]}
      challenges={[
        "Project-based accounting with milestone billing, retentions, and contract variations",
        "Managing cash flow across multiple concurrent projects with staggered payment terms",
        "Subcontractor payments, CIS compliance, and managing diverse workforce costs",
        "CIDB registration, grading, and compliance requirements for tendering",
        "VAT compliance on large projects with complex input and output tax calculations",
        "Tracking material costs, equipment depreciation, and project profitability",
      ]}
      solutions={[
        "Project-based bookkeeping with per-project profitability tracking",
        "Cash flow forecasting across multiple projects to prevent liquidity crises",
        "Subcontractor payment management and reconciliation",
        "CIDB registration assistance and ongoing compliance monitoring",
        "Full VAT compliance including construction industry reverse charges",
        "Payroll for permanent staff, casual labour, and contract workers",
        "Tender document preparation and financial statement compilation for bidding",
      ]}
      benefits={[
        "Clear visibility into project-by-project profitability",
        "Improved cash flow management reducing the risk of project stalls",
        "CIDB compliance ensuring eligibility for government tenders",
        "Accurate payroll for diverse workforce types",
        "Tax-optimised structures saving construction businesses money",
        "Professional financial statements supporting tender applications and bank finance",
      ]}
    />
  );
}