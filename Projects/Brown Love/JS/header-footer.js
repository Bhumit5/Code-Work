document.querySelector("#navbar").innerHTML = 
`
<div class="container-fluid textSet">
    <a class="navbar-brand" href="#">
        <img src="/Images/logo.jpeg" alt="Bootstrap" height="30">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item nav-link-effect setUl">
                <a id="home-option" class="nav-link" href="home.html">Home</a>
            </li>
            
            <li class="nav-item nav-link-effect setUl">
                <a id="menu-option" class="nav-link" href="menu.html">Menu</a>
            </li>

            <li class="nav-item nav-link-effect setUl">
                <a id="book-option" class="nav-link" href="book.html">Book</a>
            </li>
                
            <li class="nav-item nav-link-effect setUl">
            <a id="order-option" class="nav-link" href="order.html">Order</a>
            </li>
            
            <li class="nav-item nav-link-effect setUl">
            <a id="about-option" class="nav-link" href="about.html">Brown Love</a>
            </li>
        </ul>

        <div class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-end flex-grow-1 pe-3">
        
            <li class="nav-item nav-link-effect setUl">
                <a id="join-option" class="nav-link" href="connect.html">Join us</a>
            </li>

        </div>
        

    </div>
</div>`;
    
    
document.querySelector("#contact").innerHTML = `
<div class="row justify-content-center w-100 text-center pt-5 pb-3">
<div class="col col-lg-2">
    <a href="http://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i></a>
</div>

<div class="col col-lg-2">
    <a href="http://www.whatsapp.com" target="_blank"><i class="fa fa-whatsapp"></i></a>
</div>

<div class="col col-lg-2">
    <a href="http://www.pintrest.com" target="_blank"><i class="fa fa-pinterest"></i></a>
</div>

<div class="col col-lg-2">
    <a href="http://www.facebook.com" target="_blank"><i class="fa fa-facebook-square"></i></a>
</div>

<div class="col col-lg-2">
    <a href="http://www.gmail.com" target="_blank"><i class="fa fa-envelope-o"></i></a>
</div>
</div>
<div id="footer-content"  class="card w-100 container my-3 border-0" style="background-color: transparent;">
<div class="row g-0 d-flex">
    <div class="col-md-4">
        <img src="/Images/logo.jpeg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 d-flex py-0">
        <div id="add" class="card-body p-0 ps-4">
            <p class="card-text my-0">
            <address>
                <b>Address:</b><br>
                Lorem ipsum,<br>
                Lorem ipsum dolor sit <br>
            </address>
            </p>
        </div>
        <div id="con" class="card-body p-0">
            <p class="card-text">
                <b>Contact:</b><br>
                <i><img src="/Images/contact.png" style="height: 2.5rem;" alt="">
                </i> xxx-xxxx-xxx
            </p>
        </div>
    </div>
</div>
</div>
<div id="greet" class="text-center">
Brown Love | Thank You
</div>
`;

