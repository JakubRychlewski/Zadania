$(document).ready(function() {

   $('button#toggleImageBtn').click(function(){
    $(image).toggle();
    $('#image').attr('src', 'zdjecie.jpg');
  });
   $('button#slideTextBtn').click(function(){
    $('div#textSection').slideToggle();
   });

  $("button#colorBtn").click(function(){
    $('body').css('background', '#' + Math.floor(Math.random()*16777215).toString(16)); 
  });

  $("button#addParaBtn").click(function(){
    $('div#content').append('<p>Nowy paragraf</p>');
  });
  
  $("button#removeParaBtn").click(function(){
    $('p').last().remove();
  });

  $("button#showDateBtn").click(function(){
    $('div#date').text(new Date(Date.now()).toDateString() + " " + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
  });
  
});


