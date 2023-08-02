import Notification from "./Notification";
//просто класс для отладки и дебага
class EquipmentManager {
  constructor() {}
  showMessage() {
    Notification.notify({
      template: "error",
      message: "Задание завершено/ equipment ",
      type: "warning ",
      // caption: null,
      // position: "top-right",
      icon: null,
    });
  }
}
export default EquipmentManager;
