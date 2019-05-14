import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Time to go to the beach!',
    icon: 'sun'
  },
  winter: {
    text: 'Grab snowboard!',
    icon: 'snowflake'
  }
};

export class SeasonDisplay extends React.Component<{isSummer: boolean}> {
  season = this.props.isSummer
    ? seasonConfig.summer
    : seasonConfig.winter;
  seasonName = this.props.isSummer ? 'summer' : 'winter';

  render() {
    return (
      <div className={`season-display ${this.seasonName}`}>
        <i className={`${this.season.icon} icon massive icon--left`} />
        <h1>{ this.season.text }</h1>
        <i className={`${this.season.icon} icon massive icon--right`} />
      </div>
    )
  }
}
