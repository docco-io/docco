<!-- Back to the toop --->
<a name="readme-top"></a>

<p align="center">
 <img src="https://avatars.githubusercontent.com/u/115881080?s=400&u=d3a86c9770bb0171f2db7e5393a820de88e3eb3a&v=4" height="300px" width: 50% alt="Docco"></a>
</p>

<h1 align="center">Docco</h1>

<div align="center">

  [![Twitter][Twitter]][Twitter-url]
  [![Medium][Medium]][Medium-url]
  [![Youtube][Youtube]][Youtube-url]
  [![LinkedIn][LinkedIn]][LinkedIn-url]

  [![Status][Status]]()
  [![GitHub Issues][GitHub-issues]][GitHub-issues-url]
  [![GitHub Pull Requests][GitHub-pr]][Github-pr-url]
  [![npm][npm]][npm-url]
  [![License][License]][License-url]

</div>

---


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#pre-requisites">Pre Requisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#api-props">API and props</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribute">Contribute</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

</br>

<!-- ABOUT THE PROJECT -->
## About The Project 📝

Docco is the no code tool that with a few clicks will boost your company documentation. We understand how important it is to build a product, that is why we help companies transform their API specs into products that will facilitate the integration of customers.

Our mission is to transform documentation into products without any effort. Nowadays all the companies need to provide endpoints that other companies can integrate with. One of the biggest problems is that the documentation provided for companies to integrate with those endpoints is inaccurate, outdated, unclear and can lead to confusion and even frustration from the customers. Docco is here to avoid all that, with just a few clicks, all the documentation will be ready to be consumed

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- GETTING STARTED -->
## Getting Started 🚀

<!-- PRE--REQUISITES -->
### Pre-Requisites <a name = "pre-requisites"></a>

* Have installed yarn or npm
* Node version >= 16

<!-- INSTALLATION -->
### Installation <a name = "installation"></a>

```bash
npm install --save docco
```

Or with yarn:

```bash
yarn add docco
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- DEMO -->
## Demo ✨ <a name = "demo"></a>

```tsx
import Docco from '@docco/docco';
import React from 'react';

export default function App() {
  return (
    <div className='App'>
      <Docco url='https://api.docco.io/openapi.json' />
    </div>
  );
}

```

In the interactive demo below, try changing the code and see how it affects the output.

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/docco-docco-react-wwl68t)


Directory `examples` contains examples of how to use Docco component

| Demo                                     | Usage  | Description                                                       |
| ---------------------------------------- | ------ | ----------------------------------------------------------------- |
| [Angular demo](./examples/angular/)      | Anguar | Demo for Angular component. Run `npm run start` to start demo.    |
| [React demo](./examples/react/)          | React  | Demo for React component. Run `npm run start` to start demo.      |
| [Standalone demo](./examples/standalone/)| HTML   | Demo for Standalone component. Run `npm run start` to start demo. |
| [Vanilla demo](./examples/vanilla/)      | HTML   | Demo for Vanilla component. Run `npm run start` to start demo.    |
| [Vue demo](./examples/vue/)              | Vue    | Demo for Vue component. Run `npm run serve` to start demo.        |
| [Web Component demo](./examples/wc/)     | HTML   | Demo for Web component. Run `npm run start` to start demo.        |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- API AND PROPS -->
## API / Props 🧪 <a name = "api-props"></a>

```tsx
export interface Props {
  url: string;
  theme?: 'light' | 'dark';
}

```
- **url**: Url where the open api spec is located. For example: https://petstore.swagger.io/v2/swagger.json
- **theme**: Will set the docs theme. For now we support light and dark. The goal of this property is to receive a config object to make the look and feeling of the documentation customizable per organization

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ROADMAP -->
## Roadmap 📍 <a name = "roadmap"></a>

- [O] MVP Version of Docco
- [O] Docco v2
  - [🤫😶] Stay tuned

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- CONTRIBUTE AND FEEDBACK -->
## Contribute and Feedback 🤝 <a name = "contribute"></a>

We understand that the union make force. That is why we are grateful to the community for contributing with bugfixes and improvments. The main purpose of this repository is to continue evolving Docco, making it faster and easier to use. Development of Docco happens in the open on GitHub. Read below to learn how you can take part in improving Docco.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

Docco has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Docco.

- This repo is under active development. If you have any improvements / suggestions please file an [issue](https://github.com/doccoio/docco-mono/issues/new/choose) or send in a [Pull Request](https://github.com/doccoio/docco-mono/pulls)
- The [issues](https://github.com/doccoio/docco-mono/issues/new/choose) page is a good place to visit if you want to pick up some task. It has a list of things that are to be implemented in the near future

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- LICENSE -->
## License 🔒

MIT © [Docco](https://github.com/doccoio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- Contact -->
## Contact 👻

- 🇵🇹 jcunhafonte@gmail.com
- 🇦🇷 hartridge.lucas@gmail.com
- 🌍 doccoioofficial@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments 🙏

This project would not be possible without:

* [![Mui][Mui]][Mui-url]
* [![React][React.js]][React-url]
* [![GitHub][GitHub]][GitHub-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Twitter]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[Twitter-url]: https://twitter.com/docco_io
[Medium]: https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white
[Medium-url]: https://medium.com/@doccoio/
[Youtube]: https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white
[Youtube-url]: https://www.youtube.com/channel/UC0HesLLbsKAIYzOk8WRC5QQ
[LinkedIn]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[LinkedIn-url]: https://www.linkedin.com/company/doccoio
[Status]: https://img.shields.io/badge/status-active-success.svg
[GitHub-issues]: https://img.shields.io/github/issues/doccoio/docco
[Github-issues-url]: https://github.com/doccoio/docco/issues
[Github-pr]: https://img.shields.io/github/issues-pr/doccoio/docco
[Github-pr-url]: https://github.com/doccoio/docco/pulls
[npm]: https://img.shields.io/badge/package-npm-green.svg
[npm-url]: https://www.npmjs.com/package/docco
[License]: https://img.shields.io/badge/license-MIT-green.svg
[License-url]: https://opensource.org/licenses/MIT
[Mui]: https://img.shields.io/badge/MUI-000000?style=for-the-badge&logo=mui&logoColor=white&
[Mui-url]: https://github.com/mui/material-ui
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Github]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Github-url]: https://github.com/