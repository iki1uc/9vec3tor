// vec9.js – 9vec3tor Kern

export class Vec9 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;

    // 9 Zustände / Layer
    this.layers = {
      L1: "raw",
      L2: "norm",
      L3: "dir",
      L4: "len",
      L5: "axis",
      L6: "geo",
      L7: "math",
      L8: "tag",
      L9: "meta"
    };
  }

  length() {
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
  }

  norm() {
    const len = this.length() || 1;
    return new Vec9(this.x/len, this.y/len, this.z/len);
  }

  dir() {
    return {
      x: this.x >= 0 ? "+" : "-",
      y: this.y >= 0 ? "+" : "-",
      z: this.z >= 0 ? "+" : "-"
    };
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      length: this.length(),
      norm: this.norm(),
      dir: this.dir(),
      layers: this.layers
    };
  }
}

