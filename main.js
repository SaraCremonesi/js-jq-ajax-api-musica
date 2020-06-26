$(document).ready(function() {
	$.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(randomCD) {
          var cdResponse = randomCD.response;
          printCD(cdResponse);
        },
        error: function(richiesta, stato, errore) {
          alert('Si è verificato un errore: ' + errore)
        }
      }
    );
  });
  function printCD(arrayCD) {

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    for (i = 0; i < arrayCD.length; i++) {
      var cd = arrayCD[i]
      var html = template(cd);
      $('.cds-container').append(html);
    }
  };
