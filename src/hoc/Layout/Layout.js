import React,{Component}from "react";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.css";
class Layout extends Component  {
  
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = ()=>{
    this.setState({showSideDrawer:false})
  }
  sideDrawerToggleHandler = ()=>{
    this.setState(prevState=>({showSideDrawer: !prevState.showSideDrawer}))
  }
  render(){return (
    <React.Fragment>
        <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
        <SideDrawer open = {this.state.showSideDrawer}closed = {this.sideDrawerClosedHandler}/>
      <main className="Content">{this.props.children}</main>
    </React.Fragment>
  );
};
}

export default Layout;
