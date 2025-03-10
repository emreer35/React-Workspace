// Sayfa yüklendiğinde mevcut temayı kontrol et ve uygula
document.documentElement.classList.toggle(
  "dark",
  localStorage.currentTheme === "dark" || // Kullanıcı karanlık modu seçmişse
    (!("currentTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) // Sistem karanlık moddaysa
);

// Karanlık mod geçiş fonksiyonu
function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark"); // Karanlık modu kaldır
    localStorage.currentTheme = "light"; // Tercihi kaydet
  } else {
    document.documentElement.classList.add("dark"); // Karanlık modu etkinleştir
    localStorage.currentTheme = "dark"; // Tercihi kaydet
  }
}
