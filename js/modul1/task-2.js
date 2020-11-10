const total = 100;
const ordered = 50;
if (total < ordered) {
  const message = `На складе недостаточно товаров!`;
  console.log(message);
} else {
  const message = `Заказ оформлен, с вами свяжется менеджер`;
  console.log(message);
}

// или тернарник:

const ordered = 100; 
const total = 100;
const message = ordered > total ? "На складе недостаточно товаров!" : "Заказ оформлен, с вами свяжется менеджер" ;

console.log(message);
