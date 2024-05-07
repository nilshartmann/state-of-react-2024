import { fetchRecipes } from "@/app/components/queries.ts";
import RecipeListNavBar from "@/app/components/recipelistpage/RecipeListNavBar.tsx";
import RecipeListPaginationBar from "@/app/components/recipelistpage/RecipeListPaginationBar.tsx";
import RecipeList from "@/app/components/recipelistpage/RecipeList.tsx";

type RecipeListPageProps = {
  searchParams: Record<string, string>;
};

export default function RecipeListPage({ searchParams }: RecipeListPageProps) {
  const page = parseInt(searchParams.page) || 0;

  const result = fetchRecipes(page);

  return (
    <div className={"bg-goldgray"}>
      <div className={"container mx-auto space-y-8 pb-8 pt-8"}>
        <RecipeListPaginationBar
          pageCountPromise={result}
          params={searchParams}
        />

        <RecipeList recipesPromise={result} />
      </div>
    </div>
  );
}
