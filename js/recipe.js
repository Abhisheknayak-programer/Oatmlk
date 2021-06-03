const RecipeBtn1 = document.querySelector("#btn__recipe__1");
const RecipeBtn2 = document.querySelector("#btn__recipe__2");
const RecipeBtn3 = document.querySelector("#btn__recipe__3");
const RecipeBtn4 = document.querySelector("#btn__recipe__4");
const RecipeBtn5 = document.querySelector("#btn__recipe__5");
const RecipeBtn6 = document.querySelector("#btn__recipe__6");

const recipeHeading = document.querySelector("#recipe__Heading");
const prepTime = document.querySelector("#recipe_PrepTime");

const para__1__ING = document.querySelector("#para__1__ING");
const para__2__ING = document.querySelector("#para__2__ING");
const para__3__ING = document.querySelector("#para__3__ING");
const para__4__ING = document.querySelector("#para__4__ING");
const para__5__ING = document.querySelector("#para__5__ING");
const para__6__ING = document.querySelector("#para__6__ING");
const para__7__ING = document.querySelector("#para__7__ING");
const para__8__ING = document.querySelector("#para__8__ING");
const para__9__ING = document.querySelector("#para__9__ING");
const para__10__ING = document.querySelector("#para__10__ING");
const para__11__ING = document.querySelector("#para__11__ING");
const para__12__ING = document.querySelector("#para__12__ING");
const para__13__ING = document.querySelector("#para__13__ING");
const para__14__ING = document.querySelector("#para__14__ING");
const para__15__ING = document.querySelector("#para__15__ING");
const para__16__ING = document.querySelector("#para__16__ING");
const para__17__ING = document.querySelector("#para__17__ING");
const para__18__ING = document.querySelector("#para__18__ING");
const para__19__ING = document.querySelector("#para__19__ING");
const para__20__ING = document.querySelector("#para__20__ING");
const para__21__ING = document.querySelector("#para__21__ING");

const recipe__img = document.querySelector(".recipe__img");

const Recipie__list__1 = document.querySelector("#Recipie__list__1");
const Recipie__list__2 = document.querySelector("#Recipie__list__2");
const Recipie__list__3 = document.querySelector("#Recipie__list__3");
const Recipie__list__4 = document.querySelector("#Recipie__list__4");
const Recipie__list__5 = document.querySelector("#Recipie__list__5");




RecipeBtn1.addEventListener("click",()=>{
    recipeHeading.textContent = `Oat Milk Coffee`;
    recipe__img.setAttribute("src","./assets/images/Recipie/Image 73.png")
    
    prepTime.textContent = `10 Minutes`;

    para__1__ING.textContent = `2/3 cup of OatMlk`;
    para__2__ING.textContent = `1/3 cup of boiling water`;
    para__3__ING.textContent = `2 tsp of your favorite loose chai (you can also use a teabag)`;
    para__4__ING.textContent = `1–2 tsp of sugar`;
    para__5__ING.style.display = "none";
    para__6__ING.style.display = "none";
    para__7__ING.style.display = "none";
    para__8__ING.style.display = "none";
    para__9__ING.style.display = "none";
    para__10__ING.style.display = "none";
    para__11__ING.style.display = "none";
    para__12__ING.style.display = "none";
    para__13__ING.style.display = "none";
    para__14__ING.style.display = "none";
    para__15__ING.style.display = "none";
    para__16__ING.style.display = "none";
    para__17__ING.style.display = "none";
    para__18__ING.style.display = "none";
    para__19__ING.style.display = "none";
    para__20__ING.style.display = "none";
    para__21__ING.style.display = "none";

    Recipie__list__1.textContent = `In a pan add the water and bring it to a boil.`;
    Recipie__list__2.textContent = `Then add the coffee and sugar`;
    Recipie__list__3.textContent = `Cook it for a couple of minutes and pour it to a cup.`;
    Recipie__list__4.textContent = `To it, add the OatMlk and give it a good stir`;
    Recipie__list__5.style.display = "block";  
    Recipie__list__5.textContent = `You can also cocoa powder for an additional flavour  And there it is! Your healthy cup of delicious coffee all ready to be consumed`;
})


RecipeBtn2.addEventListener("click",()=>{
    recipeHeading.textContent = `Oat Milk Chai`;
    recipe__img.setAttribute("src","./assets/images/Recipie/Image 90.png")
    
    prepTime.textContent = `5 Minutes`;

    para__1__ING.textContent = `Sugar`;
    para__2__ING.textContent = `Grated fresh ginger`;
    para__3__ING.textContent = `Chai patti (dry loose tea)`;
    para__4__ING.textContent = `OatMlk`;
    para__5__ING.style.display = "block";
    para__5__ING.textContent = `chai masala blend (optional)`;
    para__6__ING.style.display = "none";
    para__7__ING.style.display = "none";
    para__8__ING.style.display = "none";
    para__9__ING.style.display = "none";
    para__10__ING.style.display = "none";
    para__11__ING.style.display = "none";
    para__12__ING.style.display = "none";
    para__13__ING.style.display = "none";
    para__14__ING.style.display = "none";
    para__15__ING.style.display = "none";
    para__16__ING.style.display = "none";
    para__17__ING.style.display = "none";
    para__18__ING.style.display = "none";
    para__19__ING.style.display = "none";
    para__20__ING.style.display = "none";
    para__21__ING.style.display = "none";

    Recipie__list__1.textContent = `We know how personal chai is and everyone has their way to make it. We thought we would share ours :) Get all the ingredients for the chai ready.`;
    Recipie__list__2.textContent = `Boil the tea, chai masala, ginger and sugar in water. Bring to a rapid bubbling boil.`;
    Recipie__list__3.textContent = `Pour the OatMlk slowly.`;
    Recipie__list__4.textContent = `Bring to just about a boil, then strain and serve this creamy Chai made with OatMlk!`;
    Recipie__list__5.style.display = "none";
});







RecipeBtn3.addEventListener("click",()=>{
    recipeHeading.textContent = `Chocolate Cake`;
    recipe__img.setAttribute("src","./assets/images/Recipie/Image 83.png")
    

    prepTime.textContent = `1 Hour`;

    para__1__ING.textContent = `260g self-raising flour or ground almonds`;
    para__2__ING.textContent = `40g of ground coconut`;
    para__3__ING.textContent = `50g coconut blossom sugar`;
    para__4__ING.textContent = `70g cocoa powder (raw)`;
    para__5__ING.style.display = "block";
    para__6__ING.style.display = "block";
    para__7__ING.style.display = "block";
    para__8__ING.style.display = "block";
    para__9__ING.style.display = "block";
    para__5__ING.textContent = "1/2 tsp baking powder";
    para__6__ING.textContent = `250ml OatMlk`;
    para__7__ING.textContent = `2 eggs, yolks and whites separated`;
    para__8__ING.textContent = `50g fresh raspberries`;
    para__9__ING.textContent = `2tbp of ground coconut for topping`;
    para__10__ING.style.display = "none";
    para__11__ING.style.display = "none";
    para__12__ING.style.display = "none";
    para__13__ING.style.display = "none";
    para__14__ING.style.display = "none";
    para__15__ING.style.display = "none";
    para__16__ING.style.display = "none";
    para__17__ING.style.display = "none";
    para__18__ING.style.display = "none";
    para__19__ING.style.display = "none";
    para__20__ING.style.display = "none";
    para__21__ING.style.display = "none";

    Recipie__list__1.textContent = `Everyone loves chocolate cake and this one’s a winner! Start by preheating your oven to 180° C and grease a cake tin.`;
    Recipie__list__2.textContent = `Pop all the dry ingredients into a large bowl and stir together. Add the egg yolks and bring it all together, then blend in the OatMlk until you have a thick, smooth batter. In a separate bowl, whisk the egg whites until those little mountain peaks hold their shape, then fold into your batter – gently does it! – until you have a nice, even mix.`;
    Recipie__list__3.textContent = ` Pour into your tin and bake for 30 to 35 minutes – test after 30 minutes, a clean skewer means it’s done.`;
    Recipie__list__4.textContent = ` Take out of the oven and let it cool. Top it with the fresh raspberries and a scatter with  the ground coconut, then just watch their faces when they taste it!`;
    Recipie__list__5.style.display = "none";  
})





RecipeBtn4.addEventListener("click",()=>{
    recipeHeading.textContent = `Vegan Frappuccino`;
    recipe__img.setAttribute("src","./assets/images/Recipie/Image 84.png")
    
    prepTime.textContent = `1 Hour`;

    para__1__ING.textContent = `260g self-raising flour or ground almonds`;
    para__2__ING.textContent = `40g of ground coconut`;
    para__3__ING.textContent = `50g coconut blossom sugar`;
    para__4__ING.textContent = `70g cocoa powder (raw)`;
    para__5__ING.style.display = "block";
    para__6__ING.style.display = "block";
    para__7__ING.style.display = "block";
    para__8__ING.style.display = "block";
    para__9__ING.style.display = "block";
    para__5__ING.textContent = `1/2 tsp baking powder`;
    para__6__ING.textContent = `250ml OatMlk`;
    para__7__ING.textContent = `2 eggs, yolks and whites separated`;
    para__8__ING.textContent = `50g fresh raspberries`;
    para__9__ING.textContent = `2tbp of ground coconut for topping`;
    para__10__ING.style.display = "none";
    para__11__ING.style.display = "none";
    para__12__ING.style.display = "none";
    para__13__ING.style.display = "none";
    para__14__ING.style.display = "none";
    para__15__ING.style.display = "none";
    para__16__ING.style.display = "none";
    para__17__ING.style.display = "none";
    para__18__ING.style.display = "none";
    para__19__ING.style.display = "none";
    para__20__ING.style.display = "none";
    para__21__ING.style.display = "none";
    
    Recipie__list__1.textContent = `Everyone loves chocolate cake and this one’s a winner! Start by preheating your oven to 180° C and grease a cake tin.`;
    Recipie__list__2.textContent = ` Pop all the dry ingredients into a large bowl and stir together. Add the egg yolks and bring it all together, then blend in the OatMlk until you have a thick, smooth batter. In a separate bowl, whisk the egg whites until those little mountain peaks hold their shape, then fold into your batter – gently does it! – until you have a nice, even mix`;
    Recipie__list__3.textContent = `Pour into your tin and bake for 30 to 35 minutes – test after 30 minutes, a clean skewer means it’s done.`;
    Recipie__list__4.textContent = `Take out of the oven and let it cool. Top it with the fresh raspberries and a scatter with  the ground coconut, then just watch their faces when they taste it!`;
    Recipie__list__5.style.display = "none";  
})






RecipeBtn5.addEventListener("click",()=>{
    recipeHeading.textContent = `Vegan Ramen`;
    recipe__img.setAttribute("src","./assets/images/Recipie/vegan.png")
    
    prepTime.textContent = `1 Hour`;

    para__1__ING.textContent = `300 grams ramen noodles`;
    para__2__ING.textContent = `Oat Milk Broth`;
    para__3__ING.textContent = `1 tablespoon blackened garlic oil`;
    para__4__ING.textContent = `1/2 yellow onion, finely diced`;
    para__5__ING.style.display = "block";
    para__6__ING.style.display = "block";
    para__7__ING.style.display = "block";
    para__8__ING.style.display = "block";
    para__9__ING.style.display = "block";
    para__5__ING.textContent = `1/2 scallion, chopped`;
    para__6__ING.textContent = `1/4 teaspoon ginger powder`;
    para__7__ING.textContent = `1 teaspoon white pepper`;
    para__8__ING.textContent = `1 tablespoon mirin (or rice wine)`;
    para__9__ING.textContent = `1 tablespoon sesame seeds`;
    

    const Recipe__box__2 = document.querySelector(".Recipe__box__2");
    Recipe__box__2.insertAdjacentHTML("beforeend",`
    <p id="para__10__ING">1 tablespoon miso paste</p>
    <p id="para__11__ING">1/2 tablespoon spicy broad bean paste (doubanjiang)</p>
    <p id="para__12__ING">3/4 cup oat milk (or other non-dairy milk)</p>
    <p id="para__13__ING">1.5 cups water</p>
    <p id="para__14__ING">Blackened Garlic Oil</p>
    <p id="para__15__ING">8 cloves garlic, crushed</p>
    <p id="para__16__ING">1/4 cup vegetable oil</p>
    <p id="para__17__ING">salt, to taste</p>
    <p id="para__18__ING">Toppings</p>
    <p id="para__19__ING">1 scallion, sliced thinly</p>
    <p id="para__20__ING">1 grilled onion</p>
    <p id="para__21__ING">100 grams bean sprouts, blanched</p>
    `);

    Recipie__list__1.textContent = `Prepare the Blackened Garlic Oil. Crush the garlic with your knife.`;
    Recipie__list__2.textContent = `In a pot, cook the garlic in vegetable oil on medium-high heat until they become black.  Once done, turn off the heat and let cool for a bit.`;
    Recipie__list__3.textContent = ` Prepare the vegetables for the    broth and toppings. Dice the onion finely.`;
    Recipie__list__4.textContent = ` Cut the scallion in half: slice one half into thin long strips and chop the other half roughly.`;
    Recipie__list__5.style.display = "block";  
    Recipie__list__5.textContent = `Finish making the blackened garlic oil by blending it with a food processor. Now, it’s time to prepare the broth. First, heat up 1 tablespoon of the blackened garlic oil in a medium-sized pot. Sweat the yellow onion, spring onion, white pepper, and ginger powder together for 3 minutes (don’t over-caramelize!).`;
})





RecipeBtn6.addEventListener("click",()=>{
    recipeHeading.textContent = `Kheer`;
    recipe__img.setAttribute("src","./assets/images/Recipie/kheer.png")
    
    prepTime.textContent = `1 Hour`;

    para__1__ING.textContent = `3 cups almond milk`;
    para__2__ING.textContent = `1 cup oat milk`;
    para__3__ING.textContent = `¼ cup Basmati rice`;
    para__4__ING.textContent = `4 tbsp organic brown sugar adjust the quantity according to taste`;
    para__5__ING.style.display = "block";
    para__6__ING.style.display = "block";
    para__7__ING.style.display = "block";
    para__5__ING.textContent = `2 tsp cardamom powder`;
    para__6__ING.textContent = `a few strands of saffron`;    
    para__7__ING.textContent = `8-10 pistachios hand-pounded to powder`;
    para__8__ING.style.display = "none";
    para__9__ING.style.display = "none";
    para__10__ING.style.display = "none";
    para__11__ING.style.display = "none";
    para__12__ING.style.display = "none";
    para__13__ING.style.display = "none";
    para__14__ING.style.display = "none";
    para__15__ING.style.display = "none";
    para__16__ING.style.display = "none";
    para__17__ING.style.display = "none";
    para__18__ING.style.display = "none";
    para__19__ING.style.display = "none";
    para__20__ING.style.display = "none";
    para__21__ING.style.display = "none";
    Recipie__list__1.textContent = `Rinse the rice in water for 3-4 changes. Soak Basmati rice inwater, while you heat the milk.
 `;
    Recipie__list__2.textContent = ` In a small bowl, soak the saffron strands in 1-2 tbsp of water.
 `;
    Recipie__list__3.textContent = `In a deep pot, bring milk to a boil. Reduce heat to medium-low to simmer the milk. Drain the rice and add to the simmering milk. Cook for 10 mins until the rice is soft.
`;
    Recipie__list__4.textContent = `Add sugar, cardamom powder, and saffron water. Cook on a simmer for another 5-10 minutes until the kheer is of desired consistency. Some like it very thick and some like it a bit watery.
 `;
    Recipie__list__5.style.display = "block";  
    Recipie__list__5.textContent = `Taste and adjust for sweetness, stir in the powdered pistachios. Serve hot or allow to cool before putting it in the refrigerator and serve chilled.`;
})



