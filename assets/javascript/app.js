// Initalize Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyDOjrJyxmdMpRNz-oR6LgT-n9Y8BINGDcA",
    authDomain: "trainschedule-e29a5.firebaseapp.com",
    databaseURL: "https://trainschedule-e29a5.firebaseio.com",
    projectId: "trainschedule-e29a5",
    storageBucket: "trainschedule-e29a5.appspot.com",
    messagingSenderId: "160276224936"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database=firebase.database;


//Build Variables 
var trainName = "";
var destination = "";
var firstTrain = 0;
var frequeny =0;
var currentTime = moment()


//update the clock




//add button for trains 
//clear text boxes 
//push to databse
//calcualte 