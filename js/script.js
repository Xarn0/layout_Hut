new Swiper('.main-slider-container',{
    navigation:{
        nextEl:'.swiper-next',
        prevEl:'.swiper-prev'
    },
    allowSlideNext:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true
    },
    autoHeight:true,
    loop:true
})


let burger = document.querySelector('.burger');
let o = document.querySelector('.burger-content')
burger.addEventListener('click',()=>{
    o.innerHTML = document.querySelector('.header-list-container').innerHTML
    if(o.style.display == "block"){
        o.style.display = "none";
        // obert.style.display = 'none'
    }else{
        o.style.display = "block"
        // obert.style.display = 'block'
    }
    
   
  
})
// .header-list-container
// @53.7111316,87.800988,18.71z/data=!4m5!3m4!1s0x42d11619369ca529:0x64bc372f296ee200!8m2!3d53.7109821!4d87.8003261
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.7111316, lng: 87.800988 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;