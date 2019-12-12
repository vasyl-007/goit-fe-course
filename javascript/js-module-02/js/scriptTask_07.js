// task 7 дополнительно
function task_07() {
  const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
  let login;
  function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
      return true;
    } else {
      return false;
    }
  }
  function isLoginUnique(allLogins, login) {
    return allLogins.includes(login);
  }

  function addLogin(allLogins, login) {
    if (isLoginValid(login) === false) {
      console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    } else if (isLoginUnique(allLogins, login) === true) {
      console.log("Такой логин уже используется!");
    } else {
      logins.push(login);
      console.log("Логин успешно добавлен!");
    }
  }
  addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
  addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
  addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
}
//===============================================
