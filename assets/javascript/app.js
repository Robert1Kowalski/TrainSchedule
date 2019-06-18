// var firebaseConfig = {
//     apiKey: "AIzaSyDs48iyvzn8mRjUPVTzf5MDJzYVHnTPt_Q",
//     authDomain: "trainschedule-db7cb.firebaseapp.com",
//     databaseURL: "https://trainschedule-db7cb.firebaseio.com",
//     projectId: "trainschedule-db7cb",
//     storageBucket: "trainschedule-db7cb.appspot.com",
//     messagingSenderId: "704800903028",
//     appId: "1:704800903028:web:70e0db62c048588d"
//   };
  // Initialize Firebase
  

  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

  var database=firebase.database;


//Build Variables 
var trainName = "";
var destination = "";
var firstTrain = 0;
var frequeny =0;
var currentTime = moment()


//update the clock
setInterval(function () {
    $("#current-time").html(moment(moment()).format("hh:mm:ss"))
}, 1000);

//Button For New Trains
$("#submit").on("click", function (event) {
    event.preventDefault();
        
        trainName = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#firstTrain").val().trim();
        frequeny = $("#frequency").val().trim();
// clear textbozes

$("#trainName").val();
$("#destination").val();
$("#firstTrain").val();
$("#frequency").val();


//push to database

database.ref().push({
    trainName: trainName,
    destination: destination,
    fristTrain: firstTrain,
    frequency: frequecy
});
});



//add button for trains 
//clear text boxes 
//push to databse
//calcualte 