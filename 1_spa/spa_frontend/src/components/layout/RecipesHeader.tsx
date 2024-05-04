import { H1 } from "../Heading.tsx";

import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

type RecipesHeaderProps = {
  children?: ReactNode;
};

export default function RecipesHeader({ children }: RecipesHeaderProps) {
  return (
    <>
      <header
        className={"flex h-24 items-center bg-cover bg-center"}
        style={{
          backgroundImage: "url('/images/landing-page.png')",
        }}
      >
        <div className={"container mx-auto"}>
          <div className={"flex h-full items-center justify-between"}>
            <div className={"flex items-center font-space font-bold text-red "}>
              <H1 className={"inline-block bg-white p-2 pb-3 text-4xl"}>
                <Link to={"/recipes"} className={"hover:underline"}>
                  Recipify
                </Link>
              </H1>
              <div className={"ms-2 shrink-0 bg-white p-1 text-xl"}>
                <span className="text-green">SPA</span> Edition
              </div>
            </div>
            {children}
          </div>
        </div>
      </header>
    </>
  );
}
