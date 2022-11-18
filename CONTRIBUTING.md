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
2. Install dependencies with `yarn install`. Make sure you are using at least node 16 for local development
3. If you’ve fixed a bug or added code that should be tested, add tests!. Our project is driven by quality so PR without coverage will not be accepted
4. Ensure the Unit test pass `yarn test`
5. Ensure the Interaction test pass `yarn storybook:test:ci`. This command is to launch storybook and run the test in all the browsers
6. Ensure the Lint pass `yarn lint`
7. Ensure the Prettier pass `yarn format`
8. Our project is based on conventional commits, we recommend to use `yarn commit` in order to commit using commitlint cli but also is possible to commit in any other way

ℹ️ All this commands will be run automatically on the CI process and locally we are using husky, so in case any of those is missing, there is a process that will automatically run them

The team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### Trying changes on codesandbox

When the Pull Request will be created, the code-sandbox ci task will generate multiple examples based on the examples project that is available on the repository  

You can open any of the examples and test their your changes since the example are generated based on your commit

The url with the examples will be available on the Pull Request


### How to increase the chance of being accepted?

Continuous Integration (CI) runs a series of checks automatically when a Pull Request is opened. If you're not
sure if your changes will pass, you can always open a Pull Request and the GitHub UI will display a summary of
the results. 

#### Our CI Process

- The branch is targeted at `main` for ongoing development. We do our best to keep `main` in good shape, with all tests passing. Code that lands in `main` must be compatible with the latest stable release. It may contain additional features, but no breaking changes. We should be able to release a new minor version from the tip of `main` at any time.

1. **Lint PR Title**: Action that will check that the Pull Request title follows the pattern `<type>[optional scope]: <description>`. (See: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for a great explanation).
2. **Lint commit**: Action that will check that the commit follows the conventional commits
3. **Lint Code**: Action that will check the code follows the code styles guidelines
4. **Unit test**: Action that will run the unit test
5. **Build**: Action that will build the project
6. **Interaction test**: Action that will run the interaction test in multiple browsers using storybook

If you have missed a step, don't worry, the Continuous Integration will run a through test on your commits and the maintainers of the project can assist at any time.

If your pull request addresses an open issue, make sure to link the PR to that issue.
Use any [supported GitHub keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) in the PR description to automatically link them.

This makes it easier to understand where the PR is coming from and also speeds things up as the issue gets closed when the PR is merged.

### Autogenerated Docs

For documentation we have the live code that leaves in codesandbox, but we also take advantage of typedoc that will autogenerate the documentation of our componenets

In order to generate them only is needed to run `yarn docs`

### Coding style

Please follow the coding style of the project. Docco uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `yarn format` reformats the code.
- `yarn lint` runs manually the linting rules.
- `yarn lint:fix` runs manually the linting rules and fix automatically the potential issues

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## How to add a new example on storybook

### 1. Add a new Story 

Storybook by default it will look any file that contains `*.stories*` inside the `src` folder. So to add a new example you can create a new file or update the existing ones

### 2. Test the new story

In order to test the new example it is neccesary to run `yarn storybook`
After the build is done, the browser will be open showing all the different stories added

### 3. Write an Interaction Test

Docco is a brand oriented to quality. All the new code needs to be potentially tested. The interaction test is a concept that was brought by storybook [See](https://storybook.js.org/blog/interaction-testing-with-storybook/)

The interaction test help us to test our examples created as stories, that are real use cases. There is plenty of material on the web but if you need any maintainers help don't hesitate to let us know

1. Go to tests/e2e
2. Add a new interaction test in `Docco.test.ts` or create any file following the convention `*test.ts` since storybook interaction test are based on jest
3. Run your test `yarn storybook:test`. For this command is neccesary to have storybook running if not you can always run `yarn storybook:test:ci` that will run the same command that is use in the CI process

### 4. You are done 🎉

In case you have any problem the maintainers and the community of docco is here to help

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
+    "@docco/docco": "https://pkg.csb.dev/docco/docco/commit/371c952b/@docco/docco"
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

By contributing your code to the [docco/docco](https://github.com/doccoio/docco) GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).