const $userName = document.querySelector(".user__name");
const $userImage = document.querySelector(".user__image");

$userName.addEventListener("mouseover", () => {
  $userImage.classList.add("border");
});

$userName.addEventListener("mouseout", () => {
  $userImage.classList.remove("border");
});
