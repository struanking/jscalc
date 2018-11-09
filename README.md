# JS Calculator

## Version Number
1bfd331edc6db7c54d1e799973887da8d5cc212a

## Live version
https://jscalc-8eb82a.netlify.com/

There's no 3rd party modules in the running code but there is to support ES6 transpiling, test runner and a dev server. Therefore read on for installing and running instructions. 

## Install
In root directory run
```
npm install
```

## Run Locally
```
npm start
```

Then visit `http://localhost:8080` in a browser. *Note* that the webpack setup is very basic and in particular the CSS is simply statically loaded from the `dist` directory.

## Production Build
```
npm run build
```
*Note* that this will overwrite the output js from the dev build.

## Run tests

### Run once
```
npm test
```

### Run and watch
```
npm test -- --watch
```

## Browser Support
Although the JavaScript is transpiled for backwards compatability the CSS uses `grid` so a modern browser should be used. Ideally would provide a fallback layout then apply the modern approach using `@supports`.

## Notes

The following are rules that i've aimed to implement for this simple calculator. Simple functionality but updating the display with the in-progress calculation value depending on operator rules was tricky.

1. Input is a number => update display and pending value.
2. Input operation is Add or Subtract => set operator, 
  display = calculation of combined sequence and pending, clear pending, set sequence to whatever the display is now.
3. Input operation is Divide or Multiply => set operator, add operator to pending
4. Input operation is Divide or Multiply AND last operator was also Divide or Multiply => calculate pending, set display to that value, update pending with calculated value and operator.
5. Input operation is "=" => set operator to '',concatenate pending to sequence and calculate the answer.

## To Do
1. Add support for other common pocket calculator buttons.
2. Tidy up types e.g. strings and numbers are both used.
3. Allow CSS to hot reload and potentially part of the build process.


## Limitations
1. No negative number button.
2. No cancelling just the last entry. AC resets everything.
3. There may be errors around repeated operator presses.