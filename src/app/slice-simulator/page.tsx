"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

// Temporarily comment out the import statement
// import { components } from "@/slices";

export default function SliceSimulatorPage() {
  return (
    <div>
      {/* Conditional rendering to handle the absence of components
      {typeof components !== 'undefined' ? (
        <SliceSimulator
          sliceZone={(props) => <SliceZone {...props} components={components} />}
        />
      ) : (
        <p>Slice simulator is under construction. Components are not available yet.</p>
      )} */}
    </div>
  );
}
