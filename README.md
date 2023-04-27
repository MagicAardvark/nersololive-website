# About

Next.js app to display NER SCCA Solo live timing results.

Hosted in Azure in a Static Web App, and fetches the results as json from an Azure Blob Storage account.

# Requirements

-   Next.js

# Local Development

1. Run `npm install`
2. Create a .env file with the following content:

```
CLASS_RESULTS_JSON_URL=<json url>
PAX_RESULTS_JSON_URL=<json url>
RAW_RESULTS_JSON_URL=<json url>
```

3. To start a local server, run `npm run dev`
