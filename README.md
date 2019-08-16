# Slides with Reveal.js

I created [spa-github-page-template](https://github.com/Weiyuan-Lane/spa-github-page-template) just so I could have a JavaScript environment to create this project for, so yea this is it! XD

# Installation

Clone this repository and install the development dependendies
```
git clone https://github.com/Weiyuan-Lane/spa-github-page-template.git
npm install
```


# Development

Run the following to start a development instance locally at port 3000
```
npm start
```

To add or remove views, look at the `pages` directory. 

Just like a static HTML app serves the `/` route from `pages/index.html` and `/another` route from `pages/another.html`, this JavaScript SPA has its corresponding `/` route from `pages/index.js` and `/another` from `pages/another.js`.

----

For SPA routing, I have written a wrapper around `next/link`, which makes `Link` easier to use for publish (use it to avoid the complexity in the `Publish` section below)

```javascript
import BasePathLink from '@helpers/BasePathLink';

export default function Home(){
  return (
    <BasePathLink href='/'><a>Test this SPA</a></BasePathLink>
  );
}
```

# Publish
```
npm run publish
```

Viola! The static app is now published to the `gh-pages` branch. 

If this is your first time, simply go to the settings page of the repository, and select the source under the Github Pages category as `gh-pages`, and your page should be live in a few minutes.

----

If you need to update your Github Pages site, you can run the `npm run publish` command again to perform the update.

#1
