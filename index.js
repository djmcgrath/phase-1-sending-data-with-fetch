// Add your code here

// document.addEventListener("DOMContentLoaded", (e)=>{
//     e.preventDefault()
//     submitData("stephen", "email@gmail.com")
// })
function submitData(name, email){
    // const obj1 = name.target.value
    // const obj2 = email.target.value
    fetch("http://localhost:3000/users", {
        method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name, 
            email: email
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.id)
        bdy = document.getElementsByTagName("body")
        console.log(bdy)
        newElement = document.createElement("h4")
        newElement.textContent = data.id
        
        document.addEventListener("DOMContentLoaded", (e)=>{
            e.preventDefault()
            bdy.append(newElement)
        })

    })
    .catch(e => console.error(e))
}
