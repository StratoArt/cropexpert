# Crop Expert — Database Architecture v1

## Goal
Separate domain data from UI/application logic so the future Data Manager can edit Crop Expert data without changing application source code.

## Layers
- `data/` — current repository-backed data store.
- `data/schema-v1.json` — canonical contract for the next data-management layer.
- `js/services/` — read/query services; no rendering logic.
- `assets/` — media files referenced by data.
- `js/weather.js` — isolated weather feature; intentionally unchanged by the refactor.

## Data classification
### Master
Identity of OPT, crops, products, active ingredients and MoA.

### Relationships
Links between entities such as crop ↔ OPT and product ↔ OPT.

### Knowledge / derived
Guidelines, resistance-management knowledge, calculators and derived views.

### Reference
Sources, attribution and external reference metadata.

## Future Data Manager
The Data Manager will become the write layer. It should validate IDs/schema, manage media, create commits/version history and publish changes. The public Crop Expert app remains primarily read-only.
