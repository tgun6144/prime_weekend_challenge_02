/**
 * Created by Prime on 4/24/15.
 */
var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
console.log(people);

var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];
var team7 = [];
var team8 = [];
var team9 = [];
var team10 = [];

function resetArray (teamOne, teamTwo, teamThree, teamFour, teamFive, teamSix, teamSeven, teamEight, teamNine, teamTen) {
    var i;
    for ( i = 0; i < teamOne.length; i++ ){
        people.push(teamOne[i]);
        console.log(people);
    }
    teamOne.length = 0;
    for ( i = 0; i < teamTwo.length; i++ ){
        people.push(teamTwo[i]);
        console.log(people);
    }
    teamTwo.length = 0;
    for ( i = 0; i < teamThree.length; i++ ){
        people.push(teamThree[i]);
        console.log(people);
    }
    teamThree.length = 0;
    for ( i = 0; i < teamFour.length; i++ ){
        people.push(teamFour[i]);
        console.log(people);
    }
    teamFour.length = 0;
    for ( i = 0; i < teamFive.length; i++ ){
        people.push(teamFive[i]);
        console.log(people);
    }
    teamFive.length = 0;
    for ( i = 0; i < teamSix.length; i++ ){
        people.push(teamSix[i]);
        console.log(people);
    }
    teamSix.length = 0;
    for ( i = 0; i < teamSeven.length; i++ ){
        people.push(teamSeven[i]);
        console.log(people);
    }
    teamSeven.length = 0;
    for ( i = 0; i < teamEight.length; i++ ){
        people.push(teamEight[i]);
        console.log(people);
    }
    teamEight.length = 0;
    for ( i = 0; i < teamNine.length; i++ ){
        people.push(teamNine[i]);
        console.log(people);
    }
    teamNine.length = 0;
    for ( i = 0; i < teamTen.length; i++ ){
        people.push(teamTen[i]);
        console.log(people);
    }
    teamTen.length = 0;
    console.log(people);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$(document).ready(function(){

    $("#btn2").on('click', function(){
        console.log("btn2 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 10);
        team2 = people.splice(0, 10);
    });

    $("#btn3").on('click', function(){
        console.log("btn3 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 7);
        team2 = people.splice(0, 7);
        team3 = people.splice(0, 6);
        console.log(team1);
        console.log(team2);
        console.log(team3);
    });

    $("#btn4").on('click', function() {
        console.log("btn4 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 5);
        team2 = people.splice(0, 5);
        team3 = people.splice(0, 5);
        team4 = people.splice(0, 5);
    });

    $("#btn5").on('click', function() {
        console.log("btn5 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 4);
        team2 = people.splice(0, 4);
        team3 = people.splice(0, 4);
        team4 = people.splice(0, 4);
        team5 = people.splice(0, 4);
    });

    $("#btn6").on('click', function() {
        console.log("btn6 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 4);
        team2 = people.splice(0, 4);
        team3 = people.splice(0, 3);
        team4 = people.splice(0, 3);
        team5 = people.splice(0, 3);
        team6 = people.splice(0, 3);
    });

    $("#btn7").on('click', function() {
        console.log("btn7 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 3);
        team2 = people.splice(0, 3);
        team3 = people.splice(0, 3);
        team4 = people.splice(0, 3);
        team5 = people.splice(0, 3);
        team6 = people.splice(0, 3);
        team7 = people.splice(0, 2);
    });

    $("#btn8").on('click', function() {
        console.log("btn8 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 3);
        team2 = people.splice(0, 3);
        team3 = people.splice(0, 3);
        team4 = people.splice(0, 3);
        team5 = people.splice(0, 2);
        team6 = people.splice(0, 2);
        team7 = people.splice(0, 2);
        team8 = people.splice(0, 2);
    });

    $("#btn9").on('click', function() {
        console.log("btn9 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 3);
        team2 = people.splice(0, 3);
        team3 = people.splice(0, 2);
        team4 = people.splice(0, 2);
        team5 = people.splice(0, 2);
        team6 = people.splice(0, 2);
        team7 = people.splice(0, 2);
        team8 = people.splice(0, 2);
        team9 = people.splice(0, 2);
    });

    $("#btn10").on('click', function() {
        console.log("btn10 works!");
        people = shuffleArray(people);
        team1 = people.splice(0, 2);
        team2 = people.splice(0, 2);
        team3 = people.splice(0, 2);
        team4 = people.splice(0, 2);
        team5 = people.splice(0, 2);
        team6 = people.splice(0, 2);
        team7 = people.splice(0, 2);
        team8 = people.splice(0, 2);
        team9 = people.splice(0, 2);
        team10 = people.splice(0, 2);
    });

    $('#refresh').on('click', function(){
        people.length = 0;
        //resetArray(team1, team2, team3, team4, team5, team6, team7, team8, team9, team10);
        //console.log(people);
        //console.log(people.length);
        //if (team10.length != 0){
            $('.team1').prepend("<li class ='header'>Team 1</li>");
            for (var j = 0; j < team1.length; j++){
                $('.team1').append("<li class='newBullet'>" + team1[j] + "</li>");
            }
            $('.team2').prepend("<li class='header'>Team 2</li>");
            for (var j = 0; j < team2.length; j++){
                $('.team2').append("<li class='newBullet'>" + team2[j] + "</li>");
            }
            $('.team3').prepend("<li class='header'>Team 3</li>");
            for (var j = 0; j < team3.length; j++){
                $('.team3').append("<li class='newBullet'>" + team3[j] + "</li>");
            }
            $('.team4').prepend("<li>Team 4</li>");
            for (var j = 0; j < team4.length; j++){
                $('.team4').append("<li class='newBullet'>" + team4[j] + "</li>");
            }
            $('.team5').prepend("<li>Team 5</li>");
            for (var j = 0; j < team5.length; j++){
                $('.team5').append("<li class='newBullet'>" + team5[j] + "</li>");
            }
            $('.team6').prepend("<li>Team 6</li>");
            for (var j = 0; j < team6.length; j++){
                $('.team6').append("<li class='newBullet'>" + team6[j] + "</li>");
            }
            $('.team7').prepend("<li>Team 7</li>");
            for (var j = 0; j < team7.length; j++){
                $('.team7').append("<li class='newBullet'>" + team7[j] + "</li>");
            }
            $('.team8').prepend("<li>Team 8</li>");
            for (var j = 0; j < team8.length; j++){
                $('.team8').append("<li class='newBullet'>" + team8[j] + "</li>");
            }
            $('.team9').prepend("<li>Team 9</li>");
            for (var j = 0; j < team9.length; j++){
                $('.team9').append("<li class='newBullet'>" + team9[j] + "</li>");
            }
            $('.team10').prepend("<li>Team 10</li>");
            for (var j = 0; j < team10.length; j++){
                $('.team10').append("<li class='newBullet'>" + team10[j] + "</li>");
            }
        //}
        resetArray(team1, team2, team3, team4, team5, team6, team7, team8, team9, team10);
    });


});