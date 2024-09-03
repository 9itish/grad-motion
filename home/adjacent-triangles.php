<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Long upDown</title>
    <link rel="stylesheet" href="../../css/layout.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="styles.css">
    <style>
        div.box h1 span {
            background: #000A;
            border: 4px solid;
        }
    </style>
</head>
<body>
    <h1>Up Down Triangles</h1>

    <p>There are four properties whose value affects this gradient</p>

    <ol>
        <li><p><code>baseSize</code> (Default: 100) &mdash; This can be an integer or an array of integers. It control the background's block size.</p></li>
        <li><p><code>triangleSize</code> (Default: [20, 20]) &mdash; This has to be an array that specifies the size of triangles.</p></li>
        <li><code>triColor</code> (Default: false) &mdash; </li>
        <li></li>
    </ol>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    classes: 'bg-move-tb'
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        seamless: true,
        parts: 8
    },
    classes: 'bg-move-lr'
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    styleOptions: {
        baseSize: [100, 50],
        triangleSize: [30, 10]
    },
    classes: 'bg-move-tb'
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    style: 'up-down-triangles',
    styleOptions: {
        seamless: true,
        parts: 4,
        triColor: true
    }
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    style: 'up-down-triangles',
    styleOptions: {
        baseSize: 60,
        ratio: 3/2,
        triColor: true
    }
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    style: 'up-down-triangles',
    styleOptions: {
        angle: 60,
        updateVariable: true
    },
    classes: 'bg-move-lr'
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    style: 'up-down-triangles',
    styleOptions: {
        angle: 60,
        updateVariable: true
    },
    classes: 'bg-move-lr'
});

upDown.animateGradient();</code></pre>
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
                    <pre><code class="lang-js">let upDown =  new NeatUpDownTriangles({
    element: boxElems[0],
    colors: <span class="colors"></span>,
    style: 'up-down-triangles',
    styleOptions: {
        angle: 60,
        updateVariable: true
    },
    classes: 'bg-move-lr'
});

upDown.animateGradient();</code></pre>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/9itish/colorful@latest/src/colorful.js"></script>
    <script src="../neat-gradient.js"></script>
    <script src="script.js"></script>
    <script>
        let gradientSettings = [
            {
            },
            {
                seamless: true,
                parts: 8
            },
            {
                baseSize: [40, 50],
                triangleSize: [30, 10]
            },
            {
                seamless: true,
                parts: 4,
                triColor: true
            },
            {
                baseSize: 60,
                variant: 'opposite-stripes'
            },
            {
                baseSize: 40,
                updateVariable: true,
                triColor: true,
                variant: 'opposite-stripes',
                triangleSize: [15, 15]
            },
            {
                baseSize: [100, 50],              
                triColor: true,
                updateVariable: true
            },
            {
                baseSize: 50,
                ratio: 5/3
            }
        ];

        applyGradientToCards(gradientSettings, 'adjacentTriangles');
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>
</html>