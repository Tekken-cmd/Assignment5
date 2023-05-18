// Student name: Atakhanov Akbarjon
// ID: 18012806

/*******************************************  Answer 1  ***********************************************/ 
var answer1 = document.createElement("h1");
answer1.innerText = "Answer 1";
document.body.appendChild(answer1);

const time = new Date();
const day = time.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hour = time.getHours();
const currentTime = "Time: " + time.getHours() + ":" + time.getMinutes();
const currentDay = dayNames[day];

var myDay = document.createElement("h2");
myDay.innerText = "Day: " + currentDay;
document.body.appendChild(myDay);

if (hour < 12) {
    var myHours = document.createElement("h2");
    myHours.innerText = currentTime + " AM";
    document.body.appendChild(myHours);
} else if (hour >= 12 && hour < 24) {
    var myHours = document.createElement("h2");
    myHours.innerText = currentTime + " PM";
    document.body.appendChild(myHours);
}

/*******************************************  Answer 2  ***********************************************/ 
var answer2 = document.createElement("h1");
answer2.innerText = "Answer 2";
document.body.appendChild(answer2);

const imgContainer = document.createElement("div");
imgContainer.classList.add("imgContainer");
document.body.appendChild(imgContainer);

const image = new Image();
image.src = "https://picsum.photos/200/300";

var myImage = document.createElement("img");
myImage.src = image.src;
imgContainer.appendChild(myImage);

myImage.onload = function(){
    var height = myImage.height;
    var width = myImage.width;
    
    document.querySelector("img").insertAdjacentHTML("afterend", "<h2>Height: " + height + "</h2>"); 
    document.querySelector("img").insertAdjacentHTML("afterend", "<h2>Width: " + width + "</h2>");
  }


/*******************************************  Answer 3  ***********************************************/ 
var answer3 = document.createElement("h1");
answer3.innerText = "Answer 3";
document.body.appendChild(answer3);

var num1 = document.createElement("input");
num1.type = "text";
num1.classList.add("input1")
var num2 = document.createElement("input");
num2.type = "text";
num2.classList.add("input2");

var valueButton = document.createElement("button");
valueButton.type = "submit";
valueButton.id = "valueButton";
valueButton.innerText = "Find Value";

document.body.appendChild(num1);
document.body.appendChild(num2);
document.body.appendChild(valueButton);

var value = document.createElement("h3");
    value.classList.add("myValue");
    document.body.appendChild(value);

document.getElementById("valueButton").addEventListener("click", function(){
    num1Value = document.getElementsByClassName("input1")[0].value;
    num2Value = document.getElementsByClassName("input2")[0].value;

    if ((num1Value >= 34 && num1Value <= 71) || (num2Value >= 34 && num2Value <= 71)) {
        value.innerText = "The value is: True";
    }
    else {
        value.innerText = "The value is: False";
    }
});


/*******************************************  Answer 4  ***********************************************/ 
document.getElementById("insertButton").addEventListener("click", function() {
    // Get the table
    var table = document.getElementById("myTable");
    
    // Create a new row
    var newRow = table.insertRow();
    
    // Create cells for the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    // Set sample values for the new row
    cell1.innerText = Math.floor(Math.random() * 10);
    cell2.innerText = Math.floor(Math.random() * 10);
    cell3.innerText = Math.floor(Math.random() * 10);
  });

/*******************************************  Answer 5  ***********************************************/ 
var answer5 = document.createElement("h1");
answer5.innerText = "Answer 5";
document.body.appendChild(answer5);

function extractSecondHalf(string) {
    var length = string.length;
    var startIndex = length / 2;
    var secondHalf = string.slice(startIndex);

    return secondHalf;
}

var fullString = document.createElement("h3");
fullString.innerText = "This is a javascript string";
document.body.appendChild(fullString);

var secondHalf = document.createElement("h3");
secondHalf.innerText = "Second half: " + extractSecondHalf(fullString.innerText);
document.body.appendChild(secondHalf);


/*******************************************  Answer 6  ***********************************************/ 
var answer6 = document.createElement("h1");
answer6.innerText = "Answer 6";
document.body.appendChild(answer6);

function checkDifference(array) {
    if (array.length < 2) {
        return false; 
    }

    var difference = Math.abs(array[0] - array[array.length - 1]);

    if (difference > 20) {
        return true;
    } else {
        return false;
    }
}
  
var myArray = document.createElement("p");
myArray.innerText = [8, 30, 50, 70, 33, 55];
document.body.appendChild(myArray);

var isDifferenceGreaterThan20 = document.createElement("p");
isDifferenceGreaterThan20.innerText = checkDifference(myArray.innerText);
document.body.appendChild(isDifferenceGreaterThan20);


/*******************************************  Answer 7  ***********************************************/ 
var answer7 = document.createElement("h1");
answer7.innerText = "Answer 7";
document.body.appendChild(answer7);

const sampleArray = [8, 30, 50, 70, 33, 55];
var randomIndex = Math.floor(Math.random() * sampleArray.length);

var randomElement = document.createElement("p");
randomElement.innerText = sampleArray[randomIndex];
document.body.appendChild(randomElement);


