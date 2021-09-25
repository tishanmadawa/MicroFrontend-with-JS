import faker from "faker"

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in yout cart</div>`;
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV == "development") {
    const el = document.querySelector("#dev-carts");
    if (el) {
        mount(el);
    }
}

export { mount };
