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
  //  - transition (str)
  //  - optimistic (opt)
  //  - server action

  const [likes, setLikes] = useState(recipe.likes);
  // const [isPending, setIsPending] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, increaseLikesOptimistic] = useOptimistic(
    likes,
    (currentLikes, amount: number) => {
      return currentLikes + amount;
    },
  );

  const handleIncreaseLikes = async () => {
    startTransition(async () => {
      increaseLikesOptimistic(1);
      const result = await increaseLikes(recipe.id);
      setLikes(result.newLikes);
    });
  };

  return (
    <p
      onClick={handleIncreaseLikes}
      className={twMerge(
        "me-2 inline-block rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white",
      )}
    >
      <i className="fa-regular fa-heart mr-2"></i>
      {likes} ({optimisticLikes})
    </p>
  );
}

async function wait(t: number = 1000) {
  return new Promise((res) => setTimeout(res, t));
}
