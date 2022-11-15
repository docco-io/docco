# Contributing to Docco

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Docco community. Here are a few guidelines that will help you along the way.

## Code of Conduct

Docco has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## A large spectrum of contributions

There are many ways to contribute to Docco, code contribution is one aspect of it. For instance, documentation improvements are as important as code changes.

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Pull requests working on other issues or completely new problems may take a bit longer to review when they don't fit into our current development cycle.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than a week, it's fine to take it over but you should still leave a comment.
If there has been no activity on the issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Sending a Pull Request

Docco is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

### Before submitting a pull request, please make sure the following is done:

1. Fork the [repository](https://github.com/doccoio/docco) and create your branch from main.
2. Install dependencies with yarn install. Make sure you are using at least node 16 for local development
3. If you’ve fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (yarn test). Tip: yarn test --watch TestName is helpful in development.
5. Run yarn test --prod to test in the production environment.
6. If you need a debugger, run yarn debug-test --watch TestName, open chrome://inspect, and press “Inspect”.
7. Format your code with prettier (yarn prettier).
8. Make sure your code lints (yarn lint). Tip: yarn lint to only check changed files.

The team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### Trying changes on the documentation site

The documentation site is built with Docco and contains examples of all the components.
This is the best place to experiment with your changes.
It's the local development environment used by the maintainers.

To get started:

```sh
yarn start
```

You can now access the documentation site locally: http://localhost:3000.
Changes to the docs will hot reload the site.


### How to increase the chance of being accepted?

Continuous Integration (CI) runs a series of checks automatically when a Pull Request is opened. If you're not
sure if your changes will pass, you can always open a Pull Request and the GitHub UI will display a summary of
the results. If any of them fail, refer to [Checks and how to fix them](#checks-and-how-to-fix-them).

Make sure the following is true:

<!-- #default-branch-switch -->

- The branch is targeted at `main` for ongoing development. We do our best to keep `main` in good shape, with all tests passing. Code that lands in `main` must be compatible with the latest stable release. It may contain additional features, but no breaking changes. We should be able to release a new minor version from the tip of `main` at any time.
- If a feature is being added:
  - If the result was already achievable with the core library, explain why this feature needs to be added to the core.
  - If this is a common use case, consider adding an example to the documentation.
- When adding new features or modifying existing ones, please include tests to confirm the new behavior. You can read more about our test setup in our test [README](https://github.com/docco/docco/blob/HEAD/test/README.md).
- If props were added or prop types were changed, the TypeScript declarations were updated.
- When submitting a new component, please add it to the [lab](https://github.com/docco/docco/tree/HEAD/packages/Docco-lab).
- The branch is not [behind its target branch](https://github.community/t/branch-10-commits-behind/2403).

Because we will only merge a Pull Request for which all tests pass. The following items need to be true:

- The code is formatted. If the code was changed, run `yarn prettier`.
- The code is linted. If the code was changed, run `yarn lint`.
- The code is type-safe. If TypeScript sources/declarations were changed, `yarn typescript` passed.
- The API docs are up-to-date. If API was changed, run `yarn proptypes && yarn docs:api`.
- The demos are up-to-date. If demos were changed, make sure `yarn docs:typescript:formatted` does not introduce changes. See [about writing demos](#3-write-the-content-of-the-demo).
- The Pull Request title follows the pattern `[Component] Imperative commit message`. (See: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) for a great explanation).

If you have missed a step, don't worry, the Continuous Integration will run a thorough test on your commits and the maintainers of the project can assist.

If your pull request addresses an open issue, make sure to link the PR to that issue.
Use any [supported GitHub keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) in the PR description to automatically link them.
This makes it easier to understand where the PR is coming from and also speeds things up as the issue gets closed when the PR is merged.

#### Checks and how to fix them

If any of the checks fails click on the _Details_
link and review the logs of the build to find out why it failed.
For CircleCI you need to log in first.
No further permissions are required to view the build logs.
The following section gives an overview of what each check is responsible for.

##### release-please

This task should not fail in isolation. It generates for more information look at [Release Please Action](https://github.com/google-github-actions/release-please-action)


### Updating the component API documentation

The component API in the component `propTypes` and under `docs/pages/api-docs` is auto-generated from the [JSDoc](https://jsdoc.app/about-getting-started.html) in the TypeScript declarations.
Be sure to update the documentation in the corresponding `.d.ts` files (e.g. `packages/docco/src/Button/Button.d.ts` for `<Button>`) and then run:

```sh
$ yarn proptypes
$ yarn docs:api
```

### Coding style

Please follow the coding style of the project. Docco uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `yarn prettier` reformats the code.
- `yarn lint` runs manually the linting rules.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## How to add a new demo in the documentation

If, for example, you want to add new demos for the button component, you have to take the following steps:

### 1. Add a new React component file under the related directory

In this case, you are going to add the new file to the following directory:

```sh
docs/src/pages/components/buttons/
```

and give it a name: `SuperButtons.js`.

### 2. Edit the page Markdown file

The Markdown file is the source for the website documentation. So, whatever you wrote there will be reflected on the website.
In this case, the file you need to edit is `docs/src/pages/components/buttons/buttons.md`.

Changes should only be applied to the English version e.g. only `app-bar.md` and
not `app-bar-de.md`. For contributions concerning translations please read the [section
about translations](#translations).

```diff
+### Super buttons
+
+Sometimes, you need a super button to make your app looks **superb**. Yea ...
+
+{{"demo": "pages/components/buttons/SuperButtons.js"}}
```

### 3. Write the content of the demo

Docco documents how to use this library with TypeScript.

If you are familiar with this language, write the demo in TypeScript, and only, in a \*.tsx file.
When you're done run `yarn docs:typescript:formatted` to automatically create the JavaScript version.

If you are not familiar with that language, write the demo in JavaScript, a core contributor might help you to migrate it to TypeScript.

### 4. You are done 🎉

In case you missed something, [we have a real example that can be used as a summary report](https://github.com/docco/docco/pull/19582/files).

## How can I use a change that wasn't released yet?

[Codesandbox CI](https://codesandbox.io/docs/ci) is used to publish a working version of the packages for each pull request, "a preview".

In practice, you can check the Codesandbox CI status of a pull request to get the URL needed to install these preview packages:

```diff
diff --git a//package.json b//package.json
index 791a7da1f4..a5db13b414 100644
--- a/package.json
+++ b/package.json
@@ -61,7 +61,7 @@
   "dependencies": {
-    "@docco/docco": "0.0.1",
+    "@docco/doccol": "https://pkg.csb.dev/docco/docco/commit/371c952b/@docco/docco"
   }
```

Alternatively, you can open any demo in Codesandbox. The documentation automatically configures the dependencies to use the preview packages.

## Translations

Translations are handled via [Crowdin](https://translate.docco.com).
You don't need to apply any changes to localized versions of our markdown files
i.e. files having a `-locale` suffix. Crowdin automatically takes care of syncing
these changes across the localized versions.

## Roadmap

To get a sense of where Docco is heading, or for ideas on where you could contribute, take a look at the [roadmap](./README.md).

## License

By contributing your code to the [docco/docco](https://github.com/docco/docco) GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).