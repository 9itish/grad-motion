import { setUpGradientColors, isArrayOfArrays, clampValue } from "../utils/helpers.js";

class NeatAnimatedGradient {
  #element;
  #colors;
  #styleOptions;
  #tickSpeed;
  #overlay;
  #classes;

  #ticks;

  constructor({ element, colors, styleOptions, tickSpeed, overlay, classes }) {
    if (new.target === NeatAnimatedGradient) {
      throw new Error(
        "Cannot instantiate an abstract class directly. Please extend this class and implement the required methods."
      );
    }

    this.#element = element;
    this.#colors = colors;

    this.#styleOptions = this.createStyleOptionsProxy(
      (styleOptions = {
        animDuration: 30,
      })
    );

    this.#tickSpeed = tickSpeed || 1;
    this.#overlay = overlay || {
      isPresent: false,
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
      },
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
      ...styleOptions,
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
    throw new Error(
      "generateGradientString() must be implemented by subclasses"
    );
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
      if (
        this.#classes.includes("nbg-move-lr") ||
        this.#classes.includes("nbg-move-rl")
      ) {
        if (
          this.gradientType() == "Linear" ||
          this.gradientType() == "Abstract"
        ) {
          this.#classes += " ngrad-big";
          backgroundDiv.style.width = "1000%";
        } else {
          backgroundDiv.style.width = "200%";
        }
      }
      if (
        this.#classes.includes("nbg-move-tb") ||
        this.#classes.includes("nbg-move-bt")
      ) {
        if (
          this.gradientType() == "Linear" ||
          this.gradientType() == "Abstract"
        ) {
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
      overlayDiv.style.setProperty(
        `--bg-string`,
        `${this.#overlay.background}`
      );
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
          if (
            backgroundDiv.classList.contains("nbg-move-lr") ||
            backgroundDiv.classList.contains("nbg-move-rl")
          ) {
            let origBase = baseSize[0];
            baseSize[0] = Number(
              (backgroundDiv.offsetWidth / this.#styleOptions.parts).toFixed(2)
            );
            baseSize[1] = (baseSize[1] * baseSize[0]) / origBase;
          } else {
            let origBase = baseSize[1];
            baseSize[1] = Number(
              (backgroundDiv.offsetHeight / this.#styleOptions.parts).toFixed(2)
            );
            baseSize[0] = (baseSize[1] * baseSize[0]) / origBase;
          }
        }

        backgroundDiv.style.backgroundSize = `${baseSize[0]}px ${baseSize[1]}px`;
      } else {
        if (this.#styleOptions.seamless) {
          if (
            backgroundDiv.classList.contains("nbg-move-lr") ||
            backgroundDiv.classList.contains("nbg-move-rl")
          ) {
            baseSize = Number(
              (
                backgroundDiv.offsetWidth /
                (2 * this.#styleOptions.parts)
              ).toFixed(2)
            );
          } else {
            baseSize = Number(
              (
                backgroundDiv.offsetHeight /
                (2 * this.#styleOptions.parts)
              ).toFixed(2)
            );
          }
        }

        backgroundDiv.style.backgroundSize = `${
          baseSize * ratio
        }px ${baseSize}px`;
      }
    }

    this.updateAnimationDuration();
  }

  animateGradient() {
    this.applyGradient();

    let updateVariable = this.#styleOptions.updateVariable;

    const animate = () => {
      this.#element
        .querySelector(".ngrad-background")
        .style.setProperty(`--tick`, `${this.#ticks}`);

      if (updateVariable || isArrayOfArrays(this.#colors)) {
        if (
          [
            "ZigZag",
            "PolkaDots",
            "UpDownTriangles",
            "DoubleTriangles",
            "ThreeTriangles",
            "Cross",
            "CrissCross",
            "AdjacentTriangles",
            "Waves",
            "Weave",
            "Abstract",
            "Linear",
          ].includes(this.gradientType())
        ) {
          this.#element
            .querySelector(".ngrad-background")
            .style.setProperty(
              `--tick-sin`,
              `${Math.abs(Math.sin(this.#ticks)).toFixed(2)}`
            );
        }

        if (["Abstract", "PolkaDots"].includes(this.gradientType())) {
          this.#element
            .querySelector(".ngrad-background")
            .style.setProperty(
              `--tick-cos`,
              `${Math.abs(Math.cos(this.#ticks)).toFixed(2)}`
            );
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
        this.#element
          .querySelector(".ngrad-background")
          .style.setProperty(`--tick-sin`, `1`);
        this.#element
          .querySelector(".ngrad-background")
          .style.setProperty(`--tick-cos`, `1`);
        this.#element
          .querySelector(".ngrad-background")
          .style.setProperty(`--tick-tan`, `1`);
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

export { NeatAnimatedGradient };