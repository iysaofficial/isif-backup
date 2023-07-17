import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
/*------ Pages-----*/
import { Home } from './Pages/Home';
// import DigitalMarketing from './Pages/Digital-marketing';
// import PaymentProcessing from './Pages/Payment-processing';
// import HRManagement from './Pages/HR-Management';
// import Startup from './Pages/Startup';
// import HomeCRM from './Pages/Home-CRM';
import About from './Pages/About';
// import Service from './Pages/Service';
import Process from './Pages/Process';
// import Team from './Pages/Team';
import Portfolio2col from './Pages/Portfolio-2col';
import GalleryF from './Pages/GalleryF';
import Photo from './Pages/Photo';
import PortfolioSingle from './Pages/PortfolioSingle';
import Bloglist from './Pages/Bloglist';
import BlogSingle from './Pages/BlogSingle';
import Contact from './Pages/Contact';
import ScrollToTopRoute from './ScrollToTopRoute';
// import Landing from './Pages/Landing';
// import homesupport from './Pages/home-support';
// import homeERP from './Pages/Home-ERP';
// import homeHosting from './Pages/HomeHosting';
// import homeSecurity from './Pages/HomeSecurity';
// import homeSoftwareDark from './Pages/Home-software-dark';
// import HomeAppShowcase from './Pages/Home-app-showcase';
// import HomeCloud from './Pages/Home-cloud';
// import HomeTracking from './Pages/Home-tracking';
// import Events from './Pages/Events';
// import HomeChat from './Pages/Home-chat';
// import Price from './Pages/Price';
import Faq from './Pages/Faq';
// import ServiceDetails from './Pages/ServiceDetails';
// import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';
// import BlogGridPage from './Pages/BlogGridPage';
import NotFound from './Pages/404';
import Iysacollab from './Pages/Iysa-collaboration';

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={'/'} component={Home} />
          {/* <ScrollToTopRoute
            path="/Digital-marketing"
            component={DigitalMarketing}
          />
          <ScrollToTopRoute
            path="/Payment-processing"
            component={PaymentProcessing}
          />
          <ScrollToTopRoute path="/HR-Management" component={HRManagement} />
          <ScrollToTopRoute path="/Startup" component={Startup} />
          <ScrollToTopRoute path="/Home-CRM" component={HomeCRM} /> */}
          <ScrollToTopRoute path="/About" component={About} />
          {/* <ScrollToTopRoute path="/Service" component={Service} /> */}
          <ScrollToTopRoute path="/Process" component={Process} />
          {/* <ScrollToTopRoute path="/Team" component={Team} /> */}
          <ScrollToTopRoute path="/gallery-video" component={Portfolio2col} />
          <ScrollToTopRoute path="/GalleryF" component={GalleryF} />
          <ScrollToTopRoute path="/Photo" component={Photo} />
          <ScrollToTopRoute path="/PortfolioSingle" component={PortfolioSingle} />
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/Iysacollaboration" component={Iysacollab} />
          <ScrollToTopRoute path="/BlogSingle" component={BlogSingle} />
          {/* <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} /> */}
          <ScrollToTopRoute path="/Contact" component={Contact} />
          <ScrollToTopRoute path="/Faq" component={Faq} />
          {/* <ScrollToTopRoute path="/Landing" component={Landing} /> */}
          {/* <ScrollToTopRoute path="/home-support" component={homesupport} /> */}
          {/* <ScrollToTopRoute path="/HomeHosting" component={homeHosting} /> */}
          {/* <ScrollToTopRoute path="/Home-ERP" component={homeERP} /> */}
          {/* <ScrollToTopRoute path="/HomeSecurity" component={homeSecurity} /> */}
          {/* <ScrollToTopRoute
            path="/HomeAppShowcase"
            component={HomeAppShowcase}
          />
          <ScrollToTopRoute
            path="/Home-software-dark"
            component={homeSoftwareDark}
          />
          <ScrollToTopRoute path="/Home-cloud" component={HomeCloud} />
          <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
          <ScrollToTopRoute path="/Events" component={Events} />
          <ScrollToTopRoute path="/Home-chat" component={HomeChat} />
          <ScrollToTopRoute path="/Price" component={Price} />
          
          <ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />
          <ScrollToTopRoute path="/SignIn" component={SignIn} />
          <ScrollToTopRoute path="/SignUp" component={SignUp} /> */}
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
