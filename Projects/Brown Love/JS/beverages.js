let tea = [
    {
        name: "Ginger Tea",
        price: 20,
    },
    {
        name: "Ginger Mint Tea",
        price: 25,
    },
    {
        name: "Kullad Tea",
        price: 25,
    },
    {
        name: "Sugar Free Tea",
        price: 30,
    },
    {
        name: "Elaichi Tea",
        price: 40,
    },
    {
        name: "Tulsi Tea",
        price: 40,
    },
    {
        name: "Tandoori Tea",
        price: 40,
    },
    {
        name: "Kesar Tea",
        price: 50,
    },
    {
        name: "Green Tea",
        price: 60,
    },
    {
        name: "Black Tea",
        price: 60,
    },
    {
        name: "Lemon Tea (Ice)",
        price: 80,
    },
    {
        name: "Blueberry Tea (Ice)",
        price: 80,
    },
    {
        name: "Rose Tea (Ice)",
        price: 80,
    },
    {
        name: "Peach Tea (Ice)",
        price: 80,
    },
];

for (let drink of tea) {
    document.querySelector("#tea").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ drink.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ drink.price + `</td>
    </tr>`;
}



let coffee = [
    {
        name: "Hot Coffee",
        price: 80,
    },
    {
        name: "Espresso Coffee",
        price: 129,
    },
    {
        name: "Cold Coffee",
        price: 139,
    },
    {
        name: "Cappuccino",
        price: 139,
    },
    {
        name: "Americano",
        price: 139,
    },
    {
        name: "Mocha",
        price: 149,
    },
    {
        name: "Cafe Latte",
        price: 159,
    },
    {
        name: "Vanilla Cappuccino",
        price: 169,
    },
    {
        name: "Caramel Cappuccino",
        price: 179,
    },
    {
        name: "Hazelnut Cappuccino",
        price: 189,
    }
];

for (let drink of coffee) {
    document.querySelector("#coffee").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ drink.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ drink.price + `</td>
    </tr>`;
}



let juices = [
    {
        name: "Banana Juice",
        half: 70,
        full:120
    },
    {
        name: "Chikoo Juice",
        half: 70,
        full:130
    },
    {
        name: "Pineapple Juice",
        half: 80,
        full:140
    },
    {
        name: "Butterscotch Juice",
        half: 80,
        full:140
    },
    {
        name: "Rose Juice",
        half: 80,
        full:150
    },
    {
        name: "Kiwi Juice",
        half: 100,
        full:190
    },
    {
        name: "Mango Juice",
        half: 100,
        full:190
    },
    {
        name: "Apple Rich Juice",
        half: 100,
        full:190
    },
    {
        name: "Sitafal Juice",
        half: 110,
        full:200
    },
    {
        name: "Litchi Juice",
        half: 110,
        full:200
    },
    {
        name: "Strawberry Juice",
        half: 110,
        full:210
    },
];

for (let drink of juices) {
    document.querySelector("#juice").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ drink.name + `</td>
        <td class="text-end brown-text px-0">`+ drink.half + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ drink.full + `</td>
    </tr>`;
}


let can = [
    {
        name: "Sprite",
        price: 40,
    },
    {
        name: "Thums Up",
        price: 40,
    },
    {
        name: "Fanta",
        price: 40,
    },
    {
        name: "Coca Cola",
        price: 40,
    },
    {
        name: "Pepsi",
        price: 40,
    },
    {
        name: "Mountain Due",
        price: 40,
    },
    {
        name: "Charged",
        price: 50,
    },
    {
        name: "Hell",
        price: 55,
    },
    {
        name: "Monster",
        price: 100,
    },
    {
        name: "Red Bull",
        price: 110,
    },
    
];

for (let drink of can) {
    document.querySelector("#cans").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ drink.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ drink.price + `</td>
    </tr>`;
}

