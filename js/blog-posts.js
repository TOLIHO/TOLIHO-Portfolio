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
        title: "The Great Diffuser Problem",
        date: "25-07-2026",
        excerpt: "Exploring light diffusers in UE5.6",
        image: "images/blogimg/Diffuser_lights.png",
        tags: ["Art"],
        link: "blog/25-07-2026.html"
    },
   
   
   

    // Newer posts go ABOVE this line, using the template above.

];
