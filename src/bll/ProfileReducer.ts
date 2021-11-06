type InitStateType = typeof initState;

const initState = {};

export const ProfileReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        default:
            return state;
    }
};