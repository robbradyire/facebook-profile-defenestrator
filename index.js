const defenestrator = require('./src/defenestrator');

// Set to true to run for reals :scream: (todo: make a param)
const clearAll = false;

defenestrator(clearAll).catch(reason => {
  throw reason;
});
