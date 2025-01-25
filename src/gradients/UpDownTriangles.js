import { GradMotion } from "../base/GradMotion.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class UpDownTriangles extends GradMotion {
  constructor(config) {
    const { styleOptions = {} } = config;

    super(config);

    this.styleOptions = {
      baseSize: 100,
      angle: [-60, 60, 120, 240],
      triangleSize: [20, 20],
      bgPosMultipliers: [0, 0, 0, 0, 0.5, 0.75, 0.5, 0.75],
      variant: "",
      triColor: false,
      seamless: false,
      ratio: 1,
      ...styleOptions,
    };
  }

  gradientType() {
    return "UpDownTriangles";
  }

  generateGradientString() {
    let baseSize = this.setBaseSize(this.styleOptions.baseSize);
    let triColor = this.styleOptions.triColor;
    let triangleSize = this.styleOptions.triangleSize;
    let angles = this.styleOptions.angle;
    let variant = this.styleOptions.variant;

    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    const backgroundDiv = this.element.querySelector(".ngrad-background");

    if (variant == "opposite-stripes") {
      this.styleOptions.bgPosMultipliers = [-1 / 3, 0, 1, 0, -1 / 3, 0, 1, 0];
      this.styleOptions.ratio = 2.8;
    }

    if (variant == "stars") {
      this.styleOptions.bgPosMultipliers = [0, -1 / 3, 0, -1 / 3, 0, 0, 0, 0];
    }

    if (variant == "aligned") {
      this.styleOptions.bgPosMultipliers = [0, 0, 0, 0, 0, 0, 0, 0];
    }

    let bgPosMultipliers = this.styleOptions.bgPosMultipliers;

    let bgPositions = [
      `${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`,
      `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`,
      `${bgPosMultipliers[4] * baseSize}px ${bgPosMultipliers[5] * baseSize}px`,
      `${bgPosMultipliers[6] * baseSize}px ${bgPosMultipliers[7] * baseSize}px`,
    ];

    if (this.styleOptions.updateVariable) {
      backgroundDiv.style.setProperty(
        `--first-stop`,
        `calc(var(--tick-sin) * 20% + ${80 - triangleSize[0]}%)`
      );
      backgroundDiv.style.setProperty(
        `--second-stop`,
        `calc(var(--tick-sin) * 20% + ${80 - triangleSize[1]}%)`
      );
    } else {
      backgroundDiv.style.setProperty(
        `--first-stop`,
        `calc(${100 - triangleSize[0]}%)`
      );
      backgroundDiv.style.setProperty(
        `--second-stop`,
        `calc(${100 - triangleSize[1]}%)`
      );
    }

    gradientString += `linear-gradient(${angles[0]}deg, transparent var(--first-stop), ${gradientColors[0]} calc(var(--first-stop) + 1%)) ${bgPositions[0]}, linear-gradient(${angles[1]}deg, transparent var(--first-stop), ${gradientColors[0]} calc(var(--first-stop) + 1%)) ${bgPositions[1]}, linear-gradient(${angles[2]}deg, transparent var(--second-stop), ${gradientColors[1]} calc(var(--second-stop) + 1%)) ${bgPositions[2]}, linear-gradient(${angles[3]}deg, transparent var(--second-stop), ${gradientColors[1]} calc(var(--second-stop) + 1%)) ${bgPositions[3]}`;

    if (!triColor) {
      gradientString += `, ${gradientColors[0]}66`;
    } else {
      gradientString += `, ${gradientColors[2]}66`;
    }

    return gradientString;
  }
}
