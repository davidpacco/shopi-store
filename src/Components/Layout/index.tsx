import { ReactNode } from "react";

export function Layout({ children }: {children: ReactNode}) {
  return (
    <div className="flex flex-col mt-20 items-center">
      { children }
    </div>
  )
}