# Angaala Hub — Catalog Photo Rescan Comparison

**Generated:** 2026-09-26T23:47:11+05:30 (IST +05:30)  
**Store:** Angaala Hub / ANGAALA HUB (legal: ASHA VINAY)  
**GSTIN:** 29AKXPA8812F1ZT — GST REG-06 TC Palya address (not a sellable product)  
**Baseline:** `catalog/angaala-hub-product-catalog.json` (39 products)  
**From-photos:** `catalog/angaala-hub-product-catalog-from-photos.json` (43 products)

## Summary (counts)

| Metric | Count |
|--------|------:|
| Baseline catalog products | 39 |
| From-photos catalog products | 43 |
| Shared IDs (kept) | 38 |
| In photos but missing from baseline (new IDs) | 5 |
| In baseline but not found in this photo set | 1 |
| Existing IDs with updated fields | 36 |
| Uncertain IDs / items (listed below) | 10 |

### From-photos counts by category

| Category | Count |
|----------|------:|
| Phone Cases | 7 |
| Smartphones | 6 |
| Audio - Neckbands | 4 |
| Audio - Speakers | 4 |
| Audio - TWS Earbuds | 4 |
| Chargers | 3 |
| Screen Protection | 3 |
| Audio - Headphones | 2 |
| Power Banks | 2 |
| Wearables | 2 |
| Audio - Accessories | 1 |
| Audio - Wired | 1 |
| Cables | 1 |
| Phone Accessories | 1 |
| Photography Accessories | 1 |
| Smart Home | 1 |

## In photos but missing from current catalog

These SKUs / lines were visually supported in the rescan but had no matching baseline ID:

- **CMF Buds by Nothing** (`AH-040-cmf-buds-by-nothing`) — NEW from photo rescan: CMF Buds boxes clearly noted on middle accessory shelf. Exact India MRP varies by color/variant.…
- **ZEBRONICS / CRUISE portable Bluetooth speaker (window display)** (`AH-041-zebronics-cruise-portable-bluetooth-speaker`) — NEW from photo rescan: storefront-1 pass noted CRUISE-branded speaker box; storefront-2 original pass noted ZEBRONICS tower/Music Bomb-class speaker. Exact mode…
- **Candytech BassBox mini speaker** (`AH-042-candytech-bassbox-mini-speaker`) — NEW from photo rescan: BassBox boxes on second shelf near Rockers 13 Pro.…
- **LED ring light with tripod stand** (`AH-043-led-ring-light-with-tripod-stand`) — NEW from photo rescan: ring light prominently displayed near entrance in both storefront photos. Common sellable accessory in mobile retail; confirm if display-…
- **360° Wi-Fi smart home camera** (`AH-044-360-wifi-smart-home-camera`) — NEW from photo rescan: white 360° smart home camera box noted on middle-right shelf of service-counter original. Exact brand/model uncertain.…

## In current catalog but not found in photos

These baseline entries were **not** re-confirmed in the inspected photo set (storefront / interior / cases / products / originals):

- **Nokia feature phone (105/110-class)** (`AH-007-nokia-feature-phone-105-110-class`)

**Note:** Several baseline rows relied on "chat upload" evidence not present as files under `images/`. This rescan only credits what is visible in the listed image paths.

## Uncertain IDs

| ID / item | Uncertainty |
|-----------|-------------|
| AH-005 | REDMI A3 vs A5 OCR conflict |
| AH-006 | realme boxed phone model unclear (*x) |
| AH-022 | Noise exact model |
| AH-028 | LYNE JukeBox 16/18/EchoBox exact SKU |
| AH-038 | LYNE smartwatch exact model |
| AH-039 | Fire-Boltt presence unconfirmed |
| AH-041 | ZEBRONICS vs CRUISE speaker labeling |
| AH-043 | Ring light sellable vs display-only |
| AH-044 | 360 camera brand/model unread |
| unboxed phones | Demo phones on counters — brands mostly unreadable |

## Notes on image quality / mislabeled files

1. **`phone-4g-samsung-amz.jpg` / `.png`** — Filename suggests Samsung/Amazon; **actual content is Lava Bold N4 Lite** (LAVA logo + Bold N4 Lite on-screen specs). Catalogued as AH-003 with corrected notes.
2. **`phone-samsung-f05.jpg` / `.png`** — **Correctly shows Samsung Galaxy F05** (SAMSUNG logo + Galaxy F05 / leather pattern / 50MP Dual Camera). Prior baseline note claiming this file was Lava is **outdated**; Lava lives in the `samsung-amz` filename instead.
3. **`phone-5g.jpg` and `phone-5g-try1.jpg`** — Identical MD5; both are POCO C75 5G Aqua Bliss renders.
4. **`phone-4g.jpg` / `phone-4g-infinix.jpg` / `phone-4g-alt.jpg`** — Infinix SMART 8 HD (gold + silver/white alt).
5. **`cases-wall.jpg` vs `cases-fashion.jpg`** — Distinct walls: cases-wall = MagSafe / Lustre / waterproof pouches / designer prints; cases-fashion = Hello Kitty / Tom & Jerry / Labubu fashion cases with **₹95** stickers. Do not swap.
6. **`images/originals/*`** — Same scenes as resized counterparts (different crop/resolution); used for higher-detail reads (e.g. REPROTECT UV applicator, 360° camera box, speaker labels).
7. **Skipped non-products:** `ah-logo*`, `ah-mark*`, `favicon*`, `whatsapp-icon*`, `whatsapp-business-profile*`, GST certificate photo (meta note only).
8. **Fashion case in-store price:** Multiple yellow stickers show **₹95** (updated from prior 99–499 floor).
9. **GSTIN OCR noise** on counter placard across passes; certificate value **29AKXPA8812F1ZT** retained.
10. **Signage brands** (Samsung, Apple, OnePlus, vivo, oppo, mi, realme, TECNO, POCO, Infinix) confirm multi-brand sales but are not individual catalog SKUs unless a boxed/demo unit is identifiable.

## Recommendation

The from-photos rebuild is the better inventory snapshot: it corrects the Samsung F05 vs Lava image mix-up, adds clearly visible SKUs (CMF Buds, ZEBRONICS/CRUISE speakers, Candytech BassBox, ring light, 360° camera), tightens accessory notes from dense shelf reads, and drops the Nokia feature-phone row that is not evidenced in the current photo files.

Main catalog JSON + XLSX should be updated from this rescan, **appending** History for adds / modifies / removes (do not wipe prior History rows).

## Main catalog update status

**Updated:** yes — `catalog/angaala-hub-product-catalog.json` and `.xlsx` replaced with photo-rescan inventory.

- New `total_products`: **43** (was 39)
- History: prior 39 rows preserved; appended 42 rescan events (5 added, 36 modified, 1 removed) at `2026-09-26T23:47:11+05:30`
- Live website product cards: **not touched**
- WhatsApp Business signup: **not touched**
