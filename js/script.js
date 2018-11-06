var  nam = document.getElementById('nam');
var surname = document.getElementById('surname');
var numb = document.getElementById('numb');
var regV = /^[A-za-za-z\s]+$/;
var regN = /^[+]\d{11}$/;



var data = document.getElementsByName("date")[0];

data.onchange = function(){
    var tari = +data.value.slice(0,4);
    var amis = +data.value.slice(5,7);
    var or = +data.value.slice(8,10);
    var date = new Date();
    var loctari = +date.getFullYear();
    var locamis = +date.getMonth() + 1;
    var locor = +date.getDate();



  if(tari < loctari){
        data.style.backgroundColor = "red";
        return false;
    }else if(tari == loctari){
        if(amis < locamis){
            data.style.backgroundColor = "red";
            return false;
        }else if(amis == locamis){
            if(or < locor){
                data.style.backgroundColor = "red";
                return false;
            }else if(or >= locor){
                data.style.backgroundColor = "#49ff25";
            }
        }else if(amis > locamis){
            data.style.backgroundColor = "#49ff25";

        }
    }else if(tari > loctari){
        data.style.backgroundColor = "#49ff25";
    }


};



function validate(event){
    var elem = event.target;

    if(regV.test(elem.value)){
        elem.style.backgroundColor = "#49ff25";
    }else{
        elem.style.backgroundColor = "red";
    }
    if(!elem.value){
        elem.style.backgroundColor = "#fff";
    }
}




numb.onblur = function () {
  if(regN.test(numb.value)){
      numb.style.backgroundColor = "#49ff25";
  }
  else{
      numb.style.backgroundColor = "red";
  }
    if(!numb.value){
        numb.style.backgroundColor = "#fff";
    }
};


var sub =  document.getElementById('sub');

sub.onclick = function () {


    if(regV.test(nam.value)){
        nam.style.backgroundColor = "#49ff25";
    }
    else{
        nam.style.backgroundColor = "red";
        nam.value = "";
        return false;

    }
    if(!nam.value){
        nam.style.backgroundColor = "#fff";
    }


    if(regV.test(surname.value)){
        surname.style.backgroundColor = "#49ff25";
    }
    else{
        surname.style.backgroundColor = "red";
        surname.value = "";
        return false;

    }
    if(!surname.value){
        surname.style.backgroundColor = "#fff";
    }

    if(regN.test(numb.value)){
        numb.style.backgroundColor = "#49ff25";
    }
    else{
        numb.style.backgroundColor = "red";
        numb.value = "";
        return false;


    }
    if(!numb.value){
        numb.style.backgroundColor = "#fff";
    }
    var tari = +data.value.slice(0,4);
    var amis = +data.value.slice(5,7);
    var or = +data.value.slice(8,10);
    var date = new Date();
    var loctari = +date.getFullYear();
    var locamis = +date.getMonth() + 1;
    var locor = +date.getDate();

    if(tari < loctari){
        data.style.backgroundColor = "red";
        return false;
    }else if(tari == loctari){
        if(amis < locamis){
            data.style.backgroundColor = "red";
            return false;
        }else if(amis == locamis){
            if(or < locor){
                data.style.backgroundColor = "red";
                return false;
            }else if(or >= locor){
                data.style.backgroundColor = "#49ff25";
            }
        }else if(amis > locamis){
            data.style.backgroundColor = "#49ff25";

        }
    }else if(tari > loctari){
        data.style.backgroundColor = "#49ff25";
    }

};



///////manu

var menuBtn = document.getElementById('menuBtn');
    menuBtn.onclick = function(){
    document.getElementById('nav').classList.toggle('navOp');
    var li = document.querySelectorAll("nav li");
    var a = document.querySelectorAll(".inner-nav li a");
    for(var j = 0; j < a.length; j++){
        a[j].style.padding = "0";
    }
    for(var i = 0; i < li.length ; i++){
        li[i].classList.toggle("open");
    }

         window.onscroll = function(){
         for(var k = 0; k < li.length ; k++){
            if(li[k].classList.contains("open")){
            li[k].classList.remove("open");
            document.getElementById('nav').classList.remove('navOp');
}
    }
    }




    };

$( document ).ready(function() {


//section

var offHome = $("#home");
var offAbout = $("#about");
var offIngredients = $("#ingredients");
var offMenu = $("#menu");
var offReviews = $("#reviews");
var offReservation = $("#reservation");


///menu
    var hom = $('#hom');
    var about = $('#ab');
    var ing = $('#ing');
    var men = $('#men');
    var rev = $('#rev');
    var res = $('#res');
//ScrollSmoth//////////////////////////////////////////////////////////////////////////////////////////////////////////
    var seeMenu = $("#seeMenu");

    seeMenu.click(function(){
        $("html , body").animate({scrollTop : offMenu.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });

    hom.click(function(){
        $("html , body").animate({scrollTop : offHome.offset().top},1500 , 'easeInOutCubic');
        return false;
    });

    about.click(function(){
     $("html , body").animate({scrollTop : offAbout.offset().top + 2},1500 , 'easeInOutCubic');
     return false;
    });

    ing.click(function(){
        $("html , body").animate({scrollTop : offIngredients.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });

    men.click(function(){
        $("html , body").animate({scrollTop : offMenu.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });
    rev.click(function(){
        $("html , body").animate({scrollTop : offReviews.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });
    res.click(function(){
        $("html , body").animate({scrollTop : offReservation.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });

//ScrollSmoth//////////////////////////////////////////////////////////////////////////////////////////////////////////
//menucoloring//////////////////////////////////////////////////////////////////////////////////////////////////////////
    var scrolled = $(document).scrollTop() || $(document.documentElement).scrollTop();

    if(scrolled >= offHome.offset().top){
        hom.css({color : "#00e5ff"});
    }else{
        hom.css({color : "#fff"});
    }


$(document).scroll(function(){
    var scrolled = $(document).scrollTop() || $(document.documentElement).scrollTop();
    var nav = document.getElementById('nav');


    if(scrolled > 100){
        nav.style.position = "fixed";
        nav.style.backgroundColor = "rgba(0,0,0,0.7)";

        }else if(scrolled < 100){
        nav.style.position = "absolute";
        nav.style.backgroundColor = "transparent";
        }


if(scrolled >= offHome.offset().top){
    hom.css({color : "#00e5ff"});
}else{
     hom.css({color : "#fff"});
}
if( scrolled >= offAbout.offset().top ){
    hom.css({color : "#fff"});
    about.css({color : "#00e5ff"});
}else{
    about.css({color : "#fff"});
}
if(scrolled >= offIngredients.offset().top){
    about.css({color : "#fff"});
    ing.css({color : "#00e5ff"});
}else{
    ing.css({color : "#fff"});
}
if(scrolled >= offMenu.offset().top){
    ing.css({color : "#fff"});
    men.css({color : "#00e5ff"});
}else{
    men.css({color : "#fff"});
}
if(scrolled >= offReviews.offset().top){
    men.css({color : "#fff"});
    rev.css({color : "#00e5ff"});
}else{
    rev.css({color : "#fff"});
}
if(scrolled >= offReservation.offset().top){
    rev.css({color : "#fff"});
    res.css({color : "#00e5ff"});
}else{
    res.css({color : "#fff"});
}
});
//menucoloring//////////////////////////////////////////////////////////////////////////////////////////////////////////





});


