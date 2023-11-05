export type HomeModalData =
  | "Cleanroom"
  | "PEB"
  | "Doors"
  | "Lab_Furniture"
  | "Pharma_Equipments"
  | "Modular_OT";

export type InitialState = {
  headerActive: boolean;
  activeHomePageModalView: HomeModalData;
};

export type Actions =
  | {
      type: "CHANGE_ACTIVE_HOME_MODAL_VIEW";
      payload: HomeModalData;
    }
  | {
      type: "ACTIVE_HEADER";
      payload: boolean;
    };
