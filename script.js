// --- Dynamic Year ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.querySelector('i').classList.toggle('fa-bars');
      hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
      });
    });

    // --- Scroll Reveal Animation (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      root: null,
      threshold: 0.15, // Trigger when 15% visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Dark Mode Toggle ---
    const toggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved preference
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // --- Scroll to Top Button ---
    const scrollBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'flex';
      } else {
        scrollBtn.style.display = 'none';
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Contact Form Handling (Simulation) ---
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate sending data...
      const btn = contactForm.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        // Show success toast
        toast.textContent = "Message sent successfully!";
        toast.classList.add('show');
        
        // Reset form
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;

        // Hide toast after 3 seconds
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }, 1500);
    });ventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
