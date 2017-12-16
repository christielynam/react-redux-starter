import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sample extends Component {
  render() {
    return (
      <div>I am a sample container</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    hasErrored: state.hasErrored
  }
}

export default connect(mapStateToProps, null)(Sample)
