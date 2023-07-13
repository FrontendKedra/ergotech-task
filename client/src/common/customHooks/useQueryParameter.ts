import { useLocation } from "react-router-dom";

export const useQueryParameter = (paramName: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(paramName);
};
