let acceptedArr = [];
let rejectedArr = [];

let totalCount = document.getElementById("total-counter");
let acceptCount = document.getElementById("accept-counter");
let rejectCount = document.getElementById("reject-counter");

// Returns an HTML collection of the children, on which we apply length method.
let noOfCards = document.getElementById("job-cards").children.length;
console.log(noOfCards);

function countJobs(){
    totalCount.innerText = noOfCards;
    acceptCount.innerText = acceptedArr.length;
    rejectCount.innerText = rejectedArr.length;
}

const mainPage = document.getElementById("main-page");
const acceptPage = document.getElementById("accept-page");
const rejectPage = document.getElementById("reject-page");
function toggleTabs(id){
    // On each click, regardless of which button is clicked, set all buttons to default states.
    mainPage.classList.add("bg-transparent", "text-slate-700");
    acceptPage.classList.add("bg-transparent", "text-slate-700");
    rejectPage.classList.add("bg-transparent", "text-slate-700");
    // On each click, regardless of which button is clicked, remove the clicked state from every button
    mainPage.classList.remove("text-white", "bg-slate-700");
    acceptPage.classList.remove("text-white", "bg-slate-700");
    rejectPage.classList.remove("text-white", "bg-slate-700");
    // Add the clicked button to clicked state. Thus toggles.
    const selected = document.getElementById(id);
    selected.classList.remove("bg-transparent", "text-slate-700");
    selected.classList.add("text-white", "bg-slate-700");
}

countJobs();


// function deleteJobs(id) {
//     const card = event.target.closest(".card");
//     // hide the card
//     card.classList.add("hidden");
//     deletedArr.push(card);
//     // reduce counted by counter innertext - deletedArr length
//     const total = document.getElementById("total-counter").innerText;
//     document.getElementById("total-counter").innerText = total - deletedArr.length;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Page loaded");
//     let deletedArr = [];

//     document.getElementsByClassName("delete-btn").addEventListener("click", function (event) {
//         const card = event.target.closest(".card");
//         // hide the card
//         card.classList.add("hidden");
//         deletedArr.push(card);
//         // reduce counted by counter innertext - deletedArr length
//         const total = document.getElementById("total-counter").innerText;
//         document.getElementById("total-counter").innerText = total - 1;
//     })
//     document.getElementById("web-delete-btn").addEventListener("click", function (event) {
//         const card = event.target.closest(".card");
//         // hide the card
//         card.classList.add("hidden");
//         deletedArr.push(card);
//         // reduce counted by counter innertext - deletedArr length
//         const total = document.getElementById("total-counter").innerText;
//         document.getElementById("total-counter").innerText = total - 1;
//     })
    
// })