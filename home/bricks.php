<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neat Animated Gradients NeatBricks</title>
    <link rel="stylesheet" href="../../css/layout.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../dist/css/neat-animated-gradients.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="text-wrapper">
        <h1>NeatBricks</h1>

        <p>You can change three parameters for a <code>NeatBricks</code> gradient to control its appearance.</p>

        <ol>
            <li>
                <p><code>baseSize</code> &mdash; to specify how large each brick or block of the gradient should be.</p>
            </li>
            <li>
                <p><code>quadColors</code> &mdash; to specify if the brick rows should alternate in colors.</p>
            </li>
            <li>
                <p><code>brickOutline</code> &mdash; to specify each brick's outline color.</p>
            </li>
        </ol>
    </div>
    <div class="gcards-wrapper n-flex sc-pad-x8">
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>A Huge</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatBricks({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This gradient pattern uses the default <code>NeatBricks</code> <code>styleOptions</code> values.</p>
                        </div>
                    </div>
                    <div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>A Huge</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatBricks({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 60
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Here, I have set the <code>baseSize</code> to <code>60px</code> which is smaller than the default value <code>100px</code>.</p>
                        </div>
                    </div>
                    <div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>A Huge</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatBricks({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        quadColors: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Setting <code>quadColors</code> to <code>true</code> allows you to pass an array of four colors to create the bricks.</p>
                        </div>
                    </div>
                    <div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>A Huge</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatBricks({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        brickOutline: '#FFF'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>The <code>brickOutline</code> is <b>black</b> by default. Here, we change it to <b>white</b>.</p>
                        </div>
                    </div>
                    <div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>A Huge</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatBricks({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        quadColors: true,
        brickOutline: '#FFF'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This configuration allows the brick pattern to use four colors and a white outline.</p>
                        </div>
                    </div>
                    <div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>A Huge</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatBricks({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        quadColors: true,
        brickOutline: '#F90'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This configuration allows you to create bricks with four different colors and an orange outline.</p>
                        </div>
                    </div>
                    <div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/9itish/colorful@1.1.4/dist/colorful.min.js"></script>
    <script src="../dist/js/neat-gradient.min.js"></script>
    <script src="script.js"></script>
    <script>

        let gradientSettings = [
            {
            },
            {
                baseSize: 60
            },
            {
                quadColors: true
            },
            {
                brickOutline: '#FFF'
            },
            {
                quadColors: true,
                brickOutline: '#FFF'
            },
            {
                quadColors: true,
                brickOutline: '#F90'
            }
        ];

        applyGradientToCards(gradientSettings, 'Bricks');

    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>
</html>