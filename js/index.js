let apiArr = [];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let searchInput = document.querySelector(".txt-search");
async function search(a) {
  let apiPromise = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=eddfd01a9291499a81c203221232202&q=${a}&days=3`
  );

  if (apiPromise.status == 200) {
    let finalApi = await apiPromise.json();
    apiArr = finalApi;
    displayOne();
    displayTwo();
    displayThree();
  }
}
searchInput.addEventListener("keyup", (a) => {
  search(a.target.value);
});

search("cairo");

function displayOne() {
  let day = new Date(apiArr.current.last_updated.replace(" ", "T"));
  let cartona = ` <div class="col-md-4">
    <div class="api-header dis">
      <div class="day">
        <span>${days[day.getDay()]}</span>
      </div>
      <div class="date">${day.getDate() + month[day.getMonth()]}</div>
    </div>
    <div class="api-body">
      <div class="location">
       ${apiArr.location.name}
      </div>
      <div class="degree">
        <div class="num">
          ${apiArr.current.temp_c}
          <sup>o</sup>
          C
        </div>
        <div class="icon">
          <img class="img-fluid" src="http:${
            apiArr.current.condition.icon
          }" alt=""   />
        </div>
      </div>
      <div class="custom">
        ${apiArr.current.condition.text}
      </div>
      <span class="num-1">
        <img src="images/icon-umberella.png" alt="" />
        20%
      </span>
      <span class="num-1">
        <img src="images/icon-wind.png" alt="" />
        20%
      </span>
      <span class="num-1">
        <img src="images/icon-compass.png" alt="" />
        20%
      </span>
    </div>
  </div>`;
  document.querySelector("#apiBody").innerHTML = cartona;
}
function displayTwo() {
  let cartona = ` <div class="col-md-4 col-dark">
    <div class="api-header">
      <div class="day">
        <span>${
          days[
            new Date(
              apiArr.forecast.forecastday[1].date.replace(" ", "T")
            ).getDay()
          ]
        }</span>
      </div>
    </div>
    <div class="api-body d-flex justify-content-center">
      <div class="content text-center">
        <div class="icon">
          <img
            src="https:${apiArr.forecast.forecastday[1].day.condition.icon}"
            alt=""
            width="48"
          />
        </div>
        <div class="degree">
        ${apiArr.forecast.forecastday[1].day.maxtemp_c}
          <sup>o</sup>
          C
        </div>
        <small>
          ${apiArr.forecast.forecastday[1].day.mintemp_c}
          <sup>o</sup>
        </small>
        <div class="custom">${
          apiArr.forecast.forecastday[1].day.condition.text
        }</div>
      </div>
    </div>
  </div>`;
  document.querySelector("#apiBody").innerHTML += cartona;
}
function displayThree() {
  let cartona = `<div class="col-md-4">
    <div class="api-header">
      <div class="day">
        <span>${
          days[
            new Date(
              apiArr.forecast.forecastday[2].date.replace(" ", "T")
            ).getDay()
          ]
        }</span>
      </div>
    </div>
    <div class="api-body d-flex justify-content-center">
      <div class="content text-center">
        <div class="icon">
          <img
            src="https:${apiArr.forecast.forecastday[2].day.condition.icon}"
            alt=""
            width="48"
          />
        </div>
        <div class="degree">
        ${apiArr.forecast.forecastday[2].day.maxtemp_c}
          <sup>o</sup>
          C
        </div>
        <small>
          ${apiArr.forecast.forecastday[2].day.mintemp_c}
          <sup>o</sup>
        </small>
        <div class="custom">${
          apiArr.forecast.forecastday[2].day.condition.text
        }</div>
      </div>
    </div>
  </div>`;
  document.querySelector("#apiBody").innerHTML += cartona;
}
