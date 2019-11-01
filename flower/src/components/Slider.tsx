import React, { FC, useState, useEffect } from "react";

const Slider: FC<{
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: Function;
}> = ({ value = 0, min = 0, max = 100, step = 1, onChange = () => null }) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={e => onChange(parseFloat(e.target.value))}
  />
);

export default Slider;
