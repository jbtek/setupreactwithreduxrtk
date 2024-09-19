import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import { apiSlice } from "../features/api/apiSlice";
import { loggerMiddleware } from "./middleware";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    /**
     * We can modify the existing store.ts file to add the API slice's cache reducer to the state.
     * Also, the API slice generates a custom middleware that needs to be added to the store.
     * This middleware must be added as well - it manages cache lifetimes and expiration.
     * loggerMiddleware: log action and state before dispatching and updating the state and after state changes
     */ 
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: false
      }).prepend(loggerMiddleware).concat(apiSlice.middleware)
})

//this return current state of Redux Store.
//typeof store.getState: This gives us the type of the getState method.
//ReturnType<typeof store.getState>: The ReturnType utility in TypeScript extracts the return type of a function (in this case, store.getState). 
//Since store.getState() returns the whole Redux state, this gives us the exact type of the global state.

// Usage: 
// You would use RootState to type the state argument in selectors or in any part of 
// your app where you need to access the entire Redux state.

// Example usage:

// ts
// Copy code
// import { useSelector } from 'react-redux';
// import { RootState } from './store'; // Importing RootState type

// const MyComponent = () => {
//   const user = useSelector((state: RootState) => state.user); // Typed access to the user slice of state
//   return <div>{user.name}</div>;
// };

export type RootState = ReturnType<typeof store.getState>;

/*Usage: You use AppDispatch when you want to type the dispatch function in your components or asynchronous actions (like in thunks).

Example usage:

ts
Copy code
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store'; // Importing AppDispatch type
import { fetchUser } from './features/userSlice'; // An example of a thunk action

const MyComponent = () => {
  const dispatch: AppDispatch = useDispatch(); // Typed dispatch
  const handleFetchUser = () => {
    dispatch(fetchUser()); // Type-safe dispatch of thunk action
  };
  return <button onClick={handleFetchUser}>Fetch User</button>;
};
*/

export type AppDispatch = typeof store.dispatch;

/**
 * Benefits of exporting AppDispatch and RootState
 
Why These Types Matter
====================
Type Safety: By using RootState and AppDispatch, TypeScript ensures that:

You only access the correct slices of state and the expected properties on those slices.
You only dispatch valid actions, preventing bugs and improving code completion.
Scalability: As your Redux state and actions grow in complexity, these types help you manage the structure and actions more effectively.

Auto-completion: Using these types provides better IntelliSense support in editors like VS Code, which makes writing code faster and less error-prone.
 */