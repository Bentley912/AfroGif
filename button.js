var searchCat;
var results;

var counter = 10;

var starters = ["boondocks", "issa rae", "afro", "black people", "atlanta", "chapelle"];

var button = $('<button>');


  for (var i=0; i < starters.length;i++){
    var button = $('<button/>');
    $(button).attr('class', 'btn btn-danger search-button gifRequest');
    $(button).html(starters[i]);
    $(button).attr('data-category', starters[i]);
    $('#button-area').append(button);
  }

  $('#gifCategory').on('click', function(){
    var category = $('#gifInput').val();
     button = $('<button/>');
    $(button).attr('class', 'btn btn-danger search-button gifRequest');
    $(button).html(category);
    $(button).attr('data-category', category);
    $('#button-area').append(button);




  });

  $(document).on('click', 'img', function(){
      var animated = $(this).attr('data-animated');
      var still = $(this).attr('data-still');

      if ($(this).attr('src') === still) {
      $(this).attr('src', animated);
      clickTracker = false;
      console.log(clickTracker);
    }
    else if ($(this).attr('src') === animated){
      $(this).attr('src', still);
    }
    })


  $(document).on('click', '.gifRequest', function(){

          $('#gifSpace').empty();
        var searchCat = $(this).attr('data-category');
        console.log(searchCat);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        searchCat +"&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .done(function(response) {
            results = response.data;
            console.log(results);
            for(var i = 0;i < results.length; i++){
              var image = $('<img>');
              var p = $('<p>');
              var p2 = $('<p>');
              var div = $('<div>');
              $(div).addClass('col-lg-5 col-md-5 col-sm-5 col-xs-5 gif')
              $(image).attr('src', results[i].images.fixed_height_still.url);
              $(image).attr('data-animated', results[i].images.fixed_height.url);
              $(image).attr('data-still',results[i].images.fixed_height_still.url);
              $(p).html('rating: ' +results[i].rating+ '<br>');
              $(p2).html('URL: '+"<a href=" +results[i].bitly_gif_url +">" + results[i].bitly_gif_url+"</a>");

              $(div).append(image);
              $(div).append(p);
              $(div).append(p2);
              $('#gifSpace').append(div);

            }

          });
    });
