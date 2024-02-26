let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Type the Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        console.log(repos);

        reposData.innerHTML = "";

        repos.forEach((repo) => {
          let repoBox = document.createElement("div");
          repoBox.classList.add("repo-box");

          let repoName = document.createTextNode(repo.name);
          repoBox.append(repoName);

          let link = document.createElement("a");
          link.innerHTML = "Visit";
          link.setAttribute("href", repo.clone_url);
          link.setAttribute("target", "_blank");

          let stars = document.createElement("span");
          stars.innerHTML = `Stars: ${repo.stargazers_count}`;

          repoBox.append(link);
          repoBox.append(stars);
          reposData.append(repoBox);
        });
      });
  }
}

getButton.onclick = function () {
  getRepos();
};
