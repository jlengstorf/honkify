<p align="center">
  <a href="https://honkify.netlify.com">
    <img alt="Honkify.js" src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1569994831/honkify-banner.jpg" width="600" />
  </a>
</p>
<h1 align="center">Honkify.js</h1>

Need a little more chaos in your life? Set a goose loose on your site to act like a jerk.

[Try a demo!](https://honkify.netlify.com)

## Praise for Honkify.js

> Nobody asked for this. – [Jessica Tremblay](https://twitter.com/poofichu/status/1179146980569878528)

> This is the worst thing you have ever done. – [E.J. Mason](https://twitter.com/codeability/status/1179136560110768128)

## What does Honkify do?

When activated, all links and buttons on the site will stop working, instead triggering a “honk!” sound effect.

This is not transpiled and not tested on any browsers except Chrome latest, because this is a silly joke and therefore _honk honk honk!_

## Installation and Quick Start

```
yarn add honkify
```

In your code:

```js
import honkify from 'honkify';

// The goose is loose!
const unregister = honkify();

// Disable so links work again
unregister();
```

## Disclaimer: please don’t actually use this.

Or, if you do, make sure it’s easy to toggle off. Geese may be jerks, but developers shouldn’t be.
