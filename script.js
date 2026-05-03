document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-btn");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const masthead = document.getElementById("navbar");

    function initScrollReveal() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        document
            .querySelectorAll(".skills-grid, .projects-grid, .process-grid, .certificates-grid, .about-grid")
            .forEach((grid) => grid.classList.add("reveal-stagger"));

        const targets = document.querySelectorAll("main section:not(#home), .quote-band, footer.footer");

        function reveal(el) {
            el.classList.add("is-visible");
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    reveal(entry.target);
                    obs.unobserve(entry.target);
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -6% 0px",
            }
        );

        const slack = masthead ? masthead.offsetHeight + 32 : 100;

        targets.forEach((el) => {
            el.classList.add("reveal-section");
            const rect = el.getBoundingClientRect();
            const peekedIntoView =
                rect.top < window.innerHeight - slack && rect.bottom > slack;

            if (peekedIntoView) {
                reveal(el);
                return;
            }

            observer.observe(el);
        });
    }

    initScrollReveal();

    function setLanguage(lang) {
        document.documentElement.setAttribute("lang", lang);
        document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

        langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));

        document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
            const translated = lang === "ar" ? element.dataset.ar : element.dataset.en;
            element.textContent = translated;
        });
    }

    const savedLang = localStorage.getItem("portfolio-lang") || "en";
    setLanguage(savedLang);

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.dataset.lang || "en";
            localStorage.setItem("portfolio-lang", lang);
            setLanguage(lang);
        });
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => navMenu.classList.toggle("active"));
        navMenu.querySelectorAll("a").forEach((link) =>
            link.addEventListener("click", () => navMenu.classList.remove("active"))
        );
    }

    document.querySelectorAll(".skill-card").forEach((card) => {
        card.addEventListener("click", () => card.classList.toggle("active"));
        card.addEventListener("keypress", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.classList.toggle("active");
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            const navOffset = masthead ? masthead.offsetHeight + 18 : 90;
            const offsetTop = target.offsetTop - navOffset;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        });
    });

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {
        if (masthead) {
            masthead.classList.toggle("scrolled", window.scrollY > 80);
        }

        let active = "";
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 160) {
                active = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${active}`);
        });
    });
});