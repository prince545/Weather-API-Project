async function getWeather() {
  const input = document.getElementById("city").value;
  const [lat, lon] = input.split(',');

  if (!lat || !lon) {
    alert("Please enter valid latitude and longitude!");
    return;
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const temp = data.current.temperature_2m;

    document.getElementById("result").innerHTML = `
      <h2>Current Temperature:</h2>
      <p>${temp}°C</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>Error fetching weather data.</p>`;
  }
}
