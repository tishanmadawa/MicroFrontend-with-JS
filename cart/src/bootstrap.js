import faker from "faker"

const cartText = `<div>You have ${faker.random.number()} items in yout cart</div>`;
document.querySelector('#dev-carts').innerHTML = cartText;