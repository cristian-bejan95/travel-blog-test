import React from "react";
import { useState } from "react";
import MainSlider from "./MainSlider";

function Main() {
  return (
    <main className="container flex flex-col gap-3 p-3 mx-auto my-3 rounded-md shadow-md">
      <MainSlider />
    </main>
  );
}

export default Main;
