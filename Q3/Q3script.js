var NUM1;
do {
    NUM1 = parseInt(window.prompt("Enter a number:"));

    if (NUM1 > 15) {
        document.getElementById("M1").innerHTML = "Number is greater than 15!";
        break;
    } else {
        alert("Number is less than or equal to 15. Please try again!");
    }
} while (NUM1 <= 15);