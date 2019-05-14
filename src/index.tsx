import React from 'react';
import ReactDOM from 'react-dom'
import { SeasonDisplay } from './SeasonDisplay';
import { Loader } from './Loader';

interface State {
  isNorthernHemisphere: boolean;
  isDuringMarchOctober: boolean;
  error: {
    visible: boolean;
    message: string | null;
  },
  loading: boolean;
}

export class App extends React.Component<any, State> {
  state: State = {
    isNorthernHemisphere: false,
    isDuringMarchOctober: this.isDateBetweenMarchOctober(),
    error: {
      visible: false,
      message: null
    },
    loading: true
  };

  componentDidMount(): void {
    this.getUsersPosition();
  }


  getUsersPosition() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
          isNorthernHemisphere: position.coords.latitude > 0,
          loading: false
        }),
      positionError => this.setState({
          error: {
            visible: true,
            message: positionError.message
          },
          loading: false
        })
    );
  }

  isDateBetweenMarchOctober() {
    const month = (new Date()).getMonth() + 1;
    return month >= 3 && month <= 9;
  }

  renderContent() {
    if (this.state.loading) {
      return <Loader text="Getting Your location!"/>
    }

    if (this.state.error.visible) {
      return <span> {this.state.error.message} </span>
    }

    return <SeasonDisplay isSummer={this.state.isNorthernHemisphere === this.state.isDuringMarchOctober} />
  }


  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
