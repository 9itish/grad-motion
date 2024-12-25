<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Long zigZag</title>
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
    <h1>NeatZigZag Gradients</h1>

    <p>I create a NeatZigZag gradient in this library by using the first color you pass as a background and second color for those zig-zag bands.</p>

    <p>You can change the following parameters for a <code>NeatZigZag</code> gradient to control its appearance.</p>

    <ol>
        <li>
            <p><code>baseSize</code> &mdash; to specify how large each building block of the gradient should be.</p>
        </li>
        <li>
            <p><code>updateVariable</code> &mdash; to specify if some gradient components should animate. There are many variants of <code>NeatZigZag</code> so the animating component will vary.</p>
        </li>
        <li>
            <p><code>bandWidth</code> &mdash; to specify the width of zig-zag pattern created by the second color. The value can range from 1 to 10.</p>
        </li>
        <li>
            <p><code>translucent</code> &mdash; The first color you pass while instantiating <code>NeatZigZag</code> is used for the background. You can make this background translucent by setting this parameter to <code>true</code>.</p>
        </li>
        <li>
            <p><code>triColor</code> &mdash; to create bands with the help of the second and third color while the first color acts as background.</p>
        </li>
        <li>
            <p><code>bgPosMultipliers</code> &mdash; This is an eight-element array that contains numbers with which to multiply the baseSize of the gradient to calculate the position of different </p>
        </li>
        <li>
            <p><code>variant</code> &mdash; You can tweak the values of any of the previous parameters to change the gradient's appearance. I experimented a bit and created a list of pre-configured values for some of these parameters that create interesting gradient patterns.</p>

            <p>In this case, the possible values for <code>variant</code> are: <code>uneven</code>, <code>squares</code>, <code>square-stripes</code>, <code>square-diagonals</code>, <code>pinwheel</code>, and <code>arrows</code>.</p>
        </li>
    </ol>

    <p>You can see some examples of animated <code>NeatZigZag</code> gradients below.</p>

    <div class="zig-zag gcards-wrapper n-flex sc-pad-x8">
        <div class="wrapper">
            <div class="n-card">
                <div class="box n-border-x2">
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This gradient pattern uses the default <code>NeatZigZag</code> <code>styleOptions</code> values.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 50,
        translucent: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This gradient pattern sets the <code>baseSize</code> to <code>50px</code> and make the background translucent.</p>

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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        bandWidth: 5,
        variant: 'uneven'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This gradient pattern sets the <code>bandWith</code> to <code>5px</code> and the <code>variant</code> to <code>uneven</code>.</p>
                            <p>The <code>uneven</code> variant sets that background position such that the band's width is no longer equal along the entire length.</p>

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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 50,
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>With <code>triColor</code> set to <code>true</code>, the gradient will use three color overall. The first one for the background and two others for the bands.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        bandWidth: 10
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>We have set the <code>bandWidth</code> to <code>10</code> here which makes the second color's zig-zag stripes take as much space as possible.</p>

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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        updateVariable: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>When you haven't set a <code>variant</code>, a <code>true</code> value for <code>updateVariable</code> animates the band width from minimum to maximum.</p>

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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 68,
        variant: 'squares',
        updateVariable: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Here, we change the <code>variant</code> to <code>squares</code> and <code>updateVariable</code> to <code>true</code>.</p>
                            <p>This gives us a gradient pattern where the size of different squares shrinks and grows.</p>

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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 100,
        variant: 'pinwheel'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>When you set the <code>variant</code> to <code>pinwheel</code>, the background positions of individual gradients are adjusted in a way that you get something that resembles simple pinwheels.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 60,
        variant: 'arrows'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Set the <code>variant</code> to <code>arrows</code> and the gradient pattern adjusts its background positions to create simple arrows.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 90,
        variant: 'pinwheel',
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>You can set <code>triColor</code> to <code>true</code> if you want a more colorful pinwheel pattern.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 120,
        variant: 'arrows',
        triColor: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Similarly, you can make half of the arrows multi-colored by simply setting the value of <code>triColor</code> to <code>true</code>.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 90,
        variant: 'square-diagonals'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>Set the <code>variant</code> to <code>square-diagonals</code> if you are looking for a checkered pattern with squares placed diagonally.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 90,
        variant: 'square-stripes'
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>The <code>square-stripes</code> variant creates stripes with alternating colors. The stripes that the second color creates have small diagonally placed squares between them.</p>

                            <p>Setting <code>triColor</code> to <code>true</code> gives some interesting effects here.</p>
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
                    <h1><span>Better</span> <span>Heading</span></h1>
                </div>
                <div class="n-card-body">
                    <h3>Gradient Colors</h3>
                    <div class="n-flex palette n-flex-eq-sw">
                    </div>
                    <div class="n-flex n-flex-eq-sw n-gap-x4">
                        <div class="wrapper">
                            <div class="code">
                                <pre><code class="lang-js">let gradientObject =  new NeatZigZag({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: 90,
        variant: 'square-stripes',
        updateVariable: true
    },
    classes: <span class="classes"></span>
});
gradientObject.animateGradient();</code></pre>
                            </div>
                        </div>
                        <div class="wrapper">
                            <p>This time we set <code>updateVariable</code> to <code>true</code> to animate the size of the squares inside the stripes.</p>
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
        let gradientSettings = [{},
            {
                baseSize: 50,
                translucent: true
            },
            {
                bandWidth: 5,
                variant: 'uneven'
            },
            {
                baseSize: 50,
                triColor: true
            },
            {
                bandWidth: 10
            },
            {
                updateVariable: true
            },
            {
                baseSize: 68,
                variant: 'squares',
                updateVariable: true
            },
            {
                baseSize: 100,
                variant: 'pinwheel'
            },
            {
                baseSize: 60,
                variant: 'arrows'
            },
            {
                baseSize: 90,
                variant: 'pinwheel',
                triColor: true
            },
            {
                baseSize: 120,
                variant: 'arrows',
                triColor: true,
            },
            {
                baseSize: 90,
                variant: 'square-diagonals'
            },
            {
                baseSize: 90,
                variant: 'square-stripes'
            },
            {
                baseSize: 90,
                variant: 'square-stripes',
                updateVariable: true
            }
        ];

        applyGradientToCards(gradientSettings, 'ZigZag');
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>

</html>