# Project 2 Plan of Work

## What's Done
* A Chrome extension that performs unit conversion from a highlighted selection on a web page
  * Basic developer mode installation for Chrome works as documented
* The code registers a mouseup event listener that simply analyzes the current selection to see if the text selected can be converted (in `code/main_scripts/content_script.js`)
* The following conversions are currently supported (Implemented as a simple switch statement conversion unless otherwise stated):
  * Currency
    * Retrieved from https://exchangeratesapi.io
  * Length
  * Mass
  * Temperature
  * Time

## To Do
* **Testing -** add unit tests, get Travis CI running.
* **Add conversions:**<br>
  * Energy
  * Volume<br>
  * Density<br>
  * Stretch goal: Byte values<br>
* **Clean up UI:**<br>
  * Align results<br>
  * Visually emphasize units for clarity<br>
* **Demos -** add additional use cases and demos of project functionality, use gifs.
* **Documentation -** add file- and function-level documentation via JSDoc
* **Stretch Goal: Port -** port extension to other browsers, Firefox, etc

## Immediate Goals
* **Testing -** focus on unit tests of existing code
  * Validates correctness
  * Gets team up to speed on codebase
* **Continuous Integration -** 
  * Implement TravisCI testing to run unit testing
