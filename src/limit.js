const LIMIT = 4;

const getLoopLimiter = clearAll => {
  const limiter = {
    count: 0,
  };
  limiter.reachedLimit = () => {
    if (!clearAll && limiter.count++ >= LIMIT) {
      return true;
    }
    return false;
  };
  return limiter;
};

module.exports = getLoopLimiter;
