import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

interface SpeedometerData {
  percentage: number;
  statusLabel: string;
}

const SpeedometerComponent: React.FC = ({report}:any) => {

  return (
    <div className="w-full">
      <ReactSpeedometer
        width={200}
        height={200}
        value={parseInt(report?.user?.dial, 10)}
        minValue={0}
        maxValue={100}
        customSegmentStops={[0, 20, 40, 60, 80, 100]}
        segmentColors={[
          "#FF4E42", // 0–20
          "#FF884D", // 20–40
          "#FFC107", // 40–60
          "#8BC34A", // 60–80
          "#4CAF50", // 80–100
        ]}
        currentValueText={`${report?.user?.dial}%`}
        needleColor="#374151"
  
        ringWidth={40}
        // needleTransition={Transition.easeElasticIn}
        needleTransitionDuration={3000}
        needleHeightRatio={0.3}
      />
    </div>
  );
};

export default SpeedometerComponent;
