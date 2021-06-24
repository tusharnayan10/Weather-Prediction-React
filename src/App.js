import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';


class App extends React.Component {
  
  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return (<div>Latitude: {this.state.errorMessage} </div>);
    }
    if (this.state.lat && !this.state.errorMessage) {
      return (<div> <SeasonDisplay lat={this.state.lat} /> </div>);
    }
    return (
      <div><Loader message="Please allow location request!" /></div>);
  }
  render() {
   return(
     <div className="renderPage">
        {this.renderContent()}
     </div>
   );
  };
}

export default App;