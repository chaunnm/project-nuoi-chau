const xmasQuotes = [
  "Ho Ho Ho! Cảm ơn Santa Claus! 🎅",
  "Món quà này ấm hơn cả lò sưởi! 🔥",
  "Chúc bạn Giáng Sinh an lành và ví tiền rủng rỉnh! 🎄",
  "Châu đã nhận được tín hiệu từ Bắc Cực! ❄️",
  "Yêu thương bay tung tóe như pháo hoa đêm Noel! ✨",
];

let currentTimeout;

function resetModal() {
  document.getElementById("modal-step-input").classList.add("hidden");
  document.getElementById("modal-step-quote").classList.add("hidden");
  document.getElementById("modal-step-qr").classList.add("hidden");
  document.getElementById("copyMsg").classList.add("hidden");
  clearTimeout(currentTimeout);
}

function showStep(stepId) {
  resetModal();
  document.getElementById(stepId).classList.remove("hidden");
}

function startDonation(packageAmount) {
  const modal = document.getElementById("donateModal");
  modal.classList.remove("hidden");
  showRandomQuote();
}

function openCustomInput() {
  const modal = document.getElementById("donateModal");
  modal.classList.remove("hidden");
  showStep("modal-step-input");
  setTimeout(() => document.getElementById("customAmountInput").focus(), 100);
}

function submitCustomAmount() {
  const input = document.getElementById("customAmountInput");
  if (input.value) showRandomQuote();
  else alert("Nhập số tiền đi Santa ơi!");
}

function showRandomQuote() {
  showStep("modal-step-quote");
  const quote = xmasQuotes[Math.floor(Math.random() * xmasQuotes.length)];
  document.getElementById("quote-text").innerText = `"${quote}"`;
  currentTimeout = setTimeout(() => {
    showStep("modal-step-qr");
  }, 2500);
}

function closeModal() {
  document.getElementById("donateModal").classList.add("hidden");
  resetModal();
}

function copyToClipboard() {
  const copyText = document.getElementById("stkInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value).then(() => {
    document.getElementById("copyMsg").classList.remove("hidden");
  });
}

// Tiếp tục yêu thương
function openDonateModal() {
  document.getElementById("donationModal").classList.remove("hidden");
}

function closeDonateModal() {
  document.getElementById("donationModal").classList.add("hidden");
}
