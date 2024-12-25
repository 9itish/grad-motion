<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Long polkaDot</title>
    <link rel="stylesheet" href="../../css/layout.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../dist/css/neat-animated-gradients.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        div.box h1 span {
            background: #000A;
            border: 4px solid;
        }
    </style>
</head>
<body>
    <!-- <h1>polkaDot Gradients</h1>

    <p>There are four properties whose value affects the </p> -->
    <div class="gcards-wrapper n-flex sc-pad-x8">
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This is what the <code>NeatPolkaDots</code> gradient pattern looks like by default.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        rings: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>You can get a ring around the circles by setting the <code>rings</code> property to <code>true</code>.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        bgPosMultipliers: [0, 0, 0, -0.5],
        radii: [30, 60], 
        rings: true,
        baseSize: 80
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>We have strategically positioned our gradients here with the help of <code>bgPusMultipliers</code> property. The circle are also closely packed together due to their <code>radii</code> values.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        radii: [40, 30], 
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Create a gradient pattern with three colors by setting <code>triColor</code> to <code>true</code>.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        radii: [30, 30],
        rings: true,
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This time we are creating rings of equal size for our gradient by setting the value of <code>radii</code> to <code>[30, 30]</code> and <code>rings</code> to <code>true</code>.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        radii: [30, 60],
        updateVariable: true,
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>I animate the size of all circles by setting <code>updateVariable</code> to <code>true</code>.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        bgPosMultipliers: [0, 0, 0, -0.5],
        radii: [40, 40],
        triColor: true,
        updateVariable: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This time we are positioning the circles one below the other with the help of <code>bgPosMultipliers</code> property.</p>
                            <p>Animating the size of these circles by setting <code>updateVariable</code> to true creates a nice effect.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x4">
                <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                <h3>Gradient Colors</h3>
                <div class="n-flex palette n-flex-eq-sw">
                </div>
                <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatPolkaDots({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        bgPosMultipliers: [0, 0, 0, -0.5],
        radii: [15, 60],
        baseSize: 50
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Finally, we use a combination of large and small circles to create continuous chains in our gradient pattern.</p>
                        </div>
                    </div>
                    <div class="btn-wrapper"><button class="n-btn update-colors">Change Colors</button><button class="n-btn update-size">Change Base Size</button></div>
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
                rings: true
            },
            {
                bgPosMultipliers: [0, 0, 0, -0.5],
                radii: [30, 60], 
                rings: true,
                baseSize: 80,
            },
            {
                radii: [40, 30], 
                triColor: true
            },
            {
                radii: [30, 30],
                rings: true,
                triColor: true
            },
            {
                radii: [30, 60],
                updateVariable: true,
                triColor: true
            },
            {
                bgPosMultipliers: [0, 0, 0, -0.5],
                radii: [40, 40],
                triColor: true,
                updateVariable: true
            },
            {
                bgPosMultipliers: [0, 0, 0, -0.5],
                radii: [15, 60],
                baseSize: 50
            }
        ];

        

        applyGradientToCards(gradientSettings, 'PolkaDots');
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>
</html>