<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neat Animated Gradients &mdash; NeatAbstract</title>
    <link rel="stylesheet" href="../../css/layout.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../dist/css/neat-animated-gradients.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="text-wrapper">
        <h1>NeatAbstract Gradients</h1>

        <p>You can change two parameters for a <code>NeatAbstract</code> gradient to control its appearance.</p>

        <ol>
            <li>
                <p><code>centers</code>  (Default: [0, 0, -30, 30, 100, 100]) &mdash; to specify the angle at which the library should render the gradient.</p>
            </li>
            <li>
                <p><code>updateVariable</code> &mdash; to specify if the gradient should rotate.</p>
            </li>
        </ol>

        <p>A rotating linear gradient takes two colors as input. A normal linear gradient takes up to six colors as input.</p>

        <p>If you specify a lower number of colors. The gradient will start cycling through them.</p>

        <p>You can see some examples of animated <code>NeatAbstract</code> gradients below.</p>
    </div>
    <div class="long-linear gcards-wrapper n-flex sc-pad-x8">
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
                                <pre><code class="lang-js">let gradientObject =  new NeatAbstract({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This is the default configuration where a linear gradient of up to 6 colors is drawn from top to bottom.</p>
                            <p>If you provide less than 6 colors, the library cycles through them in order until it has six.</p>
                        </div>
                    </div>
                    <div>
                        <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button></div>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatAbstract({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        angle: 90
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Here, we set the <code>angle</code> to <code>90deg</code> which draws the gradient from left ot right.</p>
                        </div>
                    </div>
                    <div>
                        <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button></div>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatAbstract({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        angle: 30
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>In this example, the background moves from bottom to top due to the <code>nbg-move-bt</code> class but the gradient is placed at a 30deg angle.</p>
                        </div>
                    </div>
                    <div>
                        <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/9itish/colorful@1.1.4/dist/colorful.min.js"></script>
    <script src="../dist/js/neat-gradient.min.js"></script>
    <script src="script.js"></script>
    <script>
        let gradientSettings = [{},
            {
                centers: [0, 0, 30, -10, 100, 100],
            },
            {}
        ];

        applyGradientToCards(gradientSettings, 'Abstract');
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>

</html>