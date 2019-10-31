import React, { FC } from "react";

import Layout from "../containers/Layout";
import Graph from "../components/Graph";

const GraphRoute: FC = () => {
  return (
    <Layout padded>
      <Graph layout={{ hello: 1 }} />
    </Layout>
  );
};

export default GraphRoute;
