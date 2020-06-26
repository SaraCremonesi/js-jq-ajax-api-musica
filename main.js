$(document).ready(function() {
  // Eseguo la chiamata ajax
	$.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(randomCD) {
          var cdResponse = randomCD.response;
          // Per non aggiungere eccessiva logica al success,
          // creo una funzione esterna da richiamare poi qui (dandogli "in pasto" il response)
          printCD(cdResponse);
        },
        error: function(richiesta, stato, errore) {
          alert('Si è verificato un errore: ' + errore)
        }
      }
    );
  });

  // Creo la funzione per stampare a schermo i dati dei vari cd
  function printCD(arrayCD) {
    // Handlebars
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    // Creo un ciclo for per stamoare a schermo tutti i cd
    for (i = 0; i < arrayCD.length; i++) {
      var cd = arrayCD[i]
      // Handlebars
      var html = template(cd);
      // Aggiungo ogni cd nell'html
      $('.cds-container').append(html);
    }
  };
