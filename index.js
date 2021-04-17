var inquirer = require('inquirer');
var generateHTML = require('./src/page_template')



// 1. ask questions about the manager
// name, id, role, job, email
// fucntion createHtmlPage() {
//   return `
//   <!DOCTYPE html>
// <html>
//  <body>

// <div id="container" class="Container"></div>


// </body>
// </html>
// `  

//module.exports = createHTML;

// 1. cont'd ask for intern / engineer
// then give name, id, role, job, email

// 2. take the answers to the questions and create a card
// function that returns HTML

// function buildsList (responses)
// let cardList = ``;
// return responses.map((response) =>{
    // cardList = `div card
    // <div class="card">${responses.name}</div>  
    // <div>${responses.role}</div> 
    // <a href = "https github/username Here">${responses.email}</a> 
    // <a href = "mailto: {responses.email}">${responses.email}</a> 
    // /div` + cardList
// })
// return cardList


// inquirere.prompt()
// .then((responses) => {
    // 3. ccreateHtmlPage()
    // 4. let list = buildList(responses after inquirer promise)
    // 5. document.getElementById("container").append(list)
// })


