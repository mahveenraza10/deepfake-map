# Global Deepfake Incident Map

Interactive companion to the paper *"Where Deepfakes Strike: A Geographic Mapping of Synthetic Media Threats and Detection Signal Relevance"*.

30 documented deepfake incidents across 18 countries, annotated against a forensic signal taxonomy.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Adding your figures

Place your Sankey diagram and radar chart images in the `public/` folder:
- `public/sankey.png`
- `public/radar.png`

These will be referenced in the Analysis tab.

## Tech stack

- React 18 + Vite
- Leaflet + react-leaflet (dark CartoDB tiles)
- Deployed on Vercel
