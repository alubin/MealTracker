import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from "../../styles";

export default class Meal extends React.Component {
    render() {
        return (
            <View key={this.props.currentMeal} style={styles.meal}>
                <Text style={styles.mealText}>{this.props.val.date}</Text>
                <Text style={styles.mealText}>{this.props.val.meal}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.mealDelete}>
                    <Text style={styles.deletionText}>D</Text>
                </TouchableOpacity>
            </View>
        )
    }
}