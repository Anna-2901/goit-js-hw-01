function isLoginValid(login, min = 4, max = 16) {
  const result = login.length;
  if (result >= min && result <= max) {
    return true;
  }
  return false;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  const count = allLogins.length;
  for (let i = 0; i < count; i++) {
    if (login === allLogins[i]) {
      return false;
    }
  }
  return true;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) {
    return ERROR;
  }
  if (!isLoginUnique(allLogins, login)) {
    return REFUSAL;
  }

  allLogins.push(login);
  return SUCCESS;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Ajax"));
