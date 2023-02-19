window.addEventListener("load", () =>  {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    let temperatureSectionSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const apiKey = `paste-your-api-key-string-here`;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(api)
        .then(response => {
          console.log(response);
          // check the json response in the console (including .ok .status .statusText)
          return response.json();
          // parse the response to a JS Object using the .json() parser method
        })
        .then(data => {
          console.log(data);
          // check the parsed JS Object data in the console
          const { temp } = data.main;
          // object destructure the temp value (and/or others) from the parsed JS Object data into its own variable
          console.log(temp);
          // check the temp variable's value in the console
          
          // use DOM Manipulation to apply "temp"s value to an element's textContent in your HTML, example:
          // document.querySelector(".temperature-degree").textContent = temp;
        })
    })
  }
})