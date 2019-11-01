import React, { FC } from "react";

import Layout from "../containers/Layout";
import StatusSpinner from "../components/StatusSpinner";
import GraphCard from "../components/GraphCard";
import Status from "../components/Status";

const Oveview: FC = () => {
  return (
    <Layout padded>
      <GraphCard>
        <Status status="pending" />
        <Status status="processing" />
        <Status status="done" />
        <Status status="cancelled" />
        <Status status="error" />
      </GraphCard>
    </Layout>
  );
};

export default Oveview;
