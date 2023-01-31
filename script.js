const noticesContainer = document.querySelector("#notices");
const addNoticeButton = document.querySelector("#addNotice");

let notices = [];

const renderNotices = () => {
  noticesContainer.innerHTML = "";
  notices.forEach((notice) => {
    const noticeEl = document.createElement("div");
    noticeEl.classList.add("notice");
    noticeEl.innerHTML = notice;
    noticesContainer.appendChild(noticeEl);
  });
};

addNoticeButton.addEventListener("click", () => {
  const notice = prompt("Enter notice:");
  if (notice) {
    notices.push(notice);
    renderNotices();
  }
});

renderNotices();