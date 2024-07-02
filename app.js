document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const timeElement = document.querySelector(".time"); // get element that displays the time
  const dayElement = document.querySelector(".day"); //get  element that displays the week day
  const yearElement = document.querySelector(".year"); // getting the elementing that display the date for the footer
  const elements = {
    slackName: document.getElementById("slackDisplayName"),
    ProfilePicture: document.getElementById("slackProfilePicture"),
    currrentTime: document.getElementById("time"),
    currentDay: document.getElementById("day"),
    slackEmail: document.getElementById("slackEmail"),
    hngLink: document.getElementById("hngLink"),
    keywordLink: document.getElementById("keywordLink"),
    scrapeanywebLink: document.getElementById("scrapeanywebLink"),
  };

  let slackDisplayName = "Umar Irale";
  let slackProfilePicture = "slackpp.png";
  let time = now.toUTCString().split(" ")[4];
  let day = now.toLocaleDateString("en-US", {
    weekday: "long",
  });
  let email = "mailpersonal725@gmail.com";
  let link_hng = "http://hng.tech/learn";
  let link_keyword = "http://keyword.dog";
  let scrape_link = "http://scrapeanyweb.site";

  elements.slackName.setAttribute("data-testid", slackDisplayName);
  elements.ProfilePicture.setAttribute("data-testid", slackProfilePicture);
  elements.currrentTime.setAttribute("data-testid", time);
  elements.currentDay.setAttribute("data-testid", day);
  elements.slackEmail.setAttribute("data-testid", email);
  elements.hngLink.setAttribute("data-testid", link_hng);
  elements.keywordLink.setAttribute("data-testid", link_keyword);
  elements.scrapeanywebLink.setAttribute("data-testid", scrape_link);

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
