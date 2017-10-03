import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import CommentBox from './components/commentBox';
import App from './components/app'

export const routes  = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/comments" component={CommentBox}/>
        </div>
    </Router>
);