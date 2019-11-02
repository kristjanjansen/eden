## The Eden project

### 1. Flower

💻 Source: [/flower](/flower)

🚀 Demo: https://flower.kristjanjansen.now.sh

A dashbord prototype, implemented in `create-react-app --typescript`.

Here is a quick code walkthrough:

#### App.tsx

**[/flower/src/App.tsx]](/flower/src/App.tsx)**

Project main entrypoint, uses `react-router` to set up three main routes.

The router is wrapped into custom `UIProvider` (located in `./contexts/ui.js`) to provide a global state handling.

### OverviewRoute.tsx (WIP)

[/flower/src/routes/OverviewRoute.tsx](/flower/src/routes/OverviewRoute.tsx)

An project overview route.

It is a live playground of CSS grid layout that provides a glimpse what the latest browser features can offer in terms of layout flexibilty and confirm that **there is no need for a third-party grid framework such as `flexgrid`**.

The cards on the page are randomy generated placeholders, generated in `./src/data/logs.js`

The slider controls on a page allow to change number and columns. The feature is implemented with a `<Slider>` component and `useState` hooks that pass the current `cols` and `rows` values to CSS grid parameters.

### GraphRoute.tsx

[/flower/src/routes/GraphRoute.tsx](/flower/src/routes/GraphRoute.tsx)

_The_ view of the project. There is a lot of happening here:

1.  A fake graph data with edges and nodes is generated in `./src/data/graph.ts`.

2.  Graph data is passed to `elkjs` graph layout generator that interprets the input data and returns an enriched data with edge and node coordinates and the width and height of the graph layout.

3.  The enriched graph data is passed to `<GraphLayoutHtml>` component that interprets the data and renders out an hybrid layout using SVG and HTML.

4.  In `<GraphLayoutHtml>`, edges of the graph are rendered as SVG lines: the the path coordinates of each edge are passed to the `generateLine()` function (found in `./src/utils.js`) that is based on `d3.line()` SVG path generator.

    Line coordinates are going through an addtional `d3.curveCardinal()` smoothening function with `tension` parameter that adjust the lines to be less "boxy".

    See more about d3 line functions here https://github.com/d3/d3-shape#lines

    > There is an alternative `GraphLayoutSVG` component that shows a raw rendering of the graph data.

5.  Nodes of the graph are rendered as HTML boxes by `<GraphCard />` and are overlayed on top of SVG, using CSS relative positioning.

6.  `<GraphCard />` displays node data. Node status is passed on to `<StatusIcon />` component.

7.  `<StatusIcon />` has different presets for status display. By default statuses are displayed as UTF8 circles, except `status = 'processing` that is rendered by `<StatusSpinner>` component.

8.  `<StatusSpinner>` is using `cli-spinners` library and animates the CLI text-based spinners in HTML. It uses the CLI spinner source files to get the animation frames (UTF8 characters / emojis) and the delay between the frames. For animation, `useInterval` hook is used (based on [Dan Abramov article](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)) that cycles thought the animation frames and displays the text-based spinner.

### LogRoute.tsx

[/flower/src/routes/LogRoute.tsx](/flower/src/routes/LogRoute.tsx)

Realtime log output simulation view.

1. A fake log data is generated in `/flower/src/data/logs.js`. It contains various structured log data (timestamp, message etc) and also a random `duration` value in milliseconds.

2. `<LogRoute>` component maps the log data to **array of promises** and resolves them serially using the `duration` value and passes log items to the `<Log>` component. This allows log display to feel more "real-life-like" where each new log item arrives in varying time offset.

3. `<Log>` component sets up a scrolling HTML div container and uses a combination of React `useRef()`, `useEffect()` and JS DOM `scrollIntoView()` functions to automatically scroll the div container to the lastmost line of the log. Each log line is rendered using `<LogLine>` component.

4. `<LogLine>` is displaying a log item, splitting it into columns, applying different visual importance for each column.

## 2. Soil

💻 Source: [/sol](/soil)

A CLI application prototype, implemented in Typescript and https://github.com/vadimdemedes/ink library.

It includes Hello World command made with React components and also a set of Mocha / Chai UI tests.

## 3. Trellis

🚀 Demo: https://trellis.kristjanjansen.now.sh/

💻 Source: [/trellis](/trellis)

A documentation site prototype, implemented in Docz https://github.com/doczjs/docz.

Docz is a documentation generation toolkit, based on Gatsby, Gatsby themes and MDX (Markdown combined with React application).

The prototype includes three colors-related components (Garden colors, Flower prototype colors and ANSI terminal colors), showing off how components can enrich the documentation exprience, link together different UI touchpoint codebases and codify design decisions and artifacts.

## Related projects

Some projects mentioned in the demo meeting:

### Prima CLI specs

🚀 Demo https://prisma-specs.netlify.com/cli/init/starter-kit/

The spec uses MDX components that import CLI React components (based on Ink library) that output ANSI terminal textdumps. These CLI components are passed on to into a
[https://github.com/prisma/specs/tree/master/cli](term.js) terminal emulator in the browser to make sure the CLI components work the same way as they do in the real terminal.

**The MDX source for the demo page above**

https://raw.githubusercontent.com/prisma/specs/master/cli/src/pages/init/starter-kit/index.mdx

**Terminal wrapper powering it**

https://github.com/prisma/specs/tree/master/cli/src/components/Terminal

### Typeit

https://typeitjs.com/

### Kubernetes interactive tutorials

https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-interactive/

### Comparision of NodeJS argument parsers

https://pantas.net/node_argument_parsers/
