import { revalidateTag } from "next/cache";
import { saveLike } from "@/app/components/queries.ts";

export function increaseLikes(recipeId: string) {
  saveLike(recipeId);

  revalidateTag("recipes");
  revalidateTag(`recipes/${recipeId}`);
}
