import React from "react";
import Log from "../components/Log";

import Layout from "../containers/Layout";

const Logs: React.FC = () => {
  return (
    <Layout>
      <Log items={["sample", "log", "output"]} />
    </Layout>
  );
};

export default Logs;
