const API_KEY = `27fcf021026726c9022d1dc9f5fdee28`;  
const inputdata = document.getElementById("inputfield");
const showweather = document.getElementById("showeather");

const search = async () => {
    // Show a loading spinner while fetching data
    showweather.innerHTML = `
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;  

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;  

    try {
        const fetchData = await fetch(API_URL);
        if (!fetchData.ok) {
            throw new Error('City not found or API error');
        }
        const response = await fetchData.json();
        showData(response); 
    } catch (error) {
        showweather.innerHTML = `<p>Error: ${error.message}</p>`;  
    }
};

const showData = (data) => {
    console.log(data); 

   
    showweather.innerHTML = `
        <div class="current-weather">
            <div class="details">
                <h2>${data.name}</h2>
                <h6>Temperature: ${data.main.temp} °C</h6>
                <h6>Wind: ${data.wind.speed} m/s</h6>
                <h6>Humidity: ${data.main.humidity}%</h6>
            </div>
            <div class="icon">
                <img width="80" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                <h6>${data.weather[0].description}</h6>
            </div>
        </div>
    `;
};
