// import lib from 'some-analytics-lib' // not working library
const analytics = store => next => action => {
  next(action);

  const shouldSend = action.meta && action.meta.analytics;

  if (shouldSend) {
    console.log(`Sending ${action.type} to analytic server`);
    // lib.send(action);
  }
};

export default analytics;
