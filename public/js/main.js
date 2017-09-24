$( document ).ready(function() {
//Start of ready-wrapper
console.log( "Loading..." );

    // Reference to database
    var database = firebase.database();


    // When clicking on the subscribe button
    $( "#subscribe-btn" ).click(function() {
    	console.log('schyrra rå');
    	var input = document.getElementById("user-input").value;
    	var newPostKey = firebase.database().ref().child('interest-signup').push().key;
    	var updates = {};
    	updates['/interest-signup/emails/' + newPostKey] = input;

		firebase.database().ref().update(updates);
        loadPage(signup.html);

    });


    console.log( "main.js is ready!" );
// End of ready-wrapper
});


