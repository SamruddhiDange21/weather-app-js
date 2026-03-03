async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("weatherResult").innerHTML =
            "Please enter a city name";
        return;
    }

    const apiKey = "56a34be8922d7fd592e4e76b36f10967";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML =
                "City not found";
            return;
        }

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const cityName = data.name;

        document.getElementById("weatherResult").innerHTML = `
            <h2>${cityName}</h2>
            <p>Temperature: ${temperature} °C</p>
            <p>Weather: ${description}</p>
            <p>Humidity: ${humidity}%</p>
        `;

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
            "Error fetching weather data";

    }
}