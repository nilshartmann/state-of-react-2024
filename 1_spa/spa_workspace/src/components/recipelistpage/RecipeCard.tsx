import { RecipeDto } from "../api-types.ts";
import { H1 } from "../Heading.tsx";
import { Link } from "@tanstack/react-router";
import { memo } from "react";
import { RecipeCategories } from "../RecipeCategories.tsx";

type RecipeCardProps = {
  recipe: RecipeDto;
};

const RecipeCard = memo(function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className={"flex flex-col justify-between"}>
      <div>
        <div className={"overflow-hidden"}>
          <img
            className="mb-2 h-48 max-h-full w-full max-w-full transform rounded object-cover transition-all duration-500 ease-in-out hover:scale-110"
            src={`/images/recipes/food_${recipe.id}.png`}
            alt="image1"
          />
        </div>
        <div className={"mt-8 flex justify-between text-red"}>
          <p
            className={
              "font-space text-sm font-medium uppercase tracking-[2px] "
            }
          >
            {recipe.mealType}
          </p>
        </div>
        <H1 className={"mb-4 mt-4 font-space font-bold"}>
          {/*  ---------   TODO    ---------------- */}
          <Link
            to={"/recipes/$recipeId"}
            params={{
              recipeId: recipe.id,
            }}
            preload={"intent"}
            className={"hover:text-orange_2 hover:underline"}
          >
            {recipe.title}
          </Link>
        </H1>
        <div className={"text mt-2 font-inter text-gray-500"}>
          {recipe.headline}
        </div>
      </div>
      <div className={"mt-4 space-y-2"}>
        <RecipeCategories recipe={recipe} />
      </div>
    </div>
  );
});

export { RecipeCard };
