    // Update styles based on window size
    function updateStyles() {
      const section = document.querySelector(".section");
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;

      if (screen.width > 600) {
        const screenWidth = window.screen.width;

        // Set the width as a percentage of the screen width
        const widthPercentage = 40; // Set your desired percentage
        section.style.width = `${(widthPercentage / 100) * screenWidth}px`;
      }

      if (isPortrait) {
        section.classList.add("portrait")
        section.classList.remove("landscape")
      } else {
        section.classList.add("landscape")
        section.classList.remove("portrait")
      }
    }

    // Attach the updateStyles function to window resize event
    window.addEventListener('resize', updateStyles);

    // Initial call to set styles on page load
    window.addEventListener('load', updateStyles);