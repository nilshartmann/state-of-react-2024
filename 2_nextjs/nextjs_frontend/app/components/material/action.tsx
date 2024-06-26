"use server";
import { Ingredient } from "@/app/components/api-types.ts";
import IngredientList from "@/app/components/recipepage/IngredientsList.tsx";

let counter = 0;
export async function increment(amount: number) {
  counter = counter + amount;
  console.log("New Counter", counter);
  return counter;
}

export async function generateGreeting(name: string = Date.now().toString()) {
  return <div className={"bg-red text-2xl"}>Hello {name}</div>;
}

export async function calculateIngredients(
  servings: number,
  ingredients: Ingredient[],
  recipeId?: string,
) {
  console.log("RECIPE ID", recipeId);
  return (
    <IngredientList
      ingredients={ingredients}
      servings={servings}
      recipeId={recipeId}
    />
  );
}
