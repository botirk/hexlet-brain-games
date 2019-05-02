install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
brain-even:
	npx babel-node src/bin/brain-even.js
brain-calc:
	npx babel-node src/bin/brain-calc.js
brain-gcd:
	npx babel-node src/bin/brain-gcd.js
brain-progression:
	npx babel-node src/bin/brain-progression.js
brain-prime:
	npx babel-node src/bin/brain-prime.js
publish:
	npm publish
lint:
	npx eslint src/index.js
	npx eslint src/bin/brain-games.js
	npx eslint src/bin/brain-even.js
	npx eslint src/bin/brain-calc.js
	npx eslint src/bin/brain-gcd.js
	npx eslint src/bin/brain-progression.js
	npx eslint src/bin/brain-prime.js
	npx eslint src/games/even.js
	npx eslint src/games/calc.js
	npx eslint src/games/gcd.js
	npx eslint src/games/progression.js
	npx eslint src/games/prime.js