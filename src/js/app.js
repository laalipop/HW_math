/* eslint-disable no-underscore-dangle */
export default class MathMath {
  constructor(damage, interval) {
    this.damage = damage;
    this.interval = interval;
    this._stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this.damage = value;
  }

  get attack() {
    const powerAttack = this.damage - (this.interval - 1) * (this.damage / 10);
    let resultAttack = powerAttack;
    if (this._stoned === true) {
      resultAttack = powerAttack - Math.log2(this.interval) * 5;
    }
    return resultAttack;
  }
}

// const testName = new MathMath('100', '2');
// // testName.stoned = true;
// console.log(testName.attack);

// const testName2 = new Daemon('100', '5');
// console.log(testName2);
