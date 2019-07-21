const findElementThatMatches = async (driverOrElement, locator, textTest) => {
  const elements = await driverOrElement.findElements(locator);
  if (elements.length > 0) {
    const elementTexts = (await Promise.all(
      elements.map(item => item.getText())
    )).map(text => text.trim());
    const index = elementTexts.findIndex(textTest);
    if (index >= 0) {
      return elements[index];
    }
  }
  return false;
};

module.exports = findElementThatMatches;
