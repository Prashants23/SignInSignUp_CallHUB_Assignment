

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
	container.classList.add("right_active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right_active");
});

// function validateSignInForm(contact){
// //    console.log("inside validejhnmbuh");
// //    document.getElementsByClassName("signInForm").onsubmit= 
// // function validate(contact){
//     // var name = document.forms["signUpForm"]["Name"];               
//              var email = document.forms["signInForm"]["EMail"];
//         console.log("inside validate");
//   var pass= document.forms["signInForm"]["Password"]
//     // if (name.length == 0 || name.length > 200) {
//     //   alert ("You must enter a name.");
//     //   return false;
//     // }
  
//     if (email.value.length == 0 || email.length > 200) {
//       alert ("You must enter a email.");
//       return false;
//     }
  
//     if (pass.value.length == 0) {
//       alert ("You must enter a message.");
//       return false;
//     }
  
// return true;
//   }
   


function validateSignUpForm()
{
    // document.getElementsByClassName("signUpForm").onsubmit= 
    // function validate(connect){  
    //    var test= forms.connect;
        var name = document.forms["signUpForm"]["Name"];               
        var email = document.forms["signUpForm"]["Email"];    
        var password = document.forms["signUpForm"]["Password"];  
     
        if(name.value.length==0) 
        { document.getElementsByName("Name")[0].style.border=" 1px solid red";
            document.getElementsByClassName("name_error")[0].innerHTML="Name is required";
            document.getElementsByClassName("name_error")[0].style.color="red";
            // alert("name is required");
            valid= false;
        }
        else if(name.value.length<4)
        {  document.getElementsByName("Name")[0].style.border=" 1px solid red";
            document.getElementsByClassName("name_error")[0].innerHTML="Name should be more than 4 letters";
            document.getElementsByClassName("name_error")[0].style.color="red";
            // alert("name should be of atleast 5 charector");
            valid = false;
        }
   
        else if(email.value.length==0) 
        { document.getElementsByName("Email")[0].style.border=" 1px solid red";
            document.getElementsByClassName("email_error")[0].innerHTML="Email is required";
            document.getElementsByClassName("email_error")[0].style.color="red";
            // alert("email is required");
            // email.focus();
             valid=false;
        }
       else if(password.value.length==0) 
        { document.getElementsByName("Password")[0].style.border=" 1px solid red";
            document.getElementsByClassName("pass_error")[0].innerHTML="Password is required";
            document.getElementsByClassName("pass_error")[0].style.color="red";
            // alert("name is required");
             valid=false;
        }
        else if(password.value.length<4)
        {  document.getElementsByName("Password")[0].style.border=" 1px solid red";
            document.getElementsByClassName("pass_error")[0].innerHTML="Name should be more than 4 letters";
             document.getElementsByClassName("pass_error")[0].style.color="red";
            // alert("name should be of atleast 5 charector");
            valid= false;
        }
        else{
            valid=true;
        }
        return valid;
          
}

function validateSignInForm(){
    var email = document.forms["signInForm"]["Email"];    
    var password = document.forms["signInForm"]["Password"];  

    if(email.value.length==0)
    {
        console.log("in email");
        document.getElementsByClassName("EmailIn")[0].style.border=" 1px solid red";
        document.getElementsByClassName("emailIn_error")[0].innerHTML="Email is required";
        document.getElementsByClassName("emailIn_error")[0].style.color="red";
        valid=false;
    }

    else if(password.value.length==0)
    {
        document.getElementsByClassName("PasswordIn")[0].style.border=" 1px solid red";
        var passIn_error= document.getElementsByClassName("pass1_error")[0];
        passIn_error.innerHTML="Password is required";
        passIn_error.style.color="red";
        valid=false;
    }
    else{
        valid=true;
    }
    return valid;
}