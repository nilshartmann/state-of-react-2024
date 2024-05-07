"use client";
import { RecipeDto } from "@/app/components/api-types.ts";
import { useOptimistic, useState, useTransition } from "react";
import { twMerge } from "tailwind-merge";
import { increaseLikes } from "@/app/components/recipe-actions.ts";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  // todo:
  //  - server action
  //  - transition (str)
  //  - optimistic (opt)

  const [likes, setLikes] = useState(recipe.likes);
  const [isPending, setIsPending] = useState(false);

  const handleIncreaseLikes = async () => {
    setIsPending(true);

    const result = await increaseLikes(recipe.id);
    setLikes(result.newLikes);

    setIsPending(false);
  };

  return (
    <p
      onClick={isPending ? undefined : handleIncreaseLikes}
      className={twMerge(
        "me-2 inline-block rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white",
        isPending &&
          "border-gray-300 bg-gray-300 hover:cursor-default hover:border-gray-300 hover:bg-gray-300",
      )}
    >
      <i className="fa-regular fa-heart mr-2"></i>
      {likes}
    </p>
  );
}

async function wait(t: number = 1000) {
  return new Promise((res) => setTimeout(res, t));
}
