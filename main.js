const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navClose = document.querySelector(".icon-close");
const navOpen = document.querySelector(".icon-menu");
const cart = document.querySelector("#cart")

// Navigation

// Mobile Menu

navToggle.addEventListener("click", myMenu, false);

function myMenu(){

   navOpen.toggleAttribute("data-invisible");
   navClose.toggleAttribute("data-visible");
   primaryNav.toggleAttribute("data-visible");
   
}

// Cart

cart.addEventListener("click", () => {
    document.querySelector(".basket").toggleAttribute("data-visible");
})





// Slider

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: false,
    responsive: {
        768:{
            disable: true
        }
    }
});

const currentImage = document.querySelector(".currentImage");
const thumbnailImages = document.querySelectorAll(".thumbnail");
const thumbnailOutline = document.querySelectorAll(".thumbnail-outline");
const lightBoxImage = document.querySelector(".lightbox-current");

// Synchronized gallery and lighbox

currentImage.addEventListener("click", revealLightbox)
document.querySelector(".lightbox-close").addEventListener("click", revealLightbox)

function revealLightbox(){
    document.querySelector(".lightbox-wrapper").toggleAttribute("data-reveal");
}

let checkIndex = 0;

for (let i = 0; i < thumbnailImages.length; i++) {

    thumbnailImages[i].addEventListener("click", () => {
        if (i < (thumbnailImages.length/2)){
            thumbnailImages.forEach(thumbnail => {
                thumbnail.classList.remove('opacity');
            });

            thumbnailOutline.forEach(outline => {
                outline.classList.remove('outline');
            });

            thumbnailImages[i].classList.add("opacity");
            thumbnailImages[i + (thumbnailImages.length/2)].classList.add("opacity");
            thumbnailOutline[i].classList.add('outline');
            thumbnailOutline[i + (thumbnailImages.length/2)].classList.add('outline');

            currentImage.src = "images/image-product-" + (i+1) + ".jpg";
            lightBoxImage.src = "images/image-product-" + (i+1) + ".jpg";

            checkIndex = i;
            console.log(checkIndex)
        }
        else{
            thumbnailImages.forEach(thumbnail => {
                thumbnail.classList.remove('opacity');
            });

            thumbnailOutline.forEach(outline => {
                outline.classList.remove('outline');
            });

            thumbnailImages[i].classList.add("opacity");
            thumbnailImages[i - (thumbnailImages.length/2)].classList.add("opacity");
            thumbnailOutline[i].classList.add('outline');
            thumbnailOutline[i - (thumbnailImages.length/2)].classList.add('outline');

            currentImage.src = "images/image-product-" + (i - ((thumbnailImages.length/2) - 1)) + ".jpg";
            lightBoxImage.src = "images/image-product-" + (i - ((thumbnailImages.length/2) - 1)) + ".jpg";

            checkIndex = i - ((thumbnailImages.length/2) - 1);
            console.log(checkIndex)
        }
    })

  }

// Lightbox slider buttons

const prevButton = document.querySelector(".lightbox-slider-prev");
const nextButton = document.querySelector(".lightbox-slider-next");

prevButton.addEventListener("click", () => {

    if (checkIndex > 1){
        
        thumbnailImages.forEach(thumbnail => {
            thumbnail.classList.remove('opacity');
        });

        thumbnailOutline.forEach(outline => {
            outline.classList.remove('outline');
        });

        thumbnailImages[checkIndex - 2].classList.add("opacity");
        thumbnailImages[checkIndex + 2].classList.add("opacity");
        thumbnailOutline[checkIndex - 2].classList.add('outline');
        thumbnailOutline[checkIndex + 2].classList.add('outline');

        currentImage.src = "images/image-product-" + (checkIndex - 1) + ".jpg";
        lightBoxImage.src = "images/image-product-" + (checkIndex - 1) + ".jpg";

        checkIndex-- ;

        console.log(checkIndex)
    }
});

nextButton.addEventListener("click", () => {

    if (checkIndex < (thumbnailImages.length/2)){

        if (checkIndex == 0){
            checkIndex = 1;
        }
        
        thumbnailImages.forEach(thumbnail => {
            thumbnail.classList.remove('opacity');
        });

        thumbnailOutline.forEach(outline => {
            outline.classList.remove('outline');
        });

        console.log(checkIndex);
        thumbnailImages[checkIndex].classList.add("opacity");
        thumbnailImages[checkIndex + 4].classList.add("opacity");
        thumbnailOutline[checkIndex].classList.add('outline');
        thumbnailOutline[checkIndex + 4].classList.add('outline');
        
        currentImage.src = "images/image-product-" + (checkIndex + 1) + ".jpg";
        lightBoxImage.src = "images/image-product-" + (checkIndex + 1) + ".jpg";

        checkIndex++ ;
    }
});


// Item number

const addItem = document.querySelector("#plus");
const subtractItem = document.querySelector("#minus");
const noOfItem = document.querySelector("#no-of-item");

let number = 0;

addItem.addEventListener("click", () => {
    number++;
    noOfItem.innerHTML = number;
})

subtractItem.addEventListener("click", () => {
    if (number > 0){
    number--;
    noOfItem.innerHTML = number;
    }
})

// Add to Cart

const addToCart = document.querySelector("#add-to-cart");
const itemNo = document.querySelector("#item-no");
const subTotal = document.querySelector("#sub-total");

addToCart.addEventListener("click", () => {
    document.querySelector(".empty").classList.add("hidden");
    document.querySelector("#basket-product").classList.remove("hidden");
    itemNo.innerHTML = number;
    subTotal.innerHTML = " " + "$" +(125 * number) + ".00";
})

// Remove on Cart

const removeFromCart = document.querySelector("#remove");

removeFromCart.addEventListener("click", () => {
    document.querySelector(".empty").classList.remove("hidden");
    document.querySelector("#basket-product").classList.add("hidden");
})

// Checkout

const checkout = document.querySelector(".checkout");

checkout.addEventListener("click", () => {
    document.querySelector(".basket").toggleAttribute("data-visible");
})