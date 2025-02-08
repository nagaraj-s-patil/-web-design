document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://ratings.food.gov.uk/api/open-data-files/FHRS529en-GB.json";
  const restaurantList = document.getElementById("restaurant-list");

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const restaurants = [
              {
                  "BusinessName": "Cactus Grill",
                  "Address": "15 Woodcote Road, Wallington, SM6 0LH",
                  "RatingValue": "5",
                  "RatingDate": "2024-09-18"
              }
          ];

          restaurants.forEach(restaurant => {
              const card = document.createElement("div");
              card.classList.add("col-md-4");
              card.innerHTML = `
                  <div class="card p-3 shadow-sm">
                      <h4 class="text-primary">${restaurant.BusinessName}</h4>
                      <p>${restaurant.Address}</p>
                      <p class="rating text-success">Rating: ${restaurant.RatingValue}</p>
                      <p class="text-muted">Inspected on: ${restaurant.RatingDate}</p>
                  </div>
              `;
              restaurantList.appendChild(card);
          });
      })
      .catch(error => console.error("Error fetching data:", error));
});