let url = "https://codeforces.com/api/blogEntry.comments?blogEntryId=79";
let cardContainer = document.getElementById("cardContainer"); // Make sure to have a container in your HTML with id="cardContainer"
let response = fetch(url);

response.then((v) => {
  return v.json();
}).then((contests) => {
  console.log(contests);
  let ihtml = "";

  for (let item of contests.result) {
    ihtml += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="id">Id: ${item.id}</h5>
          <p class="card-text">Creation Time Second: ${item.creationTimeSeconds}</p>
          <p class="card-text">Commentator: ${item.commentatorHandle}</p>
          <p class="card-text">Text: ${item.text}</p>
          <p class="card-text">Parent Comment id: ${item.parentCommentId}</p>
        </div>
      </div>
    `;
  }

  cardContainer.innerHTML = ihtml;
});
