let form = document.getElementById('form')
console.log(form)
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == "" || password == ""){
        alert("both feild should be filled 🤷‍♂️")
         emoji.innerHTML = "🤦‍♂️"
    }else{
        console.log(username, password)
    }
})

let show_pwd = document.getElementById('show_pwd')
 let password = document.getElementById('password')
 let emoji = document.getElementById('emoji')

 show_pwd.addEventListener("click", ()=>{
    if(password.value != ""){

        if(password.type=="password"){
            password.type = "text"
            show_pwd.innerHTML = "hide password"
            emoji.innerHTML = "🙈"

        }else{
            password.type = "password"
            show_pwd.innerHTML = "show password"
            emoji.innerHTML = "🐵"

        }

    }else{
        alert("please fill the password")
    }
 })


 let username = document.getElementById('username');
 let erro1 = document.getElementById('error1')

 username.addEventListener("keydown",()=>{

    let validation = username.value.length>=8;
    if(validation){
        username.classList.add('success')
        username.classList.remove('warning')
        erro1.innerHTML = ""


    }else{
        username.classList.add('warning')
        username.classList.remove('success')
        erro1.innerHTML = "please enter minimum 8 char"



    }


 })




 let error2 = document.getElementById('error2')

 password.addEventListener("keydown",()=>{

    let validation = password.value.length>=8;
    if(validation){
        password.classList.add('success')
        password.classList.remove('warning')
        error2.innerHTML = ""


    }else{
        password.classList.add('warning')
        password.classList.remove('success')
        error2.innerHTML = "please enter minimum 8 char"



    }


 })