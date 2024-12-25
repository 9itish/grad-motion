import { NeatAnimatedGradient } from "../base/NeatAnimatedGradient.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class ZigZag extends NeatAnimatedGradient {
  constructor(config) {
    const { styleOptions = {} } = config;

    super(config);

    this.styleOptions = {
      bgPosMultipliers: [-0.5, 0, -0.5, 0, 0, 0, 0, 0],
      bandWidth: 0,
      baseSize: 100,
      translucent: false,
      triColor: false,
      updateVariable: false,
      variant: "",
      ...styleOptions,
    };
  }

  gradientType() {
    return "ZigZag";
  }

  generateGradientString() {
    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    const backgroundDiv = this.element.querySelector(".ngrad-background");

    let bgPosMultipliers = this.styleOptions.bgPosMultipliers;
    let baseSize = this.styleOptions.baseSize;
    let triColor = this.styleOptions.triColor;
    let translucent = this.styleOptions.translucent;
    let bandWidth = this.styleOptions.bandWidth;

    bandWidth = 25 + clampValue(bandWidth, 0, 10);

    if (this.styleOptions.variant == "uneven") {
      bgPosMultipliers = [0, 0, 0, 0, -0.25, 0, -0.25, 0];
    }

    if (this.styleOptions.variant == "squares") {
      bgPosMultipliers = [0.1, -0.1, -0.1, -0.1, -0.1, -0.1, 0.1, -0.1];
    }

    if (this.styleOptions.variant == "square-stripes") {
      bgPosMultipliers = [0, 0, 0, 0, 0, -0.5, 0, 0.5];
    }

    if (this.styleOptions.variant == "square-diagonals") {
      bgPosMultipliers = [0, -0.75, 0, 0.25, 0, -0.75, 0, 0.25];
    }

    if (this.styleOptions.variant == "pinwheel") {
      bgPosMultipliers = [0, 0, -0.5, -0.5, 0, 0, 0.5, 0.5];
    }

    if (this.styleOptions.variant == "arrows") {
      bgPosMultipliers = [0, 0, 0.5, 0.5, 0, 0, 0, 0];
    }

    let bgPositions = [
      `${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`,
      `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`,
      `${bgPosMultipliers[4] * baseSize}px ${bgPosMultipliers[5] * baseSize}px`,
      `${bgPosMultipliers[6] * baseSize}px ${bgPosMultipliers[7] * baseSize}px`,
    ];

    if (this.styleOptions.updateVariable) {
      bandWidth = 10;

      backgroundDiv.style.setProperty(
        `--first-stop`,
        `calc(var(--tick-sin) * ${bandWidth}% + 25%)`
      );
      backgroundDiv.style.setProperty(
        `--second-stop`,
        `calc(var(--tick-sin) * ${bandWidth + 0.1}% + 25%)`
      );
    } else {
      backgroundDiv.style.setProperty(
        `--first-stop`,
        `calc(var(--tick-sin) * ${bandWidth}%)`
      );
      backgroundDiv.style.setProperty(
        `--second-stop`,
        `calc(var(--tick-sin) * ${bandWidth + 0.1}%)`
      );
    }

    if (!triColor) {
      gradientString += `linear-gradient(135deg, ${gradientColors[1]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[0]}, linear-gradient(225deg, ${gradientColors[1]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[1]}, linear-gradient(315deg, ${gradientColors[1]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[2]}, linear-gradient(45deg, ${gradientColors[1]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[3]}`;
    } else {
      gradientString += `linear-gradient(135deg, ${gradientColors[2]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[0]}, linear-gradient(225deg, ${gradientColors[1]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[1]}, linear-gradient(315deg, ${gradientColors[2]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[2]}, linear-gradient(45deg, ${gradientColors[1]} var(--first-stop), transparent var(--second-stop)) ${bgPositions[3]}`;
    }

    if (translucent) {
      gradientString += `, ${gradientColors[0]}66`;
    } else {
      gradientString += `, ${gradientColors[0]}`;
    }

    return gradientString;
  }
}