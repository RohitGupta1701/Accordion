const qaList = [
    {
        id: 1,
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to create interactive effects within web browsers."
    },
    {
        id: 2,
        question: "What is React.js?",
        answer: "React.js is a JavaScript library for building user interfaces, particularly for single-page applications."
    },
    {
        id: 3,
        question: "What is the difference between HTML and CSS?",
        answer: "HTML is used to structure content on the web, while CSS is used to style and layout web pages."
    },
    {
        id: 4,
        question: "What is a REST API?",
        answer: "A REST API is an application programming interface that uses HTTP requests to access and use resources."
    },
    {
        id: 5,
        question: "What is the MERN stack?",
        answer: "The MERN stack consists of MongoDB, Express.js, React.js, and Node.js, used for building full-stack web applications."
    }
];


const addData = document.querySelector('.content')
//   console.log(addData)
function accordianFunction() {
    addData.innerHTML = qaList.map((element) => `
      <div class ="accordian_item">
        <div class="accordian_title">
        <h3>${element.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordian_content">
            <p>${element.answer}</p>
          </div>
      </div>
     `).join(" ")
}

accordianFunction();

const getAccordianTitles = document.querySelectorAll('.accordian_title');
console.log("=================================")
console.log(getAccordianTitles);
console.log("=================================")

getAccordianTitles.forEach(currentItem =>{
    currentItem.addEventListener("click", (event)=>{
        if(currentItem.classList.contains("active")){
            currentItem.classList.remove("active")
        }else{
            let getAlreadyaddedActiveClasses = document.querySelectorAll(".active");
            getAlreadyaddedActiveClasses.forEach(currentActiveItem =>{
                currentActiveItem.classList.remove("active");
            });
         currentItem.classList.add("active")
        }
    })
})
const addshow = document.querySelectorAll('accordian_title')
console.log(addData)