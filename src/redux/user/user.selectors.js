import { createSelector } from "reselect";

const selectUser = state => state.user;

// selectUser and selectCart could also be passed as elements of the same array to createSelector as the first argument
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);