let  searchbutton = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchbutton.classList.toggle('active');
}

let  shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
}


let  loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');
} 

let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
navbar.classList.toggle('active');

}

window.onscroll =() =>
{
searchForm.classList.remove('active');
loginform.classList.remove('active');
shoppingCart.classList.remove('active');
navbar.classList.remove('active');
heart.classList.remove('active');


}






var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:
    {
        delay:8000,
        disableOnInteraction:false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }


  var swiper = new Swiper(".review-slider", {
    loop:false,
    spaceBetween: 20,
    autoplay:
    {
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });