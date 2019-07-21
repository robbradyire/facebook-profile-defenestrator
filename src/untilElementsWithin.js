const { Condition, WebElementCondition } = require('selenium-webdriver');

const untilElementsWithin = (
  root,
  descendantLocator,
  singleElement = false
) => {
  const Constructor = singleElement ? WebElementCondition : Condition;
  return new Constructor(
    `for nested elements ${descendantLocator.value}`,
    async () => {
      const descendants = await root.findElements(descendantLocator);
      if (descendants.length > 0) {
        return singleElement ? descendants[0] : descendants;
      }
      return false;
    }
  );
};

module.exports = untilElementsWithin;
