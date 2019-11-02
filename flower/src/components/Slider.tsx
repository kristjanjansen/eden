import React, { FC, useState, useEffect } from "react";

const Slider: FC<{
  title?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: Function;
}> = ({
  title = "",
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange = () => null
}) => (
  <>
    <div
      style={{
        marginBottom: "10px",
        fontSize: "12px",
        opacity: 0.3,
        fontFamily: "Inter, sans-serif"
      }}
    >
      {title && `${title}: ${value}`}
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={e => onChange(parseFloat(e.target.value))}
    />
  </>
);

export default Slider;
