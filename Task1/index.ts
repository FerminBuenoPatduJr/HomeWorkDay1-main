let cityName = document.getElementById("city_Name") as HTMLInputElement;
let country = document.getElementById("country_Name") as HTMLInputElement;
let population = document.getElementById("population_Cnt") as HTMLInputElement;
let searchText = document.getElementById("searchText") as HTMLInputElement;
let submitBtn = document.getElementById("submitBtn");
let myList = document.getElementById("myList");
let searchBtn = document.getElementById("searchBtn");
let searchResult = document.getElementById("searchResult");

interface CityInformation {
  name_of_city: string;
  name_of_country: string;
  count_population: string;
}

let cityInfoArray: CityInformation[] = [];
let searchResultArray: CityInformation[] = [];

const addCityInfo = (data: CityInformation) => {
  cityInfoArray.push(data);
};

export const displayCities = () => {
  //  myList = document.getElementById("myList")
  if (myList) {
    while (myList.hasChildNodes() && myList.firstChild) {
      myList.removeChild(myList.firstChild);
    }
  }

  cityInfoArray.forEach((item: CityInformation) => {
    let cityList = document.createElement("li") as HTMLLIElement;
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

export const displaySearchResult = () => {
  let searchResult = document.getElementById("searchResult");

  searchResultArray.forEach((item: CityInformation) => {
    let cityList2 = document.createElement("li") as HTMLLIElement;
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

submitBtn?.addEventListener("click", () => {
  var newCity: CityInformation = {
    name_of_city: cityName.value,
    name_of_country: country.value,
    count_population: population.value,
  };

  addCityInfo(newCity);
  console.log(cityInfoArray);

  cityName.value = "";
  country.value = "";
  population.value = "";

  displayCities();
});

searchBtn?.addEventListener("click", () => {
  searchResultArray = cityInfoArray.filter((data: CityInformation) => {
    if (data.name_of_city.includes(searchText.value)) {
      return data;
    }
  });

  console.log(searchResultArray);
  displaySearchResult();
  searchText.value = "";
});
