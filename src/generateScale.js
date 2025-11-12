function generateProgressiveScale(maxValue = 320, initialStep = 2, ratio = 10) {
  const values = [];
  let value = 0;
  let step = initialStep;

  while (value <= maxValue) {
    values.push(value);
    value += step;
    if (value / step === ratio) step *= 2;
  }
  return values;
}

module.exports = { generateProgressiveScale };
