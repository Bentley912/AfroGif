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



    $(".gifRequest").on("click", function() {
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
          });
    });
  });
