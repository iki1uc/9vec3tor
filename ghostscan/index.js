// /ghostscan/index.js
export const GhostScan = {
  index: [],

  load(files){
    this.index = files.map(f => ({
      file: f,
      axis: this.detectAxis(f),
      tag: this.detectTag(f)
    }));
  },

  detectAxis(file){
    const n = parseInt(file.match(/\((\d+)\)/)?.[1]);
    if(n <= 1) return "X";
    if(n <= 3) return "Y";
    if(n <= 5) return "Z";
    if(n <= 7) return "A";
    if(n <= 9) return "B";
    return "U";
  },

  detectTag(file){
    if(file.includes("Projekt")) return "system";
    if(file.includes("raum")) return "space";
    if(file.includes("cube")) return "geometry";
    return "misc";
  }
};
