import { createFileRoute } from "@tanstack/react-router";
import { GlobalLoadingIndicator } from "../../../components/material/GlobalLoadingIndicator.tsx";
import { Suspense } from "react";
import RecipePageContent from "../../../components/recipepage/RecipePageContent.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchRecipe } from "../../../components/use-queries.ts";

export const Route = createFileRoute("/recipes/$recipeId/")({
  component: RecipePageWrapper,
});

function RecipePageWrapper() {
  return (
    <Suspense fallback={<GlobalLoadingIndicator />}>
      <RecipePage />
    </Suspense>
  );
}

function RecipePage() {
  const { recipeId } = Route.useParams();

  const result = useSuspenseQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => fetchRecipe(recipeId),
  });

  return <RecipePageContent recipe={result.data.recipe} />;

  // todo:
  //  - useParams
  //  - suspenseQuery (usq)
  //  - RecipePageWrapper (rpw)

  return <div>Ich bin Rezept mit Id {recipeId}</div>;
}
