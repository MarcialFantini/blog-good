import { useAppDispatch } from "@/store/hooks";

export const dispatcherHook = (thunk: any) => {
  const dispatch = useAppDispatch();
  console.log("hola");

  return () => dispatch(thunk);
};
