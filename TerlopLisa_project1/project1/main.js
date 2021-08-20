//Array of users
const usernames = ["lterlop1","jessG1","tjC1"];
const passwords = ["passCode1","passCode2","passCode3","passCode4"]

//Prompt asking user if they have an account or not
let accountCheck = prompt("Do you already have an account? Yes/No");
//Check to make sure the user only enters "yes" or "no"
while(accountCheck != "yes" && accountCheck != "no")
{
    accountCheck = prompt("Please type yes or no only. Do you already have an account? Y/N");
}
//need conditional for if the user has an account then SignIn will run, if not SignUp will run
if(accountCheck == "yes")
{
    SignIn(usernames,passwords);
}
else
{
    let user;
    let password;
    SignUp(user,password);
}

function SignIn(username,password)
{
    //Ask user for their username and password
    let user = prompt("Username: ");
    let usersPassword = prompt("Password: ");
    //Loop through the usernames and passwords in the arrays
    for(var i=0; i<usernames.Length; i++)
    {

        if((username === usernames[i]) &&(password === passwords[i]))
        {
            console.log("You have successfully logged in");
        }
        else
        {
            console.log("Please try logging in again");
        }
    }

}
function SignUp()
{
    //Have user type in a username
    let getUsername = prompt("Enter a username: ");
    //Validate not left blank
    while(getUsername === "")
    {
        getUsername = prompt("Please enter a username and do not leave blank. Username: ");
    }
    //Have user type in a password
    let getPassword = prompt("Password: ");
    //Validate not left blank
    while(getPassword === "")
    {
        getPassword = prompt("Please enter a password and do not leave blank. Password: ");
    }
    console.log("Username and password created!");
}