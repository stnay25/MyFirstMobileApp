import { useState } from "react";
import React from "react";
import { Text, StyleSheet } from "react-native";

const Chuck = ({ }) => {
    const [fact, setFact] = React.useState('loading..');

    const fetchFact = async () => {
        try {

        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const decoded = await response.json();
        // debugger;
        // console.log(decoded);

        const newfact = decoded.value;

        setFact(newfact);
         } catch (err) {
            console.log(err);
         }
        
    }

    React.useEffect(() => {
        fetchFact();

        console.log('here');
    }, []);

    return (
        <>
            <Text style={styles.text}>{fact}</Text>
        </>
    );
}

export default Chuck;

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginTop: 15,
        textAlign: "center"
    }
})
