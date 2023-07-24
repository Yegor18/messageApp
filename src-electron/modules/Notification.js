import getMainWindow from "../electron-main";
class sigletonNotification {
  notify(options) {
    const mainWindow = getMainWindow();
    if (mainWindow) {
      mainWindow.webContents.send("show-message", {
        template: "success",
        message: "Задание завершено",
        type: "positive",
      });
    }
  }
}

const Notification = new sigletonNotification();
Object.freeze(Notification);
export default Notification;
