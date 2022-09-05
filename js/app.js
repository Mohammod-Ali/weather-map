const API_KEY = `2a2117dfbc3e28b0c37680770b99a36b`

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city
    loadTemperature(city)
})

