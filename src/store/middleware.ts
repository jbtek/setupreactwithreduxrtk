export const loggerMiddleware = (storeAPI:any) => (next:Function) => (action:unknown) => {
   console.log('Action Dispatched', action);
   console.log('State Before Action Dispatched:::', storeAPI.getState());
   const result = next(action);
   console.log('Next state:', storeAPI.getState());

  // Return the result of next(action)
  return result;
}