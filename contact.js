function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        number: document.getElementById("number").value,
        user_name: document.getElementById("user_name").value,
        reason:document.getElementById("reason").value,
    }
    emailjs.send("service_jivc4ke","template_qi91vtk",params).then(alert("email sent"))
}