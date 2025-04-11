
var cards = document.getElementById("cards");
var navbar = document.getElementById("nav");


let sel1 = document.createElement('select');
sel1.id = "subcategory";
sel1.onchange = subCat;
sel1.style.height = "20px";
sel1.style.marginTop = "27px";
sel1.style.borderRadius = "5px";

let products = [
    {
        category: "clothes",
        subCategory: "men",
        image: "clothImg.jpg",
        name: "red T-shirt"
    },
    {
        category: "clothes",
        subCategory: "women",
        image: "onePeice.jpg",
        name: "Black Dress"
    },
    {
        category: "clothes",
        subCategory: "kids",
        image: "kidsCloth.jpg",
        name: "Frock"
    },
    {
        category: "electronics",
        subCategory: "ac",
        image: "acImg.jpg",
        name: "LG AC"
    },
    {
        category: "electronics",
        subCategory: "fridge",
        image: "fridgeImg.jpg",
        name: "Samsung Fridge"
    },
    {
        category: "furniture",
        subCategory: "sofa",
        image: "sofaImg.jpg",
        name: "Blue Sofa"
    },
    {
        category: "furniture",
        subCategory: "bed",
        image: "bedImg.jpg",
        name: "Wooden Bed"
    }
]


let categorised = products;
// let subCtg = products;

function dropDown() {
    let val = document.getElementById('category').value;
    cards.innerHTML = "";
    sel1.innerHTML = "";
    document.getElementById("searchButton").value = "";

    if (val == "all") {
        sel1.style.display = "none";
        createCard(products);
        console.log(products);

    }
    else {
        sel1.style.display = "block";
        categorised = products.filter(product => product.category == val);
        console.log(categorised);

        //subCat menu 
        let opt1;
        let sub = new Set();
        for (let i = 0; i < categorised.length; i++) {
            sub.add(categorised[i].subCategory);
        }
        opt1 = document.createElement("option");
        opt1.textContent = "All";
        opt1.value = "allSub";
        sel1.appendChild(opt1);

        for (let j of sub) {
            opt1 = document.createElement('option');
            opt1.value = j;
            opt1.textContent = j;
            sel1.appendChild(opt1);
        }

        navbar.appendChild(sel1);
        console.log(categorised);
        createCard(categorised);
    }
 }

function subCat() {

    cards.innerHTML = "";
    let val = document.getElementById('subcategory').value;
    document.getElementById('searchButton').value = "";

    if (val == "allSub") {
        let catVal = document.getElementById('category').value;
        categorised = products.filter(product => product.category == catVal);
        console.log(categorised);
        createCard(categorised);
    }
    else {
        // subCtg = 
        categorised =products.filter(product => product.subCategory == val);
        console.log(categorised);
        createCard(categorised); // subCtg
    }
}

function searchBox() {
    cards.innerHTML ="";
    let search = document.getElementById('searchButton').value;
    let category = document.getElementById("category").value;
    let match;

    if(category == "all"){
    match = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    else{
    match = categorised.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (match.length == 0) { //matched
    let title = document.createElement("h2");
    title.textContent = "No Matches Found";
    cards.style.display = "grid";
    cards.style.gridTemplateColumns = "auto";
    cards.style.width = "90%";
    title.style.textAlign = "center";

    cards.appendChild(title);
    }
    else {
    console.log(match);
    createCard(match); // matched

    }
}


function createCard(array) {
    for (let i = 0; i < array.length; i++) {
        cards.style.gridTemplateColumns = "auto auto auto auto";
        let pdt = document.createElement("div");
        pdt.id = array[i].category;
        pdt.style.width = "300px";
        pdt.style.padding = "20px";
        pdt.style.marginLeft = "20px";
        pdt.style.marginRight = "20px";
        pdt.style.backgroundColor = "#7da5c0";
        pdt.style.borderRadius = "7px";
        pdt.style.marginBottom = "20px";
        pdt.style.boxShadow = "5px 10px 10px grey";

        let title = document.createElement("h2");
        title.textContent = array[i].name;
        title.style.textAlign = "center";

        let card = document.createElement("img");
        card.style.margin = "30px";
        card.style.height = "300px";
        card.style.width = "250px";
        card.style.borderRadius = "5px";
        card.src = "../images/" + array[i].image;

        pdt.appendChild(card);
        pdt.appendChild(title);

        cards.appendChild(pdt);

    }
}


// Menu mate nu function

// function showMenu(val) {

//     if (val == "all") {

//         let cat = document.getElementsByClassName("ctg");
//         console.log(typeof (cat));
//         console.log(cat);

//         for (let i = 0; i < cat.length; i++) {
//             if (cat[i].style.display == 'none') {
//                 cat[i].style.display = 'block';
//             }
//             else {
//                 cat[i].style.display = 'none';
//             }
//         }
//     }
//     else {
//         let value = products.filter(product => product.category == val);
//         console.log(value);

//         for (let i = 0; i < value.length; i++) {
//             console.log(value[i].subCategory);
//             let sub = document.getElementById(value[i].subCategory);
//             if (sub.style.display == 'none') {
//                 console.log(typeof (sub));
//                 sub.style.display = 'block';
//             }
//             else {
//                 sub.style.display = 'none';
//             }

//         }
//     }
// }

// function updateMenu() {

//     let val = document.getElementById('category').value;
//     console.log(val);
//     let menu = document.createElement("div");
//     menu.classList.add('subMenu');
//     let sel1 = document.createElement('select');
//     let opt1 = document.createElement('option');
//     let opt2 = document.createElement('option');
//     if (val == 'clothes') {
//         opt1.textContent = "Men";
//         opt2.textContent = "Women";
//     }
//     console.log(sel1);
//     sel1.appendChild(opt1);
//     sel1.appendChild(opt2);
//     menu.appendChild(sel1);

//     cards.appendChild(menu);

// }



// if(search == products[i].name){
//     let pdt = document.createElement("div");
//     pdt.id = products[i].category;
//     pdt.style.width ="300px";
//     pdt.style.padding ="20px";
//     pdt.style.marginLeft ="20px";
//     pdt.style.marginRight ="20px";
//     pdt.style.backgroundColor = "grey";
//     pdt.style.borderRadius = "5px";
//     pdt.style.marginBottom = "20px";
//     pdt.style.boxShadow = "5px 10px 10px grey";

//     let title = document.createElement("h2");
//     title.textContent = products[i].name;
//     title.style.textAlign = "center";

//     let card = document.createElement("img");
//     card.style.margin = "30px";
//     card.style.height = "300px";
//     card.style.width = "250px";
//     card.src ="../images/" + products[i].image;

//         pdt.appendChild(card);
//         pdt.appendChild(title);

//         cards.appendChild(pdt);
// }



// let cat = document.getElementById("category").value;
// console.log(cat);
// cards.innerHTML = "";

// document.getElementById("searchButton").value = "";
// if (cat == "all") {

//     createCard(products);

// }
// else {
//     categorised = products.filter(product => product.category == cat);
//     console.log(categorised);

//     createCard(categorised);

// }



// else {

//     subCat = categorised.filter(product => product.subCategory == val);
//     console.log(subCat);

//     for (let j = 0; j < subCat.length; j++) {
//         console.log(subCat[j]);
//     }
//     createCard(subCat);
// }








// searchBox code 

// cards.innerHTML = "";
// // let matched;
// console.log(categorised);
// let search = document.getElementById('searchButton').value;
// let val = document.getElementById('subcategory').value;
// console.log(val);
// if (val == "allSub") {
//     console.log(categorised);
//    // matched =
//     categorised.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
// }
// else {
//     // console.log(subCtg);
//    // matched =
//     categorised.filter(product => product.name.toLowerCase().includes(search.toLowerCase())); // subCtg
// }

// if (categorised.length == 0) { //matched
//     let title = document.createElement("h2");
//     title.textContent = "No Matches Found";
//     cards.style.display = "grid";
//     cards.style.gridTemplateColumns = "auto";
//     cards.style.width = "90%";
//     title.style.textAlign = "center";

//    // console.log(matched);
//     cards.appendChild(title);
// }
// else {
//     createCard(categorised); // matched

// }