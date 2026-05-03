import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function Legal() {
  return (
    <IndustryPageTemplate
      industry="Legal Services"
      industryKey="legal"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/09f34e170_generated_a5a9faa9.png"
      heroTitle="Financial Solutions for Law Firms"
      heroSubtitle="Specialised accounting, trust account management, and compliance services for legal practitioners across South Africa."
      overview={[
        "Law firms and legal practitioners in South Africa operate in a highly regulated financial environment. From managing trust accounts governed by the Legal Practice Council (LPC) to ensuring compliance with the Legal Practice Act, the financial demands on law firms are immense. Whether you're a sole practitioner, a small partnership, or a large multi-disciplinary firm, accurate and compliant financial management is not just a business need — it's a legal obligation.",
        "At Hedged, we understand the unique financial landscape of the South African legal sector. We work with attorneys, advocates, conveyancers, and legal consultancies to manage their bookkeeping, trust accounts, taxation, payroll, and secretarial requirements. Our team is well-versed in the specific regulations governing legal practice finances, including Section 86 of the Legal Practice Act relating to trust account audits.",
        "South Africa's legal industry contributes significantly to the country's GDP, with thousands of registered legal practitioners operating across all nine provinces. Yet many law firms — particularly smaller practices — struggle with financial administration, often diverting valuable billable time to managing books instead of serving clients. Hedged bridges this gap by providing reliable, affordable, and compliant financial services that let legal professionals focus on what they do best: practising law.",
      ]}
      challenges={[
        "Managing trust accounts in compliance with the Legal Practice Act and LPC regulations",
        "Accurate tracking of billable hours and fee reconciliation across multiple matters",
        "Complex partner remuneration structures and profit-sharing arrangements",
        "Keeping up with SARS tax obligations including provisional tax, VAT, and PAYE",
        "CIPC annual returns and practice compliance documentation",
        "Balancing administrative overhead with the need to maximise billable capacity",
      ]}
      solutions={[
        "Trust account management and reconciliation compliant with LPC requirements",
        "Comprehensive bookkeeping tailored to legal practice accounting standards",
        "Partner profit-sharing calculations and reporting",
        "Full tax compliance including provisional tax, VAT returns, and IRP5 certificates",
        "Payroll processing for support staff, candidate attorneys, and associates",
        "CIPC filings, B-BBEE certification, and company secretarial services",
        "Process optimisation to reduce admin time and increase billable output",
      ]}
      benefits={[
        "Full compliance with Legal Practice Council financial requirements",
        "More billable hours through outsourced admin and finance functions",
        "Accurate trust account management reducing audit risk",
        "Tax-efficient structures for partnerships and sole practitioners",
        "Reliable payroll for staff, from paralegals to senior associates",
        "Peace of mind knowing your books are always audit-ready",
      ]}
    />
  );
}