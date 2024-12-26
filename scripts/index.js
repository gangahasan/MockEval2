
let form = document.getElementById("form");
form.addEventListener("submit", function (event){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

   if (email === "empher@gmail.com" && password === "empher@123") {

    alert("Login Success, you are redirecting to quiz page");

    window.location.href = "quiz.html";
   }
   else{
    alert("Invalid credentials. Please try again.");
   }
})