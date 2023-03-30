let snakes = [
  {
    sid:1,
    img: "/Images/snakes/pizza/margherita.jpg",
    name: "Margherita Pizza",
    price: 249,
    desc: "A hugely popular margherita, with a deliciously tangy single cheese topping",
  },
  {
    sid:2,
    img: "/Images/snakes/pizza/achari_do_pyaza.png",
    name: "Achari Do Pyaza Pizza",
    price: 309,
    desc: "Onions, pickle-flavored tangy sauce, and 100% authentic mozzarella cheese are the main ingredients of this pizza.",
  },
  {
    sid:3,
    img: "/Images/snakes/pizza/veg_supreme_pizza.jpg",
    name: "Veggie Supreme Pizza",
    price: 299,
    desc:"Your choice of pizza base, tomato sauce, mozzarella, mushrooms, red and green peppers, red onions, sweetcorn, tomatoes"
  },
  {
    sid:4,
    img: "/Images/snakes/pizza/cheese-corn-pizza.jpg",
    name: "Cheese n Corn Pizza",
    price: 329,
    desc:"A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce."
  },
  {
    sid:5,
    img: "/Images/snakes/pizza/cheese-tomato-pizza.jpg",
    name: "Cheese n Tomato Pizza",
    price: 329,
    desc:"A traditional Neapolitan Margherita pizza recipe is tomato sauce with fresh tomatoes, mozzarella cheese and basil which represent the colours of the Italian flag – white cheese, green basil and red tomato"
  },
  {
    sid:6,
    img: "/Images/snakes/pizza/peppy-paneer-pizza.png",
    name: "Peppy Paneer Pizza",
    price: 399,
    desc:"The peppy paneer pizza is made with fresh and soft paneer with crispy capsicum and topped with spicy red pepper"
  },
  {
    sid:7,
    img: "/Images/snakes/pizza/veggie-paradise-pizza.png",
    name: "Veggie Paradise Pizza",
    price: 399,
    desc:"Goldern Corn, Black Olives, Capsicum & Red Paprika.The toppings include tomato sauce, onions, mushrooms, olives, feta, spinach, provolone cheese, mozzarella, and a sprinkle of roasted red peppers."
  },
  {
    sid:8,
    img: "/Images/snakes/pizza/veggie-delux-pizza.png",
    name: "Deluxe Veggie Pizza",
    price: 459,
    desc:"Our Veggie Deluxe Specialty Pizza is loaded with Mushrooms, Red Onions, Green Peppers, Black Olives and Tomatoes with a Wisconsin Cheese Blend served on top of our Original Pizza Sauce."
  },
  {
    sid:9,
    img: "/Images/snakes/pizza/veg_extravaganza-pizza.jpg",
    name: "Veg Extravaganza Pizza",
    price: 469,
    desc:"ExtravaganZZa: pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms, and black olives — all sandwiched between two layers of cheese made with 100% real mozzarella."
  },
  {
    sid:10,
    img: "/Images/snakes/pizza/creamy-pasta-pizza.jpg",
    name: "Creamy Tomato Pasta Pizza",
    price: 469,
    desc:"Explore creamy tomato veg pasta is filled with Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum & Parsley sprinkle."
  },
  {
    sid:11,
    img: "/Images/snakes/pizza/paneer-makhni-pizza.jpg",
    name: "Paneer Makhani Pizza",
    price: 459,
    desc:"The paneer makhani pizza is a delicious blend of spicy tomato sauce and marinated paneer and capsicum toppings with soft and fluffy dough"
  },
  {
    sid:12,
    img: "/Images/snakes/pizza/tandoori-paneer-pizza.jpg",
    name: "Tandoori Paneer Pizza",
    price: 459,
    desc:"Tandoori Paneer Pizza consist mustard oil, garlic, ginger, turmeric powder, garam masala, coriander powder, cumin, chili powder, and fenugreek, yogurt, ginger-garlic paste and paneer cubes"
  },
  //^ Burger
  {
    sid:13,
    img: "/Images/snakes/burger/cheese-stuffed-burger.png",
    name: "Cheesy Stuffed Veggie Burger",
    price: 89,
    desc:"It made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein."
  },
  {
    sid:14,
    img: "/Images/snakes/burger/aloo-tikki-burger.png",
    name: "Aloo Tikki Burger",
    price: 99,
    desc:"Aloo Tikki are crispy, spiced, savory patties made from mashed potatoes, ground spices, herbs, together with a binding ingredient like bread crumbs or cornstarch"
  },
  {
    sid:15,
    img: "/Images/snakes/burger/pav-bhaji-burger.jpg",
    name: "Pav Bhaji Burger",
    price: 109,
    desc:"They are made with toasted burger buns and a spicy stuffing made of vegetables and pav bhaji masala."
  },
  {
    sid:16,
    img: "/Images/snakes/burger/green-chilly-burger.jpg",
    name: "Green Chilly Cheese Burger",
    price: 129,
    desc:"Green Chile Cheeseburger- one of the best and simplest burgers ever. Full of flavor, a little heat, and cheesy goodness- you will want this every time you have a burger!"
  },
  {
    sid:17,
    img: "/Images/snakes/burger/veg-crispy-burger.jpg",
    name: "Crunchy Veg Burger",
    price: 129,
    desc:"A crisp veggie patty, slathered with delicious mayo, topped with our extra fresh and soft bun. This is the ultimate Veggie Burger, incredibly delicious with bursting flavors of spices."
  },
  {
    sid:18,
    img: "/Images/snakes/burger/special-veg-burger.png",
    name: "Special Veg Burger",
    price: 149,
    desc:"These veggie patties are loaded on to buns, topped with lettuce, onions, tomatoes, pickled vegetables & a special burger sauce."
  },
  {
    sid:19,
    img: "/Images/snakes/burger/cafe-burger.png",
    name: "Cafe Special Veg Burger",
    price: 169,
    desc:"This is the special burger of our cafe. It contains many veggies and different types of sauces. It will be your one of the favorites."
  },
  //^ Fries
  {
    sid:20,
    img: "/Images/snakes/fries/french-fries.jpg",
    name: "French Fries",
    price: 50,
    desc:"It is typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips."
  },
  {
    sid:21,
    img: "/Images/snakes/fries/chilly-french-fries.jpg",
    name: "Chilly French Fries",
    price: 65,
    desc:"Chili cheese fries are made of crispy French fries that are then topped with chili and melted cheese, along with a variety of other toppings like green onions and jalapenos."
  },
  {
    sid:22,
    img: "/Images/snakes/fries/corn-french-fries.jpg",
    name: "Corn Chilly French Fries",
    price: 75,
    desc:"Corn Fries are crispy French fries layered with Mexican street corn (Elote), chili lime crema sauce and topped with queso fresco!"
  },
  {
    sid:23,
    img: "/Images/snakes/fries/potato-french-fries.jpg",
    name: "Sweet Potato Fries",
    price: 100,
    desc:"Sweet potato fries quick and easy to make and healthier than regular fries. Sweet potatoes contain iron, calcium, selenium, as well as B vitamins, vitamin C, and beta-carotene."
  },
  {
    sid:24,
    img: "/Images/snakes/fries/curly-french-fries.jpg",
    name: "Curly Fries",
    price: 110,
    desc:"A kind of fries characterized by their spring-like shape, being cut from whole potatoes using a specialized spiral slicer."
  },
  {
    sid:25,
    img: "/Images/snakes/fries/tornado-french-fries.jpg",
    name: "Tornado Fries",
    price: 120,
    desc:"It is a deep fried spiral-cut whole potato on a skewer, similar to a French fry, brushed with various seasonings such as onion, cheese, or honey. Some varieties have spliced sausages in between."
  },
  //^ Sandwiches
  {
    sid:26,
    img: "/Images/snakes/sandwich/veg-club-sandwich.jpg",
    name: "Veg Club Sandwich",
    price: 50,
    desc:"A sandwich is a food typically consisting of vegetables, sliced cheese, placed on or between slices of bread."
  },
  {
    sid:27,
    img: "/Images/snakes/sandwich/tomato-sandwich.jpg",
    name: "Tomato Cucumber Sandwich",
    price: 60,
    desc:"A sandwich is a food typically consisting of tomatoes and other veggies, placed on or between slices of bread."
  },
  {
    sid:28,
    img: "/Images/snakes/sandwich/grilled-sandwich.jpg",
    name: "Grilled Cheese Sandwich",
    price: 60,
    desc:"Grilled sandwiches are still just regular sandwiches with a filling between two slices of bread and then grilled."
  },
  {
    sid:29,
    img: "/Images/snakes/sandwich/aloo-grilled-sandwich.jpg",
    name: "Aloo Grilled Sandwich",
    price: 60,
    desc:"This sandwiches are filling with aloo-matar between two slices of bread and then grilled."
  },
  {
    sid:30,
    img: "/Images/snakes/sandwich/paneer-sandwich.jpg",
    name: "Paneer Sandwich",
    price: 65,
    desc:"Paneer Sandwich is a quick, delicious and protein-packed sandwich made with crumbled paneer, spices, veggies, herbs and bread."
  },
  {
    sid:31,
    img: "/Images/snakes/sandwich/veg-mayo-sandwich.jpg",
    name: "Veg Mayonnaise Sandwich",
    price: 70,
    desc:"Veg mayonnaise sandwich made with mixed veggies and mayo. Simple, quick and easy to make sandwich that makes for a great breakfast or snack."
  },
  {
    sid:32,
    img: "/Images/snakes/sandwich/cheese-corn-sandwich.jpg",
    name: "Corn Cheese Sandwich",
    price: 80,
    desc:"These quick sandwiches are made with bread of choice, sweet corn kernels, veggies, cheese, spices and sandwich spread or chutney (whatever you like)."
  },
  {
    sid:33,
    img: "/Images/snakes/sandwich/paneer-bhurji-sandwich.jpg",
    name: "Paneer Bhurji Sandwich",
    price: 110,
    desc:"Paneer Bhurji Sandwich recipe is a quick and healthy sandwich prepared with spiced paneer/cottage cheese filling in it."
  },
  //^ Frankie
  {
    sid:34,
    img: "/Images/snakes/frankie/mayo-frankie.jpg",
    name: "Veg Mayo Frankie",
    price: 70,
    desc:"It's a type of roll filled with various kinds of stuffing like potato to paneer, cheese to mayonnaise, vegetable and many more."
  },
  {
    sid:35,
    img: "/Images/snakes/frankie/schezwan-frankie.jpg",
    name: "Veg Schezwan Frankie",
    price: 70,
    desc:"Schezwan Frankie is a popular Indian street-style kathi roll made with spicy and tasty schezwan chutney, aloo patties and roti."
  },
  {
    sid:36,
    img: "/Images/snakes/frankie/peri-peri-frankie.jpg",
    name: "Peri Peri Paneer Frankie",
    price: 75,
    desc:"The vegetables and paneer is tossed in peri peri sauce and mayo and then wrapped in a whole wheat flour roti."
  },
  {
    sid:37,
    img: "/Images/snakes/frankie/mexican-frankie.jpg",
    name: "Veg Mexican Frankie",
    price: 85,
    desc:"It is a veg frankie in mexican style and made with many mexican ingredients. It is a delicious and tasty."
  },
  {
    sid:38,
    img: "/Images/snakes/frankie/pav-bhaji-frankie.jpg",
    name: "Pav Bhaji Frankie",
    price: 90,
    desc:"This is the yummiest and healthyish snack ever! A jowar roti filled with the spiced vegetable bhaji and rolled into a wrap is easy way to carry your meal."
  },
  {
    sid:39,
    img: "/Images/snakes/frankie/noodle-frankie.jpg",
    name: "Noodle Frankie",
    price: 85,
    desc:"a unique combination of indo chinese cuisine noodles recipe with indian street food kathi roll. an innovative and popular snack."
  },
  {
    sid:40,
    img: "/Images/snakes/frankie/manchurian-frankie.jpg",
    name: "Manchurian Frankie",
    price: 100,
    desc:"Manchurian Rolls is ultimate comforting and must try street food. Various manchurain ingredients sre inside the roll."
  },
  //^ puff
  {
    sid:41,
    img: "/Images/snakes/puff/veg-puff.jpg",
    name: "Veg Puff",
    price: 20,
    desc:"This puff is filled with boiled mashed potatoes, finely chopped onions, peppers, green chilies, ginger, garlic, green peas, and basic spices"
  },
  {
    sid:42,
    img: "/Images/snakes/puff/veg-butter-puff.jpg",
    name: "Veg Butter Puff",
    price: 25,
    desc:"This puff is filled with boiled mashed potatoes, finely chopped onions, peppers, green chilies, ginger, garlic, green peas, and basic spices and covered with butter"
  },
  {
    sid:43,
    img: "/Images/snakes/puff/masala-puff.jpg",
    name: "Masala Puff",
    price: 25,
    desc:"Vegetable Masala Puffs | Curried vegetables folded into layers of buttery puff pastry are baked until golden brown and flakey."
  },
  {
    sid:44,
    img: "/Images/snakes/puff/veg-spring.jpg",
    name: "Spring Puff",
    price: 25,
    desc:"This is springed puff with very tasty and delicious. You must try this for one time."
  },
  {
    sid:45,
    img: "/Images/snakes/puff/paneer-puff.jpg",
    name: "Paneer Puff",
    price: 25,
    desc:" Paneer Puff is a popular and delicious Indian bakery-style savory snack made with puff pastry sheets and paneer."
  },
  {
    sid:46,
    img: "/Images/snakes/puff/meggie-puff.jpg",
    name: "Meggie Puff",
    price: 45,
    desc:"Unique kids favorite deep-fried snack recipe made with maggie noodles stuffing inside a bread pocket."
  },
  {
    sid:47,
    img: "/Images/snakes/puff/veg-cheese-puff.jpg",
    name: "Cheese Puff",
    price: 50,
    desc:"Cheese puffs, cheese curls, cheese balls, cheese ball puffs, cheesy puffs, or corn curls are a puffed corn snack, coated with a mixture of cheese or cheese-flavored powders."
  },
  {
    sid:48,
    img: "/Images/snakes/puff/italian-puff.jpg",
    name: "Italian Puff",
    price: 60,
    desc:"Made with Emmental, these cheese puffs are the perfect accompaniment to any perfect aperitif, they are crispy on the outside but creamy on the inside."
  },
  //^ Bhel
  {
    sid:49,
    img: "/Images/snakes/bhel/regular-bhel.jpg",
    name: "Regular Bhel",
    price: 40,
    desc:"It is made of puffed rice, vegetables and a tangy tamarind sauce, and has a crunchy texture."
  },
  {
    sid:50,
    img: "/Images/snakes/bhel/bombey-bhel.jpg",
    name: "Bombay Bhel",
    price: 50,
    desc:"Bombay bhel is one of the most famous street food and obviously tasty. It can be chilly or sweet as you like."
  },
  {
    sid:51,
    img: "/Images/snakes/bhel/papad-bhel.jpg",
    name: "Papad Bhel",
    price: 60,
    desc:"Papad Bhel is a newly added instant snack to the list of street food. This savoury snack is tasty, fuss-free, and easy to make."
  },
  {
    sid:52,
    img: "/Images/snakes/bhel/kurkure-bhel.jpg",
    name: "Kurkure Bhel",
    price: 60,
    desc:"This Kurkure chaat is a chop-chop, mix and match, sweet and sour bhel. Toss all the ingredients in a mixing bowl, and your bhel is ready."
  },
  {
    sid:53,
    img: "/Images/snakes/bhel/corn-bhel.jpg",
    name: "Sweet Corn Bhel",
    price: 65,
    desc:"Corn Bhel Recipe is a quick and delicious snack made with boiled corn, tossed with chopped onions, tomatoes, cucumber ,bell pepper ,spicy mint."
  },
  {
    sid:54,
    img: "/Images/snakes/bhel/cheese-bhel.jpg",
    name: "Cheesy Bhel",
    price: 70,
    desc:"Cheese bhel recipe is one of the quick and cheesy Mumbai street food snacks made with puffed rice."
  },
  {
    sid:55,
    img: "/Images/snakes/bhel/mexican-bhel.jpg",
    name: "Mexican Bhel",
    price: 80,
    desc:"This bhel is made with mexican components like chunky salsa, crisp tortilla chips, sweet corn, capsicum and boiled rajma"
  },
  //^ Pasta
  {
    sid:56,
    img: "/Images/snakes/pasta/masala-pasta.jpg",
    name: "Masala Pasta",
    price: 70,
    desc:"It is made with spring onions, tomatoes, ginger-garlic paste, veggies and spice powders like turmeric, cumin, coriander, black pepper, red chili powder and garam masala powder"
  },
  {
    sid:57,
    img: "/Images/snakes/pasta/veg-masala-pasta.jpg",
    name: "Veg Masala Pasta",
    price: 80,
    desc:"t's a vegetarian pasta loaded with a whole head of broccoli, corn, zucchinis, capsicum/peppers and onion, and smothered in a garlic herb tomato sauce."
  },
  {
    sid:58,
    img: "/Images/snakes/pasta/tomato-pasta.jpg",
    name: "Tomato Pasta",
    price: 80,
    desc:"Tomato Pasta is prepared by first cooking Penne or Fusilli Pasta to Al Dente perfection and then cooking them with homemade red tomato pasta sauce."
  },
  {
    sid:59,
    img: "/Images/snakes/pasta/butter-pasta.jpg",
    name: "Butter Masala Pasta",
    price: 85,
    desc:"Butter masala pasta is made with the butter and various masala paste. And, different veggies are included in this pasta."
  },
  {
    sid:60,
    img: "/Images/snakes/pasta/cheez-pasta.jpg",
    name: "Cheezde Masala Pasta",
    price: 90,
    desc:"Butter masala pasta is made with the cheese and various masala paste. And, different veggies are included in this pasta."
  },
  {
    sid:61,
    img: "/Images/snakes/pasta/indian-pasta.jpg",
    name: "Indian Sp. Pasta",
    price: 100,
    desc:"An Indian-style pasta with a slightly spicy, creamy tomato-based butter masala sauce. It's based on everyone's favorite Indian dish."
  },
  //^ Other
  {
    sid:62,
    img: "/Images/snakes/other/dabeli.jpg",
    name: "Dabeli",
    price: 20,
    desc:"Dabeli, made with little sweet and spicy potato filling in pav or buns with crunchy peanuts, pomegranate seeds, tangy tamarind and spicy garlic chutney."
  },
  {
    sid:63,
    img: "/Images/snakes/other/vadapav.jpg",
    name: "Vadapav",
    price: 20,
    desc:"Vadapav is a vegetarian fast food dish consists of a deep fried potato dumpling placed inside pav sliced almost in half through the middle."
  },
  {
    sid:64,
    img: "/Images/snakes/other/kachori.jpg",
    name: "Kachori",
    price: 30,
    desc:"It is usually a round ball made of flour and dough filled with a stuffing of yellow moong dal, black pepper, red chili powder, and ginger paste."
  },
  {
    sid:65,
    img: "/Images/snakes/other/sev-khamani.jpg",
    name: "Sev Khamani",
    price: 30,
    desc:"The appetiser tastes sweet and sour both at once as it is flavoured with a tinge of lemon juice along with sugar."
  },
  {
    sid:66,
    img: "/Images/snakes/other/dalvada.jpg",
    name: "Dalvada",
    price: 30,
    desc:"Dal Vada are made with lentils of choice, spices and herbs. These delicious and crispy dal vada are a great way to make your festive time fun-filled."
  },
  {
    sid:67,
    img: "/Images/snakes/other/samosa.jpg",
    name: "Samosa",
    price: 30,
    desc:"A samosa or singara is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas."
  },
  {
    sid:68,
    img: "/Images/snakes/other/punjabi-samosa.jpg",
    name: "Punjabi Samosa",
    price: 40,
    desc:"Punjabi samosa is made potato, beans and tastes very delicious and many ingredients are in this."
  },
  {
    sid:70,
    img: "/Images/snakes/other/handvo.jpg",
    name: "Handvo",
    price: 80,
    desc:"Handvo is a savory vegetable cake. It is often made with a bottle gourd filling, though many other vegetables can be added. Sometimes crushed peanuts are also added."
  },
  {
    sid:71,
    img: "/Images/snakes/other/garlic.jpg",
    name: "Garlic Bread",
    price: 120,
    desc:"Garlic bread consists of bread, topped with garlic and olive oil or butter and may include additional herbs, such as oregano or chives."
  },
];

for (let item of snakes) {
  
  document.querySelector("#ordersnakes").innerHTML +=
  `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title text-center">` + item.name + `</h5>
        <img class="w-100 "  src="` + item.img + `" class="card-img-top" alt="...">
        <hr>
        <p class="card-text">` + item.desc + `</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <p class="price"><span>&#8377;</span>` + item.price + `</p>
        <button class="btn add-item" id="`+item.sid+`" onclick="let typename = 'snakes';total(typename,this.id)"> Add </button>
      </div>
    </div>
  </div>`;
}


let beverages = [
  //^ Tea
  {
    bid:1,
    img: "/Images/beverages/tea/ginger-tea.jpg",
    name: "Ginger Tea",
    price: 20,
    desc:"A delicious, warming Indian Ginger Tea made with fresh ginger roots, tea leaves and milk."
  },
  {
    bid:2,
    img: "/Images/beverages/tea/ginger-mint-tea.jpg",
    name: "Ginger Mint Tea",
    price: 25,
    desc:"It is called Pudina Adrak Chai in Hindi, this tea has a bite from the ginger and a lovely aroma from the mint."
  },
  {
    bid:3,
    img: "/Images/beverages/tea/kullad-tea.jpg",
    name: "Kullad Tea",
    price: 25,
    desc:"A Kullad or Kulhad is a traditional clay cup, made like all earthenware, by firing in kiln. "
  },
  {
    bid:4,
    img: "/Images/beverages/tea/sugar-free-tea.jpg",
    name: "Sugar Free Tea",
    price: 30,
    desc:"This tea is made with suger free for the person who has diabities."
  },
  {
    bid:5,
    img: "/Images/beverages/tea/elaichi-tea.png",
    name: "Elaichi Tea",
    price: 40,
    desc:"As the name suggests, elaichai chai or cardamom tea literally translates to cardamom flavoured tea."
  },
  {
    bid:6,
    img: "/Images/beverages/tea/tulsi-tea.jpg",
    name: "Tulsi Tea",
    price: 40,
    desc:"Promotes heart health by lowering cholesterol and high blood pressure. Reduces the negative physical and psychological effects of stress."
  },
  {
    bid:7,
    img: "/Images/beverages/tea/tandoori-tea.jpg",
    name: "Tandoori Tea",
    price: 40,
    desc:"Tandoori Chai (Kulhad Chai) is a delicious twist on regular tea where Masala Chai is smoked by pouring it into a hot kulhad (clay mug)."
  },
  {
    bid:8,
    img: "/Images/beverages/tea/kesar-tea.jpg",
    name: "Kesar Tea",
    price: 50,
    desc:"Saffron tea Kesar Chai is a milk tea that is full of good health and helps you in relaxing."
  },
  {
    bid:9,
    img: "/Images/beverages/tea/green-tea.jpg",
    name: "Green Tea",
    price: 60,
    desc:"Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas."
  },
  {
    bid:10,
    img: "/Images/beverages/tea/black-tea.jpg",
    name: "Black Tea",
    price: 60,
    desc:"Black tea is a type of tea produced from the camellia sinensis plant that is highly oxidized, resulting in a dark reddish-gold hue, a hearty, slightly astringent flavor, and a moderate amount of caffeine."
  },
  {
    bid:11,
    img: "/Images/beverages/tea/lemon-tea.jpg",
    name: "Lemon Tea (Ice)",
    price: 80,
    desc:"Lemon tea is one of our favorite blends for a refreshing, healthy citrus sip. There are tons of different types of lemon teas"
  },
  {
    bid:12,
    img: "/Images/beverages/tea/blueberry-tea.jpg",
    name: "Blueberry Tea (Ice)",
    price: 80,
    desc:"Blueberry tea is made by steeping leaves of the blueberry bush in hot water.It provides a number of unique health benefits that make it both refreshing to drink and beneficial to your body."
  },
  {
    bid:13,
    img: "/Images/beverages/tea/rose-tea.jpg",
    name: "Rose Tea (Ice)",
    price: 80,
    desc:"Rose tea is an aromatic herbal beverage made from the fragrant petals and buds of rose flowers. It's claimed to offer numerous health benefits, though many of these are not well supported by science."
  },
  {
    bid:14,
    img: "/Images/beverages/tea/peach-tea.jpg",
    name: "Peach Tea (Ice)",
    price: 80,
    desc:"Peach tea is made from the dried leaves and bark of a peach tree. Peaches have long been recognized for both their culinary and medicinal properties."
  },
  //^ Coffee
  {
    bid:15,
    img: "/Images/beverages/coffee/hot-coffee.jpg",
    name: "Hot Coffee",
    price: 80,
    desc:"A hot coffee is a casual get-together between two people who enjoy each other's company. It is tasty beverage."
},
{
  bid:16,
    img: "/Images/beverages/coffee/espresso.jpg",
    name: "Espresso Coffee",
    price: 129,
    desc:"Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water."
},
{
  bid:17,
    img: "/Images/beverages/coffee/cold-coffee.jpg",
    name: "Cold Coffee",
    price: 139,
    desc:"Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder."
},
{
  bid:18,
    img: "/Images/beverages/coffee/cappuccino.jpg",
    name: "Cappuccino",
    price: 139,
    desc:"A cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds."
},
{
  bid:19,
    img: "/Images/beverages/coffee/americano.jpg",
    name: "Americano",
    price: 139,
    desc:"An Americano is made by pouring hot water over one or two espresso shots, resulting in a drink of similar volume and strength to regular coffee."
},
{
  bid:20,
    img: "/Images/beverages/coffee/mocha.png",
    name: "Mocha",
    price: 149,
    desc:"Although a mocha is often interpreted differently across the world, the basis is that a shot of espresso is combined with a chocolate powder or syrup, followed by milk or cream."
},
{
  bid:21,
    img: "/Images/beverages/coffee/cafe-latte.jpg",
    name: "Cafe Latte",
    price: 159,
    desc:"A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top."
},
{
  bid:22,
    img: "/Images/beverages/coffee/venilla-cappuccino.jpg",
    name: "Vanilla Cappuccino",
    price: 169,
    desc:"A French vanilla cappuccino is a coffee drink that is made with espresso, steamed milk, and foam that has been flavored with vanilla syrup."
},
{
  bid:23,
    img: "/Images/beverages/coffee/caremal-cappuccino.jpg",
    name: "Caramel Cappuccino",
    price: 179,
    desc:"Caramel Cappuccino recipe features whole steamed milk, bold espresso made from sustainably-sourced beans, fluffy foam, and buttery caramel flavor."
},
{
  bid:24,
    img: "/Images/beverages/coffee/hazelnut-cappuccino.jpg",
    name: "Hazelnut Cappuccino",
    price: 189,
    desc:"Hazelnut coffee is a flavored coffee with hazelnut as its primary flavor. It is typically made by adding hazelnut extract or hazelnut flavoring to coffee grounds before brewing or using hazelnut-flavored coffee beans."
  },
  //^ Juice
  {
    bid:25,
  img: "/Images/beverages/juice/banana.jpg",
  name: "Banana Juice",
  price:120,
  desc:"This delicious and creamy banana juice recipe is made from ripe bananas, milk and sweetener."
},
{
  bid:26,
  img: "/Images/beverages/juice/chikoo.jpg",
  name: "Chikoo Juice",
  price:130,
  desc:"This delicious and creamy banana juice recipe is made from ripe chikoo, milk and sweetener."
},
{
  bid:27,
  img: "/Images/beverages/juice/pineapple.jpg",
  name: "Pineapple Juice",
  price:140,
  desc:"This delicious and creamy pinapple juice recipe is made from ripe chikoo, milk and sweetener."
},
{
  bid:28,
  img: "/Images/beverages/juice/butterscotch.jpg",
  name: "Butterscotch Juice",
  price:140,
  desc:"This delicious and creamy juice is made with brown sugar and butter."
},
{
  bid:29,
  img: "/Images/beverages/juice/rose.jpg",
  name: "Rose Juice",
  price:150,
  desc:"Rose juice is made from water and rose petals."
},
{
  bid:30,
  img: "/Images/beverages/juice/kiwi.jpg",
  name: "Kiwi Juice",
  price:190,
  desc:"The ellipsoidal kiwi fruit is a true berry and has furry brownish green skin."
},
{
  bid:31,
  img: "/Images/beverages/juice/mango.jpg",
  name: "Mango Juice",
  price:190,
  desc:"Mango juice is just what it sounds like, juice made from mangos."
},
{
  bid:32,
  img: "/Images/beverages/juice/apple.jpg",
  name: "Apple Rich Juice",
  price:190,
  desc:"Apple juice helps boost energy. Being the richest source of phenolic compounds."
},
{
  bid:33,
  img: "/Images/beverages/juice/sitafal.jpg",
  name: "Sitafal Juice",
  price:200,
  desc:"Sitafal juice is very delicious and extremely creamy."
},
{
  bid:34,
  img: "/Images/beverages/juice/litchi.jpg",
  name: "Litchi Juice",
  price:200,
  desc:"Fresh juicy lychees blended with water, mint, and lime juice and strained through a fine-mesh strainer."
},
{
  bid:35,
  img: "/Images/beverages/juice/strawberry.jpg",
  name: "Strawberry Juice",
  price:210,
  desc:"Strawberry juice is the fruit juice from strawberries. It is rich with Vitamin C and ranges from sweet to sweet tart in taste."
}, 
//^ cans
{
  bid:36,
  img: "/Images/beverages/can/sprite.jpg",
  name: "Sprite",
  price: 40,
  desc:'<p class="text-center fs-6">“Thirst for Yours”</p>'
},
{
  bid:37,
  img: "/Images/beverages/can/thumbs-up.jpg",
  name: "Thums Up",
  price: 40,
  desc:'<p class="text-center fs-6">“Taste the thunder!”</p>'
},
{
  bid:38,
  img: "/Images/beverages/can/fanta.jpg",
  name: "Fanta",
  price: 40,
  desc:'<p class="text-center fs-6">“Fanta ka signal loud, Bunking is allowed”</p>'
},
{
  bid:39,
  img: "/Images/beverages/can/coca-cola.jpg",
  name: "Coca Cola",
  price: 40,
  desc:'<p class="text-center fs-6">“Taste the Inflation”</p>'
},
{
  bid:40,
  img: "/Images/beverages/can/pepsi.png",
  name: "Pepsi",
  price: 40,
  desc:'<p class="text-center fs-6">“Rise Up, Baby!”</p>'
},
{
  bid:41,
  img: "/Images/beverages/can/mountain_dew.jpg",
  name: "Mountain Due",
  price: 40,
  desc:'<p class="text-center fs-6">“Do the Dew”</p>'
},
{
  bid:42,
  img: "/Images/beverages/can/charged.jpg",
  name: "Charged",
  price: 50,
  desc:'<p class="text-center fs-6">“Get Charged”</p>'
},
{
  bid:43,
  img: "/Images/beverages/can/hell.jpg",
  name: "Hell",
  price: 55,
  desc:'<p class="text-center fs-6">“Gives you power like HELL”</p>'
},
{
  bid:44,
  img: "/Images/beverages/can/monster.jpg",
  name: "Monster",
  price: 100,
  desc:'<p class="text-center fs-6">“Unleash the Beast”</p>'
},
{
  bid:45,
  img: "/Images/beverages/can/red-bull.jpg",
  name: "Red Bull",
  price: 110,
  desc:'<p class="text-center fs-6">“Red Bull gives you wings”</p>'
}, 
];

for (let item of beverages) {
  document.querySelector("#orderbeverages").innerHTML +=
  `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title text-center">` + item.name + `</h5>
        <img class="w-100 "  src="` + item.img + `" class="card-img-top" alt="...">
        <hr>
        <p class="card-text">` + item.desc + `</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <p class="price"><span>&#8377;</span>` + item.price + `</p>
        <button class="btn add-item" id="`+item.bid+`"  onclick="let typename = 'beverage';total(typename,this.id)"> Add </button>
      </div>
    </div>
  </div>`;
}


let combo = [
  {
    cid:1,
    img: "/Images/combo-1.png",
    name: "Mazedar Combo",
    price: 169,
    desc:'<p class="my-1">Cheesy Stuffed Veggie Burger(regular)</p>Lemon Tea (Ice)<p class="my-1">French Fries</p>',
  },
  {
    cid:2,
    img: "/Images/combo-2.jpeg",
    name: "Delight Combo",
    price: 199,
    desc:'<p class="my-1">Garlic Bread</p>Coca Cola Can<p class="my-1">Veggie Supreme Pizza(Regular)</p>',
  },
  {
    cid:3,
    img: "/Images/combo-3.png",
    name: "Burger Combo",
    price: 329,
    desc:'<p class="my-1">3 Special Veg Burger (Regular)</p>Monster'
  },
  {
    cid:4,
    img: "/Images/combo-4.png",
    name: "Kadak Combo",
    price: 499,
    desc:'Veg club sandwich(Regular)<br>Cappuccino',
  },
  {
    cid:5,
    img: "/Images/combo-5.png",
    name: "Delux Combo",
    price: 519,
    desc:'<p class="my-1">Creamy Tomato Pasta Pizza (Regular)</p>Aloo Tikki Burger (Regular)<p class="my-1">Caramel Cappuccino </p>',
  },
];

for (let item of combo) {
  document.querySelector("#ordercombo").innerHTML +=
  `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title text-center">` + item.name + `</h5>
        <img class="w-100 "  src="` + item.img + `" class="card-img-top" alt="...">
        <hr>
        <p class="card-text">` + item.desc + `</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <p class="price"><span>&#8377;</span>` + item.price + `</p>
        <button class="btn add-item" id="`+item.cid+`"  onclick="let typename = 'combo';total(typename,this.id)"> Add </button>
      </div>
      </div>
  </div>`;
}

function total(name,id){
  if (name == 'snakes'){
    var item = snakes[id-1];
  }else if (name == 'beverage'){
    var item = beverages[id-1];
  }else{
    var item = combo[id-1];
  }
    document.getElementById("cart").innerHTML +=`
    <div class="card w-100 mb-2">
      <div class="p-0 row g-0">
        <div class="col-4 p-3">
          <img src="`+item.img+`" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">`+item.name+`</h5>
            <p class="my-2">`+item.desc+`</p>
            <h5><span>&#8377;</span>`+item.price+`</h5>
          </div>
        </div>
      </div>
    </div>
    ` ;
}