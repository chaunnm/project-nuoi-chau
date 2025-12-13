function createSnowflake() {
  const container = document.getElementById("snow-container");
  if (!container) return; // Bảo vệ khỏi lỗi null

  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.textContent = ["❄", "❅", "❆", "•"][Math.floor(Math.random() * 4)];
  snow.style.color = Math.random() > 0.5 ? "#AED6F1" : "#fff"; // Xanh nhạt hoặc trắng

  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 15 + 10 + "px";
  snow.style.opacity = Math.random() * 0.7 + 0.3;

  const duration = Math.random() * 5 + 5; // 5-10s
  snow.style.animationDuration = duration + "s";

  container.appendChild(snow);

  // Xóa sau khi rơi xong
  setTimeout(() => {
    snow.remove();
  }, duration * 1000);
}
setInterval(createSnowflake, 200); // Tạo tuyết mỗi 200ms
