

const container = document.querySelector(".cardcontainer");
const optionsContainer = document.querySelector(".options-container");


//100 requests per day
let apiKey ='9d76f9418859a7335ff2a73adb563e4d'
let requestURL;
//Create cards from data
const generateUI = (articles) => {
    container.innerHTML = "";
    for (item of articles) {
        let card = document.createElement("div")
        card.classList.add("card", "col-lg-5", "rounded-3", "mt-4", "m-auto", "shadow-lg")
        card.innerHTML = `
        <div class = "pt-3" >
        <img src="${item.image || "newspapers.jpg"}" class="card-img-top rounded-3" alt="Error No Image Found">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}.</p>
        <a href = "${item.url}" target= "_blank" class ="btn btn-warning text-dark">Read More...</a>
        </div>
        </div> `
        container.prepend(card)
    }
 
};


const getNews = async () => {
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data unavailable at the moment. Please try again later");
        return false;
    }
    let article = await response.json();
    generateUI(article.articles);
    
};

const names = [
    "Gaza","Pakistan",
    "Apple",
    "Google",
    "Nasa",
    "Nature",
    "Movies",
    "Marketing",
    "Hollywood",,"Climate change","Artificial intelligence"
];
// name Selection
const selectname = (e,names) => {
    let options = document.querySelectorAll(".option");
    options.forEach((element) => {
        element.classList.remove("active");
    });

    

    requestURL = `https://gnews.io/api/v4/search?q=${names.toLowerCase()}&lang=en&max=20&apikey=${apiKey}`;
    getNews();
};

//Options Buttons
const createOptions = () => {
    for (let i of names) {
        optionsContainer.innerHTML += `<li class="nav-item ms-3 mt-3">
        <button class="shadow btn btn-dark px-4 p-2 ms-4 mt-3 option" onclick="selectname(event,'${i}')">${i}</button></li>`;
    }
};

const init = () => {
    optionsContainer.innerHTML = "";
    createOptions();
    selectname(event,"gaza"); // default selection
};

window.onload = () => {

    init();
};
function darkmode() {
    const dark = document.body;
    dark.classList.toggle("dark-mode")

}

let home = document.querySelector(".home")
home.addEventListener("click", () => {
    home.href = "index.html"
})
let home1 = document.querySelector(".home1")
home1.addEventListener("click", () => {
    home1.href = "index.html"
})