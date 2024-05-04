"use client";
import { RecipeDto } from "@/app/components/api-types.ts";
import { useState, useTransition } from "react";
import { twMerge } from "tailwind-merge";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  const [likes, setLikes] = useState(recipe.likes);
  const [isPending, startTransition] = useTransition();

  const handleIncreaseLikes = () => {
    startTransition(async () => {
      await wait(500);
      setLikes((l) => l + 1);
    });
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
