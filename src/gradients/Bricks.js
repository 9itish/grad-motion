import { NeatAnimatedGradient } from "../base/NeatAnimatedGradient.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class Bricks extends NeatAnimatedGradient {
  constructor(config) {
    const { styleOptions = {} } = config;

    super(config);

    this.styleOptions = {
      baseSize: 100,
      quadColors: false,
      brickOutline: "#000",
      ...styleOptions,
    };
  }

  gradientType() {
    return "Bricks";
  }

  generateGradientString() {
    let baseSize = this.styleOptions.baseSize;
    let quadColors = this.styleOptions.quadColors;
    let brickOutline = this.styleOptions.brickOutline;

    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    if (quadColors) {
      gradientString += `linear-gradient(335deg, ${gradientColors[0]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) 0px ${(baseSize * 2) / 58}px,
  linear-gradient(155deg, ${gradientColors[1]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) ${(baseSize * 4) / 58}px ${
        (baseSize * 35) / 58
      }px,
  linear-gradient(335deg, ${gradientColors[2]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) ${(baseSize * 29) / 58}px ${
        (baseSize * 31) / 58
      }px,
  linear-gradient(155deg, ${gradientColors[3]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) ${(baseSize * 34) / 58}px ${
        (baseSize * 6) / 58
      }px, ${brickOutline}`;
    } else {
      gradientString += `linear-gradient(335deg, ${gradientColors[0]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) 0px ${(baseSize * 2) / 58}px,
    linear-gradient(155deg, ${gradientColors[1]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) ${(baseSize * 4) / 58}px ${
        (baseSize * 35) / 58
      }px,
    linear-gradient(335deg, ${gradientColors[0]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) ${(baseSize * 29) / 58}px ${
        (baseSize * 31) / 58
      }px,
    linear-gradient(155deg, ${gradientColors[1]} ${
        (baseSize * 23) / 58
      }px, transparent ${(baseSize * 23) / 58}px) ${(baseSize * 34) / 58}px ${
        (baseSize * 6) / 58
      }px, ${brickOutline}`;
    }

    return gradientString;
  }
}
