import { SIGNED_IN, SET_JOBS } from './../constants';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setJobs(jobs) {
    const action = {
        type: SET_JOBS,
        jobs
    }
    return action;
}