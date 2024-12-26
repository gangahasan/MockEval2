
const navbar=()=>{

    let card =`<style>
    #navbar{
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:teal;
    padding:10px;
    }
    #navbar a{
    text-decoration:none;
    color:white;
    font-size:20px;
    }
    </style>
    <nav id="navbar">
    <a href="./index.html">Home</a>
    <a href="./quiz.html">Quiz</a>
    <a href="./questions.html">Questions</a>
    </nav>`;

     document.getElementById("nav").innerHTML = card; 
}
navbar();