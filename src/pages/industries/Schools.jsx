import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function Schools() {
  return (
    <IndustryPageTemplate
      industry="Schools"
      industryKey="schools"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/3167a9cc4_generated_1e359996.png"
      heroTitle="Financial Solutions for Schools"
      heroSubtitle="Comprehensive accounting and financial management for private schools, independent colleges, and government school governing bodies."
      overview={[
        "South Africa's education sector includes over 25,000 public schools and more than 2,000 registered independent (private) schools, each with unique financial management requirements. School governing bodies (SGBs) at public schools manage school funds, fee collections, and budgets under the South African Schools Act (SASA), while private schools operate as businesses — often as NPOs or Section 21 companies — with full responsibility for their financial sustainability.",
        "At Hedged, we serve both private and public schools with tailored financial services. For private schools, we manage full accounting, payroll for teaching and administrative staff, tax compliance, and financial reporting to the board of directors and parents. For public school SGBs, we assist with fund accounting, budget preparation, financial reporting for the Department of Basic Education, and audit preparation under SASA requirements.",
        "Education is the foundation of South Africa's future, and we believe school administrators and governing bodies should be empowered with professional financial support so they can focus on delivering quality education. Whether you're a small private school with 50 learners in Pretoria or a large government school with 1,500+ learners in the Eastern Cape, Hedged provides the financial management expertise to keep your school financially sound and compliant.",
      ]}
      challenges={[
        "School fee collection and debtor management — dealing with non-paying parents",
        "Budget preparation and financial reporting to school governing bodies and education departments",
        "Payroll for teaching staff, admin staff, and temporary or contract educators",
        "Compliance with the South African Schools Act (SASA) and Department of Education regulations",
        "Managing NPO/Section 21 registration and compliance requirements for private schools",
        "Audit preparation and financial statement requirements for annual reporting",
      ]}
      solutions={[
        "School fee reconciliation and debtor management systems",
        "Annual budget preparation aligned with SASA requirements",
        "Full payroll processing for all school staff categories",
        "Financial reporting for SGBs, boards of directors, and education departments",
        "NPO registration and compliance management for private schools",
        "Annual financial statement preparation and audit file compilation",
        "Cash flow management to ensure operational continuity throughout the academic year",
      ]}
      benefits={[
        "Professional fee collection improving school revenue",
        "SASA-compliant budgets and financial reports",
        "Accurate payroll ensuring staff are paid correctly and on time",
        "Audit-ready financial records reducing administrative burden",
        "NPO and Section 21 compliance for private school tax benefits",
        "Financial transparency building trust with parents and stakeholders",
      ]}
    />
  );
}