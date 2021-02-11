import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from '../actions/carSalesActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
        onClick = {(e) => {
          e.preventDefault();
          props.deleteFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { deleteFeature })(AddedFeature);
