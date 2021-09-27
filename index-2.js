const delay = ms => {
  console.log('BEFORE  logger.then - delay');
  console.log(ms)
};

const logger = time => console.log(`Resolved after ${time}ms`);