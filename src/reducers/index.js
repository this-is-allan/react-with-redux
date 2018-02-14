import { combineReducers } from "redux";
import user from './reducer_user';
import jobs from './reducer_jobs';

export default combineReducers({
    user,
    jobs
});