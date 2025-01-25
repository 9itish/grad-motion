function clampValue(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
function isArrayOfArrays(variable) {
  return Array.isArray(variable) && variable.every(Array.isArray);
}
function setUpGradientColors(colors) {
  let gradientColors = colors;
  if (isArrayOfArrays(colors)) {
    gradientColors = colors[0];
  }
  while (gradientColors.length < 20) {
    gradientColors = gradientColors.concat(gradientColors);
  }
  return gradientColors;
}

class GradMotion {
  #element;
  #colors;
  #styleOptions;
  #tickSpeed;
  #overlay;
  #classes;
  #ticks;
  constructor({
    element,
    colors,
    styleOptions,
    tickSpeed,
    overlay,
    classes
  }) {
    if (new.target === GradMotion) {
      throw new Error("Cannot instantiate an abstract class directly. Please extend this class and implement the required methods.");
    }
    this.#element = element;
    this.#colors = colors;
    this.#styleOptions = this.createStyleOptionsProxy(styleOptions = {
      animDuration: 30
    });
    this.#tickSpeed = tickSpeed || 1;
    this.#overlay = overlay || {
      isPresent: false
    };
    this.#classes = classes || "";
    this.#ticks = 0;
  }
  createStyleOptionsProxy(styleOptions) {
    const self = this;
    let applyingGradient = false;
    return new Proxy(styleOptions, {
      set(target, property, value) {
        target[property] = value;
        if (!applyingGradient) {
          applyingGradient = true;
          self.applyGradient();
          applyingGradient = false;
        }
        return true;
      }
    });
  }
  get colors() {
    return this.#colors;
  }
  set colors(colorArray) {
    this.#colors = colorArray;
    if (colorArray.length == 2) {
      this.#styleOptions.triColor = false;
    }
    if (colorArray.length == 3) {
      this.#styleOptions.triColor = true;
    }
    this.applyGradient();
  }
  get element() {
    return this.#element;
  }
  set element(element) {
    this.#element = element;
  }
  get animationDuration() {
    return this.#styleOptions.animDuration;
  }
  set animationDuration(duration) {
    this.#styleOptions.animDuration = duration;
    this.updateAnimationDuration();
  }
  updateAnimationDuration() {
    let backgroundDiv = this.#element.querySelector(".ngrad-background");
    let animDuration = this.#styleOptions.animDuration;
    backgroundDiv.style.setProperty(`--anim-duration`, `${animDuration}s`);
  }
  get tickSpeed() {
    return this.#tickSpeed;
  }
  set tickSpeed(tickSpeed) {
    this.#tickSpeed = tickSpeed;
  }
  get styleOptions() {
    return this.#styleOptions;
  }
  set styleOptions(styleOptions) {
    this.#styleOptions = this.createStyleOptionsProxy({
      ...this.#styleOptions,
      ...styleOptions
    });
    this.applyGradient();
  }
  setBaseSize() {
    let baseSize = this.#styleOptions.baseSize;
    if (Array.isArray(baseSize)) {
      baseSize = baseSize[0];
    }
    if (this.styleOptions.seamless) {
      baseSize = this.element.offsetWidth / this.styleOptions.parts;
    }
    return baseSize;
  }
  generateGradientString() {
    throw new Error("generateGradientString() must be implemented by subclasses");
  }
  gradientType() {
    throw new Error("gradientType() must be implemented by subclasses");
  }
  setUpBackgroundDiv() {
    let bgWrapperDiv = this.#element.querySelector(".ngrad-wrapper");
    if (bgWrapperDiv) {
      bgWrapperDiv.remove();
    }
    const backgroundWrapperDiv = document.createElement("div");
    backgroundWrapperDiv.className = "ngrad-wrapper";
    const backgroundDiv = document.createElement("div");
    backgroundDiv.className = "ngrad-background";
    const overlayDiv = document.createElement("div");
    overlayDiv.className = "ngrad-overlay";
    if (this.#classes) {
      if (this.#classes.includes("nbg-move-lr") || this.#classes.includes("nbg-move-rl")) {
        if (this.gradientType() == "Linear" || this.gradientType() == "Abstract") {
          this.#classes += " ngrad-big";
          backgroundDiv.style.width = "1000%";
        } else {
          backgroundDiv.style.width = "200%";
        }
      }
      if (this.#classes.includes("nbg-move-tb") || this.#classes.includes("nbg-move-bt")) {
        if (this.gradientType() == "Linear" || this.gradientType() == "Abstract") {
          this.#classes += " ngrad-big";
          backgroundDiv.style.height = "1000%";
        } else {
          backgroundDiv.style.height = "200%";
        }
      }
    }
    if (this.#classes) {
      backgroundDiv.className = `ngrad-background ${this.#classes}`;
    }
    backgroundWrapperDiv.appendChild(backgroundDiv);
    if (this.#overlay.isPresent) {
      backgroundWrapperDiv.appendChild(overlayDiv);
    }
    this.#element.appendChild(backgroundWrapperDiv);
    const computedElementStyles = window.getComputedStyle(this.#element);
    if (computedElementStyles.position === "static") {
      this.#element.style.position = "relative";
    }
    if (this.#overlay.background) {
      overlayDiv.style.setProperty(`--bg-string`, `${this.#overlay.background}`);
    }
  }
  applyGradient() {
    this.setUpBackgroundDiv();
    const backgroundDiv = this.#element.querySelector(".ngrad-background");
    backgroundDiv.style.background = this.generateGradientString();
    if (!(this.constructor.gradientType == "Linear")) {
      let baseSize = this.#styleOptions.baseSize;
      let ratio = this.#styleOptions.ratio || 1;
      if (Array.isArray(baseSize)) {
        if (this.#styleOptions.seamless) {
          if (backgroundDiv.classList.contains("nbg-move-lr") || backgroundDiv.classList.contains("nbg-move-rl")) {
            let origBase = baseSize[0];
            baseSize[0] = Number((backgroundDiv.offsetWidth / this.#styleOptions.parts).toFixed(2));
            baseSize[1] = baseSize[1] * baseSize[0] / origBase;
          } else {
            let origBase = baseSize[1];
            baseSize[1] = Number((backgroundDiv.offsetHeight / this.#styleOptions.parts).toFixed(2));
            baseSize[0] = baseSize[1] * baseSize[0] / origBase;
          }
        }
        backgroundDiv.style.backgroundSize = `${baseSize[0]}px ${baseSize[1]}px`;
      } else {
        if (this.#styleOptions.seamless) {
          if (backgroundDiv.classList.contains("nbg-move-lr") || backgroundDiv.classList.contains("nbg-move-rl")) {
            baseSize = Number((backgroundDiv.offsetWidth / (2 * this.#styleOptions.parts)).toFixed(2));
          } else {
            baseSize = Number((backgroundDiv.offsetHeight / (2 * this.#styleOptions.parts)).toFixed(2));
          }
        }
        backgroundDiv.style.backgroundSize = `${baseSize * ratio}px ${baseSize}px`;
      }
    }
    this.updateAnimationDuration();
  }
  animateGradient() {
    this.applyGradient();
    let updateVariable = this.#styleOptions.updateVariable;
    const animate = () => {
      this.#element.querySelector(".ngrad-background").style.setProperty(`--tick`, `${this.#ticks}`);
      if (updateVariable || isArrayOfArrays(this.#colors)) {
        if (["ZigZag", "PolkaDots", "UpDownTriangles", "DoubleTriangles", "ThreeTriangles", "Cross", "CrissCross", "AdjacentTriangles", "Waves", "Weave", "Abstract", "Linear"].includes(this.gradientType())) {
          this.#element.querySelector(".ngrad-background").style.setProperty(`--tick-sin`, `${Math.abs(Math.sin(this.#ticks)).toFixed(2)}`);
        }
        if (["Abstract", "PolkaDots"].includes(this.gradientType())) {
          this.#element.querySelector(".ngrad-background").style.setProperty(`--tick-cos`, `${Math.abs(Math.cos(this.#ticks)).toFixed(2)}`);
        }

        // if (["waves", "blob", "zig-zag"].includes(this.gradientType())) {
        //   this.#element
        //     .querySelector(".ngrad-background")
        //     .style.setProperty(
        //       `--tick-tan`,
        //       `${Math.abs(Math.tan(this.#ticks)).toFixed(2)}`
        //     );
        // }

        this.#ticks += 0.01 * this.#tickSpeed;
        this.#ticks = Number(Number(this.#ticks).toFixed(3));
        if (this.#ticks > 100) {
          this.#ticks = 0;
        }
      } else {
        this.#element.querySelector(".ngrad-background").style.setProperty(`--tick-sin`, `1`);
        this.#element.querySelector(".ngrad-background").style.setProperty(`--tick-cos`, `1`);
        this.#element.querySelector(".ngrad-background").style.setProperty(`--tick-tan`, `1`);
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}

class Abstract extends GradMotion {
  constructor(config) {
    const {
      styleOptions = {}
    } = config;
    super(config);
    this.styleOptions = {
      centers: [0, 0, -30, 30, 100, 100],
      blendMode: "difference",
      updateVariable: false,
      ...styleOptions
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
      backgroundDiv.style.setProperty(`--first-stop`, `calc(var(--tick-sin) * ${centers[0]}%) calc(var(--tick-cos) * ${centers[1]}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `calc(var(--tick-sin) * ${centers[4]}%) calc(var(--tick-cos) * ${centers[5]}%)`);
    }
    if (updateVariable) {
      gradientString += `radial-gradient(circle at var(--first-stop), ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]}), conic-gradient(from 0deg at ${centers[2]}% ${centers[3]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]}), conic-gradient(from 0deg at ${100 + Math.abs(centers[2])}% ${100 - centers[3]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]}), radial-gradient(circle at var(--second-stop), ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]})`;
    } else {
      gradientString += `radial-gradient(circle at ${centers[0]}% ${centers[1]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]}), conic-gradient(from 0deg at ${centers[2]}% ${centers[3]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]}), conic-gradient(from 0deg at ${100 + Math.abs(centers[2])}% ${100 - centers[3]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]}), radial-gradient(circle at ${centers[4]}% ${centers[5]}%, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[3]}, ${gradientColors[4]}, ${gradientColors[5]})`;
    }
    return gradientString;
  }
}

class Bricks extends GradMotion {
  constructor(config) {
    const {
      styleOptions = {}
    } = config;
    super(config);
    this.styleOptions = {
      baseSize: 100,
      quadColors: false,
      brickOutline: "#000",
      ...styleOptions
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
      gradientString += `linear-gradient(335deg, ${gradientColors[0]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) 0px ${baseSize * 2 / 58}px,
  linear-gradient(155deg, ${gradientColors[1]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) ${baseSize * 4 / 58}px ${baseSize * 35 / 58}px,
  linear-gradient(335deg, ${gradientColors[2]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) ${baseSize * 29 / 58}px ${baseSize * 31 / 58}px,
  linear-gradient(155deg, ${gradientColors[3]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) ${baseSize * 34 / 58}px ${baseSize * 6 / 58}px, ${brickOutline}`;
    } else {
      gradientString += `linear-gradient(335deg, ${gradientColors[0]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) 0px ${baseSize * 2 / 58}px,
    linear-gradient(155deg, ${gradientColors[1]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) ${baseSize * 4 / 58}px ${baseSize * 35 / 58}px,
    linear-gradient(335deg, ${gradientColors[0]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) ${baseSize * 29 / 58}px ${baseSize * 31 / 58}px,
    linear-gradient(155deg, ${gradientColors[1]} ${baseSize * 23 / 58}px, transparent ${baseSize * 23 / 58}px) ${baseSize * 34 / 58}px ${baseSize * 6 / 58}px, ${brickOutline}`;
    }
    return gradientString;
  }
}

class Linear extends GradMotion {
  constructor(config) {
    // First, we get styleOptions form the passed configuration.
    const {
      styleOptions = {}
    } = config;
    super(config);

    // These style options are then merged with the styleOptions of the derived class.
    this.styleOptions = {
      angle: 0,
      updateVariable: false,
      ...styleOptions
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

class PolkaDots extends GradMotion {
  constructor(config) {
    const {
      styleOptions = {}
    } = config;
    super(config);
    this.styleOptions = {
      bgPosMultipliers: [0, 0, 0.5, 0.5],
      backgroundBlend: false,
      baseSize: 100,
      rings: false,
      radii: [25, 45],
      triColor: false,
      ...styleOptions
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
    let bgPositions = [`${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`, `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`];
    if (this.styleOptions.updateVariable) {
      if (this.styleOptions.rings) {
        backgroundDiv.style.setProperty(`--first-stop`, `calc(var(--tick-sin) * ${radii[0] - 10}%)`);
        backgroundDiv.style.setProperty(`--second-stop`, `calc(var(--tick-cos) * ${radii[1] - 10}%)`);
      } else {
        backgroundDiv.style.setProperty(`--first-stop`, `calc(var(--tick-sin) * ${radii[0]}%)`);
        backgroundDiv.style.setProperty(`--second-stop`, `calc(var(--tick-cos) * ${radii[1]}%)`);
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

class ThreeTriangles extends GradMotion {
  constructor(config) {
    const {
      styleOptions = {}
    } = config;
    super(config);
    this.styleOptions = {
      baseSize: 60,
      angle: [-135, 135],
      bands: [20, 30, 33, 40, 45],
      bgPosMultipliers: [0, 0, 0, 0],
      variant: "",
      triColor: false,
      seamless: false,
      ...styleOptions
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
    let bgPositions = [`${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`, `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`];
    if (this.styleOptions.updateVariable) {
      backgroundDiv.style.setProperty(`--first-stop`, `calc(var(--tick-sin) * ${bands[0] * 3}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `${bands[2]}%`);
      backgroundDiv.style.setProperty(`--third-stop`, `${bands[4]}%`);
    } else {
      backgroundDiv.style.setProperty(`--first-stop`, `calc(${bands[0]}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `${bands[2]}%`);
      backgroundDiv.style.setProperty(`--third-stop`, `${bands[4]}%`);
    }
    gradientString = `linear-gradient(${angle[0]}deg, ${gradientColors[0]} var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${bands[1]}%, ${gradientColors[0]} ${bands[1] + 0.5}% var(--second-stop), transparent var(--second-stop) ${bands[3]}%, ${gradientColors[0]} ${bands[3] + 0.5}% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${bgPositions[0]}, linear-gradient(${angle[1]}deg, ${gradientColors[0]} var(--first-stop), transparent var(--first-stop) ${bands[1]}%, ${gradientColors[0]} ${bands[1] + 0.5}% var(--second-stop), transparent var(--second-stop) ${bands[3]}%, ${gradientColors[0]} ${bands[3] + 0.5}% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${bgPositions[1]}`;
    if (variant == "band-shades") {
      gradientString = `linear-gradient(${angle[0]}deg, ${gradientColors[1]} var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${bands[1]}%, ${gradientColors[0]} ${bands[1] + 0.5}% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${bands[3]}%, ${gradientColors[1]} ${bands[3] + 0.5}% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${bgPositions[0]}, linear-gradient(${angle[1]}deg, ${gradientColors[1]} var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${bands[1]}%, ${gradientColors[0]} ${bands[1] + 0.5}% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${bands[3]}%, ${gradientColors[1]} ${bands[3] + 0.5}% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${bgPositions[1]}`;
    }
    if (variant == "half-shades") {
      gradientString = `linear-gradient(${angle[0]}deg, ${gradientColors[0]} var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${bands[1]}%, ${gradientColors[0]} ${bands[1] + 0.5}% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${bands[3]}%, ${gradientColors[0]} ${bands[3] + 0.5}% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${bgPositions[0]}, linear-gradient(${angle[1]}deg, ${gradientColors[1]} var(--first-stop), transparent calc(var(--first-stop) + 0.5%) ${bands[1]}%, ${gradientColors[1]} ${bands[1] + 0.5}% var(--second-stop), transparent calc(var(--second-stop) + 0.5%) ${bands[3]}%, ${gradientColors[1]} ${bands[3] + 0.5}% var(--third-stop), transparent calc(var(--third-stop) + 0.5%)) ${bgPositions[1]}`;
    }
    if (!triColor) {
      gradientString += `, ${gradientColors[1]}66`;
    } else {
      gradientString += `, ${gradientColors[2]}`;
    }
    return gradientString;
  }
}

class UpDownTriangles extends GradMotion {
  constructor(config) {
    const {
      styleOptions = {}
    } = config;
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
      ...styleOptions
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
    let bgPositions = [`${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`, `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`, `${bgPosMultipliers[4] * baseSize}px ${bgPosMultipliers[5] * baseSize}px`, `${bgPosMultipliers[6] * baseSize}px ${bgPosMultipliers[7] * baseSize}px`];
    if (this.styleOptions.updateVariable) {
      backgroundDiv.style.setProperty(`--first-stop`, `calc(var(--tick-sin) * 20% + ${80 - triangleSize[0]}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `calc(var(--tick-sin) * 20% + ${80 - triangleSize[1]}%)`);
    } else {
      backgroundDiv.style.setProperty(`--first-stop`, `calc(${100 - triangleSize[0]}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `calc(${100 - triangleSize[1]}%)`);
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

class ZigZag extends GradMotion {
  constructor(config) {
    const {
      styleOptions = {}
    } = config;
    super(config);
    this.styleOptions = {
      bgPosMultipliers: [-0.5, 0, -0.5, 0, 0, 0, 0, 0],
      bandWidth: 0,
      baseSize: 100,
      translucent: false,
      triColor: false,
      updateVariable: false,
      variant: "",
      ...styleOptions
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
    let bgPositions = [`${bgPosMultipliers[0] * baseSize}px ${bgPosMultipliers[1] * baseSize}px`, `${bgPosMultipliers[2] * baseSize}px ${bgPosMultipliers[3] * baseSize}px`, `${bgPosMultipliers[4] * baseSize}px ${bgPosMultipliers[5] * baseSize}px`, `${bgPosMultipliers[6] * baseSize}px ${bgPosMultipliers[7] * baseSize}px`];
    if (this.styleOptions.updateVariable) {
      bandWidth = 10;
      backgroundDiv.style.setProperty(`--first-stop`, `calc(var(--tick-sin) * ${bandWidth}% + 25%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `calc(var(--tick-sin) * ${bandWidth + 0.1}% + 25%)`);
    } else {
      backgroundDiv.style.setProperty(`--first-stop`, `calc(${bandWidth}%)`);
      backgroundDiv.style.setProperty(`--second-stop`, `calc(${bandWidth + 0.1}%)`);
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

export { Abstract, Bricks, GradMotion, Linear, PolkaDots, ThreeTriangles, UpDownTriangles, ZigZag, clampValue, isArrayOfArrays, setUpGradientColors };
