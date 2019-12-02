const createNumbersArray = (startAt, maxLength) => Array.from(Array(maxLength), (_, index) => index + startAt);

export const getPageButtonsNumbersArray = (selectedPageButton, highestIndexOfSelectedPageButton, maximumNumberOfPageButtons, rowLimit, totalNumberOfRows) => {
  if (totalNumberOfRows <= rowLimit || totalNumberOfRows === 0 || rowLimit === 0) return [];
  const numberOfPageButtons = Math.ceil(totalNumberOfRows / rowLimit);
  if (numberOfPageButtons <= maximumNumberOfPageButtons) return createNumbersArray(1, numberOfPageButtons);
  return [];
};
