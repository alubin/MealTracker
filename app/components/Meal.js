import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import PropTypes from 'prop-types';

export default class Meal extends React.Component {
  render () {
    return (
      <View key={this.props.keyVal} style={styles.meal}>
        <Text style={styles.mealText}>{this.props.meal.date}</Text>
        <Text style={styles.mealText}>{this.props.meal.meal}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.mealDelete}
        >
          <Text style={styles.deletionText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Not needed, but want to ensure I get what I expect.
Meal.propTypes = {
  keyVal: PropTypes.number,
  deleteMethod: PropTypes.func.isRequired,
  meal: PropTypes.object
};
