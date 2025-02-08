let form=document.getElementById("form");
console.log(form);

form.addEventListener("submit",(e)=>{
  e.preventDefault;
  let fname=document.getElementById("fname").value;
  let mob=document.getElementById("mob").value;
  let email=document.getElementById("email").value;
  let pwd=document.getElementById("pwd").value;
  let cpw=document.getElementById("cpw").value;

  if(fname=='' || mob==''||email==''||pwd==''||cpw==''){
    alert("you not enter the deteles");
  }
  else if (pw!==cpw){
    alert("password not maching");
  }
  else{
    alert("form submited successfully")
    console.log(fname,mob,email,pwd,cpw);
    localStorage.setItem('username',email);
    localStorage.setItem('password',pwd);

    window.open("/login.html")
    window.location.reload(reload);
  }


})