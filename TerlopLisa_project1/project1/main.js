//username and password arrays
var usersArray = ["lterlop1","jessG1","tjC1","danS1"];
var heading2 = document.getElementById("heading2");
var password = "javaScriptApp";
var signInButton = document.getElementById("signInButton").onclick = SignIn;
function SignIn()
{
    //Ask user for their username and password
     var user = prompt("Username: ");
     var pass = prompt("Password: ");

    //Loop through the usernames and passwords in the arrays
    for(var i = 0; i < usersArray.length; i++)
    {
        //checking if the username and password matched elements in array
        if (user === usersArray[i] && pass === password)
        {
            //feedback message for user
            heading2.innerText = "Welcome back to myCollectible!";
            heading2.style.color = "blue";
            break;
        }
        else
        {
            //Error message
            heading2.innerText = "Please try logging in again.";
            heading2.style.color = "red";

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
    heading2.innerText = "Sign up successful! Welcome to myCollectible";
    heading2.style.color = "blue";
}