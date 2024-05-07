import { createFileRoute } from "@tanstack/react-router";
import { GlobalLoadingIndicator } from "../../../components/material/GlobalLoadingIndicator.tsx";
import { Suspense } from "react";
import RecipePageContent from "../../../components/recipepage/RecipePageContent.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchRecipe } from "../../../components/use-queries.ts";

export const Route = createFileRoute("/recipes/$recipeId/")({
  component: RecipePage,
});

function RecipePage() {
  // todo:
  //  - useParams
  //  - suspenseQuery (usq)
  //  - RecipePageWrapper (rpw)

  return <div>Ich bin Rezept mit Id ????</div>;
}
