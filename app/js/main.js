
$(document).ready(function(){
 
  $('.slider__cont').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
         
          slidesToShow: 3
          
        }
      },
      {
        breakpoint: 660,
        settings: {
         
          slidesToShow: 4
          
        }
      },
      {
        breakpoint: 510,
        settings: {
         
          slidesToShow: 3
          
        }
      },
      {
        breakpoint: 430,
        settings: {
         
          slidesToShow: 2
          
        }
      }
      
      
      
    ]
  
  
  });
  
  

});