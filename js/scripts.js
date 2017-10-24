
// Loading icon code from Stack Overflow 
  $(document).ready(function() {
              $('.loading').hide();
              $(document).ajaxStart( function() {
                   $('.loading').show();  // show Loading Div
              }).ajaxComplete(function(){ // <--------------try with .ajaxComplete
                    $('.loading').hide(); // hide loading div
              });
           });

// ON CHANGE EVENT
  $('#select').on("change", function(){  
  $(".nav-large").addClass("nav-small");
// AJAX KICKIN IT
  var choice = $(this).val();
  var url = "https://api.nytimes.com/svc/topstories/v2/" + choice + ".json";
  url += '?' + $.param({
    'api-key': "6c99ca9dc93041a3bf6637bf813f3725"
  });
  $.ajax({
    url: url,
    method: 'GET',
// WHEN COMPLETED....
  })
  .fail(function(err) {
    throw err;
  })
  .done(function(data) {
// GALLERY CLEAR
  $(".gallery").empty();
// FOR LOOP TO CYCLE THROUGH KEYS
      $.each(data.results.filter(function(item) { return item.multimedia.length !== 0 }).splice(0, 12), function(index, value) {
      console.log('data.results:', value)
      var multimediaIndex = (value.multimedia.length - 1);
      var title = value.abstract;
      var image = value.multimedia[multimediaIndex].url;
      var url = value.url
     $('.gallery').append('<a href="' + url + '" style="background-image:url(' + image + ');">' + "<h1>" + title + "</h1>" + '</a>');
  });
  });
  
  });

