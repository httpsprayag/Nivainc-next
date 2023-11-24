import React from "react";
import { ProgressBar } from "primereact/progressbar";
const LoadingPage = () => {
  return (
    <div className="h-1 text-blue-500">
      <ProgressBar mode="indeterminate" style={{ height: "6px" }}></ProgressBar>
    </div>
  );
};
export default LoadingPage;
