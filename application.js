$(document).ready(function() {
  var timer;
  var index = 0;

  $(document).on('click','button',function() {
    timer = setInterval(function() {
      for(var a = 0; a < index; a++) {
        $($('.block')[a]).css({right : '+=100px'})
      }
      var num = Math.ceil(Math.random()*3);
      index++;
      if(num == 1) {
        $('.container').append('<p class="block block-1"></p>');
      } else if(num == 2) {
        $('.container').append('<p class="block block-2"></p>');
      } else {
        $('.container').append('<p class="block block-3"></p>');
      }
      for(var a = 0; a < index; a++) {
        var str1 = ''+$($('.block')[a]).css('right');
        var str2 = ''+$('img').css('right');
        var str3 = ''+$($('.block')[a]).css('top');
        var str4 = ''+$('img').css('top');
        if((parseInt(str1.slice(0,-2))) <= parseInt(str2.slice(0,-2))) {
          if((parseInt(str1.slice(0,-2))+200) >= parseInt(str2.slice(0,-2)) && (parseInt(str3.slice(0,-2))) == parseInt(str4.slice(0,-2))) {
            $($('.block')[a]).text('You have lost!');
            clearInterval(timer);
          }
        }
      }
    },1250)
  });

  $(document).keyup(function(e) {
    if(e.keyCode == 38) {
      if($('img').css('top') == '250px') {
        $('img').css({top : '100px'});
      } else if($('img').css('top') == '400px') {
        $('img').css({top : '250px'});
      }
    } else if(e.keyCode == 40) {
      if($('img').css('top') == '100px') {
        $('img').css({top : '250px'});
      } else if($('img').css('top') == '250px') {
        $('img').css({top : '400px'});
      }
    }
  });

});