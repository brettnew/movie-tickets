function Ticket(time, age, movie){
  this.timeTicket = time;
  this.ageTicket = age;
  this.nameTicket = movie;
}

var name;
var rating;
var release;
var movie = [name, rating, release];

// function Movie(name, rating, release){
//   this.movieName = name;
//   this.movieRating = rating;
//   this.movieRelease = release;
// }


$(document).ready(function(){
  $("form#movie-ticket").submit(function(event){
    event.preventDefault();
    var inputName = $("select.movie-name").val();
    var inputTime = parseInt($("select.movie-time").val());
    var inputAge = parseInt($("input.movie-age").val());

    movie[0] = inputName;

    if (inputName === "The Conjuring 2"){
      movie[1] = "R";
    } else if (inputName === "Finding Dory"){
      movie[1] = "PG";
    } else {
      movie[1] = "PG-13";
    }

    console.log(movie[1]);

    if (inputName === "Ghostbusters"){
      movie[2] = "old";
    } else {
      movie[2] = "recent";
    }

    // console.log(release);
    var moviePrice = 6
    if (movie[2] === "recent"){
      var moviePrice = moviePrice + 3;
    } else {
      var moviePrice = moviePrice;
    }
    console.log(moviePrice);

    if (inputTime < 6){
      var moviePrice = moviePrice - 1;
    } else {
      var moviePrice = moviePrice + 2;
    }
    console.log(moviePrice);

    if ((inputAge < 18) && (movie[1] === "R")){
      alert("You cannot purchase a ticket for this movie.");
      return false;
    } else if (inputAge < 6){
      var moviePrice = moviePrice - 1;
    } else if (inputAge > 59){
      var moviePrice = moviePrice - 1;
    }

    console.log(movie);
    console.log(moviePrice);

    var movieTicket = new Ticket(inputTime, inputAge, movie);

    console.log(movieTicket);

    $(".movie-result-name").text(inputName);
    $(".movie-result-time").text(inputTime);
    $(".movie-result-price").text(moviePrice);


    $("#show-ticket").show();


    $("select.movie-name").val("");
    $("select.movie-time").val("");
    $("input.movie-age").val("");


    // var movie = [inputName, 'rating', 'release'];
    // var newMovie = new Movie(inputName, "pg13", "recent");


    // var movieTicket = new Ticket(inputTime, inputAge, movie);
    //
    // console.log(movieTicket);
    // console.log(movieTicket.newMovie.movieRating);
  });
});
