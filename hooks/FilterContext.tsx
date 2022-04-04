import { createContext } from "react";

export const PostsLangFilterContext = createContext({
  selectedLangFilter: "all",
  changeLangFilter: (lang: string) => {},
});
