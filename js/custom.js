const likeButtons = Array.from(document.querySelectorAll(".photos__like-icon"));
const likeCounts = Array.from(document.querySelectorAll(".photos__like-count"));

likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    const current = Number(likeCounts[index].innerHTML);
    const inc = button.classList.contains("is-active") ? 1 : -1;
    likeCounts[index].innerHTML = current + inc;
  });
});