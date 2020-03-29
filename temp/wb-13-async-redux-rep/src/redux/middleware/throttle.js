const throttled = {};

const throttle = store => next => action => {
  const time = action.meta && action.meta.throttle;

  console.log("throttled --->", throttled);

  if (!time) return next(action);

  // iNCREMENT
  if (throttled[action.type]) return;

  // INCREMENT: true
  throttled[action.type] = true;

  // INCREMENT: false
  setTimeout(() => {
    throttled[action.type] = false;
  }, time);

  next(action);
};

export default throttle;


// {
//   "timer": {
//     "value": 300,
//     "step": {
//       "value": 5,
//       "label": 5
//     }
//   }
// }