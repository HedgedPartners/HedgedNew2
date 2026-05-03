import React from 'react';
import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function Retail() {
  return (
    <IndustryPageTemplate
      industry="Retail"
      industryKey="retail"
      heroImage="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/73e63170f_generated_da29de78.png"
      heroTitle="Financial Solutions for Retailers"
      heroSubtitle="Comprehensive accounting for e-commerce shops, brick-and-mortar retailers, and omnichannel businesses in South Africa."
      overview={[
        "South Africa's retail sector is dynamic and diverse, encompassing everything from township spaza shops and independent boutiques to major e-commerce platforms and franchise operations. Retail businesses operate on tight margins where every cent counts — and having accurate, timely financial information is the difference between profitability and failure. With the rise of online shopping, the sector is also navigating complex multi-channel revenue streams, digital payment platforms, and cross-border sales.",
        "At Hedged, we serve retailers across the full spectrum — from a small clothing store in Centurion managing inventory and a single POS system, to established e-commerce operations processing thousands of transactions per month across platforms like Takealot, Shopify, and WooCommerce. We understand the unique financial needs of retail: inventory accounting, cost of goods sold (COGS) management, VAT on retail sales, and the cash flow challenges that come with seasonal demand fluctuations.",
        "Whether you're a brick-and-mortar retailer expanding to e-commerce, an online-only store scaling up, or a franchise operator managing multiple outlets, Hedged provides the financial infrastructure you need. From reconciling sales across multiple channels and payment providers (Yoco, SnapScan, Payfast) to managing staff payroll and ensuring SARS compliance, we handle the back office so you can focus on selling.",
      ]}
      challenges={[
        "Multi-channel sales reconciliation across physical stores, online platforms, and marketplaces",
        "Inventory accounting, stock valuation, and cost of goods sold (COGS) tracking",
        "VAT compliance on retail sales including zero-rated items and mixed supplies",
        "Managing cash flow during seasonal peaks and troughs in demand",
        "Payroll for a mix of permanent, part-time, and commission-based staff",
        "Reconciling multiple payment providers (card, EFT, mobile payments, cash)",
      ]}
      solutions={[
        "Multi-channel revenue reconciliation and reporting",
        "Inventory accounting with COGS tracking and stock valuation methods",
        "Full VAT compliance including vendor registration and regular submissions",
        "Cash flow forecasting to manage seasonal trading patterns",
        "Payroll processing including commission calculations and UIF/SDL",
        "Financial reporting with key retail metrics (gross margin, stock turn, etc.)",
        "E-commerce accounting integrations and platform reconciliation",
      ]}
      benefits={[
        "Accurate financial picture across all sales channels",
        "Optimised inventory management improving margins",
        "VAT compliance avoiding penalties and interest",
        "Better cash flow planning for stock purchasing and expansion",
        "Reliable payroll for retail teams across multiple locations",
        "Data-driven insights for better buying and pricing decisions",
      ]}
    />
  );
}