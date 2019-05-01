#!/usr/bin/env node

import {
  sayWelcome, questionNameAndSayHello, instructEven, questionEven, congratulate,
} from '../index';
// hello + name
sayWelcome();
const name = questionNameAndSayHello();
// instruction
instructEven();
// until N correct results
const requiredCorrectResults = 3;
for (let i = 0; i < requiredCorrectResults;) {
  if (questionEven()) i += 1;
}
congratulate(name);
