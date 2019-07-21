const { WebElementCondition } = require('selenium-webdriver');

const untilElementWithin = (root, descendantLocator) =>
  new WebElementCondition(
    `for nested element ${descendantLocator.value}`,
    async () => {
      const descendants = await root.findElements(descendantLocator);
      return descendants.length > 0 ? descendants[0] : false;
    }
  );

module.exports = untilElementWithin;
