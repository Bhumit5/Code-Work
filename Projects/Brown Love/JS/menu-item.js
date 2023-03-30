(window.onresize = function () {
  let myWidth = window.innerWidth;

  if (myWidth < "576") {
    document.querySelector("#menu-item").innerHTML =
      `
    <div class="row row-cols-1 row-cols-md-3 g-4 container">
      <div class="col">
          <div class="card border-0" style="background-color: transparent;"">
            <img src="/Images/pizza1.png" class="card-img-top" alt="...">
            <p class="text-center my-0"><b>Creamy Tomato Pasta Pizza</b></p>
          <hr>
          <div class="d-flex flex-column">
            <div class=" justify-content-between">
              <p>Regular</p>
              <p><span>&#8377;</span> 459</p>
            </div>
            <div class="justify-content-between">
              <p><span>&#8377;</span> 699</p>
              <p>Large</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
    <div class="card border-0" style="background-color: transparent;">
      <img src="/Images/burger1.png" class="card-img-top" alt="...">
      <p class="text-center my-0"><b>Aloo Tikki Burger</b></p>
      <hr>
      <div class="d-flex flex-column">
        <div class=" justify-content-between">
          <p>Regular</p>
          <p><span>&#8377;</span> 99</p>
        </div>
        <div class="justify-content-between">
        <p><span>&#8377;</span> 129</p>
          <p>Cheese</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0" style="background-color: transparent;">
      <img src="/Images/cappuccino1.png" class="card-img-top" alt="...">
      <p class="text-center my-0"><b>Cappuccino</b></p>
      <hr>
      <div class="d-flex flex-column">
        <div class=" justify-content-between">
          <p>Cappuccino </p>
          <p><span>&#8377;</span> 129</p>
        </div>
        <div class="justify-content-between">
        <p><span>&#8377;</span> 189</p>
          <p>Hazelnut Cappuccino</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0" style="background-color: transparent;">
      <img src="/Images/combo1.png" class="card-img-top" alt="...">
      <p class="text-center my-0"><b>Combo</b></p>
      <hr>
      <div class="d-flex flex-row justify-content-between">
        <p>Delight Combo</p>
        <p><span>&#8377;</span> 699</p>
      </div>
    </div>
  </div>
</div>
    `;
  } else {
    document.querySelector("#menu-item").innerHTML =
      `<div class="odd-item">
    <div class="item-img">
        <img class="item-img" src="/Images/pizza.png" alt="">
    </div>
    <div class="food-info">
        <li>Large</li>
        <li>Small</li>
    </div>
    <div class="food-price">
        <li><span>&#8377;</span> 699</li>
        <li><span>&#8377;</span> 259</li>
    </div>
  </div>

  <div class="even-item">
    <div class="item-img">
        <img class="item-img" src="/Images/burger.png" alt="">
    </div>
    <div class="food-price">
        <li><span>&#8377;</span> 99</li>
        <li><span>&#8377;</span> 129</li>
    </div>
    <div class="food-info">
        <li>Regular</li>
        <li>Cheese</li>
    </div>
  </div>
  <div class="odd-item">
    <div id="cappuccino" class="item-img">
        <img class="item-img" src="/Images/cappuccino.png" alt="">
    </div>
    <div class="food-info">
        <li>Cappuccino </li>
        <li style="width:200px">Hazelnut Cappuccino</li>
    </div>
    <div class="food-price">
        <li><span>&#8377;</span> 129</li>
        <li><span>&#8377;</span> 189</li>
    </div>
  </div>
  <div class="even-item">
    <div id="combo"  class="item-img">
        <img class="item-img" src="/Images/combo.png" alt="">
    </div>
    <div class="food-price">
        <li><span>&#8377;</span> 699</li>
        <li></li>
    </div>
    <div class="food-info">
        <li>Delight Combo</li>
        <li></li>
    </div>
  </div>`;

  }
})();
