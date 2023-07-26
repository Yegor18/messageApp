let instance;

class MainWindow {
  constructor() {
    if (!instance) {
      instance = this;

      this.testVar = "Инициализация";
    }

    return instance;
  }

  helloWorld() {
    console.log("Hello  world!");
  }
}

export default new MainWindow();

///index.js///////////////////////////////////////////////////////////////////
import MainWindow from "MainWindow";

MainWindow.helloWorld();
console.log(MainWindow.testVar); // "Инициализация"

MainWindow.testVar = "Поменяли значение";
console.log(MainWindow.testVar); // "Поменяли значение"

///printer.js/////////////////////////////////////////////////////////////////
import MainWindow from "MainWindow";

console.log(MainWindow.testVar); //  "Поменяли значение"
