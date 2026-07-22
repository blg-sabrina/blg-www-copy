---
title: "Katalog Aplet Lengkap"
description: "Direktori menyeluruh semua aplet BigLedger yang disusun mengikut modul dan fungsi"
layout: applet-catalog
tags:
- applets
- catalog
- directory
- modules
- reference
weight: 2
intro: "This catalog lists every applet available in the BigLedger ecosystem, organized by module and functionality. Each applet is described with its primary purpose and key capabilities."
callout: "Applets are reusable functional components that can belong to multiple modules. This many-to-many relationship eliminates duplication and ensures consistent behavior across the entire BigLedger system."
modules:
  - name: "Core module"
    id: core-module
    count: 13
    desc: "Foundation applets required by all other modules."
    applets:
      - name: "Tenant Admin Applet"
        url: /applets/tenant-admin-applet/
        tagline: "System-wide administration and configuration."
        bullets:
          - User management and security configuration
          - Audit settings and compliance management
          - Multi-tenant environment setup
          - System monitoring and health checks
      - name: "Chart of Accounts Applet"
        url: /applets/chart-of-account-applet/
        tagline: "Complete chart of accounts structure management."
        bullets:
          - Account hierarchies and financial statement mapping
          - Multi-currency support and exchange rates
          - Account classifications and controls
          - Integration foundation for all financial operations
      - name: "Organization Applet"
        url: /applets/organization-applet/
        tagline: "Organizational structure and company management."
        bullets:
          - Company, branch, and location setup
          - Department and cost center management
          - Organizational hierarchy and reporting structure
          - Multi-location operational support
      - name: "Document Item Maintenance Applet"
        url: /applets/doc-item-maintenance-applet/
        tagline: "Service and non-inventory item management."
        bullets:
          - Professional services and consulting items
          - Digital products and subscriptions
          - Service pricing and billing configuration
          - Document templates and standardization
      - name: "Inventory Item Maintenance Applet"
        url: /applets/inv-item-maintenance-applet/
        tagline: "Product and inventory master data."
        bullets:
          - Complete product information management
          - Multi-location inventory control
          - Pricing and costing methodologies
          - Product categories and classification
      - name: "Customer Maintenance Applet"
        url: /applets/customer-maintenance-applet/
        tagline: "Customer master data and relationship management."
        bullets:
          - Complete customer profiles and contact management
          - Credit limits and payment terms
          - Customer segmentation and classification
          - Multi-address and multi-contact support
      - name: "Supplier Maintenance Applet"
        url: /applets/supplier-maintenance-applet/
        tagline: "Vendor and supplier master data management."
        bullets:
          - Comprehensive supplier profiles
          - Procurement terms and payment conditions
          - Supplier performance tracking
          - Vendor categorization and relationship management
      - name: "Employee Maintenance Applet"
        url: /applets/employee-maintenance-applet/
        tagline: "Employee master records and HR foundation."
        bullets:
          - Complete employee profiles and information
          - Organizational structure and reporting relationships
          - System access and role management
          - HR integration and payroll foundation
      - name: "Tax Configuration Applet"
        url: /applets/tax-configuration-applet/
        tagline: "Complete tax setup and compliance management."
        bullets:
          - Tax codes, rates, and regulatory compliance
          - Multi-jurisdiction tax support (GST, SST, VAT)
          - Automated tax calculations
          - Tax reporting and e-filing integration
      - name: "Cashbook Applet"
        url: /applets/cashbook-applet/
        tagline: "Cash and bank account management."
        bullets:
          - Multiple cash and bank account setup
          - Payment method configuration
          - Cash flow tracking and management
          - Bank reconciliation and integration
      - name: "Workflow Design Applet"
        url: /applets/workflow-design-applet/
        tagline: "Business process automation and workflow management."
        bullets:
          - Visual workflow designer and configuration
          - Multi-level approval processes
          - Process automation and orchestration
          - Workflow performance monitoring
      - name: "Webhook Applet"
        url: /applets/webhook-applet/
        tagline: "Real-time event notifications and system integration."
        bullets:
          - External system integration and notifications
          - Event-driven workflow automation
          - API integration and data synchronization
          - Real-time business event broadcasting
      - name: "T2T Admin Applet"
        url: /applets/t2t-admin-applet/
        tagline: "Tenant-to-tenant administration for enterprise operations."
        bullets:
          - Multi-tenant enterprise administration
          - Cross-tenant data sharing and relationships
          - Enterprise consolidation and reporting
          - Complex organizational structure management
  - name: "Point of Sales module"
    id: point-of-sales
    module_url: /modules/pos/
    count: 6
    desc: "Specialized applets for retail and point-of-sale operations."
  - name: "CP-Commerce module"
    id: cp-commerce
    module_url: /modules/cp-commerce/
    count: 20
    desc: "Complete e-commerce solution — includes all 13 Core module applets plus seven commerce-specific applets."
  - name: "E-Invoice module"
    id: e-invoice
    module_url: /modules/e-invoice/
    count: 8
    desc: "Electronic invoicing and regulatory compliance."
  - name: "Accounting module"
    id: accounting
    module_url: /modules/accounting/
    count: 25
    desc: "Comprehensive transaction processing and financial management."
  - name: "Digital CRM module"
    id: digital-crm
    module_url: /modules/digital-crm/
    count: 3
    desc: "AI-powered customer relationship management."
  - name: "IT & CE module"
    id: it-ce
    module_url: /modules/it-ce/
    count: 6
    desc: "Technology and customer engagement specialization."
  - name: "Service Industry module"
    id: service-industry
    module_url: /modules/service-industry/
    count: 7
    desc: "Operations for service-based businesses."
  - name: "Drop Shipping module"
    id: drop-shipping
    module_url: /modules/drop-shipping/
    count: 2
    desc: "Drop-shipping business model support."
  - name: "ERP module"
    id: erp
    module_url: /modules/inventory-warehouse/
    count: 41
    desc: "Complete enterprise resource planning — includes all Accounting and Point of Sales module applets plus ten enterprise-specific applets."
  - name: "Specialized applets"
    id: specialized
    count: 15
    desc: "Documented applets for inventory, teams, pricing, loyalty, customer service, and distribution."
    applets:
      - name: "Stock Balance Applet"
        url: /applets/stock-balance-applet/
        tagline: "Real-time inventory levels and tracking."
      - name: "Stock Take Applet"
        url: /applets/stock-take-applet/
        tagline: "Physical inventory counting and reconciliation."
      - name: "Internal Stock Adjustment Applet"
        url: /applets/internal-stock-adjustment-applet/
        tagline: "Inventory adjustments and corrections."
      - name: "Internal Delivery Order Applet"
        url: /applets/internal-delivery-order-applet/
        tagline: "Internal transfers and deliveries."
      - name: "Team Maintenance Applet"
        url: /applets/team-maintenance-applet/
        tagline: "Team structure and management."
      - name: "Group Maintenance Applet"
        url: /applets/group-maintenance-applet/
        tagline: "Group configuration and management."
      - name: "Pricebook Applet"
        url: /applets/pricebook-applet/
        tagline: "Advanced pricing management and strategies."
      - name: "Process Monitoring Applet"
        url: /applets/process-monitoring-applet/
        tagline: "Business process tracking and analysis."
      - name: "Membership Admin Console Applet"
        url: /applets/membership-admin-console-applet/
        tagline: "Customer loyalty program management."
      - name: "Membership Points Currency"
        url: /applets/membership-points-currency/
        tagline: "Points-based reward system."
      - name: "Membership Program"
        url: /applets/membership-program/
        tagline: "Membership program configuration."
      - name: "Unified Contact Center (UCC) Applet"
        url: /applets/unified-contact-center-ucc-applet/
        tagline: "Comprehensive customer service platform."
      - name: "EcomSync Related Applets"
        url: /applets/90-ecomsync-related-applets/
        tagline: "E-commerce synchronization tools."
      - name: "Ingram Micro MS ESD Applet"
        url: /applets/ingram-micro-ms-esd-applet/
        tagline: "Microsoft licensing distribution."
      - name: "VSTecs MS ESD Order Applet"
        url: /applets/vstecs-ms-esd-order-applet/
        tagline: "VSTecs distribution integration."
roadmap:
  - phase: "Phase 1 — Foundation"
    text: "Implement all 13 Core module applets as the foundation for all operations."
  - phase: "Phase 2 — Primary operations"
    text: "Add specialized module applets based on business requirements: Accounting for financial operations, Sales & CRM for sales, and warehouse applets for inventory."
  - phase: "Phase 3 — Advanced features"
    text: "Implement advanced applets: Commerce for e-commerce integration, ERP for multi-entity operations, and E-Invoice for compliance requirements."
  - phase: "Phase 4 — Optimization"
    text: "Add analytics, automation, and optimization applets: Digital CRM for business intelligence, Workflow for process automation, and analytics for performance monitoring."
resources:
  - group: "Implementation guides"
    links:
      - name: "Module implementation guide"
        url: /modules/
      - name: "Getting started with the Core module"
        url: /modules/core/
      - name: "Applet installation guide"
        url: /applets/applet-store/
  - group: "Integration documentation"
    links:
      - name: "API reference"
        url: /api-reference/
      - name: "Webhook integration"
        url: /applets/webhook-applet/
      - name: "System integration best practices"
        url: /guides/advanced/integration-best-practices/
  - group: "Support resources"
    links:
      - name: "Applet Directory"
        url: /applets/applet-directory/
      - name: "Applet Store"
        url: /applets/applet-store/
      - name: "User guides"
        url: /user-guide/
tip: "Start with the Core module applets, then gradually add specialized applets based on your business requirements. The modular architecture allows for flexible implementation and growth."
---

Halaman ini dipaparkan oleh `layouts/applets/applet-catalog.html` daripada data
berstruktur dalam bahagian front matter di atas. Sunting front matter untuk menukar katalog.
