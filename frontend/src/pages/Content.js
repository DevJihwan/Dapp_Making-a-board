import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { FeedContent, PostContent } from 'components/Content';


class Content extends Component{

    render() {
        return (
                <Route path="/Content/FeedContent" component={FeedContent}/>
        );
    }

}

export default Content;