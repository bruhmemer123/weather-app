const api_key="b1f4826ad80932fc0369af79b3a89cc6"

navigator.geolocation.getCurrentPosition(async pos=>{
  try {
    const lat=pos.coords.latitude
  const long=pos.coords.longitude
  const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`)
  const data=await res.json()
  document.querySelector(".Temperature").textContent=`Temperature:${data.main.temp}`
  } catch (error) {
    console.error(error)
  }
  
  
},error=>{console.log(error)})


//data.coord,data.main.temp,data.name,data.sys.country,data.weather.0.main,data.weather.0.description,data.wind  
