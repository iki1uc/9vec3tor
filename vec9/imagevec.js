// /vec9/imagevec.js
import { GhostScan } from "../ghostscan/index.js";

export const ImageVec9 = {
  match(sentence){
    const key = sentence.toLowerCase();

    if(key.includes("raum")) return GhostScan.index.find(i => i.axis === "Y");
    if(key.includes("cube")) return GhostScan.index.find(i => i.axis === "Z");
    if(key.includes("kern")) return GhostScan.index.find(i => i.axis === "X");
    if(key.includes("energie")) return GhostScan.index.find(i => i.axis === "A");
    if(key.includes("struktur")) return GhostScan.index.find(i => i.axis === "B");

    return GhostScan.index.find(i => i.axis === "U");
  }
};
