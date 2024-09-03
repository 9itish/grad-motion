let boxElems = document.querySelectorAll(".gcards-wrapper .box");

let color = new Colorful(Colorful.aHex);

let gradientBackgrounds = [];

let animationClasses = [
  "nbg-move-tb",
  "nbg-move-lr",
  "nbg-move-bt",
  "nbg-move-rl",
];

let tickSpeeds = [1, 2, 4];

function applyGradientToCards(gradientSettings, gradientType) {

  const gradientClasses = {
    'NeatLinear': NeatLinear,
    'NeatThreeTriangles': NeatThreeTriangles,
    // 'adjacentTriangles': NeatAdjacentTriangles,
    'zigZag': NeatZigZag,
    'NeatUpDownTriangles': NeatUpDownTriangles,
    'NeatPolkaDots': NeatPolkaDots,
    'bricks': NeatBricks,
    'NeatAbstract': NeatAbstract
  }

  let idx = 0;

  for (gradientSetting of gradientSettings) {

    let animationClass = animationClasses[idx % 4];
    let tickSpeed = 1;

    if (gradientSetting.updateVariable) {
      tickSpeed = tickSpeeds[Math.floor(Math.random() * 3)];
    }

    if (gradientSetting.updateVariable && Math.floor(Math.random() * 2)%2 == 0) {
      tickSpeed = tickSpeeds[Math.floor(Math.random() * 3)];
    }

    let palette = [];

    if (gradientSetting.triColor === true) {
      color = new Colorful(Colorful.aHex);
      palette = [color.hex, ...color.splitComplementary];
    } else {
      color = new Colorful(Colorful.aHex);
      palette = [color.hex, color.adjustBrightness(-20)];
    }

    if(gradientType == 'NeatLinear' || gradientType == 'NeatAbstract') {
      palette = [];

      color = new Colorful(Colorful.aHex);

      if(gradientType == 'NeatAbstract') {
        color = new Colorful(Colorful.getRandomPreferredColor('saturated'));
      }

      palette = [color.hex, color.complementary, ...color.triad];

      if(idx == 3) {
          palette = [color.hex, color.complementary];
      }

      if(idx == 4 || idx == 5) {
          let colorB = new Colorful(Colorful.bluish);
          palette = [[color.hex, color.complementary], [colorB.hex, colorB.complementary]];
      }

      if(idx == 3 || idx == 4 || idx == 5) {
        animationClass = '';
        tickSpeed = 0.5;
      }
    }

    if(gradientType == 'NeatPolkaDots' && gradientSetting.rings && !gradientSetting.triColor) {
      color = new Colorful(Colorful.aHex);
      palette = [...color.analogous];
    }

    if(gradientType == "bricks" && gradientSetting.quadColors) {
      color = new Colorful(Colorful.aHex);
      colorB = new Colorful(Colorful.aHex);
      palette = [color.adjustBrightness(-20), color.hex, colorB.adjustBrightness(-20), colorB.hex];
    }

    if((gradientType == "NeatUpDownTriangles" && gradientSetting.variant == "stars") || (gradientType == "NeatPolkaDots" && idx == 7)) {
      palette = [color.hex];
    }

    let GradientClass = gradientClasses[gradientType];

    let gradientObject = new GradientClass({
      element: boxElems[idx],
      colors: palette,
      styleOptions: gradientSetting,
      classes: animationClass,
      tickSpeed: tickSpeed,
    });

    if (!isArrayOfArrays(palette)) {
      boxElems[idx].nextElementSibling.querySelector(
      "span.colors"
    ).innerHTML = `['${palette.join("', '")}']`;
    } else {
      let colorString = '[';
      for(pElem of palette) {
        colorString += `['${pElem.join("', '")}'],`;
      }

      colorString = colorString.slice(0, -1);

      colorString += ']';

      boxElems[idx].nextElementSibling.querySelector(
        "span.colors"
      ).innerHTML = colorString;
    }

    boxElems[idx].nextElementSibling.querySelector(
      "span.classes"
    ).innerHTML = `'${animationClass}'`;

    let paletteElem =
      boxElems[idx].nextElementSibling.querySelector(".palette");

    if (!isArrayOfArrays(palette)) {
      for (pColor of palette) {
        const span = document.createElement("span");
        span.style.backgroundColor = pColor;

        if (paletteElem) {
          paletteElem.appendChild(span);
        }
      }
    } else {
      for (pl of palette) {
        for (pColor of pl) {
          const span = document.createElement("span");
          span.style.backgroundColor = pColor;

          if (paletteElem) {
            paletteElem.appendChild(span);
          }

        }
      }
    }

    // console.log(gradientObject.styleOptions.variant + ' ' + gradientObject.styleOptions.bgPosMultipliers);

    gradientObject.animateGradient();
    gradientBackgrounds.push(gradientObject);

    idx += 1;
  }
}

document.addEventListener("click", function (event) {
  let wrapperIndex = getWrapperIndex(event);

  if (event.target.classList.contains("update-colors")) {
    updateColorForCard(wrapperIndex);
  }

  if (event.target.classList.contains("update-size")) {
    updateBaseSizeForCard(wrapperIndex);
  }
});

function getWrapperIndex(event) {
  let nCardAncestor = event.target.closest(".n-card");

  if (nCardAncestor) {
    let wrapperAncestor = nCardAncestor.closest(".wrapper");

    if (wrapperAncestor) {
      let gradientWrapper = wrapperAncestor.closest(".gcards-wrapper");
      let wrappers = Array.from(
        gradientWrapper.querySelectorAll(":scope > .wrapper")
      );

      let wrapperIndex = wrappers.indexOf(wrapperAncestor);

      return wrapperIndex;
    }
  }
}

function updateColorForCard(index) {

  let gradientType = gradientBackgrounds[index].gradientType();
  let gradientSettings = gradientBackgrounds[index].styleOptions;
  let color = new Colorful(Colorful.aHex);
  let palette = [color.adjustBrightness(-20), color.hex];

  if (gradientBackgrounds[index].styleOptions.triColor) {
    let color = new Colorful(Colorful.getRandomPreferredColor("saturated"));
    palette = [
      color.splitComplementary[0],
      color.hex,
      color.splitComplementary[1],
    ];
  }

  if(gradientBackgrounds[index].gradientType() == 'NeatLinear' || gradientBackgrounds[index].gradientType() == 'NeatAbstract') {
    palette = [];

    color = new Colorful(Colorful.aHex);

    if(gradientBackgrounds[index].gradientType() == 'NeatAbstract') {
      color = new Colorful(Colorful.getRandomPreferredColor('saturated'));
    }

    palette = [color.hex, color.complementary, ...color.splitComplementary];

    if(index == 3) {
        palette = [color.hex, color.complementary];
    }

    if(index == 4 || index == 5) {
        let colorB = new Colorful(Colorful.bluish);
        palette = [[color.hex, color.complementary], [colorB.hex, colorB.complementary]];
    }
  }

  if(gradientBackgrounds[index].gradientType() == "NeatBricks" && gradientBackgrounds[index].styleOptions.quadColors) {
    color = new Colorful(Colorful.aHex);
    let colorB = new Colorful(Colorful.reddish);
    palette = [color.hex, color.adjustBrightness(-20), colorB.hex, colorB.adjustBrightness(-20)];

  }

  if((gradientBackgrounds[index].gradientType() == "NeatUpDownTriangles" && gradientBackgrounds[index].styleOptions.variant == "stars") || (gradientBackgrounds[index].gradientType() == "NeatPolkaDots" && index == 7)) {
    palette = [color.hex];
  }

  if(gradientBackgrounds[index].gradientType() == 'NeatPolkaDots' &&  gradientBackgrounds[index].styleOptions.rings && !gradientBackgrounds[index].styleOptions.triColor) {
    
    color = new Colorful(Colorful.aHex);
    palette = [...color.analogous];
  }

  let paletteSpanElem =
    boxElems[index].nextElementSibling.querySelectorAll(".palette span");

  let idx = 0;

  if (!isArrayOfArrays(palette)) {
    for (pColor of palette) {
      paletteSpanElem[idx].style.backgroundColor = pColor;
      idx += 1;
    }
  } else {
    let flatPalette = palette.flat();

    for (pColor of flatPalette) {
      paletteSpanElem[idx].style.backgroundColor = pColor;
      idx += 1;
    }
  }

  gradientBackgrounds[index].colors = [...palette];
}

function updateBaseSizeForCard(index) {
  let background = gradientBackgrounds[index];

  if(background.styleOptions.baseSize) {
    background.styleOptions.baseSize = Math.floor(Math.random() * 120 + 30);
  }

  if(background.styleOptions.seamless) {
    background.styleOptions.parts = Math.floor(Math.random() * 6 + 6);
  }
}

const item = document.querySelector('div.gcards-wrapper');

function toggleClasses(event) {
    if (event.key === 's') {
        item.classList.toggle('n-flex-aw-1223');
        item.classList.toggle('only-grads');
        document.body.classList.toggle('clean-up');

        for(gb of gradientBackgrounds) {
          gb.animationDuration = 10;
          gb.tickSpeed = 2;
        }
    }
}

document.addEventListener('keydown', toggleClasses);
