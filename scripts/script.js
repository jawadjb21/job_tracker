let acceptedArr = [];
let rejectedArr = [];

// Counter for header
let totalCount = document.getElementById("total-counter");
let acceptCount = document.getElementById("accept-counter");
let rejectCount = document.getElementById("reject-counter");
let currentTabCount = document.getElementById("current-tab-count");

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

// Job card for deleting purposes
const jobCards = document.getElementById("job-cards");
const noJobs = document.getElementById("no-jobs");

// Returns an HTML collection of the children, on which we apply length method.
let noOfCards = document.getElementById("job-cards").children.length;

// Tab tracking for re-rendering. Once a tab is clicked, variable is changed, and that page we're currently on is re-rendered.
let currentTab = "main-page-tab-btn";

// Job Counter
function countJobs() {
    totalCount.innerText = noOfCards;
    acceptCount.innerText = acceptedArr.length;
    rejectCount.innerText = rejectedArr.length;
}
countJobs();


// No. of jobs on each page.
function showIndividualJobCount(number) {
    currentTabCount.innerText = `${number} Jobs`
}


// Accepted Tab Implementation
function renderAccepted() {
    accepted.innerHTML = '';

    // When rendering, if no jobs, show this page. Else, hide it.
    if (acceptedArr.length === 0) {
        noJobs.classList.remove("hidden");
        return;
    } else {
        noJobs.classList.add("hidden");
    }

    for (let acceptedJob of acceptedArr) {
        let div = document.createElement("div");
        div.className = "grid grid-cols-1 justify-between items-center gap-5";
        div.innerHTML = `
            <div id="" class="card bg-transparent text-slate-950 w-full shadow-2xl">
                    <div class="card-body flex flex-col justify-start items-start text-left pl-5">
                        <div id="card-header" class="flex justify-between items-center flex-1 w-full">
                            <div>
                                <h4 class="card-title company">${acceptedJob.company}</h4>
                                <span class="job-post">${acceptedJob.post}</span>
                            </div>
                            <button class="btn btn-ghost delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                        <ul class="flex flex-col md:flex-row lg:flex-row list-disc list-inside gap-3">
                            <li class="job-info">${acceptedJob.info[0]}</li>
                            <li class="job-info">${acceptedJob.info[1]}</li>
                            <li class="job-info">${acceptedJob.info[2]}</li>
                        </ul>
                        <button class="btn btn-outline job-status">Accepted</button>
                        <p class="job-description">${acceptedJob.desc}</p>
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


// Rejected Tab Implementation
function renderRejected() {
    rejected.innerHTML = '';
    
    // If no rejectd jobs, show noJobs page. Elsei, hide it.
    if (rejectedArr.length === 0) {
        noJobs.classList.remove("hidden");
        return;
    } else {
        noJobs.classList.add("hidden");
    }

    for (let rejectedJob of rejectedArr) {
        let div = document.createElement("div");
        div.className = "grid grid-cols-1 justify-between items-center gap-5";
        div.innerHTML = `
            <div id="" class="card bg-transparent text-slate-950 w-full shadow-2xl">
                    <div class="card-body flex flex-col justify-start items-start text-left pl-5">
                        <div id="card-header" class="flex justify-between items-center flex-1 w-full">
                            <div>
                                <h4 class="card-title company">${rejectedJob.company}</h4>
                                <span class="job-post">${rejectedJob.post}</span>
                            </div>
                            <button class="btn btn-ghost delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                        <ul class="flex flex-col md:flex-row lg:flex-row list-disc list-inside gap-3">
                            <li class="job-info">${rejectedJob.info[0]}</li>
                            <li class="job-info">${rejectedJob.info[1]}</li>
                            <li class="job-info">${rejectedJob.info[2]}</li>
                        </ul>
                        <button class="btn btn-outline job-status">Rejected</button>
                        <p class="job-description">${rejectedJob.desc}</p>
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


// Update main page status
function updateMainCardStatus(company, newStatus) {
    const allMainCards = document.querySelectorAll("#all-page .card");

    allMainCards.forEach(card => {
        const name = card.querySelector(".company").innerText;
        if (name === company) {
            card.querySelector(".job-status").innerText = newStatus;
        }
    });
}


// Toggle Tabs
function toggleTabs(id) {
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
    if (id.toLowerCase() === 'main-page-tab-btn') {
        allPage.classList.remove("hidden");
        rejected.classList.add("hidden");
        accepted.classList.add("hidden");
        // Change the total jobs on the right
        showIndividualJobCount(noOfCards);
    }
    if (id.toLowerCase() === 'accept-page-tab-btn') {
        allPage.classList.add("hidden");
        rejected.classList.add("hidden");
        accepted.classList.remove("hidden");
        renderAccepted();
        // Show no of job counts on the right.
        showIndividualJobCount(acceptedArr.length);
    }
    if (id.toLowerCase() === 'reject-page-tab-btn') {
        allPage.classList.add("hidden");
        accepted.classList.add("hidden");
        rejected.classList.remove("hidden");
        renderRejected();
        // Change no of accepted jobs on the right
        showIndividualJobCount(rejectedArr.length);
    }
    // Change currentTab for tracking.
    currentTab = id;
}

// Delegation on "main" for all 3 buttons.
mainContainer.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    if (!card) { return; }
    console.log(card);
    const company = card.querySelector(".company").innerText;
    const post = card.querySelector(".job-post").innerText;
    const info = card.querySelectorAll(".job-info");
    let status = card.querySelector(".job-status");
    const description = card.querySelector(".job-description").innerText;

    const job = { company: company, post: post, info: [info[0].innerText, info[1].innerText, info[2].innerText], status: status, desc: description };
    console.log(job.status.innerText);

    // For "accept" btn
    if (event.target.classList.contains('accept-btn')) {
        // Returns undefined if item not found.
        const alreadyApplied = acceptedArr.find(item => item.company === job.company);
        if (!alreadyApplied) {
            acceptedArr.push(job);
            acceptCount.innerText = acceptedArr.length;
        }
        // Update rejected array and counter on top.
        rejectedArr = rejectedArr.filter(item => item.company !== job.company);
        rejectCount.innerText = rejectedArr.length;

        // Change status
        job.status.innerText = "Accepted";

        // Update main page status
        updateMainCardStatus(job.company, "Accepted");

        // Render accepted tab
        renderAccepted()

        // If we click accept from Rejected Jobs tab, re-render the rejected page.
        if (currentTab === 'reject-page-tab-btn') {
            renderRejected();
            // Change job count on the right
            showIndividualJobCount(rejectedArr.length);
        }
    }

    // For "reject" btn
    else if (event.target.classList.contains('reject-btn')) {
        const alreadyRejected = rejectedArr.find(item => item.company === job.company);
        if (!alreadyRejected) {
            rejectedArr.push(job);
            // Update count on top.
            rejectCount.innerText = rejectedArr.length;
        };
        // Update accepted array and count on top.
        acceptedArr = acceptedArr.filter(item => item.company !== job.company);
        acceptCount.innerText = acceptedArr.length;

        // Set the status on the homepage itself to "Rejected".
        status.innerText = "Rejected";
        updateMainCardStatus(job.company, "Rejected");

        // Render rejected tab
        renderRejected()

        // If we click reject from Accepted Jobs tab, re-render the accepted page.
        if (currentTab === 'accept-page-tab-btn') {
            renderAccepted();
            // Change job count on the right
            showIndividualJobCount(acceptedArr.length);
        };
    };

    // Delete Button implementation: If we click on delete, event is the icon. So, its parent button has delete button.
    if (event.target.parentNode.classList.contains("delete-btn")) {
        jobCards.removeChild(card);
        noOfCards -= 1;
        acceptedArr = acceptedArr.filter(item => item.company !== job.company);
        rejectedArr = rejectedArr.filter(item => item.company !== job.company);

        // Updates job count shown on top based on new lengths.
        countJobs();

        if (currentTab === "main-page-tab-btn") {
            showIndividualJobCount(noOfCards);
            if (jobCards.children.length === 0) {
                noJobs.classList.remove("hidden");
            }
        }
        else if (currentTab === "accept-page-tab-btn") {
            renderAccepted();
        }
        else if (currentTab === "reject-page-tab-btn") {
            renderRejected();
        };
    };
})