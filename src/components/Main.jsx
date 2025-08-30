import React from "react";
import { useState } from "react";
import MainSlider from "./MainSlider";
import Catalog from "./Catalog";

function Main() {
  return (
    <main className="container flex flex-col gap-3 p-3 mx-auto my-3 rounded-md shadow-md">
      <MainSlider />
      <Catalog />
    </main>
  );
}

export default Main;
