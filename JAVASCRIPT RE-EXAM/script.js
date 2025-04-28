const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
let index = 0;
const card = document.getElementById("card");
const total = document.getElementById("total");
let storage = [];

function addCard1(price)
{
    const display = document.querySelector(".display");
    const p = document.createElement("p");
    p.id = "product1";
    p.innerHTML = `Nike Dunk Low Retro ₹${price}`;
    display.appendChild(p);
    index++;
    total.innerHTML = `Total : ₹${price}`;
    const p1amount = price;
}
function addCard2(price)
{
    const display = document.querySelector(".display");
    const p = document.createElement("p");
    p.id = "product1";
    p.innerHTML = `Nike Dunk Low Retro SE ₹${price}`;
    display.appendChild(p);
    index++;
    total.innerHTML = `Total : ₹${price}`;
    const p2amount = price;
}
function addCard3(price)
{
    const display = document.querySelector(".display");
    const p = document.createElement("p");
    p.id = "product1";
    p.innerHTML = `Nike Dunk Low ₹${price}`;
    display.appendChild(p);
    index++;
    total.innerHTML = `Total : ₹${price}`;
    const p3amount = price;
}


