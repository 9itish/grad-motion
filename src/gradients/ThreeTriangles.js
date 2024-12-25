import { NeatAnimatedGradient } from "../base/NeatAnimatedGradient.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class ThreeTriangles extends NeatAnimatedGradient {
  constructor(config) {
    const { styleOptions = {} } = config;

    super(config);

    this.styleOptions = {
      baseSize: 60,
      angle: [-135, 135],
      bands: [20, 30, 33, 40, 45],
      bgPosMultipliers: [0, 0, 0, 0],
      variant: "",
      triColor: false,
      seamless: false,
      ...styleOptions,
    };
  }

  gradientType() {
    return "ThreeTriangles";
  }

  generateGradientString() {
    let bgPosMultipliers = this.styleOptions.bgPosMultipliers;
    let baseSize = this.styleOptions.baseSize;
    let angle = this.styleOptions.angle;
    let bands = this.styleOptions.bands;
    let triColor = this.styleOptions.triColor;
    let variant = this.styleOptions.variant;

    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    const backgroundDiv = this.element.querySelector(".ngrad-background");

    if (Array.isArray(baseSize)) {
      baseSize = baseSize[0];
    }

    if (this.styleOptions.seamless) {
      baseSize = this.element.offsetWidth / this.styleOptions.parts;
    }

    if (variant == "geometric-bands") {
      bands = [4, 10, 18, 24, 40, 44];
    }

    if (variant == "geometric-half-bands") {
      bands = [4, 10, 18, 24, 40, 44];
      bgPosMultipliers = [0, 0, 0, 0.5];
    }

    let bgPositions = [
      `${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`,
      `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`,
    ];

    if (this.styleOptions.updateVariable) {
      backgroundDiv.style.setProperty(
        `--first-stop`,
        `calc(var(--tick-sin) * ${bands[0] * 3}%)`
      );
      backgroundDiv.style.setProperty(`--second-stop`, `${bands[2]}%`);
      backgroundDiv.style.setProperty(`--third-stop`, `${bands[4]}%`);
    } else {
      backgroundDiv.style.setProperty(`--first-stop`, `calc(${bands[0]}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `${bands[2]}%`);
      backgroundDiv.style.setProperty(`--third-stop`, `${bands[4]}%`);
    }

    gradientString = `linear-gradient(${angle[0]}deg, ${
      gradientColors[0]
    } var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${
      bands[1]
    }%, ${gradientColors[0]} ${
      bands[1] + 0.5
    }% var(--second-stop), transparent var(--second-stop) ${bands[3]}%, ${
      gradientColors[0]
    } ${
      bands[3] + 0.5
    }% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${
      bgPositions[0]
    }, linear-gradient(${angle[1]}deg, ${
      gradientColors[0]
    } var(--first-stop), transparent var(--first-stop) ${bands[1]}%, ${
      gradientColors[0]
    } ${bands[1] + 0.5}% var(--second-stop), transparent var(--second-stop) ${
      bands[3]
    }%, ${gradientColors[0]} ${
      bands[3] + 0.5
    }% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${
      bgPositions[1]
    }`;

    if (variant == "band-shades") {
      gradientString = `linear-gradient(${angle[0]}deg, ${
        gradientColors[1]
      } var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${
        bands[1]
      }%, ${gradientColors[0]} ${
        bands[1] + 0.5
      }% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${
        bands[3]
      }%, ${gradientColors[1]} ${
        bands[3] + 0.5
      }% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${
        bgPositions[0]
      }, linear-gradient(${angle[1]}deg, ${
        gradientColors[1]
      } var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${
        bands[1]
      }%, ${gradientColors[0]} ${
        bands[1] + 0.5
      }% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${
        bands[3]
      }%, ${gradientColors[1]} ${
        bands[3] + 0.5
      }% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${
        bgPositions[1]
      }`;
    }

    if (variant == "half-shades") {
      gradientString = `linear-gradient(${angle[0]}deg, ${
        gradientColors[0]
      } var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${
        bands[1]
      }%, ${gradientColors[0]} ${
        bands[1] + 0.5
      }% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${
        bands[3]
      }%, ${gradientColors[0]} ${
        bands[3] + 0.5
      }% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${
        bgPositions[0]
      }, linear-gradient(${angle[1]}deg, ${
        gradientColors[1]
      } var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${
        bands[1]
      }%, ${gradientColors[1]} ${
        bands[1] + 0.5
      }% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${
        bands[3]
      }%, ${gradientColors[1]} ${
        bands[3] + 0.5
      }% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${
        bgPositions[1]
      }`;
    }

    if (!triColor) {
      gradientString += `, ${gradientColors[1]}66`;
    } else {
      gradientString += `, ${gradientColors[2]}`;
    }

    return gradientString;
  }
}
