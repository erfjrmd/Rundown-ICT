document.addEventListener("DOMContentLoaded", () => {
  fetch("dataMateri.json")
    .then((response) => response.json())
    .then((data) => {
      const sidenavMenu = document.getElementById("sidenavMenu");
      const contentTitle = document.getElementById("contentTitle");
      const contentBody = document.getElementById("contentBody");

      data.menu.forEach((section, sectionIndex) => {
        // Buat tombol dropdown untuk heading
        const dropdownButton = document.createElement("a");
        dropdownButton.href = "#";
        dropdownButton.classList.add("nav-link", "collapsed");
        dropdownButton.setAttribute("data-bs-toggle", "collapse");
        dropdownButton.setAttribute("data-bs-target", `#menu${sectionIndex}`);
        dropdownButton.setAttribute("aria-expanded", "false");
        dropdownButton.setAttribute("aria-controls", `menu${sectionIndex}`);

        // Tambahkan teks heading dan ikon
        const icon = document.createElement("div");
        icon.classList.add("sb-nav-link-icon");
        const iconElem = document.createElement("i");
        iconElem.classList.add("fas", "fa-folder");
        icon.appendChild(iconElem);

        dropdownButton.appendChild(icon);
        dropdownButton.appendChild(document.createTextNode(section.heading));

        const arrow = document.createElement("div");
        arrow.classList.add("sb-sidenav-collapse-arrow");
        const arrowIcon = document.createElement("i");
        arrowIcon.classList.add("fas", "fa-angle-down");
        arrow.appendChild(arrowIcon);

        dropdownButton.appendChild(arrow);
        sidenavMenu.appendChild(dropdownButton);

        // Buat kontainer untuk daftar item dalam heading
        const collapseDiv = document.createElement("div");
        collapseDiv.classList.add("collapse");
        collapseDiv.setAttribute("id", `menu${sectionIndex}`);
        collapseDiv.setAttribute("data-bs-parent", "#sidenavAccordion");

        const nestedNav = document.createElement("nav");
        nestedNav.classList.add("sb-sidenav-menu-nested", "nav");

        // Tambahkan items ke dalam nestedNav
        section.items.forEach((item) => {
          const itemLink = document.createElement("a");
          itemLink.classList.add("nav-link");
          itemLink.href = "#";
          itemLink.textContent = item.title;

          // Tambahkan event listener untuk konten utama
          itemLink.addEventListener("click", () => {
            contentTitle.textContent = item.title;
            contentBody.innerHTML = `
              <p><strong>Durasi:</strong> ${item.content.durasi}</p>
              ${item.content.sections
                .map(
                  (section) => `
                  <h5>${section.title}</h5>
                  <ul>
                    ${section.details.map((detail) => `<li>${detail}</li>`).join("")}
                  </ul>
                `
                )
                .join("")}
            `;
          });

          nestedNav.appendChild(itemLink);
        });

        collapseDiv.appendChild(nestedNav);
        sidenavMenu.appendChild(collapseDiv);
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));
});
