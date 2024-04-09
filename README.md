# Next.js 14.1.4 starting project template

<p align="center">
  <br />
  <a href="https://rikardhallberg.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/static/logos/Rikard_DARK.svg">
      <img src="./public/static/logos/Rikard_LIGHT.svg" width="200px">
    </picture>
  </a>
</p>

<p align="center">
  <h1 align="center">
    <a href="https://nextjs-project-template-rosy.vercel.app/">Next.js Project Template</a>
  </h1>
</p>

<p align="center">
  <a title="MIT License" href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  </a>
  <a title="Vercel" href="https://vercel.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/powered%20by-Vercel%20%E2%96%B2-white">
      <img src="https://img.shields.io/badge/powered%20by-Vercel%20%E2%96%B2-black" alt="Powered by Vercel">
    </picture>
  </a>
  <br />
  <a title="Commitizen friendly" href="https://commitizen-tools.github.io/commitizen/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly">
  </a>
  <br />
  <br />
</p>

## What is this repo?

This is a [Next.js][] project template built with [`create-next-app`][].
This project is deployed on vercel.

```bash
pnpm install --frozen-lockfile
pnpm run build
pnpm run start

# listening at localhost:3000
```

## Why did you make it?

After having configured my Next.js apps with boilerplate for the 4th time, I decided enough was enough.
I needed a re-usable project template that can instantly start me off with code that I know works.

I decided that making this open source will also be yet another learning opportunity. Primarily
learning best practices for public repositories. As I mention later in this README, I am studying
the [Node.js repository][] to learn more about what standards they use.

## Contributing

This repository has a [Code of Conduct][] that you should read first.

Any person who wants to contribute to the Website is welcome! Please read the [Contribution Guidelines][]
to see what the next steps are.

It also doesn't hurt to have a look around the repository.

## Deployment

The Website is automatically deployed to [Vercel][] through its GitHub App integration
when new pushes happen on the `main` branch.

Details regarding the deployment are not publicly accessible.

## Relevant links

[Code of Conduct][]

[Contribution Guidelines][]

## Attribution

Some of the documentation and code is inspired/based on the [Node.js repository][].
For this reason, I want to thank them for making their software open source, as studying it has helped
me immensely with learning more about how to ship better software.

## License

Licensed under the [MIT License][]

[Next.js]: https://nextjs.org/
[`create-next-app`]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app
[Node.js repository]: https://github.com/nodejs/nodejs.org
[Code of Conduct]: ./CODE_OF_CONDUCT.md
[Contribution Guidelines]: ./CONTRIBUTING.md
[Vercel]: https://vercel.com
[MIT License]: ./LICENSE
