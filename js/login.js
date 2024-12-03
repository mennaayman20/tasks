let mailInput=document.getElementById("loginMail");
let passInput=document.getElementById("loginPass");
let loginBtn=document.getElementById("loginBtn");
let signUp=document.getElementById("signUp");
let msg=document.getElementById("msg");
let msg2=document.getElementById("msg2");
let msg3=document.getElementById("msg3");

var storageInfo=[];


function getUsers(){
    return JSON.parse(localStorage.getItem('users')) || []
}

function saveUsers(users){
localStorage.setItem('users',JSON.stringify(users))
}


loginBtn.addEventListener('click',function(){

  var loginInfo={

mail:mailInput.value,
pass:passInput.value
  
};

if(!loginInfo.mail || !loginInfo.pass){
    msg.classList.remove('d-none');
return;
}

const users = getUsers();

const matchedUsers = users.filter(user => user.mail === loginInfo.mail);
if (matchedUsers.length > 0) {

    msg2.classList.remove('d-none');
    msg.classList.add('d-none');
    window.location.href='index3.html'
  } else {
    msg3.classList.remove('d-none');
  }

  
});


