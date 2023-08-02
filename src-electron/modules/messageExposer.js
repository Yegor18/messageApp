import { ipcRenderer } from "electron";
//Экспортируем объект в electron-preload
let isFirstTime = true;
export default {
  onShowMessage: (callback) => {
    //переменная isFirstTime для того, чтобы не создавать кучу лишних слушателей
    if (isFirstTime) {
      isFirstTime = false;
      ipcRenderer.on("show-message", callback);
    }
  },
  callMessage: () => ipcRenderer.send("call-message"),
};
