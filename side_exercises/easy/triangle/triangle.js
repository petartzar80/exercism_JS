export class Triangle {
  constructor(s1, s2, s3) {
    this.a = s1;
    this.b = s2;
    this.c = s3;
  }

  isTriangle() {
    const [a, b, c] = [this.a, this.b, this.c];
    return a > 0 && b > 0 && c > 0 && a + b >= c && a + c >= b && b + c >= a;
  }

  isEquilateral(s1, s2, s3) {
    const [a, b, c] = [this.a, this.b, this.c];
    return this.isTriangle() && a === b && a === c && b === c;
  }

  isIsosceles(s1, s2, s3) {
    const [a, b, c] = [this.a, this.b, this.c];
    return this.isTriangle() && (a === b || b === c || a === c);
  }

  isScalene(s1, s2, s3) {
    const [a, b, c] = [this.a, this.b, this.c];
    return this.isTriangle() && a !== b && b !== c && a !== c;
  }
}
