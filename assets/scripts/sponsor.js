// window.openSponsorModal = function () {
//   document.getElementById("sponsorModal").classList.remove("hidden");
// };

// window.closeSponsorModal = function () {
//   document.getElementById("sponsorModal").classList.add("hidden");
// };

function openSponsorModal() {
  const modal = document.getElementById("sponsorModal");

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    console.error("Lỗi: Không tìm thấy ID '" + "sponsorModal" + "' trong HTML");
  }
}

function closeSponsorModal() {
  const modal = document.getElementById("sponsorModal");

  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("sponsorModal");
  if (event.target === modal) {
    closeSponsorModal();
  }
});
