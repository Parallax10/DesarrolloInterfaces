export function getFinalState(baseState, queue) {
    let finalState = baseState;
    for (const action of queue) {
      if (typeof action === 'function') {
        finalState = action(finalState);
      } else {
        finalState = action;
      }
    }
  
    return finalState;
  }
  