java.js


!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial
scale=1.0"> 
    <title>Number Validation</title> 

</head> 
<body> 
    <h2>JavaScript Number Loop</h2> 
    <p id="message"></p> 
 
    <script> 
        var num; 
        do { 
             
            num = parseInt(window.prompt("Enter a number:")); 
 
            
            if (num > 15) { 
                document.getElementById("message").innerHTML = "Number 
is greater than 15!"; 
                break;   
            }  
            
            else { 
                alert("Number is less than or equal 15. please try again 
! ") 
              
            } 
        } while (num <= 15);   
    </script> 
</body> 
</html>