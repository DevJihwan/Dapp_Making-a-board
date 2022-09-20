import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { Home, Auth, Content } from './pages';
import HeaderContainer from 'containers/Base/HeaderContainer';



class App extends Component {


  render(){
    return (

      <div>
         
        <Route exact path="/" component={Home}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/Content" component={Content}/>
      </div>

    );

  }
}

export default App;
