import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({ }) {
    return (
        <MainLayout>
            <View>
                <Text>Stadium To Do List Task</Text>
                <Text>Created by: Stadium N</Text>
                <Text>Version 0.1.241258</Text>
            </View>
        </MainLayout>
    );
}

export default About;