export default function user() {
  const btn = document.querySelector("#btn-search");
  btn.addEventListener("click", idFunction);

  function idFunction(event) {
    event.preventDefault();
    const id = document.querySelector("#profileID").value;
    const idGit = fetch(`https://api.github.com/users/${id}`);
    const lupa = document.querySelector(".lupa");
    const spiner = document.querySelector(".spiner");
    lupa.classList.add("ative");
    spiner.classList.remove("d-none");
    idGit
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((body) => {
        const profileID = document.querySelector("#profileID");
        const profile = document.querySelector(".name-profile");
        const proID = document.querySelector(".profile-id");
        const dataProfile = document.querySelector(".data-profile");
        const repos = document.querySelector(".repos");
        const followers = document.querySelector(".followers");
        const following = document.querySelector(".following");
        const img = document.querySelector(".img-profile");
        const gitId = document.querySelector(".gitId");
        const update = document.querySelector(".gitUpdate");
        const newUpdate = new Date(body.updated_at);
        const createdAt = new Date(body.created_at);
        const formattedDate = `${createdAt.getDate()}/${
          createdAt.getMonth() + 1
        }/${createdAt.getFullYear()}`;
        const formattedupDate = `${newUpdate.getDate()}/${
          newUpdate.getMonth() + 1
        }/${newUpdate.getFullYear()}`;

        console.log(body);
        setTimeout(() => {
          lupa.classList.remove("ative");
          spiner.classList.add("d-none");

          profileID.classList.remove("error");
          profile.innerText = body.name;
          proID.innerText = body.login;
          dataProfile.innerText = formattedDate;
          update.innerText = formattedupDate;
          repos.innerText = body.public_repos;
          followers.innerText = body.followers;
          following.innerText = body.following;
          img.src = body.avatar_url;
          gitId.innerText = body.id;
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const profileID = document.querySelector("#profileID");
        profileID.classList.add("error");
        profileID.value = errorMessage;
        lupa.classList.remove("ative");
        spiner.classList.add("d-none");
      });
  }
}
