/* =====================================================================
   SHARED BLOG POST DATA

   This file is the single source of truth for every blog post on the
   site. Both blog.html (the full archive) and index.html (the "Latest
   Thoughts" preview) load this same file, so you only ever update
   your posts in ONE place.

   HOW TO ADD A NEW BLOG POST:
   1. Copy the template block below (between the ===== lines)
   2. Paste it as a new entry at the TOP of the "posts" array
      (newest first — index.html automatically shows whichever
      posts are newest by date, and blog.html lists everything
      in the order they appear here)
   3. Fill in your own title, excerpt, date and link
      ("date" uses DD-MM-YYYY format, e.g. 15-07-2026)
   4. Add a thumbnail image somewhere like images/blog/ and point
      "image" at it — it appears blurred on the card automatically,
      no extra editing needed
   5. Set "tags" to one or more of: Art, Programming, Design,
      Events, Off-topic — these are what blog.html's filter dropdown
      matches against. Add a new category to both this array AND
      the <select> options in blog.html if you want a new one to
      show up as a filter choice
   6. Save the file — that's it. No new HTML page needed, ever,
      and index.html updates itself automatically.

   ---------------------------------------------------------------------
   TEMPLATE (copy from here)

   {
       title: "Post Title Goes Here",
       date: "15-07-2026",
       excerpt: "A one or two sentence summary of what this post covers.",
       image: "images/blog/your-image.jpg",
       tags: ["Art"],
       link: "blog/your-article-file.html"
   },

   TEMPLATE (copy to here)
===================================================================== */

const posts = [

    {
        title: "The Site is Live!",
        date: "17-07-2026",
        excerpt: "The portfolio site is live after a few days work. There's still work to do, but most fuctionality is there!",
        image: "images/blogimg/Site-Live.png",
        tags: ["Off-topic"],
        link: "blog/17-07-2026.html"
    },
    {
        title: "Consectetur Adipiscing Elit",
        date: "07-07-2026",
        excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        image: "images/blog/placeholder2.jpg",
        tags: ["Programming"],
        link: "blog/placeholder2.html"
    },
    {
        title: "Sed Do Eiusmod Tempor",
        date: "29-06-2026",
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "images/blog/placeholder3.jpg",
        tags: ["Design"],
        link: "blog/placeholder3.html"
    },
    {
        title: "Incididunt Ut Labore",
        date: "22-06-2026",
        excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        image: "images/blog/placeholder4.jpg",
        tags: ["Events", "Off-topic"],
        link: "blog/placeholder4.html"
    },
    {
        title: "Technical Art Experiments",
        date: "20-06-2026",
        excerpt: "Materials, shaders and improving workflows.",
        image: "images/blog/article2.jpg",
        tags: ["Programming", "Design"],
        link: "blog/article2.html"
    },
    {
        title: "Creating Modular Environments",
        date: "01-06-2026",
        excerpt: "A breakdown of planning, modelling and optimisation.",
        image: "images/blog/article1.jpg",
        tags: ["Art", "Design"],
        link: "blog/article1.html"
    }

    // Newer posts go ABOVE this line, using the template above.

];
