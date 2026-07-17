const grid = document.getElementById("portfolio-grid");

projects.forEach(project => {

    const card = document.createElement("a");
    card.href = project.link;
    card.className = "portfolio-card";

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">

        <div class="portfolio-info">

            <h2>${project.title}</h2>

            <p>${project.description}</p>

            <div class="portfolio-tags">

                ${project.tags.map(tag => `<span>${tag}</span>`).join("")}

            </div>

        </div>
    `;

    grid.appendChild(card);

});
