let form=document.querySelector("form");


let signupdetails=JSON.parse(localStorage.getItem("signup")) || []

form.addEventListener("submit",function(e){
    e.preventDefault()
    if(signupdetails.length===0){
        alert("No user till now")
        return
    }
    let obj={
        email:form.email.value,
        password:form.password.value,
    }
    let flag=false;
    signupdetails.forEach(function(e,i){
        if(e.email===obj.email && e.password===obj.password){
            localStorage.setItem("login",JSON.stringify(e));
            flag=true
            alert("Welcome "+e.name)
            window.location.href="index.html"
        }
        
    })
    if(flag===false){
        alert("User Does'nt Exist")
    }

})