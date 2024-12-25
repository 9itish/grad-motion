export function clampValue(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

export function isArrayOfArrays(variable) {
  return Array.isArray(variable) && variable.every(Array.isArray);
}

export function setUpGradientColors(colors) {
  let gradientColors = colors;

  if (isArrayOfArrays(colors)) {
    gradientColors = colors[0];
  }

  while (gradientColors.length < 20) {
    gradientColors = gradientColors.concat(gradientColors);
  }

  return gradientColors;
}


