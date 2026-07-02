// main.js

import { coreVec } from "./core.js";

document.getElementById("run").addEventListener("click", () => {
  const data = coreVec.toJSON();
  document.getElementById("out").textContent =
    JSON.stringify(data, null, 2);
});
