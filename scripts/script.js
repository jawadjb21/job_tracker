let acceptedArr = [];
let rejectedArr = [];
// Counter for header
let totalCount = document.getElementById("total-counter");
let acceptCount = document.getElementById("accept-counter");
let rejectCount = document.getElementById("reject-counter");

// Main container for delegation.
const mainContainer = document.querySelector("main");

// These are the views when we click on the tabs
const allPage = document.querySelector("#all-page");
const accepted = document.querySelector("#accepted-jobs");
const rejected = document.querySelector("#rejected-jobs");

// These are the tab buttons
const mainPage = document.getElementById("main-page-tab-btn");
const acceptPage = document.getElementById("accept-page-tab-btn");
const rejectPage = document.getElementById("reject-page-tab-btn");

// Returns an HTML collection of the children, on which we apply length method.
let noOfCards = document.getElementById("job-cards").children.length;
console.log(noOfCards);

// Job Counter
function countJobs(){
    totalCount.innerText = noOfCards;
    acceptCount.innerText = acceptedArr.length;
    rejectCount.innerText = rejectedArr.length;
}
countJobs();


// Render Accepted page.
mainContainer.addEventListener("click", function(event){
    if(event.target.classList.contains('accept-btn')){
        const card = event.target.closest(".card");
        console.log(card);
        const company = card.querySelector(".company");
        const post = card.querySelector(".job-post");
        const info = card.querySelectorAll(".job-info");
        const status = card.querySelector(".job-status");
        const description = card.querySelector(".job-description");

        const job = {company: company, post: post, info: info, status: status, desc: description};

        const alreadyApplied = acceptedArr.find(item=> item.company === job.company);
        if(!alreadyApplied){
            acceptedArr.push(job);
            
            // Set the status on the homepage itself to "Accepted".
            status.innerText = "Accepted";
    
            // Increment counter
            acceptCount.innerText = acceptedArr.length;
        }

        rejectedArr = rejectedArr.filter(item=> item.company !== job.company);
        // Decrement rejected counter
        rejectCount.innerText = rejectedArr.length;

        console.log(job);
        
        // Render accepted tab
        renderAccepted()
    }
    else if(event.target.classList.contains('reject-btn')){
        const card = event.target.closest(".card");
        console.log(card);
        const company = card.querySelector(".company");
        const post = card.querySelector(".job-post");
        const info = card.querySelectorAll(".job-info");
        const status = card.querySelector(".job-status");
        const description = card.querySelector(".job-description");

        const job = {company: company, post: post, info: info, status: status, desc: description};

        const alreadyRejected = rejectedArr.find(item=> item.company === job.company);
        if(!alreadyRejected){
            rejectedArr.push(job);
            // Set the status on the homepage itself to "Accepted".
            status.innerText = "Rejected";
            
            console.log(job);

            // Increment counter
            rejectCount.innerText = rejectedArr.length;
        }
        acceptedArr = acceptedArr.filter(item=> item.company !== job.company);
        // Decrement rejected counter
        acceptCount.innerText = acceptedArr.length;


        // Render rejected tab
        renderRejected()
    }
})


function renderAccepted(){
    accepted.innerHTML = '';
    for(let acceptedJob of acceptedArr){
        let div = document.createElement("div");
        div.className = "grid grid-cols-1 justify-between items-center gap-5";
        div.innerHTML = `
            <div id="" class="card bg-transparent text-slate-950 w-full shadow-2xl">
                    <div class="card-body flex flex-col justify-start items-start text-left pl-5">
                        <div id="card-header" class="flex justify-between items-center flex-1 w-full">
                            <div>
                                <h4 class="card-title company">${acceptedJob.company.innerText}</h4>
                                <span class="job-post">${acceptedJob.post.innerText}</span>
                            </div>
                            <button class="btn btn-ghost delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                        <ul class="flex flex-col md:flex-row lg:flex-row list-disc list-inside gap-3">
                            <li class="job-info">${acceptedJob.info[0].innerText}</li>
                            <li class="job-info">${acceptedJob.info[1].innerText}</li>
                            <li class="job-info">${acceptedJob.info[2].innerText}</li>
                        </ul>
                        <button class="btn btn-outline job-status">Accepted</button>
                        <p class="job-description">${acceptedJob.desc.innerText}</p>
                        <div class="flex justify-start items-center gap-5">
                            <button class="accept-btn btn btn-outline text-green-500">Accept</button>
                            <button class="reject-btn btn btn-outline text-red-500">Reject</button>
                        </div>
                    </div>
                </div>
        `
        accepted.appendChild(div);
    }
}

function renderRejected(){
    rejected.innerHTML = '';
    for(let rejectedJob of rejectedArr){
        let div = document.createElement("div");
        div.className = "grid grid-cols-1 justify-between items-center gap-5";
        div.innerHTML = `
            <div id="" class="card bg-transparent text-slate-950 w-full shadow-2xl">
                    <div class="card-body flex flex-col justify-start items-start text-left pl-5">
                        <div id="card-header" class="flex justify-between items-center flex-1 w-full">
                            <div>
                                <h4 class="card-title company">${rejectedJob.company.innerText}</h4>
                                <span class="job-post">${rejectedJob.post.innerText}</span>
                            </div>
                            <button class="btn btn-ghost delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                        <ul class="flex flex-col md:flex-row lg:flex-row list-disc list-inside gap-3">
                            <li class="job-info">${rejectedJob.info[0].innerText}</li>
                            <li class="job-info">${rejectedJob.info[1].innerText}</li>
                            <li class="job-info">${rejectedJob.info[2].innerText}</li>
                        </ul>
                        <button class="btn btn-outline job-status">Rejected</button>
                        <p class="job-description">${rejectedJob.desc.innerText}</p>
                        <div class="flex justify-start items-center gap-5">
                            <button class="accept-btn btn btn-outline text-green-500">Accept</button>
                            <button class="reject-btn btn btn-outline text-red-500">Reject</button>
                        </div>
                    </div>
                </div>
        `
        rejected.appendChild(div);
    }
}
// Toggle Tabs
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

    // Show the page clicked on.
    if(id.toLowerCase() === 'main-page-tab-btn'){
        allPage.classList.remove("hidden");
        rejected.classList.add("hidden");
        accepted.classList.add("hidden");        
    }
    if(id.toLowerCase() === 'accept-page-tab-btn'){
        allPage.classList.add("hidden");
        rejected.classList.add("hidden");
        accepted.classList.remove("hidden");        
    }
    if(id.toLowerCase() === 'reject-page-tab-btn'){
        allPage.classList.add("hidden");
        accepted.classList.add("hidden");
        rejected.classList.remove("hidden");        
    }
}


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