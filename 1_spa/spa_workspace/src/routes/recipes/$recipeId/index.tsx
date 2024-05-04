import { createFileRoute } from "@tanstack/react-router";
import { H1 } from "../../../components/Heading.tsx";

export const Route = createFileRoute("/recipes/$recipeId/")({
  component: RecipePage,
});

function RecipePage() {
  const { recipeId } = Route.useParams();

  return <H1>Rezept: {recipeId}</H1>;
}
