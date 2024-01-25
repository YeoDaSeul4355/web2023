const apiKey = "0d1035fe5af6b099a1a42c5023236bd7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherCard = document.querySelector(".weather");
const error = document.querySelector(".error");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherIconMapping = {
  Clouds: "clouds",
  Clear: "clear",
  Rain: "rain",
  Drizzle: "drizzle",
  Mist: "mist",
  Snow: "snow",
  Wind: "wind",
};

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    // Show error message
    weatherCard.style.display = "none";
    error.style.display = "block";
  } else {
    // Reset error display
    error.style.display = "none";

    const data = await response.json();
    const weatherId = data.weather[0].id;
    const koreanDescription = weatherDescKo.find((entry) => entry[weatherId]);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".status").innerHTML = data.weather[0].id;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (koreanDescription) {
      const description = koreanDescription[weatherId];
      document.querySelector(".status").innerHTML = description;
    } else {
      document.querySelector(".status").innerHTML = "Unknown Weather";
    }

    if (data.weather[0].main in weatherIconMapping) {
      weatherIcon.src = `images/${
        weatherIconMapping[data.weather[0].main]
      }.png`;
    }

    // Show weather card
    weatherCard.style.display = "block";
  }
}

// 초기에는 max-height를 0으로 설정
weatherCard.style.maxHeight = 0;
weatherCard.style.overflow = "hidden";

// 엔터
searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);

    gsap.to(weatherCard, {
      maxHeight: "100vh",
      duration: 1,
      ease: "power2.inOut",
    });
  }
});

// 버튼
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

  gsap.to(weatherCard, {
    maxHeight: "100vh",
    duration: 1,
    ease: "power2.inOut",
  });
});
