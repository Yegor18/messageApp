import getMainWindow from "../electron-main";
import { useQuasar } from "quasar";
class sigletonNotification {
  notify(
    options = {
      template: "success",
      message: "Задание завершено",
      type: "positive",
    }
  ) {
    const mainWindow = getMainWindow();
    if (mainWindow) {
      //работа с бд
      let optionsFromBD = {
        message: "Completed",
        caption: "Message",
        type: "eeel",
        icon: null,
        position: "left",
      };

      mainWindow.webContents.send(
        "show-message",
        Object.assign(optionsFromBD, options)
      );
    }
  }
}

const Notification = new sigletonNotification();
Object.freeze(Notification);
export default Notification;
