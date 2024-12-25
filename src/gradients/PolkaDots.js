import { NeatAnimatedGradient } from "../base/NeatAnimatedGradient.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class PolkaDots extends NeatAnimatedGradient {
  constructor(config) {
    const { styleOptions = {} } = config;

    super(config);

    this.styleOptions = {
      bgPosMultipliers: [0, 0, 0.5, 0.5],
      backgroundBlend: false,
      baseSize: 100,
      rings: false,
      radii: [25, 45],
      triColor: false,
      ...styleOptions,
    };
  }

  gradientType() {
    return "PolkaDots";
  }

  generateGradientString() {
    let bgPosMultipliers = this.styleOptions.bgPosMultipliers;
    let baseSize = this.styleOptions.baseSize;
    let rings = this.styleOptions.rings;
    let radii = this.styleOptions.radii;
    let triColor = this.styleOptions.triColor;

    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    const backgroundDiv = this.element.querySelector(".ngrad-background");

    let bgPositions = [
      `${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`,
      `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`,
    ];

    if (this.styleOptions.updateVariable) {
      if (this.styleOptions.rings) {
        backgroundDiv.style.setProperty(
          `--first-stop`,
          `calc(var(--tick-sin) * ${radii[0] - 10}%)`
        );
        backgroundDiv.style.setProperty(
          `--second-stop`,
          `calc(var(--tick-cos) * ${radii[1] - 10}%)`
        );
      } else {
        backgroundDiv.style.setProperty(
          `--first-stop`,
          `calc(var(--tick-sin) * ${radii[0]}%)`
        );
        backgroundDiv.style.setProperty(
          `--second-stop`,
          `calc(var(--tick-cos) * ${radii[1]}%)`
        );
      }
    } else {
      if (this.styleOptions.rings) {
        backgroundDiv.style.setProperty(`--first-stop`, `${radii[0] - 10}%`);
        backgroundDiv.style.setProperty(`--second-stop`, `${radii[1] - 10}%`);
      } else {
        backgroundDiv.style.setProperty(`--first-stop`, `${radii[0]}%`);
        backgroundDiv.style.setProperty(`--second-stop`, `${radii[1]}%`);
      }
    }

    if (rings) {
      gradientString += `radial-gradient(${gradientColors[0]} var(--first-stop), ${gradientColors[1]} calc(var(--first-stop) + 1%), ${gradientColors[1]} calc(var(--first-stop) + 15%), transparent calc(var(--first-stop) + 16%)) ${bgPositions[0]}, radial-gradient(${gradientColors[1]} var(--second-stop), ${gradientColors[0]} calc(var(--second-stop) + 1%), ${gradientColors[0]} calc(var(--second-stop) + 15%), transparent calc(var(--second-stop) + 16%)) ${bgPositions[1]}`;
    } else {
      gradientString += `radial-gradient(${gradientColors[0]} var(--first-stop), transparent calc(var(--first-stop) + 2%)) ${bgPositions[0]}, radial-gradient(${gradientColors[1]} var(--second-stop), transparent calc(var(--second-stop) + 2%)) ${bgPositions[1]}`;
    }

    if (!triColor) {
      if (this.styleOptions.backgroundBlend) {
        gradientString += `, ${gradientColors[0]}`;
      } else {
        gradientString += `, ${gradientColors[0]}66`;
      }
    } else {
      gradientString += `, ${gradientColors[2]}DD`;
    }

    console.log(gradientString);

    return gradientString;
  }
}
