/* =====================================================================
   SHARED PORTFOLIO PROJECT DATA

   This file is the single source of truth for every project on the
   site. Both portfolio.html (the full showcase) and index.html (the
   "Featured Work" preview) load this same file, so you only ever
   update your projects in ONE place.

   HOW TO ADD A NEW PROJECT:
   1. Copy the template block below (between the ===== lines)
   2. Paste it as a new entry at the TOP of the "projects" array
      (newest first - index.html always shows whichever 3 entries
      are at the top, portfolio.html lists everything in this order)
   3. Fill in your own title, excerpt, image and link
   4. Set "tags" to whatever labels describe the project (these
      just display on the card - there's no filter to update,
      unlike the blog)
   5. Save the file - that's it. No HTML editing needed, ever, and
      index.html updates itself automatically to show the top 3.

   ---------------------------------------------------------------------
   TEMPLATE (copy from here)

   {
       title: "Project Title Goes Here",
       excerpt: "A one or two sentence summary of the project.",
       image: "images/your-image.jpg",
       tags: ["Tag One", "Tag Two"],
       link: "projects/your-project-file.html"
   },

   TEMPLATE (copy to here)
===================================================================== */

const projects = [

    {
        title: "Dark Angels Bolter",
        excerpt: "First full model using the Blender pipeline.",
        image: "images/project1.jpg",
        tags: ["Blender", "Substance Painter", "Prop Model", "Weapon Model"],
        link: "projects/project1.html"
    },
    {
        title: "Red Menace: Beyond the Threshold",
        excerpt: "A detailed enviroment showcasing VFX, texturing and modular set creation and utilisation with a heavy focus on PBR materials and atmospheric storytelling.",
        image: "images/project2.jpg",
        tags: ["Environment Art", "Substance Painter", "Substance Designer", "MA Project", "Report", "UE5", "3DS Max", "Niagara"],
        link: "projects/project2.html"
    },
    {
        title: "Witchhunter's Ordained Rifle",
        excerpt: "A weapon prop created to further develop my skills with PBR materials and texturing.",
        image: "images/project3.jpg",
        tags: ["3DS Max", "Marmoset Toolbag", "Substance Painter", "Substance Designer", "MA Project", "Prop Model", "Weapon Model"],
        link: "projects/project3.html"
    },
    {
        title: "Vault 101 - Reimagined",
        excerpt: "A modular envrioment recreating the opening scenes from Fallout 3.",
        image: "images/project4.jpg",
        tags: ["Environment", "Quixel", "Substance Painter", "UE4", "3DS Max", "Niagara", "BA Project"],
        link: "projects/project4.html"
    },
    {
        title: "Arch Viz - Dining Room and Social Area",
        excerpt: "An early project from my BA wherein I created an environment with for use as an arch viz artefact.",
        image: "images/project5.jpg",
        tags: ["Enviroment", "Arch Viz", "UE4", "Substance Painter", "Substance Designer", "BA Project"],
        link: "projects/project5.html"
    }

    // Newer projects go ABOVE this line, using the template above.

];
