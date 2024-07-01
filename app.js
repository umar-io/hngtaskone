document.addEventListener("DOMContentLoaded", () => {
  // get element that displays the time
  const timeElement = document.querySelector(".time");
  //get  element that displays the week day
  const dayElement = document.querySelector(".day");
  // getting the elementing that display the date for the footer

  const yearDisplay = document.querySelector(".year");

  function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toUTCString().split(" ")[4];
    dayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
    yearDisplay.textContent = now.getFullYear()
  }

  updateTime();
  setInterval(updateTime, 1000);
});
