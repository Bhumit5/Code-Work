let pizza = [
    {
        img:"/Images/snakes/margherita.png",
        name: "Margherita Pizza",
        regular: 99,
        medium: 249,
        large: 399
    },
    {
        name: "Achari Do Pyaza Pizza",
        regular: 169,
        medium: 309,
        large: 499
    },
    {
        name: "Veggie Supreme Pizza",
        regular: 199,
        medium: 299,
        large: 399
    },
    {
        name: "Cheese n Corn Pizza",
        regular: 189,
        medium: 329,
        large: 459
    },
    {
        name: "Cheese n Tomato Pizza",
        regular: 189,
        medium: 329,
        large: 459
    },
    {
        name: "Peppy Paneer Pizza",
        regular: 229,
        medium: 399,
        large: 459
    },
    {
        name: "Veggie Paradise Pizza",
        regular: 239,
        medium: 399,
        large: 469
    },
    {
        name: "Deluxe Veggie Pizza",
        regular: 249,
        medium: 459,
        large: 659
    },
    {
        name: "Veg Extravaganza Pizza",
        regular: 259,
        medium: 469,
        large: 689
    },
    {
        name: "Creamy Tomato Pasta Pizza",
        regular: 259,
        medium: 469,
        large: 699
    },
    {
        name: "Paneer Makhani Pizza",
        regular: 299,
        medium: 459,
        large: 699
    },
    {
        name: "Tandoori Paneer Pizza",
        regular: 299,
        medium: 459,
        large: 699
    },
];

for (let item of pizza) {
    document.querySelector("#pizza").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.regular + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.medium + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.large + `</td>
    </tr>`;
}


let burger = [
    {
        name: "Cheesy Stuffed Veggie Burger",
        regular: 89,
        cheese: 119,
        jumbo: 189
    },
    {
        name: "Aloo Tikki Burger",
        regular: 99,
        cheese: 129,
        jumbo: 199
    },
    {
        name: "Pav Bhaji Burger",
        regular: 109,
        cheese: 139,
        jumbo: 209
    },
    {
        name: "Green Chilly Cheese Burger",
        regular: 129,
        cheese: 159,
        jumbo: 239
    },
    {
        name: "Crunchy Veg Burger",
        regular: 129,
        cheese: 159,
        jumbo: 249
    },
    {
        name: "Special Veg Burger",
        regular: 149,
        cheese: 179,
        jumbo: 259
    },
    {
        name: "Cafe Special Veg Burger",
        regular: 169,
        cheese: 299,
        jumbo: 399
    },

];

for (let item of burger) {
    document.querySelector("#burger").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.regular + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.cheese + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.jumbo + `</td>
    </tr>`;
}


let fries = [
    {
        name: "French Fries",
        price: 50,
    },
    {
        name: "Chilly French Fries",
        price: 65,
    },
    {
        name: "Corn Chilly French Fries",
        price: 75,
    },
    {
        name: "Sweet Potato Fries",
        price: 100,
    },
    {
        name: "Curly Fries",
        price: 110,
    },
    {
        name: "Tornado Fries",
        price: 120,
    },
];

for (let item of fries) {
    document.querySelector("#fries").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.price + `</td>
    </tr>`;
}


let sandwiches = [
    {
        name: "Veg Club Sandwich",
        regular:50,
        cheese:60
    },
    {
        name: "Tomato Cucumber Sandwich",
        regular:60,
        cheese:70
    },
    {
        name: "Grilled Cheese Sandwich",
        regular:60,
        cheese:70
    },
    {
        name: "Aloo Grilled Sandwich",
        regular:60,
        cheese:70
    },
    {
        name: "Paneer Sandwich",
        regular:65,
        cheese:75
    },
    {
        name: "Veg Mayonnaise Sandwich",
        regular:70,
        cheese:80
    },
    {
        name: "Corn Cheese Sandwich",
        regular:80,
        cheese:90
    },
    {
        name: "Paneer Bhurji Sandwich",
        regular:110,
        cheese:120
    },
];

for (let item of sandwiches) {
    document.querySelector("#sandwich").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.regular + `</td>
        <td class="text-end brown-text px-0 pe-4">`+ item.cheese + `</td>
    </tr>`;
}


let frankies = [
    {
        name: "Veg Mayo Frankie",
        regular:70,
        cheese:100
    },
    {
        name: "Veg Schezwan Frankie",
        regular:70,
        cheese:100
    },
    {
        name: "Peri Peri Paneer Frankie",
        regular:75,
        cheese:105
    },
    {
        name: "Veg Mexican Frankie",
        regular:85,
        cheese:115
    },
    {
        name: "Pav Bhaji Frankie",
        regular:90,
        cheese:120
    },
    {
        name: "Noodle Frankie",
        regular:85,
        cheese:115
    },
    {
        name: "Manchurian Frankie",
        regular:100,
        cheese:135
    },

];

for (let item of frankies) {
    document.querySelector("#franky").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.regular + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.cheese + `</td>
    </tr>`;
}


let puff = [
    {
        name: "Veg Puff",
        price: 20,
    },
    {
        name: "Veg Butter Puff",
        price: 25,
    },
    {
        name: "Masala Puff",
        price: 25,
    },
    {
        name: "Spring Puff",
        price: 25,
    },
    {
        name: "Paneer Puff",
        price: 25,
    },
    {
        name: "Meggie Puff",
        price: 45,
    },
    {
        name: "Cheese Puff",
        price: 50,
    },
    {
        name: "Italian Puff",
        price: 60,
    },
];

for (let item of puff) {
    document.querySelector("#puff").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.price + `</td>
    </tr>`;
}


let bhel = [
    {
        name: "Regular Bhel",
        price: 40,
    },
    {
        name: "Bombay Bhel",
        price: 50,
    },
    {
        name: "Papad Bhel",
        price: 60,
    },
    {
        name: "Kurkure Bhel",
        price: 60,
    },
    {
        name: "Sweet Corn Bhel",
        price: 65,
    },
    {
        name: "Cheesy Bhel",
        price: 70,
    },
    {
        name: "Mexican Bhel",
        price: 80,
    },
];

for (let item of bhel) {
    document.querySelector("#bhel").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.price + `</td>
    </tr>`;
}


let pasta = [
    {
        name: "Masala Pasta",
        regular:70,
        cheese:90
    },
    {
        name: "Veg Masala Pasta",
        regular:80,
        cheese:100
    },
    {
        name: "Tomato Pasta",
        regular:80,
        cheese:100
    },
    {
        name: "Butter Masala Pasta",
        regular:85,
        cheese:105
    },
    {
        name: "Cheezde Masala Pasta",
        regular:90,
        cheese:110
    },
    {
        name: "Indian Sp. Pasta",
        regular:100,
        cheese:120
    },
];

for (let item of pasta) {
    document.querySelector("#pasta").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.regular + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.cheese + `</td>
    </tr>`;
}


let other = [
    {
        name: "Dabeli",
        regular:20,
    },
    {
        name: "Vadapav",
        regular:20,
    },
    {
        name: "Kachori",
        regular:30,
    },
    {
        name: "Sev Khamani",
        regular:30,
    },
    {
        name: "Dalvada",
        regular:30,
    },
    {
        name: "Samosa",
        regular:30,
    },
    {
        name: "Punjabi Samosa",
        regular:40,
    },
    {
        name: "Handvo",
        regular:80,
    },
    {
        name: "Garlic Bread",
        regular:120,
    },
];

for (let item of other) {
    document.querySelector("#other").innerHTML += `
    <tr class="border-0">
        <td scope="row" class="brown-text" >`+ item.name + `</td>
        <td class="text-end brown-text px-0 pe-3">`+ item.regular + `</td>
    </tr>`;
}

