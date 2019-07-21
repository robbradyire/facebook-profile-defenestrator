const defenestrator = require('./src/defenestrator');

// Clear to run for reals :scream: (todo: make a param)
// Only removes X entries per profile section when set
const sectionLimit = 2;

process.on('unhandledRejection', reason => {
  throw reason;
});

defenestrator(sectionLimit).catch(reason => {
  throw reason;
});
