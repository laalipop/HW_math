import MathMath from '../app';
import Daemon from '../classDaemon';
import Magician from '../classMagician';

test('checking with stoned = false', () => {
  const testName = new MathMath('100', '2');
  expect(testName.attack).toBe(90);
});

test('checking with  stoned = true', () => {
  const testName = new MathMath('100', '2');
  testName.stoned = true;
  expect(testName.attack).toBe(85);
});

test('checking class Magician', () => {
  const testName = new Magician('50', '2');
  testName.stoned = true;
  expect(testName.stoned).toBe(true);
});

test('checking class Daemon', () => {
  const testName = new Daemon('40', '4');
  testName.attack = 100;
  expect(testName.attack).toBe(70);
});
