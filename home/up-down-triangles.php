<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neat Animated Gradients — UpDownTriangles</title>
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
    <div class="text-wrapper">
        <h1>NeatUpDownTriangles</h1>

        <p>The pattern for <code>NeatUpDownTriangles</code> comes from four strategically placed linear gradients.</p>

        <p>You can change the following parameters for a <code>NeatUpDownTriangles</code> gradient to control its appearance.</p>

        <ol>
            <li>
                <p><code>baseSize</code> (Default: 100) &mdash; to specify the size of each building block of the pattern.</p>
            </li>
            <li>
                <p><code>triangleSize</code> (Default: [20, 20]) &mdash; to specify the size of two triangles that make up the pattern.</p>
            </li>
            <li><code>angle</code> (Default: [-60, 60, 120, 240]) &mdash; to specify the angles at which the triangles are drawn.</li>
            <li>
                <p>
                    <code>bgPosMultipliers</code> (Default: [0, 0, 0, 0, 0.5, 0.75, 0.5, 0.75]) &mdash; to specify the number that should be multiplied with the <code>baseSize</code> to get the position of each gradient.
                </p>
                <p>There are four gradients so the <code>bgPosMultipliers</code> array has eight elements because each gradient position requires the X and Y value.</p>
            </li>
            <li>
                <p><code>triColor</code> (Default: false) &mdash; to specify if the gradient should use three colors.</p>
            </li>
            <li>
                <p><code>seamless</code> (Default: false) &mdash; to specify if the gradient should be seamless. This is useful in situation where you want the gradient to appear continuous when it animates for a long time in any direction.</p>
            </li>
            <li>
                <p><code>ratio</code> (Default: 1) &mdash; to specify the ratio of width and height of the background's <code>baseSize</code>.</p>
            </li>
        </ol>
    </div>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This is what the gradient looks like by default.</p>
                            <p>The colors are still random but I haven't changed any other value.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        seamless: true,
        variant: "stars",
        parts: 20
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>The <code>stars</code> variant for <code>NeatUpDownTriangles</code> adjusts the background positions in a way that creates star-like shapes.</p>
                            <p>It also limits the gradient to a single color.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: [40, 60],
        triangleSize: [30, 10]
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>We use an array to provide <code>baseSize</code> values here. These values reflect the baseSize in X and Y direction.</p>
                            <p>The <code>triangleSize</code> parameter lets you set the size of the two triangle types.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 60,
        variant: 'opposite-stripes'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>When you set the <code>variant</code> to <code>opposite-stripes</code>, you get alternating columns of triangles pointing in opposite directions.</p>
                            <p>This variant sets three properties &mdash; <code>bgPosMultipliers</code>, <code>ratio</code>, and <code>triangleSize</code>.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 60,
        variant: 'aligned',
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>The triangles that make up the gradient pattern align with each other when the <code>variant</code> is set to <code>aligned</code>.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 40,
        updateVariable: true,
        triColor: true,
        variant: 'opposite-stripes'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>We have set both the <code>updateVariable</code>, and <code>triColor</code> properties to true to use three colors for the gradient pattern and animate the triangles' size.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: [100, 50],
        triColor: true,
        updateVariable: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>We are using an array as <code>baseSize</code> value here to set the background's base size in both X and Y direction. A lower value for Y shifts the triangles closer to each other vertically.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        seamless: true,
        parts: 6,
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Setting <code>seamless</code> to true helps us create a background that maintains continuity when animating from right to left (in this case).</p>
                            <p>The <code>parts</code> value specifies how many blocks of the gradient we want to draw in the container.</p>
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
                                <pre><code class="lang-js">let gradientObject =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 50,
        ratio: 5 / 3
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Placing the triangles next to each other requires tweaking the width and height values of the background size.</p>
                            <p>You can do these calculations yourself and provides an array as <code>baseSize</code> value.</p>
                            <p>An easier solution is just to provide a <code>baseSize</code> number and set the <code>ratio</code> to 5/3. This will automatically calculate the height of the gradient.</p>
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
        let gradientSettings = [{},
            {
                seamless: true,
                variant: "stars",
                parts: 20
            },
            {
                baseSize: [40, 60],
                triangleSize: [30, 10]
            },
            {
                baseSize: 60,
                variant: 'opposite-stripes'
            },
            {
                baseSize: 60,
                variant: 'aligned',
            },
            {
                baseSize: 40,
                updateVariable: true,
                triColor: true,
                variant: 'opposite-stripes'
            },
            {
                baseSize: [100, 50],
                triColor: true,
                updateVariable: true
            },
            {
                seamless: true,
                parts: 6,
                triColor: true
            },
            {
                baseSize: 50,
                ratio: 5 / 3
            }
        ];

        applyGradientToCards(gradientSettings, 'UpDownTriangles');
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>

</html>