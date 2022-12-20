import { slideSlice } from "../redux/slideSlice";

export function forwardTransition(navigate, dispatch, path) {
  dispatch(slideSlice.actions.setStateSlide());
  setTimeout(() => {
    navigate(path);
  }, 50);
  return;
}

export function backTransition(navigate, dispatch, path) {
  dispatch(slideSlice.actions.setStateBack());
  setTimeout(() => {
    navigate(path);
  }, 50);
  return;
}
