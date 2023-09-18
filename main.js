const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Watch",
  },

  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Watch",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "hamrobazar",
  },
  {
    id: 11,
    name: "gucci",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 100,
    cat: "gucci",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

function updateDOM(data) {
  productsContainer.innerHTML = data
    .map((datas) => {
      return `
          <div class="product">
          <img src="${datas.img}" alt="" />
          <span class="name">${datas.name}</span>
          <span class="priceText">$ ${datas.price}</span>
          </div>
          `;
    })
    .join("");
}

updateDOM(data);

function updateCategory() {
  let allCateories = data.map((datas) => datas.cat);
  let uniqueCategories = [...new Set(allCateories)]; //to select only unique categories
  uniqueCategories.unshift("All")
  categoriesContainer.innerHTML = uniqueCategories
    .map((uniqueCats) => ` <span class="cat">${uniqueCats}</span>`)
    .join("");
}

updateCategory();

function searchFunctionality() {
  searchInput.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase();
    let filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    updateDOM(filteredData);
  });
}
searchFunctionality();

function clickFunctionality() {
    let category = document.querySelectorAll(".cat");
    category.forEach((cats) => {
      cats.addEventListener("click", (e) => {
        let catsInnerText = e.target.innerText;
        let filteredCats = catsInnerText === "All" ? data : data.filter((datas) => datas.cat === catsInnerText);
        updateDOM(filteredCats);
      });
    });
  }
  
  clickFunctionality();
  
