

function error(){
    let inputsubmit = document.querySelector("input[type='submit']")
    let regex = new RegExp("[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+")
    let email=document.getElementById("email").value
    if (regex.test(email)){
        console.log("Email valide")
    }else{
        let input = document.querySelector("input[type='email']")
        input.classList.add("active")
        inputsubmit.disabled = true        
    }

    if (email===""){
        console.log("Enter your email")
        inputsubmit.disabled = true 
    }
}

function submit(){
    let form =document.querySelector("form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        error()                
    })
    
}
submit()
