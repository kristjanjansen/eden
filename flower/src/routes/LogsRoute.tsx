import React, { FC, useState, useEffect } from "react";

import PromiseQueue from "easy-promise-queue";

import Layout from "../containers/Layout";
import Log from "../components/Log";

import { logs } from "../data/logs";

// Set up promise queue defaults

const pq = new PromiseQueue({ concurrency: 1 });
const maxDelay = 200;

const LogsRoute: FC = () => {
  const [log, addLog] = useState([]);

  // We invoke the logs() function to generate fake log data
  // convert log items to promises, resolve them
  // using the PromiseQueue and add each log item to log[] array

  useEffect(() => {
    logs(maxDelay).forEach((line: any) =>
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
