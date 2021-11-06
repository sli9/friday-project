type InitStateType = typeof initState;

const initState = {};

export const LoginReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        default:
            return state;
    }
};