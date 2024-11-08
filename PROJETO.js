$(Document).ready(function(){
//funcionamento do curso//
$("#button1").click(function(){
    $("#nome").toggle(5);
    })
    $('#Projeto1').mouseover(function(){
      $(this).css('height','250px')
  })
      $('#Projeto1').mouseout(function(){
      $(this).css('height','170px')
  })
  $('#Projeto2').mouseover(function(){
      $(this).css('height','250px')
  })
      $('#Projeto2').mouseout(function(){
      $(this).css('height','170px')
  })
  $('#Projeto3').mouseover(function(){
      $(this).css('height','250px')
  })
      $('#Projeto3').mouseout(function(){
      $(this).css('height','170px')
  })
          //funcionamento do zoom da imagem//
          $('#potte1').mouseover(function(){
            $(this).css('font-weight', 'bold')
          })
          $('#potte1').mouseout(function(){
            $(this).css('font-weight', 'normal')
          })
          $('#potte2').mouseover(function(){
            $(this).css('font-weight', 'bold')
          })
          $('#potte2').mouseout(function(){
            $(this).css('font-weight', 'normal')
          })
          $('#potte3').mouseover(function(){
            $(this).css('font-weight', 'bold')
          })
          $('#potte3').mouseout(function(){
            $(this).css('font-weight', 'normal')
          })
        })