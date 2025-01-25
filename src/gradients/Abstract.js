import { GradMotion } from "../base/GradMotion.js";
import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

export class Abstract extends GradMotion {
  constructor(config) {
    const { styleOptions = {} } = config;

    super(config);

    this.styleOptions = {
      centers: [0, 0, -30, 30, 100, 100],
      blendMode: "difference",
      updateVariable: false,
      ...styleOptions,
    };
  }

  gradientType() {
    return "Abstract";
  }

  generateGradientString() {
    let gradientString = "";
    let gradientColors = setUpGradientColors(this.colors);

    const backgroundDiv = this.element.querySelector(".ngrad-background");

    let centers = this.styleOptions.centers;
    let updateVariable = this.styleOptions.updateVariable;
    let blendMode = this.styleOptions.blendMode;

    backgroundDiv.style.backgroundBlendMode = blendMode;

    if (updateVariable) {
      backgroundDiv.style.setProperty(
        `--first-stop`,
        `calc(var(--tick-sin) * ${centers[0]}%) calc(var(--tick-cos) * ${centers[1]}%)`
      );
      backgroundDiv.style.setProperty(
        `--second-stop`,
        `calc(var(--tick-sin) * ${centers[4]}%) calc(var(--tick-cos) * ${centers[5]}%)`
      );
    }

    if (updateVariable) {
      gradientString += `radial-gradient(circle at var(--first-stop), ${
        gradientColors[0]
      }, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${
        gradientColors[4]
      }, ${gradientColors[5]}), conic-gradient(from 0deg at ${centers[2]}% ${
        centers[3]
      }%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${
        gradientColors[3]
      }, ${gradientColors[4]}, ${
        gradientColors[5]
      }), conic-gradient(from 0deg at ${100 + Math.abs(centers[2])}% ${
        100 - centers[3]
      }%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${
        gradientColors[3]
      }, ${gradientColors[4]}, ${
        gradientColors[5]
      }), radial-gradient(circle at var(--second-stop), ${gradientColors[0]}, ${
        gradientColors[1]
      }, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${
        gradientColors[5]
      })`;
    } else {
      gradientString += `radial-gradient(circle at ${centers[0]}% ${
        centers[1]
      }%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${
        gradientColors[3]
      }, ${gradientColors[4]}, ${
        gradientColors[5]
      }), conic-gradient(from 0deg at ${centers[2]}% ${centers[3]}%, ${
        gradientColors[0]
      }, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${
        gradientColors[4]
      }, ${gradientColors[5]}), conic-gradient(from 0deg at ${
        100 + Math.abs(centers[2])
      }% ${100 - centers[3]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${
        gradientColors[2]
      }, ${gradientColors[3]}, ${gradientColors[4]}, ${
        gradientColors[5]
      }), radial-gradient(circle at ${centers[4]}% ${centers[5]}%, ${
        gradientColors[0]
      }, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${
        gradientColors[4]
      }, ${gradientColors[5]})`;
    }

    return gradientString;
  }
}