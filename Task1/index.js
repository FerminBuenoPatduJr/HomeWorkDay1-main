"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displaySearchResult = exports.displayCities = void 0;
let cityName = document.getElementById("city_Name");
let country = document.getElementById("country_Name");
let population = document.getElementById("population_Cnt");
let searchText = document.getElementById("searchText");
let submitBtn = document.getElementById("submitBtn");
let myList = document.getElementById("myList");
let searchBtn = document.getElementById("searchBtn");
let searchResult = document.getElementById("searchResult");
let cityInfoArray = [];
let searchResultArray = [];
const addCityInfo = (data) => {
    cityInfoArray.push(data);
};
const displayCities = () => {
    //  myList = document.getElementById("myList")
    if (myList) {
        while (myList.hasChildNodes() && myList.firstChild) {
            myList.removeChild(myList.firstChild);
        }
    }
    cityInfoArray.forEach((item) => {
        let cityList = document.createElement("li");
        let countryList = document.createElement("li");
        let populationList = document.createElement("li");
        let br = document.createElement("br");
        cityList.innerText = "City: " + item.name_of_city;
        countryList.innerText = "Country: " + item.name_of_country;
        populationList.innerText = "Population " + item.count_population;
        if (myList) {
            myList.appendChild(cityList);
            myList.appendChild(countryList);
            myList.appendChild(populationList);
            myList.appendChild(br);
        }
    });
};
exports.displayCities = displayCities;
const displaySearchResult = () => {
    let searchResult = document.getElementById("searchResult");
    searchResultArray.forEach((item) => {
        let cityList2 = document.createElement("li");
        let countryList2 = document.createElement("li");
        let populationList2 = document.createElement("li");
        let br2 = document.createElement("br");
        cityList2.innerText = "City: " + item.name_of_city;
        countryList2.innerText = "Country: " + item.name_of_country;
        populationList2.innerText = "Population " + item.count_population;
        if (searchResult) {
            searchResult.appendChild(cityList2);
            searchResult.appendChild(countryList2);
            searchResult.appendChild(populationList2);
            searchResult.appendChild(br2);
        }
    });
};
exports.displaySearchResult = displaySearchResult;
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
    var newCity = {
        name_of_city: cityName.value,
        name_of_country: country.value,
        count_population: population.value,
    };
    addCityInfo(newCity);
    console.log(cityInfoArray);
    cityName.value = "";
    country.value = "";
    population.value = "";
    (0, exports.displayCities)();
});
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener("click", () => {
    searchResultArray = cityInfoArray.filter((data) => {
        if (data.name_of_city.includes(searchText.value)) {
            return data;
        }
    });
    console.log(searchResultArray);
    (0, exports.displaySearchResult)();
    searchText.value = "";
});
