import { useQuery } from "react-query";
import { fetchVisibleMessage } from "../utils/api";

export const useVisibleMessage = () => {
  return useQuery("visible-message", fetchVisibleMessage, {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
