"use strict";

import { calculate } from "./biblioteca/calculadora.js";

console.log(calculate("as", 5, "+"));
console.log(calculate(2, "sa", "-"));
console.log(calculate(2, 6, ""));
console.log(calculate(2, 6, "+"));
console.log(calculate(2, 6, "-"));
console.log(calculate(2, 6, "*"));
console.log(calculate(2, 6, "/"));
console.log(calculate(2, 0, "/"));