# Smart Units Converter - Browser Extension

An extension that converts your selected values into popular units. Saves time, Makes life easier:dancer:

![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
[![GitHub issues](https://img.shields.io/github/issues/se20z09/units_converter_extension)](https://github.com/bhavesh242/units_converter_extension)
![GitHub contributors](https://img.shields.io/github/contributors/se20z09/units_converter_extension)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.com/se20z09/units_converter_extension.svg?branch=master)](https://travis-ci.com/se20z09/units_converter_extension)
[![Coverage Status](https://coveralls.io/repos/github/se20z09/units_converter_extension/badge.svg?branch=master)](https://coveralls.io/github/se20z09/units_converter_extension?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/se20z09/units_converter_extension/maintainability)
[![DOI](https://zenodo.org/badge/294249129.svg)](https://zenodo.org/badge/latestdoi/294249129)

Click on the image below to preview the working of the extension<br/>
[![Alt text](https://i.ytimg.com/vi/W4USPH2sBJw/hqdefault.jpg)](https://www.youtube.com/watch?v=W4USPH2sBJw&ab_channel=BhaveshAgrawal)

## Installation

-   Clone the repository using `git clone https://github.com/se20z09/units_converter_extension`
-   In the chrome browser open `chrome://extensions/`
-   Enable developer settings if it is not enabled
-   Choose Load Unpacked
-   Select the repository folder that was cloned in the first step
    ![image](https://github.com/se20z09/units_converter_extension/blob/master/assets/Images/load%20unpacked.PNG)
-   The extension will now be added to the Chrome
    ![image](https://github.com/se20z09/units_converter_extension/blob/master/assets/Images/Uploaded.PNG)
-   Screenshot of working of the extension
    ![image](https://github.com/se20z09/units_converter_extension/blob/master/assets/Images/Example.PNG)

## Languages

-   JavaScript
-   HTML
-   CSS

## Software Requirements

-   [Node.js v12.18.4](https://nodejs.org/en/download/)
-   [NPM v6.14.6](https://nodejs.org/en/download/)

## Static Analysis Tools

### IDE and Code Formatter

-   [Visual Studio Code](https://code.visualstudio.com/) IDE
-   [Prettier Formatter for Visual Studio Code](https://github.com/prettier/prettier-vscode/blob/main/README.md)

*   Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

#### Installation

-   Install through VS Code extensions. Search for Prettier - Code formatter
-   It can also be installed in VS Code: Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.
    `ext install esbenp.prettier-vscode`

### Code Coverage
* [Istanbul with nyc](https://istanbul.js.org/) - Local coverage
* [Coveralls](https://coveralls.io/) - Continuous integration coverage
* Code coverage is automatically output on every pull request via Coveralls bot and on every local test via the `npm test` script.
* <b>Installation:</b> all necessary modules are installed by running `npm install` from the root directory of the repository.

## Self-Rubric

| What                     | Notes                                                                                                                                                                                    | score 0..4<br>(0=no, 2=ok, 4=wow!) |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Misc                     | Group members attended tutorial sessions                                                                                                                                                 |                                    |
| Distrbuted dev model:    | decisions made by unanimous vote                                                                                                                                                         |                                    |
|                          | group meetings had a round robin speaking order                                                                                                                                          |                                    |
|                          | group meetings had a moderator that managed the round robin                                                                                                                              |                                    |
|                          | group meeting moderator rotated among the group                                                                                                                                          |                                    |
|                          | code conforms to some packaging standard                                                                                                                                                 |                                    |
|                          | code has can be downloaded from some standard package manager                                                                                                                            |                                    |
|                          | workload is spread over the whole team (one team member is often Xtimes more productive than the others... but nevertheless, here is a track record that everyone is contributing a lot) |                                    |
|                          | Number of commits                                                                                                                                                                        |                                    |
|                          | Number of commits: by different people                                                                                                                                                   |                                    |
|                          | Issues reports: there are many                                                                                                                                                           |                                    |
|                          | issues are being closed                                                                                                                                                                  |                                    |
|                          | License: exists                                                                                                                                                                          |                                    |
|                          | DOI badge: exists                                                                                                                                                                        |                                    |
|                          | Docs: doco generated , format not ugly                                                                                                                                                   |                                    |
|                          | Docs: what: point descriptions of each class/function (in isolation)                                                                                                                     |                                    |
|                          | Docs: how: for common use cases X,Y,Z mini-tutorials showing worked examples on how to do X,Y,Z                                                                                          |                                    |
|                          | Docs: why: docs tell a story, motivate the whole thing, deliver a punchline that makes you want to rush out and use the thing                                                            |                                    |
|                          | Docs: 3 minute video, posted to YouTube. That convinces people why they want to work on your code.                                                                                       |                                    |
|                          | (hard) code conforms to some known patterns                                                                                                                                              |                                    |
| Tools Matter             | Use of version control tools                                                                                                                                                             |                                    |
|                          | Extensive use of version control tools                                                                                                                                                   |                                    |
|                          | Repo has an up-to-date requirements.txt file                                                                                                                                             |                                    |
|                          | Repo does not have "ignore" files.                                                                                                                                                       |                                    |
|                          | Use of style checkers                                                                                                                                                                    |                                    |
|                          | Extensive Use of style checkers                                                                                                                                                          |                                    |
|                          | Use of code formatters.                                                                                                                                                                  |                                    |
|                          | Extensive Use of code formatters.                                                                                                                                                        |                                    |
|                          | Use of syntax checkers.                                                                                                                                                                  |                                    |
|                          | Extensive use of syntax checkers.                                                                                                                                                        |                                    |
|                          | Use of code coverage                                                                                                                                                                     |                                    |
|                          | Extensive use of code coverage                                                                                                                                                           | 4                                  |
|                          | other automated analysis tools                                                                                                                                                           | 4                                  |
|                          | Extensive use of other automated analysis tools                                                                                                                                          | 4                                  |
|                          | test cases exist                                                                                                                                                                         | 4                                  |
|                          | test cases are routinely executed                                                                                                                                                        |                                    |
| consensus-oriented model | the files CONTRIBUTING.md and CODEOFCONDUCT.md has have multiple edits by multiple people                                                                                                |                                    |
|                          | the files CONTRIBUTING.md lists coding standards and lots of tips on how to extend the system without screwing things up                                                                 |                                    |
|                          | multiple people contribute to discussions                                                                                                                                                |                                    |
|                          | issues are discussed before they are closed                                                                                                                                              |                                    |
|                          | Chat channel: exists                                                                                                                                                                     |                                    |
|                          | Chat channel: is active                                                                                                                                                                  |                                    |
|                          | test cases: a large proportion of the issues related to handling failing cases.                                                                                                          |                                    |
| zero internal boundaries | evidence that the whole team is using the same tools: everyone can get to all tools and files                                                                                            |                                    |
|                          | evidence that the whole team is using the same tools (e.g. config files in the repo, updated by lots of different people)                                                                |                                    |
|                          | evidence that the whole team is using the same tools (e.g. tutor can ask anyone to share screen, they demonstrate the system running on their computer)                                  |                                    |
|                          | evidence that the members of the team are working across multiple places in the code base                                                                                                |                                    |
| low-regressions rule     | (hard to judge) features released are not subsequently removed                                                                                                                           |                                    |
| short release cycles     | (hard to see in short projects) project members are committing often enough so that everyone can get your work                                                                           |                                    |
