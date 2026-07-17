const featuredGrid = document.getElementById("featured-project-grid");

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
}

const latestProjects = [...projects]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3);

latestProjects.forEach(project => {

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

    featuredGrid.appendChild(card);

});
