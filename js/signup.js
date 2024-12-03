let nameSignUp=document.getElementById("name");
let mailSignUp=document.getElementById("mail")
let passSignUp=document.getElementById("pass");
let msg=document.getElementById("msg");
let msg2=document.getElementById("msg2");
let msg3=document.getElementById("msg3");
let signUpInfo=[];

let signUpBtn=document.getElementById("signUp");

function getUsers(){
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users){
    localStorage.setItem('users',JSON.stringify(users));
}




signUp.addEventListener('click',function(){

let signUpData={
    name:nameSignUp.value,
    mail:mailSignUp.value,
    pass:passSignUp.value
};


if(!signUpData.name || !signUpData.mail||!signUpData.pass){
    msg.classList.remove('d-none');
    return;
  }




 const users = getUsers();
 

let emailExists=false;
 
for(let user of users){
    if(user.mail===signUpData.mail){
        emailExists=true;
       
        break;
    }
}
if(emailExists){
msg2.classList.remove('d-none');
return;
}

users.push(signUpData);
saveUsers(users);
msg3.classList.remove('d-none');
msg.classList.add('d-none');
});

   

    




