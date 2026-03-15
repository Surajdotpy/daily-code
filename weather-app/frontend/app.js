
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", async() => {
    const city = document.getElementById("input").value
    console.log(city);
    result.innerHTML = `<p>Loading...</p>`
    const response = await fetch(`http://localhost:3000/weather/${city}`);
    const data = await response.json()
    console.log(data)

    result.innerHTML = result.innerHTML = `
  <h2>${data.cityName}, ${data.country}</h2>
  <p>Temperature: ${data.temperature}°C</p>
  <p>Wind: ${data.windspeed} km/h</p>
`


      

} )