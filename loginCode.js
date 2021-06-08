function checkCreds(){
    console.log("checkCreds started"); //Starts the process of checking the credentials to make sure it meets the parameters
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName
    var badgeNumb = document.getElementById("badgeID").value;

    //validate fullname
    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginsStatus").innerHTML = "Invalid Full Name, please resubmit"; //tells the user if the full name is over 20 characters 
    }else if(badgeNumb > 999 || badgeNumb < 1){ //Validates that the badge Number has to be below 999 but above 1
        document.getElementById("loginsStatus").innerHTML = "Invalid badge number, please resubmit"; //tells the user if the badge number is not 3 digits that it's invalid 
    }else{
        console.log("submission passes!");
        alert("Access Granted! Welcome, " + fullName);
        location.replace("UATSpace.html");
    }


}