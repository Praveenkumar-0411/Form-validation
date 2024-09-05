
const nameInput=document.querySelector('#name');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const contact=document.querySelector('#contact');
const message=document.querySelector('#message');
const success=document.querySelector('#success');
const errorNodes=document.querySelectorAll('.error');

function validateForm()
{
    clearMessage();
    let errorFlag=false;

    if(nameInput.value=="")
    {
        errorNodes[0].innerText="*Please Enter your Fullname";
        errorFlag=true;
        setError(nameInput)
    }
    else
    {
        setSuccess(nameInput)
    }
    
    if(email.value=="")
    {
      errorNodes[1].innerText= "*Please Enter your Email address";
      errorFlag = true;
      setError(email);
    }

    else if(!emailValid(email.value))
    {
        errorNodes[1].innerText="*invalid email";
        errorFlag=true;
        setError(email)
    }
    else
    {
        setSuccess(email)
    }

    if (password.value=="")
    {
        errorNodes[4].innerText="*Please Enter Valid password";
        errorFlag = true;
        setError(password)
    }
    else if(password.value.length<8)
    {
        errorNodes[4].innerText = "*Please Enter atleast 8 characters";
        errorFlag =true;
        setError(password);
    }
    else
    {
        setSuccess(password)
    }

    if(contact.value=="")
    {
        errorNodes[2].innerText= "*Please enter 10 digit contact number";
        errorFlag = true;
        setError(contact)
    }

    else if (contact.value.length!=10)
    {
      errorNodes[2].innerText = "*Please Enter valid contact number";
      errorFlag = true;
      setError(contact);
    }
    else
    {
        setSuccess(contact)
    }

    if(message.value=="")
    {
        errorNodes[3].innerText="*Please enter atleast 25 characters";
        errorFlag=true;
        setError(message)
    }
    else
    {
    setSuccess(message)
    }


    if(errorFlag==false)
    {
          success.innerHTML ="Congratulations!You have successfully submitted your form";
          nameInput.value = "";
          email.value = "";
          password.value = "";
          contact.value = "";
          message.value = "";
          nameInput.style.borderColor = "purple";
          email.style.borderColor = "purple";
          password.style.borderColor = "purple";
          contact.style.borderColor = "purple";
          message.style.borderColor = "purple";
        setTimeout(()=>{
            success.innerHTML=""
            
        }, 3000);
    }

}

function clearMessage()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText="";
    }
}

function emailValid(k1)
{
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(k1);
}

function setError(element)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    //errorElement.innerHTML = message;
    inputGroup.classList.add("fail");
    inputGroup.classList.remove("pass");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  //errorElement.innerHTML = "";
  inputGroup.classList.add("pass");
  inputGroup.classList.remove("fail");
}