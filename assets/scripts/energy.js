const lifeStatuses = [
  {
    pct: 5,
    text: "Lạnh cóng... Cần sưởi ấm gấp! 🥶",
    bgClass: "bg-gray-600",
    icon: "fa-snowflake",
    textColor: "text-gray-600",
  },
  {
    pct: 15,
    text: "Bụng kêu Jingle Bells 🔔",
    bgClass: "bg-red-600",
    icon: "fa-bell",
    textColor: "text-red-600",
  },
  {
    pct: 30,
    text: "Đang gặm tất chờ quà 🧦",
    bgClass: "bg-orange-500",
    icon: "fa-socks",
    textColor: "text-orange-600",
  },
  {
    pct: 50,
    text: "Tạm ổn, thèm gà tây 🍗",
    bgClass: "bg-yellow-500",
    icon: "fa-drumstick-bite",
    textColor: "text-yellow-600",
  },
  {
    pct: 75,
    text: "Đang gói quà cho chính mình 🎁",
    bgClass: "bg-green-500",
    icon: "fa-gifts",
    textColor: "text-green-600",
  },
  {
    pct: 90,
    text: "No như ông già Noel! 🎅",
    bgClass: "bg-green-600",
    icon: "fa-candy-cane",
    textColor: "text-green-700",
  },
  {
    pct: 100,
    text: "FULL NĂNG LƯỢNG QUẨY NOEL! 🎄",
    bgClass: "bg-purple-600",
    icon: "fa-star",
    textColor: "text-purple-600",
  },
];

let countdownVal = 30;

function updateEnergyStatus() {
  // Random trạng thái
  let rand = Math.random();
  let selected;
  // Tỉ lệ ra trạng thái "đói" cao hơn cho vui
  if (rand < 0.4)
    selected = lifeStatuses[Math.floor(Math.random() * 3)]; // 0,1,2 (Đói)
  else if (rand < 0.8)
    selected = lifeStatuses[Math.floor(Math.random() * 2) + 3];
  // 3,4 (Bình thường)
  else selected = lifeStatuses[Math.floor(Math.random() * 2) + 5]; // 5,6 (No)

  const bar = document.getElementById("energy-bar");
  const statusText = document.getElementById("dynamic-status");
  const percentText = document.getElementById("status-percent");
  const iconElem = document.getElementById("bar-icon");

  // 1. Cập nhật độ dài thanh bar
  bar.style.width = selected.pct + "%";

  // 2. Cập nhật màu nền thanh (xóa màu cũ, thêm màu mới + giữ class candy-cane)
  // Lưu ý: class 'candy-cane-bar' cần màu nền trong suốt hoặc gradient đè lên.
  // Ở đây ta dùng bg-color cơ bản, hiệu ứng sọc sẽ đè lên nhờ CSS
  bar.className = `h-full rounded-full flex items-center justify-end pr-0 transition-all duration-1000 relative candy-cane-bar ${selected.bgClass}`;

  // 3. Cập nhật icon trên thanh
  iconElem.className = `fas ${selected.icon}`;

  // 4. Cập nhật % text
  percentText.innerText = selected.pct + "%";
  percentText.className = `font-extrabold text-2xl transition-all duration-500 ${selected.textColor}`;

  // 5. Animation đổi text tâm trạng
  statusText.style.opacity = "0";
  statusText.style.transform = "translateY(10px)";

  setTimeout(() => {
    statusText.innerHTML = `<i class="fas ${selected.icon} mr-1"></i> "${selected.text}"`;
    statusText.className = `text-sm font-bold italic transition-all duration-500 flex items-center justify-center gap-2 ${selected.textColor}`;
    statusText.style.opacity = "1";
    statusText.style.transform = "translateY(0)";
  }, 300);

  // Reset đếm ngược
  countdownVal = 30;
}

// Chạy ngay lần đầu
updateEnergyStatus();

// Loop 30s update trạng thái
setInterval(updateEnergyStatus, 30000);

// Loop 1s update số đếm ngược
setInterval(() => {
  if (countdownVal > 0) countdownVal--;
  document.getElementById("next-update").innerText = countdownVal;
}, 1000);
