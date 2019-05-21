# Jesus Bibieca's personal site

A blog starter with Material design in mind for [Gatsby](https://github.com/gatsbyjs/gatsby/).

## Features

- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- [React-MD](https://github.com/mlaursen/react-md) for Material design
  - Integrated FontAwesome support
  - Integrated Material Icons support
- SASS/SCSS styling
- [NetlifyCMS](https://www.netlifycms.org/docs/intro/) support for creating/editing posts via admin panel
- Separate components for everything
- High configurability:
  - User information
  - User social profiles
  - Copyright information
  - More!
- Author segment
  - Name
  - Location
  - Description
  - Links
  - Follow Me button
- Posts in Markdown
  - Code syntax highlighting
  - Embedded YouTube videos
  - Embedded Tweets
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Suggested posts segment
- Disqus support
  - Notifications about new disqus comments
- Responsive design
  - On mobile, Disqus is loaded only after expanding comments for better performance
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - Google+ share button
  - LinkedIn share button
  - Telegram share button
- SEO
  - Sitemap generation
  - robots.txt
  - General description tags
  - Schema.org JSONLD (Google Rich Snippets)
  - OpenGraph Tags (Facebook/Google+/Pinterest)
  - Twitter Tags (Twitter Cards)
- RSS feeds
- Loading progress for slow networks
- Offline support
- Web App Manifest support
- Automatic image transformation and size optimization
- Netlify deploy configuration
- Google Analytics support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - CodeClimate configuration file and badge

NOTE: Take a look at [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter) if you prefer building UI from scratch and/or only interested in fundamental features.

## Getting Started

Install this locally (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
git clone git@github.com:jesusbibieca/personal-site.git
cd personal-site
npm install # or yarn install
npm run dev # or gatsby develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js
module.exports = {
  siteTitle: "CFF", // Site title.
  siteTitleShort: "CFF", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "We create the web", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.github.com/jesusbibieca", // Domain of your website without pathPrefix.
  // pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
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
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/gatsby-material-starter" // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
};
```

NOTE: `user*`, `disqusShortname` and `copyright` are optional and won't render if omitted.

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!

## NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: jesusbibieca/personal-site
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

## Theming

Edit `src/layout/theme.scss` to suit your needs.
You can use [Material color palette](https://react-md.mlaursen.com/customization/colors) provided by React-MD.

```css
@import "~react-md/src/scss/react-md";
$md-primary-color: $md-grey-400;
$md-secondary-color: $md-red-800;
$md-tertiary-color: $md-grey-300;
```
