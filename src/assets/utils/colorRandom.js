const ColorRandom = () => {
  const makingColorCode = '0123456789ABCDEF';
  let finalCode = '';
  for (let counter = 0; counter < 6; counter++) {
    finalCode =
      finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  }
  return finalCode;
};

export default ColorRandom;
