
var article = document.getElementById("page");
var soups = [ 
{name:"Tomato", desc:"Zesty organic tomato goodness!", price:"$6.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"},
{name:"Split Pea", desc:"Heartwarming & hardy, just like mom's!", price:"$7.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"},
{name:"Kickin lentils", desc:"Spicy!", price:"$9.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"},
{name:"Microbrew Beer Cheddar", desc:"You can taste the craftsmanship", price:"$6.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"},
{name:"French Onion", desc:"Tastes like baguettes", price:"$6.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"},
{name:"Cream of Mushroom", desc:"Creamy!", price:"$6.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"},
{name:"Tortilla", desc:"Southwestern flavor!", price:"$6.99", img:"http://images.clipartpanda.com/soup-can-clipart-FST43CDH994RUFM.LARGE.jpg"}
];

for (i=0; i<soups.length; i++) {
   article.innerHTML+="<img src='"+soups[i].img+"'>";
   article.innerHTML+="<p>"+(soups[i].name)+"</p>";
   article.innerHTML+="<p>"+(soups[i].desc)+"</p>";
   article.innerHTML+="<p>"+(soups[i].price)+"</p>";
};

