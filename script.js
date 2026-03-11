const weatherCodes = {
  0: "Clear sky",

  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",

  45: "Fog",
  48: "Depositing rime fog",

  51: "Drizzle: Light intensity",
  53: "Drizzle: Moderate intensity",
  55: "Drizzle: Dense intensity",

  56: "Freezing Drizzle: Light intensity",
  57: "Freezing Drizzle: Dense intensity",

  61: "Rain: Slight intensity",
  63: "Rain: Moderate intensity",
  65: "Rain: Heavy intensity",

  66: "Freezing Rain: Light intensity",
  67: "Freezing Rain: Heavy intensity",

  71: "Snow fall: Slight intensity",
  73: "Snow fall: Moderate intensity",
  75: "Snow fall: Heavy intensity",

  77: "Snow grains",

  80: "Rain showers: Slight",
  81: "Rain showers: Moderate",
  82: "Rain showers: Violent",

  85: "Snow showers: Slight",
  86: "Snow showers: Heavy",

  95: "Thunderstorm: Slight or moderate",

  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail"
}
document.getElementById("spinner").classList.remove("hide")
navigator.geolocation.getCurrentPosition(async pos=>{
  const lat = pos.coords.latitude
  const long = pos.coords.longitude
  const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_mean&current=temperature_2m,weather_code`)
  const data = await res.json()
  displayweather(data)
  
  
},async error=>{
    document.querySelector("#error_message").classList.remove("hide")
    const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=18.96&longitude=72.83&daily=weather_code,temperature_2m_mean&current=temperature_2m,weather_code`)
    const data=await res.json()
    displayweather(data)
})

function displayweather(data){
  document.getElementById("spinner").classList.add("hide")
  document.querySelector(".temperature").textContent = `Temperature:${data.current.temperature_2m}`
  document.querySelector(".weather").textContent=`Weather:${weatherCodes[data.current.weather_code]}`
  document.querySelector(".forecast").textContent=`Forecast:`
  for(i=0;i<7;i++){
    document.querySelector(".forecast").innerHTML+=`<br>Day ${i+1}<br>Temperature:${data.daily.temperature_2m_mean[i]}<br>Weather:${weatherCodes[data.daily.weather_code[i]]}`
  }
  
}
