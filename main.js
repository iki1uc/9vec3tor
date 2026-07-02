import { coreVec } from "./core.js";

document.getElementById("run").addEventListener("click", () => {
  const out = document.getElementById("out");
  out.textContent = JSON.stringify(coreVec.toJSON(), null, 2);
});
