document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("backgroundMusic");

  // Kích hoạt nhạc sau click đầu tiên
  const playMusicOnce = () => {
    music.play().catch(() => {}); // tránh lỗi autoplay
    document.removeEventListener("click", playMusicOnce);
  };

  document.addEventListener("click", playMusicOnce);
});
