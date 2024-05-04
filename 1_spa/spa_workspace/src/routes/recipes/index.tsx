import { createFileRoute } from "@tanstack/react-router";
import { RecipePageListParams } from "../../components/recipelistpage/RecipeListRouteParams.ts";
import React from "react";
import { GlobalLoadingIndicator } from "../../components/material/GlobalLoadingIndicator.tsx";
import RecipeListPageContent from "../../components/recipelistpage/RecipeListPageContent.tsx";

export const Route = createFileRoute("/recipes/")({
  component: () => (
    <React.Suspense fallback={<GlobalLoadingIndicator />}>
      <RecipeListPageContent />
    </React.Suspense>
  ),
  validateSearch: (search) => RecipePageListParams.parse(search),
});
