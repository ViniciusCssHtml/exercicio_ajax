export default function theme() {
  const btn = document.querySelector(".btn-light");
  const btn2 = document.querySelector(".btn-dark");
  const body = document.querySelector("body");
  const form = document.querySelector("#form");
  const profile = document.querySelector("#profile");
  const posts = document.querySelector(".profile-posts");

  btn.addEventListener("click", littleMode);
  function littleMode() {
    this.classList.add("ativo");
    btn2.classList.add("ativo");
    body.classList.add("litle");
    form.classList.add("litle");
    profile.classList.add("litle");
    posts.classList.add("litle");
  }

  btn2.addEventListener("click", darkMode);

  function darkMode() {
    this.classList.remove("ativo");
    body.classList.remove("litle");
    body.classList.add("dark");
    btn.classList.remove("ativo");
    form.classList.remove("litle");
    profile.classList.remove("litle");
    posts.classList.remove("litle");
  }
}

theme();
