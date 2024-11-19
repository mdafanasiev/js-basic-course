const language = prompt("Введите язык, на котором хотите получить приветствие");

switch (language) {
    case "ru":
        console.log("Здравствуйте!");
        break;
    case "en":
        console.log("Hello");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
    default:
        console.log("Неизвестный язык!");
}
