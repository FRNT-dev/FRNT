![FRNT logo](./web/src/_includes/img/FRNT-logotype.png#gh-light-mode-only)
![FRNT logo](./web/src/_includes/img/FRNT-logotype-dark.png#gh-dark-mode-only)

# FRNT

_An online magazine for front-end developers_

## Why **FRNT**?

Firstly, why not? Having multiple outlets in the marketplace drives us all to be better, and the world of front-end is so huge now that adding another platform for developers to contribute and learn is no bad thing. Additionally, many of the other popular outlets in the dev space aren't specific to front-end; Smashing Magazine is more generalist, A List Apart seemingly publishes whatever it wants, when it wants now and, of the most popular outlets, only CSS Tricks is really focussed on the front-end (and they have just been acquired by Digital Ocean).

## Who runs **FRNT**?

**FRNT** founder and editor: David Eglin ([@djeglin](https://github.com/djeglin))

Want to be on this list? Reach out to me! You can email me at [hello+frnt\[at\]djegl.in](mailto:hello+frnt@djegl.in).

## How will we finance **FRNT**?

## What will we feature on **FRNT**?

**FRNT** will feature content – tutorials, opinion pieces, reportage, etc – targeted primarily at front-end developers. The term "front-end" is becoming pretty broad these days, and can encompass a lot of areas that have more traditionally been in "back-end" territory, such as content modelling and business logic, so we will need to continually evaluate our output and solicit opinion from our audience to keep us on-track.

## How will **FRNT** be structured?

**FRNT** will release content in "issues" or "editions", much like a print magazine (TODO: Do we go monthly or bi-weekly?). This may seem counter-intuitive for a web-based outlet, but it gives us a number of advantages over more ad-hoc publishing:

1. It allows us to have a well-defined idea of what topic(s) or themes we want to cover in a given issue, and plan for this well in advance

2. Grouping content together into themed issues means that we can get great cross-pollination between content in a given issue, and have other content that is of interest to those reading a piece in that issue

3. It cuts the cognitive overload created by the constant onslaught of new content in our lives as developers. When you read **FRNT**, you know you're not going to be expecting a new content drop until a certain date

4. (In future) is allows us to line up relevant sponsors for a given issue, helping us to finance the running of the site, pay authors and offer relevant, partnered content

## Who will write for **FRNT**?

In short, any front-end developer with an interest in writing a piece will be considered. Obviously, it helps if they have an area of expertise that is relevant to an issue we already have on the calendar, but that isn't a prerequisite.

We encourage people from underrepresented groups in our community to come forward and work with us at **FRNT**. We want to be a force for the betterment of not just the knowledge of our readers, but of the community as a whole and we see representation as being key to that.

## How is **FRNT** being built?

The **FRNT** tech stack is as follows:

- Static site powered by [Eleventy](https://11ty.io)
- Structured content, editorial control, publishing etc using [Sanity.io](https://www.sanity.io)
- Deployed on [Netlify](https://netlify.com)

There will obviously be more elements added to this stack as time goes on, and we will update this document as the stack changes or grows. We could, for instance, decide to use an asset optimisation service, or we might decide to add search once the site gets suitably large.

We want to build **FRNT** out in the open and, as such, this repository is public and all the code for the site will be freely available to other developers. We welcome suggestions and contributions from the community, so feel free to dive in!

# And now the original README contents for the 11ty starter being used here

_Simple blog starter with [11ty](https://11ty.io)._

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-gatsby-blog).

## What you have

- A simple static site generator with [Eleventy](https://11ty.io)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8080](http://localhost:8080)
4. `npm run build` to build to production locally

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
