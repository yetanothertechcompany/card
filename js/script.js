$(document).ready(function () {

  /* Variable Declaration */
  var contentArray=["<div>In this map, the two most important attributes customers use in perceiving credit card brands are...</div>","<div>In this map, the two most important attributes customers use in perceiving credit card brands are<span class='red-color' aria-label='the level of fees the cards charge...'> the level of fees the cards charge...</span></div>","<div>In this map, the two most important attributes customers use in perceiving credit card brands are the level of fees the cards charge <span class='red-color' aria-label='and the breadth of companies that accept the cards.'>and the breadth of companies that accept the cards.</span></div>","<div>Here, American Express is seen as charging the highest fees and useable in the fewest outlets. </div>"];
  var imageItem = ["first", "second", "third", "fourth"];
  var imageText=['Visa is the most accepted with a relatively high fee (second out of the four)','Discover has the lowest fees and it is relatively accepted (second out of the four)','Mastercard has third in rank in terms of acceptance but its fee is comparable to Visa','American Express has the highest fees with the lowest acceptance'];
  var currentItem;
  var count = 0;
  var nclick = false;

  $("#input-box").hide();
  $("#input-box img").attr("src", "images/"+imageItem[count]+".jpg");
  $("#input-box img").attr("alt", imageText[count]);
  $("#input-box").fadeIn(1000);
  /*Starting Content*/
  $('#starting-content').html(contentArray[count]);
	$(".content").hide().css({left:'600px'});
	$(".content").show().stop().animate({left:'1px'}).html(contentArray[currentItem]);
	$(".content").removeClass("hide");
  $(".previous-button").css({"opacity":"0.4"}).addClass("pointer-events-none").attr("tabindex","-1");
  $('#last-text').attr("tabindex", "0");
  $(".restart-button").addClass("hide");
  var timer= setTimeout(function() {
  $(".next-button").css("opacity", "1").removeClass("pointer-events-none").attr("tabindex", "0");
  clearTimeout(timer);
},500);

/*Next button function*/
function showContent() {
  $(".next-button").css("opacity", "0.1").attr("tabindex", "-1");
  count++;
  if(count<=3){
        $("#input-box img").attr("src", "images/"+imageItem[count]+".jpg");
        $("#input-box img").attr("alt", imageText[count]);
        $(".previous-button").css({"opacity":"1"}).removeClass("pointer-events-none").attr("tabindex", "0");
        $('#starting-content').html(contentArray[count]).focus();
  if (count == 3) {
     var timer1 = setTimeout(function() {
         $(".next-button").css("opacity", "0.5");
         nclick = false;
         clearTimeout(timer1);
         }, 100);
      var timer2 = setTimeout(function() {
          $(".next-button").css("opacity", "0.5");
          nclick = false;
          clearTimeout(timer2);
          }, 200);
    $("#input-box img").attr("src", "images/"+imageItem[count]+".jpg");
    $("#input-box img").attr("alt", imageText[count]);
    $(".content").hide().css({left:'800px'});
    $(".content").show().stop().animate({left:'1px'},700,function(){
    $('#starting-content').focus();
  });
    $(".restart-button").removeClass("hide");
    $('#starting-content').html(contentArray[count]);
}
   else {
     if(count<3){
     var timer1 = setTimeout(function() {
         $(".next-button").css("opacity", "1");
         nclick = false;
         clearTimeout(timer1);
    }, 100);
  }
  }
}
}
/*previous button function*/
function showNextContent() {
   count--;
if(count>=0){
  $(".previous-button").css("opacity", "0.1").attr("tabindex", "-1");
  $("#input-box img").attr("src", "images/"+imageItem[count]+".jpg");
  $("#input-box img").attr("alt", imageText[count]);
  $('#starting-content').html(contentArray[count]);
  $('.red-color').attr("tabindex", "0").focus();
  $('#starting-content').attr("tabindex", "0");
  $(".restart-button").addClass("hide");
  if(count == 0){
    $(".previous-button").css({"opacity":"0.4"}).addClass("pointer-events-none").attr("tabindex", "-1");
    $(".next-button").fadeTo(1500, 1).removeClass("pointer-events-none").attr("tabindex", "0");
    // $('#starting-content').attr("tabindex", "0").focus();
    $(".previous-button").attr("tabindex", "-1");
  }
  else {
      var timer2 = setTimeout(function() {
      $(".previous-button").css("opacity", "1").attr("tabindex", "0");
      clearTimeout(timer2);
  	}, 300);
  }
}
}
/* Click Function */
$(".previous-button").click(function() {
        nclick = false;
        showNextContent();
   });
$(".next-button").click(function(){
        if(!nclick){
        nclick = true;
        showContent();
       $('.red-color').attr("tabindex", "0").focus();
     }
 });
$(".restart-button").click(function(){
     location.reload();
});

//   /* Keyborad Events*/
  $('.next-button').focusin(function (e) {
      $(this).addClass("next-button-hover");
  });
  $('.next-button').focusout(function (e) {
  $(this).removeClass("next-button-hover");
  });
  $('.restart-button').focusin(function (e) {
      $(this).addClass("restart-button-hover");
  });
  $('.restart-button').focusout(function (e) {
      $(this).removeClass("restart-button-hover");
  });
  $('.previous-button').focusin(function (e) {
      $(this).addClass("previous-button-hover");
   });
  $('.previous-button').focusout(function (e) {
      $(this).removeClass("previous-button-hover");
  });
/* Next button keydown*/
  $('.next-button').keydown(function (e) {
     if (e.which == 13) {
       if(!nclick){
         nclick = true;
      showContent();
      $('.red-color').attr("tabindex", "0").focus();
      $('.previous-button').attr("tabindex", "0");
          if (count==3) {
      $(".content").hide().css({left:'800px'});
      $(".content").show().stop().animate({left:'1px'},700,function(){
      $('#starting-content').focus();
  });
      $('.next-button').attr("tabindex", "-1");
      $('.restart-button').attr("tabindex", "0");
          }
        }
      }
});
$('#starting-content').focusin(function (e) {
$('.red-color').keydown(function (e) {
if (e.which == 9) {
      $('.previous-button').attr("tabindex", "0");
      $('#last-text').attr("tabindex", "-1");
    }
});
});
/* previous button keydown*/
$('.previous-button').keydown(function (e) {
    nclick = false;
    if(count>=0){
    if (e.which == 13) {
    showNextContent();
    $('.previous-button').removeClass("previous-button-hover").attr("tabindex", "-1");
    $('.red-color').attr("tabindex", "0").focus();
    $('#starting-content').attr("tabindex", "0");
    $(".previous-button").css({"opacity":"0.4"}).addClass("pointer-events-none").attr("tabindex", "-1");
    if(count!=3){
        $(".next-button").fadeTo(1500, 1).removeClass("pointer-events-none").attr("tabindex", "0");
    }
    if(count==0){
         $('#starting-content').attr("tabindex", "0").focus();
         $(".previous-button").attr("tabindex", "-1");
     }
  }
}
 if (e.which == 9) {
    $('.next-button').attr("tabindex", "0");
    $('#last-text').attr("tabindex", "-1");
    $('#input-box').attr("tabindex", "-1");
    $('.red-color').attr("tabindex", "-1");
     if(count==3){
    $('.restart-button').attr("tabindex", "0");
    $('.next-button').attr("tabindex", "-1");
}
  }
});

$(".restart-button").keydown(function(e) {
if(e.which == 13) {
    location.reload();
  }
if(e.which == 9) {
    $(".next-button").css({"opacity": 0.4}).addClass("pointer-events-none").attr("tabindex", "-1");
}
});
});
