AOS.init({ duration: 1000, once: true });
    const scroll = new LocomotiveScroll({ el: document.querySelector("[data-scroll-container]"), smooth: true });

    const toggleBtn = document.getElementById("themeToggle");
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = savedTheme || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", defaultTheme);
    toggleBtn.innerHTML = defaultTheme === "dark" ? `<i class="fas fa-moon"></i>` : `<i class="fas fa-sun"></i>`;

    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      toggleBtn.innerHTML = newTheme === "dark" ? `<i class="fas fa-moon"></i>` : `<i class="fas fa-sun"></i>`;
    });