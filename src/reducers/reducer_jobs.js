import { SET_JOBS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_JOBS:
            const { jobs } = action;
            return jobs;
        default:
            return state;
    }
}