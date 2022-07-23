let signupdetails=JSON.parse(localStorage.getItem("signup"))||[];


let signupbtn=document.querySelector("#signbtn")
let checkbx=document.getElementById("checkbx").value
signupbtn.addEventListener("click",function(e){
    let obj={
        name:document.getElementById("Name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("pass").value,
    }
    if(obj.name =="" || obj.email=="" || obj.password==""||checkbx==false){
        alert("Please fill required Information")
        return
    }
if(signupdetails.forEach(function(e,i){
    if(e.name==obj.name ){
        alert("user already Exists with this name")
        return
    }
    else if(e.password==obj.password){
        alert("user already exists with these details")
        return
    }
    
})){
    return
}
    
    signupdetails.push(obj)
    localStorage.setItem("signup",JSON.stringify(signupdetails))
    
})

