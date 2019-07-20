const defenestrator = require('./src/defenestrator');

defenestrator().catch(reason => {
  throw reason;
});
