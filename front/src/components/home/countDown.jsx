"use client";

import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2025-07-23");
  return <Countdown date={endingDate} />;
};

export default CountDown;
