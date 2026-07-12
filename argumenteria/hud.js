// /argumenteria/hud.js
import { GhostScan } from "../ghostscan/index.js";

export function argumenteriaHUD(sentence){
  const img = argumenteriaImage(sentence);
  const hud = document.getElementById("argumenteriaHUD");
  hud.src = img.file;
}
