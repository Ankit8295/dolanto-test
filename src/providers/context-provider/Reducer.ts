import { Actions, InitialState } from "@/src/utils/types";

export const reducer = (state: InitialState, actions: Actions) => {
  const { payload, type } = actions;
  switch (type) {
    case "CHANGE_ACTIVE_HOME_MODAL_VIEW":
      return { ...state, activeHomePageModalView: payload };
    case "ACTIVE_HEADER":
      return { ...state, headerActive: payload };
    default:
      return state;
  }
};
