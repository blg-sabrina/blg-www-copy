---
title: "VSTECS MS ESD Order Applet"
description: "Microsoft ESD order management with API integration for price checking and order processing"
weight: 180
tags:
- applets
- microsoft
- esd-orders
- api-integration
---

## Overview

The VSTECS MS ESD Order Applet connects BigLedger to VSTECS for Microsoft Electronic Software Delivery (ESD) orders. It lets your team check up-to-date Microsoft product pricing and place ESD orders with the distributor directly from BigLedger, without re-keying order details into a separate portal.

{{< callout type="info" >}}
**Integration required**: This applet needs an active integration from BigLedger to EMP, and from BigLedger to the distributor's system, before it can function.
{{< /callout >}}

## API Capabilities

The applet uses two distributor APIs:

- **Price check** - Retrieves the latest price for any Microsoft ESD product SKU, so quotations and orders always use current distributor pricing
- **Order creation** - Creates an order with the distributor to retrieve the Microsoft ESD product, returning the fulfilment details to BigLedger

## Integration Workflows

There are currently two ways to set up this integration. Choose the one that matches your deployment.

### Shortcut Method

Direct EMP integration to BigLedger, without the T2T Admin Applet.

- Fastest way to get connected
- Suitable when tenant-to-tenant connectivity is not required

### Standard Method

Full tenant-to-tenant setup using supporting applets:

1. **[T2T Admin Applet](/applets/t2t-admin-applet/)** - Enables guest and host tenant connectivity
2. **[Doc Item Maintenance Applet](/applets/doc-item-maintenance-applet/)** - Maps item codes between the connected systems

Use this method when your deployment follows the standard BigLedger tenant-to-tenant integration model.

## Implementation Notes

- A user guide for MS ESD ordering and a work breakdown for implementation are available from the BigLedger team - contact [support@bigledger.com](mailto:support@bigledger.com) to request them
- Confirm with your distributor account manager that API access is enabled before starting the setup

## Related Applets

{{< cards >}}
  {{< card link="/applets/ingram-micro-ms-esd-applet/" title="Ingram Micro MS ESD Applet" subtitle="The equivalent Microsoft ESD integration for Ingram Micro" >}}
  {{< card link="/applets/t2t-admin-applet/" title="T2T Admin Applet" subtitle="Tenant-to-tenant connectivity used by the standard method" >}}
  {{< card link="/applets/doc-item-maintenance-applet/" title="Doc Item Maintenance Applet" subtitle="Item code mapping between connected systems" >}}
{{< /cards >}}
