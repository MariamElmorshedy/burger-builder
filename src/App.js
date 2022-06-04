import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
class App extends Component {
 

  render() { 
    return (
      <React.Fragment>
        <Layout>
           <Switch>
          <Route exact path = '/'  component={BurgerBuilder}></Route>
          <Route path ='/Checkout' component={Checkout}></Route>
          <Route path= '/Orders' component={Orders}/>
          </Switch>

          
        </Layout>
      </React.Fragment>
    );
  }
}
 
export default App;
