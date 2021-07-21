async function callApi(query){
    var cityName = document.querySelector(".search-bar").value
    saveToLocalStorage(cityName); 
    showHistory();
    let latitude, longitude, responseData; 
   await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${!query? cityName: query}&appid=2dd3e3a73be6e7e3fb3cf7521bf057b8`)
    .then(res => {
        return res.json()
    })
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    .then((response) => {
        console.log(response); 
        const {coord} = response.city; 
        const {lat, lon} = coord; 
        latitude = lat; 
        longitude = lon
        responseData = response
        
    }); 