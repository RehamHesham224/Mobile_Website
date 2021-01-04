//jQuery
$(function () {
    //change nav color on scroll
$(document).scroll(function () {
 var $nav = $(".navbar-fixed-top");
 $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
// slick
// $('.single-item').slick();
$('.single-item').slick({
  // dots: true,
    infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: 'linear',
 autoplaySpeed: 3000,
  arrows:true,
  fade:true,
  fadeSpeed:1000,
  centerMode:true,
  prevArrow: '<span class="slide-arrow prev-arrow"><i class="fas fa-chevron-circle-left fa-2x"></i></span>',
    nextArrow: '<span class="slide-arrow next-arrow"><i class="fas fa-chevron-circle-right fa-2x"></i></span>',
});
});
window.onload = function() {
  //hide spinner
  $('.spinner').delay(1000).fadeOut('slow');
}

//bootstrap
$('body').scrollspy({ target: '#main-nav' });
  
      // Smooth Scrolling
      $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          const hash = this.hash;
  
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
  
            window.location.hash = hash;
          });
        }
      });
      


      $(function () {
        // Auto play modal video
        $(".video").click(function () {
          var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
          });
        });
      });


      //java script
//creat popup with the image

//creat popup with the image
let ourGallery =document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{
img.addEventListener("click",(e)=>{
//creat overlay element
let overlay =document.createElement("div");
//add class to overlay div
overlay.className="popup-overlay";
//append to body
document.body.appendChild(overlay);
//creat popup box
let popupBox =document.createElement("div");
//add class to overlay div
popupBox.className="popup-box";
if(img.alt !== null){
    //creat heading
    let imgHeading=document.createElement("h3");
    //creat text for heading
    let imgText =document.createTextNode(img.alt);
    //append text to heading
    imgHeading.appendChild(imgText);
    //append heading to popup box
    popupBox.appendChild(imgHeading);
}
//creat the image
let popupImg =document.createElement("img");
//set image source
popupImg.src=img.src;
//append popupImg img to div popupBox
popupBox.appendChild(popupImg)
//append  popup box to body
document.body.appendChild(popupBox);
//create the close span
let closeButton =document.createElement('span');
//create the close span text
let closeButtonText =document.createTextNode("x");
//append  close span text to span
closeButton.appendChild(closeButtonText);
//add class to close button
closeButton.className="close-button";
//add close button to popup box
popupBox.appendChild(closeButton);
});
});

//close popup
document.addEventListener("click", e =>{
    if(e.target.className === "close-button"){
        //remove the current popup box
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
});


     