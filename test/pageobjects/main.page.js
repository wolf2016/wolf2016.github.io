const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {

      /**
      * define elements
      */
      get arrayInput () { return $('#array') }
      get submitBtn () { return $('#submit') }
      get resultDiv () { return $('#flat') }

      /**
       * a method to encapsule automation code to interact with the page
       * e.g. to login using username and password
       */
      enterObject (obj) {
          this.arrayInput.setValue(obj);
          this.submitBtn.click();
      }
}

module.exports = new MainPage();
