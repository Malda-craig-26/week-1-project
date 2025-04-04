const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 function displayRamens() {}
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";
ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.width = "100px";
    img.style.cursor = "pointer";
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
});

 
function handleClick(ramen) {
  document.getElementById ("ramen-name").textContent = ramen.name;
  document.getElementById ("ramen-image").src = ramen.image;
  document.getElementById ("ramen-rating").textContent = ramen.rating;
  document.getElementById ("ramen-comment").textContent = ramen.comment;
};

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newRamen = {
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value,
        };
        const ramenMenu = document.getElementById("ramen-menu");
        const img = document.createElement("img");  
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.style.width = "100px";
        img.style.cursor = "pointer";
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);
        form.reset();
    });
}
document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
});


