import React from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import _ from 'lodash';
import styles from "../../styles";
import Meal from "./meal";

const placeHolder = '>Meal';
const headerText = 'Meal Planner';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealArray: [],
            mealText: '',
        }
    }

    render() {

        let meals = this.state.mealArray.map((val, key) => {
            return <Meal key={key}
                         currentMeal={key}
                         val={val}
                         deleteMethod={() => this.deleteMeal(key)}/>
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>{headerText}</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {meals}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput style={styles.textInput}
                               onChangeText={(mealText) => this.setState({mealText: mealText})}
                               value={this.state.mealText}
                               placeholder={placeHolder}
                               placeholderTextColor={'white'}
                               underlineColorAndroid={'transparent'}>
                    </TextInput>

                    <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    addNote() {
        if(!_.isEmpty(this.state.mealText) )
        {
            var d = new Date();
            var meals = this.state.mealArray;
            meals.push({
                date: d.getFullYear() +
                    '/' + (d.getMonth() + 1) +
                    '/' + d.getDate(),
                meal: this.state.mealText
                });
            this.setState({mealArray: meals});
            this.setState({mealText: ''});
        }
    }

    deleteMeal(key){
        this.state.mealArray.splice(key, 1);
        this.setState({mealArray: this.state.mealArray});
    }
}