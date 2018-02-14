import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions/index';
import reducer from './reducers';

import App from './App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddJob from './components/AddJob';


const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('LOGADO');
        const { email } = user;
        store.dispatch(logUser(email));
        // browserHistory.push('/');
    } else {
        console.log('N LOGADO');
        browserHistory.push('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path='/' history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/addjob' component={AddJob} />
        </Router>
    </Provider>, document.getElementById('root')
);
