let totalCount = document.getElementById("total-counter");
let acceptCounter = document.getElementById("accept-counter");
let rejectCount = document.getElementById("reject-counter");

// Returns an HTML collection of the children, on which we apply length method.
let noOfCards = document.getElementById("job-cards").children.length;
console.log(noOfCards);

function countJobs(){
    totalCount.innerText = noOfCards;
}

countJobs();