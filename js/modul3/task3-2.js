const countProps = function (obj) {
  "use strict";

  return Object.keys(obj).length;
};

console.log(countProps({}));
console.log(countProps({ a: 1, b: 1 }));

/*Подсчет количества свойств в объекте
Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

Циклы не должны использоваться*/
