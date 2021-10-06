window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperture-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone')
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=7d599ce045a697247a327dd3f4029960`;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=36.8082944&lon=10.1810176&units=metric&appid=7d599ce045a697247a327dd3f4029960`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const timezone = data.name;
                    //Set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;
                });
        });
    }
});