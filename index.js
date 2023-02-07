function ValidateEmail(input) {

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.value.match(validRegex)) {
        alert("Valid email address!");
        document.form1.input.focus();
        return true;

    } else {
        alert("Invalid email address!");
        document.form1.input.focus();
        return false;
    }
}


function ValidatePassword(password)
{
    var passformat = /^(?=.*\d)(?=.*[!@#$%^&*_()-+=<>])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(password.value.match(passformat))
    {
        alert("Valid Password!");
        document.form1.password.focus();
        return true;
    }
    else
    {
        alert("Invalid Password!");
            document.form1.password.focus();
        return false;
    } 
}
