# The Eden projects

## Flower [/flower](/flower)

A dashbord prototype, implemented in `create-react-app --typescript`.

Here is a quick code walkthrough:

### [/flower/src/App.tsx](/flower/src/App.tsx)

Project main entrypoint, uses `react-router` to set up three main routes.

### [/flower/src/routes/OverviewRoute.tsx](/flower/src/routes/OverviewRoute.tsx)

<mark>WIP</mark>

An project overview route.

Currently it is a live playground of CSS grid layout that provides a glimpse what the latest browser features can offer in terms of layout flexibilty and confirm that **there is no need for a third-party grid framework such as `flexgrid`**.

The cards on the page are randomy generated placeholders, the slider controls allow to change number and columns.

The feature is implemented with a custom `/components/Slider` component and `useState` hooks.

> See the `/flower/src/routes/OverviewRoute.tsx` code comments how the the slide control values are passed to the dynamic CSS grid.

#### [/flower/src/routes/GraphRoute.tsx](/flower/src/routes/GraphRoute.tsx)

**The key view in the project**, there is a lot of happening here.

### Other notable projects

Some projects mentioned on the demo meeting
