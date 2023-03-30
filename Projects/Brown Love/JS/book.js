let four = [
    {
        img: '/Images/4-people.jpg',
        no: 1,
    },
    {
        img: '/Images/4-people.jpg',
        no: 2,
    },
    {
        img: '/Images/4-people.jpg',
        no: 3,
    },
    {
        img: '/Images/4-people.jpg',
        no: 4,
    },
    {
        img: '/Images/4-people.jpg',
        no: 5,
    },
    {
        img: '/Images/4-people.jpg',
        no: 6,
    },
]

for (let table of four) {
    if (table.no % 2 == 0) {
        document.getElementById("even-four").innerHTML += `
        <img class="w-100" src="` + table.img + `">
        <p>Table-`+ table.no + `</p>
        <button id="`+ table.no + `" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;
    }
    else {
        document.getElementById("odd-four").innerHTML += `
        <img class="w-100" src="` + table.img + `">
        <p>Table-`+ table.no + `</p>
        <button id="`+ table.no + `" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;

    }
}
let six = [
    {
        img: '/Images/6-people.jpg',
        no: 7,
    },
    {
        img: '/Images/6-people.jpg',
        no: 8,
    },
    {
        img: '/Images/6-people.jpg',
        no: 9,
    },
    {
        img: '/Images/6-people.jpg',
        no: 10,
    },
]

for (let table of six) {
    if (table.no % 2 == 0) {
        document.getElementById("even-six").innerHTML += `
        <img class="w-100" src="` + table.img + `">
        <p>Table-`+ table.no + `</p>
        <button id="`+ table.no + `" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" ">
        Book
        </button>`;
    }
    else {
        document.getElementById("odd-six").innerHTML += `
        <img class="w-100" src="` + table.img + `">
        <p>Table-`+ table.no + `</p>
        <button id="`+ table.no + `" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;

    }
}

let eight = [
    {
        img: '/Images/8-people.jpg',
        no: 11,
    },
    {
        img: '/Images/8-people.jpg',
        no: 12,
    },
]

for (let table of eight) {
    if (table.no % 2 == 0) {
        document.getElementById("even-eight").innerHTML += `
        <img class="w-100" src="` + table.img + `">
        <p>Table-`+ table.no + `</p>
        <button id="`+ table.no + `" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Book
        </button>`;
    }
    else {
        document.getElementById("odd-eight").innerHTML += `
        <img class="w-100" src="` + table.img + `">
        <p>Table-`+ table.no + `</p>
        <button id="`+ table.no + `" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;
    }
}

const book = [1,4,5,6,8,9,11];
function booking(){
    for (let table of book) {
        document.getElementById(table).classList.add("active","disabled");
    }
}
booking();

function booked(){
    let id = document.getElementById('exampleModal').parentNode.id;
    book.push(id);
    booking();
}

function confirmTable(id){
    document.getElementById(id).innerHTML += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body ">
                <p>Do you want to book the table?</p>
                <p>Anything special?</p>
                <ul>
                    <li>
                        <input type="checkbox" name="birthday" id=""> Birthday
                    </li>
                    <li>
                        <input type="checkbox" name="anniversary" id=""> Anniversary
                        </li>
                    <li>
                        <input type="checkbox" name="other" id=""> Other
                    </li>
                </ul>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn" data-bs-dismiss="modal" onclick="booked()">Yes</button>
            </div>
        </div>
    </div>
    </div>`;
}
