const config = {
  siteTitle: "CFF", // Site title.
  siteTitleShort: "CFF", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "We create the web", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.github.com/jesusbibieca", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "your id", // FB Application ID for using app insights
  siteGATrackingID: "your id", // Tracking code ID for google analytics.
  disqusShortname: "Jesus-Bibieca", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Jesus B", // Username to display in the author segment.
  userTwitter: "https://twitter.com/jesusbibieca", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Dominican Republic", // User location to display in the author segment.
  userAvatar: "https://lh3.googleusercontent.com/-jvfcuYhGlVE/Wfi_ObBNf_I/AAAAAAAAAs0/aJG7Bu4S-8wcBppn7wGEUx3i-a3BtkiqACEwYBhgL/w278-h280-p/Profile.PNG", // User avatar to display in the author segment.
  userDescription:
    "I love tech", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jesusbibieca/personal-site",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jesusbibieca",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:jesusbibieca52@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Jesus Bibieca" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
