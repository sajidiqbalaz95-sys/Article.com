(function () {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reading time for each article
  document.querySelectorAll("article.post").forEach(function (a) {
    var words = a.textContent.trim().split(/\s+/).length;
    var el = a.querySelector(".read-time");
    if (el) el.textContent = Math.max(1, Math.round(words / 200)) + " min read";
  });

  // Search / filter articles
  var s = document.getElementById("search");
  if (s) {
    s.addEventListener("input", function () {
      var q = s.value.toLowerCase();
      document.querySelectorAll("article.post").forEach(function (a) {
        a.style.display = a.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none";
      });
    });
  }
})();
