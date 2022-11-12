$(function() {

   emailContainer = $('div#email');

  $('#go').on('click', function() {

    $(emailContainer, '#errorIcon, .text .errorMsg').css('animation', 'unset');

    email = $('#email > input').val();

    if (!validateEmail(email)) {

      
      emailContainer.css({
        'transition': 'all 300ms ease',
        'border': '2px solid #F96464'
      });
      
      $('#errorIcon, .text .errorMsg').css({
        'transition': 'all 300ms ease',
        'opacity': '1',
        'color': '#F96464'
      });

    } else {
      
      emailContainer.css({
        'transition': 'all 300ms ease',
        'border': '1px solid hsl(0, 36%, 70%)'
      });
      
      $('#errorIcon, .text .errorMsg').css({
        'transition': 'all 300ms ease',
        'opacity': '0',
        'color': '#F96464'
      });
      
    } 

  });


  regex = /^([a-z\d\.!-\\/_$%&]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


  function validateEmail(input) {
    if (input !="") {
        return regex.test(input);
      }
  };


  function addErrMsg(element, error) {
    element.addClass('error');
    element.after('<div class="errorMsg">' + error + '</div>');
  };


});
