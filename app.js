// Footer Year Display

const d = new Date();
const year = d.getFullYear();

// getting the elementing that display the date for the footer

const dateDisplay = document.querySelector(".year");

dateDisplay.textContent = year;

document.addEventListener("DOMContentLoaded", () => {
  // get element that displays the time
  const timeElement = document.querySelector(".time");
  //get  element that displays the week day
  const dayElement = document.querySelector(".day");

  function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toUTCString().split(" ")[4];
    dayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
});
