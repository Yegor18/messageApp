import { ipcRenderer } from "electron";
let isFirstTime = true;
export default {
  onShowMessage: (callback) => {
    if (isFirstTime) {
      isFirstTime = false;
      ipcRenderer.on("show-message", callback);
    }
  },
  callMessage: () => ipcRenderer.send("call-message"),
};
