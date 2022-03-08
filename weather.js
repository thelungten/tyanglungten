const key = "5cDyZMH3yaVSZb69C0E8ehAJjzxKowp3";
const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/361353?apikey=${key}`;
const weatherDiv = document.querySelector(".weather");

const getWeather = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};

getWeather().then((data) => {
  const dailyForecasts = data.DailyForecasts;
  const arrDaily = [
    dailyForecasts[0],
    dailyForecasts[1],
    dailyForecasts[2],
    dailyForecasts[3],
    dailyForecasts[4],
  ];
  console.log(arrDaily);

  //todays weather forecast

  const forecastToday = dailyForecasts[0];
  console.log(forecastToday);

  const day1 = new Date(arrDaily[0].Date).getDay();
  const day2 = new Date(arrDaily[1].Date).getDay();
  const day3 = new Date(arrDaily[2].Date).getDay();
  const day4 = new Date(arrDaily[3].Date).getDay();
  const day5 = new Date(arrDaily[4].Date).getDay();

  const today = new Date().getDay;

  if (day1 === 3) {
    // on wednesdays
    weatherDiv.innerHTML = ` <div>
    <p class="weather-love">
      IT IS WEDNESDAY! Have Fun, Love More, and don't get Killed <3 The temperature and weather today seems to be:
    </p>
    </div>
    <div class="mid-texts">
    <div>
    <p class="temperature-text">${
      Math.round(
        ((forecastToday.Temperature.Maximum.Value - 32) / (5 / 9)) * 10
      ) / 10
    }°C Max  ${
      Math.round(
        ((forecastToday.Temperature.Minimum.Value - 32) / (5 / 9)) * 10
      ) / 10
    }°C Min</p>
      <p class="weather-text">${forecastToday.Day.IconPhrase}</p>
    </div>
    <img class="weather-icon" src="img/icons/${
      forecastToday.Day.Icon
    }.svg" alt="" />
    </div>`;
  } else if (day1 === 6 || day1 === 0 || day1 === 1 || day1 === 2) {
    //forecast
    switch (today) {
      case 6:
        forecastToday = dailyForecasts[4];
        break;
      case 0:
        forecastToday = dailyForecasts[3];
        break;
      case 1:
        forecastToday = dailyForecasts[2];
        break;
      case 2:
        forecastToday = dailyForecasts[1];
    }

    console.log(forecastToday.Temperature.Maximum.Value);

    weatherDiv.innerHTML = `<div>
<p class="weather-love">
Apart from feeling the warmth from all the love in the air, the temperature on our date this Wednesday appear to be:
</p>
</div>
<div class="mid-texts">
<div class="temperature-block">
  <p class="temperature-text"><b class="max-min">Max<br></b>${
    Math.round(
      ((forecastToday.Temperature.Maximum.Value - 32) / (5 / 9)) * 10
    ) / 10
  }°C <br><b class="max-min">Min<br></b> ${
      Math.round(
        ((forecastToday.Temperature.Minimum.Value - 32) / (5 / 9)) * 10
      ) / 10
    }°C </p>
  <p class="weather-text">${forecastToday.Day.IconPhrase}</p>
</div>
<img class="weather-icon" src="img/icons/${
      forecastToday.Day.Icon
    }.svg" alt="" />
</div>`;
  } else {
    //have patience
    weatherDiv.innerHTML = `<div>
<p class="weather-love">
Apart from feeling the warmth from all the love in the air, the temperature on our date this Wednesday appear to be:
</p>
</div>`;
  }
});
