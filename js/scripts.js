$(document).ready(function() {
  $("form#formOne").submit(function(event) {
          var passCode = $("input#passCode").val();

          if (passCode === 'ivy') {
            $('#uwu').show();
          }

      event.preventDefault();
    });
  });
