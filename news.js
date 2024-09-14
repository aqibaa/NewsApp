
const container = document.querySelector(".cardcontainer");
const optionsContainer = document.querySelector(".options-container");
//100 requests per day
const apiKey = '9d76f9418859a7335ff2a73adb563e4d'
let requestURL;
let country ="us"
//Create cards from articles
const generateUI = (articles) => {
    container.innerHTML="";
    for (item of articles) {
        let card = document.createElement("div")
        card.classList.add("card", "col-lg-5", "rounded-3", "mt-4", "m-auto", "shadow-lg")
        card.innerHTML = `
        <div class = "pt-3" >
        <img src="${item.image || "newspapers.jpg"}" class="card-img-top rounded-3" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}.</p>
        <a href = "${item.url}" target= "_blank" class ="btn btn-primary">Read More...</a>
        </div>
        </div> `
        container.prepend(card)
    }

};
const btn1 = document.querySelectorAll(".btn")[1]
const img = document.querySelectorAll(".imgs");
const description = document.querySelectorAll(".description");
const title = document.querySelectorAll(".title");
const link = document.getElementsByTagName("a");

const getNews = async () => {
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data unavailable at the moment. Please try again later");
        return false;
    }
    let article = await response.json();
    generateUI(article.articles);
    img[0].src = await article.articles[0].image;
    title[0].innerHTML = await article.articles[0].title
    description[0].innerHTML = await article.articles[0].description;
    link[8].href = await article.articles[0].url

    img[1].src = await article.articles[1].image;
    title[1].innerHTML = await article.articles[1].title
    description[1].innerHTML = await article.articles[1].description;
    link[9].href = await article.articles[1].url

    img[2].src = await article.articles[2].image;
    title[2].innerHTML = await article.articles[2].title
    description[2].innerHTML = await article.articles[2].description;
    link[10].href = await article.articles[2].url

};

const category = [
    "General",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
    "Business"
];


//Category Selection
const selectCategory = (e, category) => {
    let options = document.querySelectorAll(".option");
    options.forEach((element) => {
        element.classList.remove("active");
    });
    requestURL = `https://gnews.io/api/v4/top-headlines?category=${category.toLowerCase()}&lang=en&${country}&max=20&apikey=${apiKey}`;
    getNews();
};


//Options Buttons
const createOptions = () => {
    for (let i of category) {
        optionsContainer.innerHTML += `<li class="nav-item ms-3 mt-3"><button class="$ shadow btn btn-dark px-4 p-2 ms-4 mt-3 option" onclick="selectCategory(event,'${i}')">${i}</button></li>`;
    }
};

const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
};



window.onload = () => {
    requestURL = `https://gnews.io/api/v4/search?q=america&lang=en&${country}&max=20&apikey=${apiKey}`;
    init();
};

let everything = document.querySelector(".everything")
everything.addEventListener("click", () => {
    everything.href = "everything-topics.html"
})


let everything1 = document.querySelector(".everything1")
everything1.addEventListener("click", () => {
    everything1.href = "everything-topics.html"
})

function darkmode() {
    const dark = document.body;
    dark.classList.toggle("dark-mode")

}