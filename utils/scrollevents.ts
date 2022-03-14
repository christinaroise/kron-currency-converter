import { RefObject } from "react";

export enum IDS {
  CHART = "chart-wrapper",
}

export const scrollRefIntoView = (ref: RefObject<HTMLElement>) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 250);
};
  
export const scrollToElementById = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
}