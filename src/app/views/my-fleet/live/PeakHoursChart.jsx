import React, { useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  Tooltip,
  Cell
} from "recharts";
import { RechartCreator } from "egret";

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   L${x},${y + 25}
   Q${x + width / 2},${y},${x + width},${y + 25}
   L${x + width},${y + height}`
);

const CustomBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label bg-custom-tooltip">{`${payload[0].value} Rides`}</p>
      </div>
    );
  }

  return null;
}

const PeakHoursChart = (props) => {
  const [focusBar, setFocusBar] = useState(null);
  return (
    <RechartCreator height={"350px"}>
      <ComposedChart
        data={props.chartData}
        margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
        }}
        onMouseMove={state => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
          } else {
            setFocusBar(null);
          }
        }}
      >
        <XAxis dataKey="time"/>
        <Tooltip content={<CustomTooltip />}/>
        <Bar type="monotone" dataKey="Rides" barSize={20} shape={<CustomBar />}>
          {props.chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={focusBar === index ? '#ffbf02' : '#e5f0fc'} />
          ))}
        </Bar>
      </ComposedChart>
    </RechartCreator>
  )
}

export default PeakHoursChart;