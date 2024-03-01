    // Update styles based on window size
    function updateStyles() {
      // Big screen text are width
      const textWidthPercentage = 60
      
      const introduction = document.querySelector(".introduction")
      const sections = document.querySelectorAll(".section")
      const isPortrait = window.matchMedia("(orientation: portrait)").matches
      const headshot = document.querySelector("#headshot")

      if (screen.width > 600) {
        const screenWidth = window.screen.width

        // Set the width as a percentage of the screen width
        const sectionWidth = `${(textWidthPercentage / 100) * screenWidth}px`

        if (document.body.width < sectionWidth) {
          sections.forEach(section => section.style.width = document.body.width)
        } else {
          sections.forEach(section => section.style.width = sectionWidth)
        }

      }

      if (window.innerWidth < 1000) {
        introduction.classList.add("small-window")
        introduction.classList.remove("large-window")

        headshot.classList.add("small-window")
        headshot.classList.remove("large-window")
      } else {
        introduction.classList.add("large-window")
        introduction.classList.remove("small-window")

        headshot.classList.add("large-window")
        headshot.classList.remove("small-window")
      }

      if (isPortrait) {

      } else {

      }
    }

    // Attach the updateStyles function to window resize event
    window.addEventListener('resize', updateStyles)

    // Initial call to set styles on page load
    window.addEventListener('load', updateStyles)