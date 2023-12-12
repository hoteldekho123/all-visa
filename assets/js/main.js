// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navbar").classList.add('fixed-navbar');
        document.getElementById("scrolltop").classList.add('fixed-scroll');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
        document.getElementById("scrolltop").classList.remove('fixed-scroll');
    }
}




function format(item, state) {
    if (!item.id) {
      return item.text;
    }
    var countryUrl = "https://hatscripts.github.io/circle-flags/flags/";
    var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
    var url = state ? stateUrl : countryUrl;
    var img = $("<img>", {
      class: "img-flag",
      width: 26,
      src: url + item.element.value.toLowerCase() + ".svg"
    });
    var span = $("<span>", {
      text: " " + item.text
    });
    span.prepend(img);
    return span;
  }
  
  $(document).ready(function() {
    $("#countries").select2({
      templateResult: function(item) {
        return format(item, false);
      }
    });
    $("#us-states").select2({
      templateResult: function(item) {
        return format(item, true);
      }
    });
  });
  $(document).ready(function() {
    $("#countries2").select2({
      templateResult: function(item) {
        return format(item, false);
      }
    });
    $("#us-states").select2({
      templateResult: function(item) {
        return format(item, true);
      }
    });
  });




//step form js start
$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar")
  .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
  return false;
  })
  
  });
//step form js end


// view all country js start 

$('#activate').click(function () { 
  var text = 'View Less';
  // save $(this) so jQuery doesn't have to execute again
  var $this = $('#activate');
  if ($this.text() === text) {
      $(this).text('View All').toggleClass("label-warning label-danger");

  } else {
      $this.text(text).toggleClass("label-danger label-warning");;
      
  }
});

// view all country js end 


// read more js start 
function readMore(ele,eve){
  eve.preventDefault();
  var txt = document.querySelector(".read_more_text");
  txt.classList.toggle("show-few-lines");
  
  if(txt.classList.contains("show-few-lines")){
      ele.innerText = "Read More";
  }else{
      ele.innerText = "Read Less";
  }
}
// read more js end
