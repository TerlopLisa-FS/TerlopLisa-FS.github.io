//username and password arrays
var usersArray = {
    "lterlop1" : "passcode1",
    "jessG1" : "passcode2",
    "tjC1" : "passcode3",
    "danS1": "passcode4"};

var signInButton = document.getElementById("signInButton").onclick = SignIn;
function SignIn()
{
    //Ask user for their username and password
     var user = prompt("Username: ");
     var pass = prompt("Password: ");
     while(user == "" || pass == "")
     {
         alert("Please do not leave blank!");
         user = prompt("Username: ");
         pass = prompt("Password: ");
     }

    //Loop through the usernames and passwords in the arrays
    for(var i = 0; i < usersArray.length; i++)
    {
        //checking if the username and password matched elements in array
        if (user && pass === usersArray[i])
        {
            //feedback message for user
            document.getElementById("heading1").innerText = "Welcome back to myCollectible";
            document.getElementById("heading1").style.color = "blue";;
        }
        else
        {
            //Error message
            document.getElementById("heading2").innerText = "Please try logging in again";
            document.getElementById("heading2").style.color = "red";
        }

    }

}
var signUpButton = document.getElementById("signUpButton").onclick = SignUp;
function SignUp()
{
    //Have user type in a username
    let getUsername = prompt("Enter a username: ");
    //Validate not left blank
    while(getUsername === "")
    {
        //Display error message and reprompt user
        getUsername = prompt("Please enter a username and do not leave blank. Username: ");
    }
    //Have user type in a password
    let getPassword = prompt("Password: ");
    //Validate not left blank
    while(getPassword === "")
    {
        getPassword = prompt("Please enter a password and do not leave blank. Password: ");
    }
    //Feedback message for user
    document.getElementById("heading2").innerText = "Sign up successful! Welcome to myCollectible";
    document.getElementById("heading2").style.color = "blue";
}