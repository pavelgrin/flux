import { Flux } from '../lib/flux';

const UPDATE_RANDOM = 'UPDATE_RANDOM';

const initState = {
    randomNumber: null,
};

const storeManager = ({ event, payload }, state = initState) => {
    switch (event) {
        case UPDATE_RANDOM:
            return {
                ...state,
                randomNumber: payload,
            };
        default:
            return state;
    }
};

const flux = new Flux(storeManager);

const actions = {
    updateRandom(value) {
        flux.dispatch({
            event: UPDATE_RANDOM,
            payload: value,
        });
    }
};

export { flux, actions };
