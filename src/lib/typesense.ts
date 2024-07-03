import { env } from "@/env/server";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

export const typesenseInstantSearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: env.VITE_TYPESENSE_API_KEY,
    nodes: [
      {
        host: env.VITE_TYPESENSE_HOST,
        port: env.VITE_TYPESENSE_PORT,
        protocol: env.VITE_TYPESENSE_PROTOCOL,
      },
    ],
    cacheSearchResultsForSeconds: 1 * 60,
  },
  additionalSearchParameters: {
    query_by: "Game,embedding,White,Black",
    exclude_fields: "embedding",
  },
});
