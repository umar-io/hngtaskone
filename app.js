document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector(".time"); // get element that displays the time
  const dayElement = document.querySelector(".day"); //get  element that displays the week day
  const yearElement = document.querySelector(".year"); // getting the elementing that display the date for the footer

  function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toUTCString().split(" ")[4];

    dayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
    yearElement.textContent = now.getFullYear();
  }
  updateTime();
  setInterval(updateTime, 1000);
});
