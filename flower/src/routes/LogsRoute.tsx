import React, { FC, useState, useEffect } from "react";
import PromiseQueue from "easy-promise-queue";

import Layout from "../containers/Layout";

import Log from "../components/Log";

import { logs } from "../data/logs";

let pq = new PromiseQueue({ concurrency: 1 });

const LogsRoute: FC = () => {
  const [log, addLog] = useState([]);
  useEffect(() => {
    logs.forEach((line: any) =>
      pq.add(
        () =>
          new Promise(resolve => {
            setTimeout(() => {
              addLog((log: any) => [...log, line] as []);
              resolve();
            }, line.delay);
          })
      )
    );
  }, []);
  return (
    <Layout>
      <Log items={log} />
    </Layout>
  );
};

export default LogsRoute;
