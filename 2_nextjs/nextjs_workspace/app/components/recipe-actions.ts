"use server";

import { fetchFromApi, getEndpointConfig } from "./fetch-from-api";
import { slowDown_IncreaseLikes } from "@/app/demo-config.tsx";

export async function increaseLikes(recipeId: string) {
  console.log("Increase Likes for ", recipeId);
  const result = fetchFromApi(
    getEndpointConfig("patch", "/api/recipes/{recipeId}/likes"),
    {
      path: {
        recipeId,
      },
      query: {
        slowdown: slowDown_IncreaseLikes,
      },
    },
  );

  return result;
}
