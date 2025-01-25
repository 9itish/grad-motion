import { GradMotion } from "../base/GradMotion.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class Linear extends GradMotion {
  constructor(config) {
    // First, we get styleOptions form the passed configuration.
    const { styleOptions = {} } = config;

    super(config);

    // These style options are then merged with the styleOptions of the derived class.
    this.styleOptions = {
      angle: 0,
      updateVariable: false,
      ...styleOptions,
    };
  }

  gradientType() {
    return "Linear";
  }

  generateGradientString() {
    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    let angle = this.styleOptions.angle;
    let updateVariable = this.styleOptions.updateVariable;

    if (!isArrayOfArrays(this.colors)) {
      if (!updateVariable) {
        gradientString += `linear-gradient(${angle}deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]})`;
      } else {
        gradientString += `linear-gradient(calc(var(--tick) * 60deg + ${angle}deg), ${gradientColors[0]}, ${gradientColors[1]})`;
      }
    } else {
      let gradientColorsB = this.colors[1];

      if (!updateVariable) {
        gradientString += `linear-gradient(${angle}deg, color-mix(in srgb, ${gradientColors[0]} calc(var(--tick-sin) * 100%), ${gradientColorsB[0]}), color-mix(in srgb, ${gradientColors[1]} calc(var(--tick-sin) * 100%), ${gradientColorsB[1]}))`;
      } else {
        gradientString += `linear-gradient(calc(var(--tick) * 60deg + ${angle}deg), color-mix(in srgb, ${gradientColors[0]} calc(var(--tick-sin) * 100%), ${gradientColorsB[0]}), color-mix(in srgb, ${gradientColors[1]} calc(var(--tick-sin) * 100%), ${gradientColorsB[1]}))`;
      }
    }

    return gradientString;
  }
}
