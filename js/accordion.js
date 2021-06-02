
// Accordion Design
const btn1 = document.querySelector("#item__1__btn");
const btn2 = document.querySelector("#item__2__btn");
const btn3 = document.querySelector("#item__3__btn");
const btn4 = document.querySelector("#item__4__btn");
const btn5 = document.querySelector("#item__5__btn");
const btn6 = document.querySelector("#item__6__btn");

const para1 = document.querySelector("#item__1__para");
const para2 = document.querySelector("#item__2__para");
const para3 = document.querySelector("#item__3__para");
const para4 = document.querySelector("#item__4__para");
const para5 = document.querySelector("#item__5__para");
const para6 = document.querySelector("#item__6__para");

const topBtn1 = document.querySelector(".FAQ__BTN__1"); 
const topBtn2 = document.querySelector(".FAQ__BTN__2"); 
const topBtn3 = document.querySelector(".FAQ__BTN__3"); 
const topBtn4 = document.querySelector(".FAQ__BTN__4"); 
const topBtn5 = document.querySelector(".FAQ__BTN__5"); 



topBtn1.addEventListener("click",()=>{
    btn1.textContent = `Why Oats?`;
    para1.textContent = `Oats are an incredibly nutritious food packed with crucial vitamins, minerals and antioxidants. 
    Compared to other grains, they quantify higher in fiber and protein. SO, the real question is, Why not oats!`;
    
    btn2.textContent = `What is OatMlk?`;
    para2.textContent = `Oat milk is a ​plant milk​ derived from whole ​oat​ grains by extracting the plant material with water. It has a creamy texture and ​oatmeal​-like flavour. It is consumed to replace milk from dairy and given we are India’s very own Oatmlk - you’ll feel proud while drinking too! `;
    
    btn3.textContent = `Is it Vegan? Gluten-free?`;
    para3.textContent = `Oats are naturally free of gluten and OatMlk being a plant-based milk is indeed vegan and gluten-free. We solely produce OatMlk which leaves little room for doubt on gluten contamination. We absolutely understand how devastating flare-ups can get due to gluten and thus, (despite OatMlk production being isolated) we ensure taking adequate care to avoid cross-contamination. `;
    
    btn4.textContent = `What are OatMlk ingredients?`;
    para4.textContent = `(Oats, Water) - 98%, (Salt, Canola Oil, Calcium and Guar Gum) - 2% i.e. everything healthy :)`;
    
    btn5.textContent = `How do you make milk from oats?`;
    para5.textContent = `It’s fairly simple and magical. We start with grinding the oats, mixing it with water, adding our magical enzyme, filtering the oat pulp out, adding all the healthy ingredients, treating it at high temperature to kill all the bacteria and bottling it, right before it ends up reaching you! To know more in detail, click here.`;

    btn6.style.display = "block";
    para6.style.display = "block";

    btn6.textContent = `Can I consume OatMlk if I am lactose intolerant?`;
    para6.textContent = `We recommend you to consume OatMlk if you’re lactose intolerant. Being Lactose Free, OatMlk is the healthiest and tastiest option out there for you. Enjoy all the dishes/beverages you avoided earlier with confidence now.`;

})






topBtn2.addEventListener("click",()=>{
    btn1.textContent = `Do I need to boil OatMlk?`;
    para1.textContent = `No, our OatMlk is already pasteurized so it’s perfectly fine to use it directly from the bottle. But please remember to shake well before use.`;
    
    btn2.textContent = `What can I use OatMlk for?`;
    para2.textContent = `Use it in absolutely any milk-based recipe! Kheers, custards, baking goodies, tea, coffee and the list goes on. 
    But let us tell you a secret...the creamy consistency is best enjoyed in smoothies and coffees. 
    Yet, you can always sip it straight from the cute-little bottle!`;
    
    btn3.textContent = `Can I heat/freeze OatMlk?`;
    para3.textContent = `Yes, you can.`;
    
    btn4.textContent = `How long does it last?`;
    para4.textContent = `OatMlk has a shelf life of 6 months and must be consumed within 3-4 days once opened.`;
    
    btn5.textContent = `Can I cook with OatMlk?`;
    para5.textContent = `Absolutely you can and once you do, please share with us the pictures of your culinary masterpieces! ;)`;

    btn6.style.display = "none";
    para6.style.display = "none";

})





topBtn3.addEventListener("click",()=>{
    btn1.textContent = `Where can I find OatMlk?`;
    para1.textContent = `Right on our website! Head to our subscription page here and you’ll land on the virtual OatMlk shop, easy-peasy.
    OatMlk will be out in stores soon, watch this space to stay updated. Till then, you can always buy directly from us.`;
    
    btn2.textContent = `Can I change delivery dates?`;
    para2.textContent = `Delivery details can be amended from here, you can change the dates, reschedule and increase the quantity of your order as well. `;
    
    btn3.textContent = `I’m going on vacation. Is it possible to skip my order next month?`;
    para3.textContent = `Subscriptions can be paused from here, enjoy your vacation let us know whenever you are back so that we can deliver OatMlk again.`;
    
    btn4.textContent = `How do I change my shipping address for my monthly subscription?`;
    para4.textContent = `It’s very easy, just click here and amend all the personal details. You can even add more than one address and gift OatMlk to your loved ones. :D`;
    
    btn5.textContent = `Do I need to pay extra for the subscription?`;
    para5.textContent = `Pay only for what you receive, on the other hand subscription has its own benefits, like coupons and surprise goodies from us. ;)`;

    btn6.style.display = "none";
    para6.style.display = "none";

})



topBtn4.addEventListener("click",()=>{
    btn1.textContent = `How healthy is OatMlk?`;
    para1.textContent = `OatMlk is produced by natural processes thus, retaining the best of the super-nutritious grain, including the soluble fibre which helps in weight management, diabetes and improving digestion.`;
    
    btn2.textContent = `How much protein, fiber and calcium is there?`;
    para2.textContent = `Per 100ml, OatMlk has 1 gram of protein, 0.8 grams of Fibre and 120 milligrams of calcium along with vital vitamins and minerals.    `;
    
    btn3.textContent = `Does it contain added sugars?`;
    para3.textContent = `Nope. It’s all Natural :)`;
    
    btn4.textContent = `Why does OatMlk taste sweet if there aren’t any added sugars?`;
    para4.textContent = `OatMlk’s only source of sugars is through Oats itself. Oats, when going through the production process undergo change, in which the starch in them is broken down to simple sugars by natural enzymes. This gives you the much-loved sweet taste and also makes digestion easy for your stomach.`;
    
    btn5.style.display = "none";
    para5.style.display = "none";

    btn6.style.display = "none";
    para6.style.display = "none";
})


topBtn5.addEventListener("click",()=>{
    btn1.textContent = `What does being a sustainable business mean to OatMlk?`;
    para1.textContent = `Sustainability is extremely important for us. We chose Oats as OatMlk being a plant-based generates much less greenhouse gas emissions taking down the CO2 released in the atmosphere. We aim to keep reducing our water consumption, energy usage and waste production as much as possible. For this, we proactively look to incorporate new ways to go more and more environment friendly. There’s thought behind choosing glass bottles for our packaging too, read on to find out.`;
    
    btn2.textContent = `Why is OatMlk packaged in glass bottles?`;
    para2.textContent = `As mentioned, we are obsessed with being sustainable, it matters, and that’s why we thoughtfully chose glass bottles for packaging. Glass is a completely recyclable material which preserves our Mother Earth’s precious natural resources and raw materials. Plus, we’ve observed a growing fan-base for glass bottles and now you know it’s only for the better!`;
    
    btn3.textContent = `Where is OatMlk sourced from?`;
    para3.textContent = `OatMlk is traditionally, lovingly Indian. `;
    
    btn4.textContent = `How does OatMlk compare to dairy/other milks?`;
    para4.textContent = `OatMlk being plant-based provides sobule fibre while dairy source of milk doesn’t give you any. Moreover, OatMlk has enriched amounts of calcium, vitamin A, vitamin B2, B12 with lower amounts of fat and higher amounts of vitamin B2 (riboflavin) as compared to dairy. OatMlk has more protein than almond, rice, or coconut milk. As compared to almond milk and soy milk, OatMlk being nut-free has no issue of nut allergies or digestion issues. If you have nut allergies, OatMlk is a perfect fit. Also, FYI it's the most environmentally friendly option out there, alongside soy milk. `;
           
    btn5.style.display = "block";
    para5.style.display = "block";

    btn5.textContent = `How are you conserving water or reducing environmental impact? `;
    para5.textContent = `We, at OatMlk take into consideration all global goals since food production plays an important role in the same. We begin at grassroot level, with carefully choosing oats which have been cultivated without any water wastage. In our production house, we monitor all factors including ingredients usage, water consumption, energy use, packaging procedure & material, management of waste, greenhouse gas production amongst others very closely. This helps us make informed decisions so as to what changes can progress us in favour of Mother Earth. Besides, we are proactively improving on all our actions for the sake of our only home! `;

    btn6.style.display = "none";
    para6.style.display = "none";

})

