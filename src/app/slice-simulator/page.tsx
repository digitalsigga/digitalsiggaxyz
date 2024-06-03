"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => <SliceZone slices={slices} components={components} />}
    />
  );
};

export default SliceSimulatorPage;