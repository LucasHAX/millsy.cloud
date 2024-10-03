let currentRecipeIndex = 0;
const recipesPerPage = 5;
const recipes = [
    { title: "Red Wine Beef Bourguignon", type: ["beef"], image: "recipes/beef/beef-bourguinon.jpg", link: "recipes/beef/beef-bourguignon.html", cookTime: "9hrs", difficulty: 2, veganFriendly: false, vegetarianFriendly: false },
    { title: "Beef Casserole", type: ["beef"], image: "recipes/beef/beefcasserole.jpg", link: "recipes/beef/beef-casserole.html" },
    { title: "Beef Sunday Roast Dinner", type: ["beef"], image: "beefsundaydinner.jpg", link: "recipes/beef/b-sunday-dinner.html" },
    { title: "Creamy Butter Chicken Curry", type: ["chicken"], image: "cbutterchicken.jpg", link: "recipes/chicken/c-butterchicken-curry.html" },
    { title: "Korean Goujons with Spicy Parmentier Potatoes", type: ["chicken"], image: "k-chickengoujons.jpg", link: "recipes/chicken/korean-chickengoujons.html" },
    { title: "Chicken Chasseur", type: ["chicken"], image: "chicken-chasseur.jpg", link: "recipes/chicken/chicken-chasseur.html" },
    { title: "Vegetarian Lasagna", type: ["vegetarian"], image: "veggielasagna.jpg", link: "recipes/vegetarian/veggie-lasanga.html" },
    { title: "Vegan Tacos", type: ["vegan"], image: "vegantaco.jpg", link: "recipes/vegan/vegan-taco.html" },
    { title: "Sticky Toffee Brownie with Ice Cream of your Choice", type: ["sweet-treats"], image: "stickytoffeebrownie.jpg", link: "recipes/sweet-treats/sticky-toffee-brownie-icecream.html" },
    { title: "Strawberry and Raspberry Mousse", type: ["sweet-treats"], image: "strawberryraspberrymousse.jpg", link: "recipes/sweet-treats/strawberry-rasp-mousse.html" },
    { title: "Chocolate Fudge Cake", type: ["sweet-treats"], image: "chocfudgecake.jpg", link: "recipes/sweet-treats/chocolate-fudge-cake.html" },
    { title: "Korean BBQ Style, Mixup-Mexican Veg Fajitas", type: ["vegetarian", "vegan"], image: "mixup-fajitas.jpg", link: "recipes/vegetarian/korean-bbq-fajitas.html" },
    { title: "Creamy Tomato-Based One-Pot-Pasta", type: ["vegan", "vegetarian"], image: "ctbopp.jpg", link: "recipes/vegan/creamy-tomato-based-onepotpasta.html" },
    { title: "Sauteed Lemon & Alnut Infused Tenderstem Broccoli", type: ["sides"], image: "sauteed-broccoli.jpg", link: "recipes/sides/sauteed-broccoli.html" },
    { title: "Fluffy, Large Yorkshire Puddings", type: ["sides"], image: "yorkies.jpg", link: "recipes/sides/huge-yorkie-puddings.html" },
    // Add 40 more recipes here...
];

function displayRecipes(recipesToShow) {
    const recipeGrid = document.getElementById("recipe-grid");
    recipeGrid.innerHTML = ""; // Clear previous recipes

    if (recipesToShow.length === 0) {
        recipeGrid.innerHTML = "<p>No recipes found for this category.</p>";
        return;
    }

    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.onclick = () => window.location.href = recipe.link;

        const recipeImg = document.createElement("img");
        recipeImg.src = recipe.image;
        recipeImg.loading = 'lazy'; // Lazy load
        recipeCard.appendChild(recipeImg);

        const recipeTitle = document.createElement("h3");
        recipeTitle.textContent = recipe.title;
        recipeCard.appendChild(recipeTitle);

        const foodType = document.createElement("div");
        foodType.className = "food-type";
        foodType.textContent = `(${recipe.type.join(", ").toUpperCase()})`;
        recipeCard.appendChild(foodType);

        const recipeInfo = document.createElement("div");
        recipeInfo.className = "recipe-info";
        recipeInfo.innerHTML = `
            <p>Time to Cook: ${recipe.cookTime}</p>
            <div class="difficulty">
                ${Array.from({ length: 3 }, (_, index) => `
                    <div class="dot ${index < recipe.difficulty ? 'active' : ''}"></div>
                `).join('')}
            </div>
            ${recipe.veganFriendly ? '<img src="images/vegan-friendly.png" alt="Vegan Friendly" />' : ''}
            ${recipe.vegetarianFriendly ? '<img src="images/veggie-friendly.png" alt="Vegetarian Friendly" />' : ''}
            ${recipe.veganNotFriendly ? '<img src="images/vegan-not-friendly.png" alt="Not Vegan Friendly" />' : ''}
            ${recipe.vegetarianNotFriendly ? '<img src="images/veggie-not-friendly.png" alt="Not Vegetarian Friendly" />' : ''}
        `;
        recipeCard.appendChild(recipeInfo);

        recipeGrid.appendChild(recipeCard);
    });
}

function showMoreRecipes() {
    currentRecipeIndex += recipesPerPage;
    const filteredRecipes = recipes.slice(currentRecipeIndex, currentRecipeIndex + recipesPerPage);
    displayRecipes(filteredRecipes);
}

function filterRecipes(type) {
    currentRecipeIndex = 0;
    let filteredRecipes = recipes;
    if (type !== 'all') {
        filteredRecipes = recipes.filter(recipe => recipe.type.includes(type));
    }
    displayRecipes(filteredRecipes.slice(0, recipesPerPage));
}

function enlargeImage(img) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}

// Initial load
window.onload = () => {
    displayRecipes(recipes.slice(0, recipesPerPage));
};


function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scroll animation
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
}