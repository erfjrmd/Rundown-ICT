document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch("dataMateri.json")
      .then(response => response.json())
      .then(data => {
        // Populate the sidenav menu
        const sidenavMenu = document.getElementById("sidenavMenu");
        const contentTitle = document.getElementById("contentTitle");
        const contentBody = document.getElementById("contentBody");
  
        data.menu.forEach(section => {
          // Add heading
          const heading = document.createElement("div");
          heading.classList.add("sb-sidenav-menu-heading");
          heading.textContent = section.heading;
          sidenavMenu.appendChild(heading);
  
          // Add items
          section.items.forEach((item, index) => {
            const link = document.createElement("a");
            link.classList.add("nav-link");
            link.href = "#";
  
            // Create icon
            const icon = document.createElement("i");
            icon.classList.add("fa", "fa-tasks", "me-2");
            icon.setAttribute("aria-hidden", "true");
  
            // Add icon and text to link
            link.appendChild(icon);
            link.appendChild(document.createTextNode(item.title));
  
            // Add click event listener
            link.addEventListener("click", () => {
              contentTitle.textContent = item.title;
  
              if (typeof item.content === "string") {
                // If content is a string
                contentBody.textContent = item.content;
              } else if (typeof item.content === "object") {
                // If content is an object
                contentBody.innerHTML = `
                  <p><strong>Durasi:</strong> ${item.content.durasi}</p>
                  ${item.content.sections.map(section => `
                    <h5>${section.title}</h5>
                    <ul>
                      ${section.details.map(detail => `<li>${detail}</li>`).join("")}
                    </ul>
                  `).join("")}
                `;
              }
            });
            sidenavMenu.appendChild(link);
  
            // Default display for the first item
            if (index === 0) {
              link.click();
            }
          });
        });
      })
      .catch(error => console.error("Error loading JSON data:", error));
  });
  