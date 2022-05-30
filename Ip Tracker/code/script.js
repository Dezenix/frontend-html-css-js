const lookupBtn = document.querySelector(".lookup");
const ipDisplay = document.querySelector(".display");
const locationDisplay = document.querySelector(".location");
const geo = document.querySelector(".geoDisplay");


lookupBtn.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then((response) => {
        ipDisplay.textContent = `IP: ${response.data.ip}`;
        
        locationDisplay.textContent = `Location: ${response.data.city}, ${response.data.region},
        ${response.data.country_name}`;
        
        geo.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`;

    });
});