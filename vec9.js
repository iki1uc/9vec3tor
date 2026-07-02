export class Vec9 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    };
  }
}
