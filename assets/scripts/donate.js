(() => {
  const xmasQuotes = [
    "Ho Ho Ho! Cảm ơn Santa Claus! 🎅",
    "Món quà này ấm hơn cả lò sưởi! 🔥",
    "Chúc bạn Giáng Sinh an lành 🎄",
    "Châu đã nhận được tín hiệu từ Bắc Cực ❄️",
  ];

  let currentTimeout;

  // ✅ EXPORT ra window để HTML gọi được
  window.openCustomInput = function () {
    document.getElementById("donateModal")?.classList.remove("hidden");
  };

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

  window.startDonation = function (packageAmount) {
    const modal = document.getElementById("donateModal");
    modal.classList.remove("hidden");
    showRandomQuote();
  };

  window.openCustomInput = function () {
    const modal = document.getElementById("donateModal");
    modal.classList.remove("hidden");
    showStep("modal-step-input");
    setTimeout(() => document.getElementById("customAmountInput").focus(), 100);
  };

  window.submitCustomAmount = function () {
    const input = document.getElementById("customAmountInput");
    if (input.value) showRandomQuote();
    else alert("Nhập số tiền đi Santa ơi!");
  };

  function showRandomQuote() {
    showStep("modal-step-quote");
    const quote = xmasQuotes[Math.floor(Math.random() * xmasQuotes.length)];
    document.getElementById("quote-text").innerText = `"${quote}"`;
    currentTimeout = setTimeout(() => {
      showStep("modal-step-qr");
    }, 2500);
  }

  window.closeModal = function () {
    document.getElementById("donateModal").classList.add("hidden");
    resetModal();
  };

  window.copyToClipboard = function () {
    const copyText = document.getElementById("stkInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value).then(() => {
      document.getElementById("copyMsg").classList.remove("hidden");
    });
  };
})();
