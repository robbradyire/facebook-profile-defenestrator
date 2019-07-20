const getLoopLimiter = limit => {
  const limiter = {
    count: 0,
  };
  limiter.getCount = () => limiter.count;
  limiter.loop = () => limiter.count++;
  limiter.reachedLimit = () => limit > 0 && limiter.count >= limit;
  return limiter;
};

module.exports = getLoopLimiter;
