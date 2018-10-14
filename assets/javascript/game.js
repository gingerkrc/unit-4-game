 // Set the target value to random number between 19 and 120
var targetValue = Math.floor(Math.random() * 120) + 19;
$('#targetValue-text').text(targetValue);


// Set coin values to random number between 1 and 12
var coin1 = Math.floor(Math.random() * 12) + 1;
var coin2 = Math.floor(Math.random() * 12) + 1;
var coin3 = Math.floor(Math.random() * 12) + 1;
var coin4 = Math.floor(Math.random() * 12) + 1;

// Set global variables for values to be determined based on game play
var wins = 0;
var losses = 0;
var playerValue = 0;

// Loop to create coin for value
    var coinArray = [coin1, coin2, coin3, coin4];
    for (var i = 0; i < coinArray.length; i++) {
        
 // Add coin image for each iteration
    var coinImage = $("<img>");

// Add coin-image class
    coinImage.addClass("coin-image");

// Link to coin image source and assign value from coinArray

    coinImage.attr("src", "assets/images/coin-" + (i+1) + ".jpg");
    coinImage.attr("data-coinvalue", coinArray[i]);

// Append coin image
    $("#coins").append(coinImage);

}

// Create click event for each coin
// Convert string into number
  $(".coin-image").on("click", function() {

    var coinValue = ($(this).attr("data-coinvalue"));
    coinValue = parseInt(coinValue);
    
    playerValue += coinValue;

// add player value to html text
    $("#playerValue-text").text(playerValue);

// Increase wins if player value matches target value
    if (playerValue === targetValue) {
        wins++;
        $("#wins").text(wins);
        targetValue = Math.floor(Math.random() * 120) + 19;
        $('#targetValue-text').text(targetValue);
        playerValue = 0;
        $("#playerValue-text").text(playerValue);
                
// Add to losses if player goes over target value
    }
    else if (playerValue > targetValue) {
        losses++;
        $("#losses").text(losses);
        targetValue = Math.floor(Math.random() * 120) + 19;
        $('#targetValue-text').text(targetValue);
        playerValue = 0;
        $("#playerValue-text").text(playerValue);
        
    }

  });


  
