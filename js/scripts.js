$(document).ready(function() {
  $("form#formOne").submit(function(event) {
          var passCode = $("input#passCode").val();

      if (passCode === 'password') {
          $('#hide').show();
              } else {
        alert('sorry try again!')
      }
      

      event.preventDefault();
    });
  });
