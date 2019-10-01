# Honkify.js

Need a little more chaos in your life? Set a goose loose on your site to act like a jerk.

When activated, all links on the site will stop working, instead triggering a “honk!” sound effect.

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
