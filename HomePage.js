import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

import { btcPriceData } from './fetchHandler';

export const HomePage = () => {

    const [bitcoin, setBitcoin] = useState(null);

    useEffect(() => {

        btcPriceData()
            .then((price) => {
                setBitcoin(price);
            })
            .catch((error) => {
                console.error('could not fetch bitcoin price data', error);
            });
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            margin: 40,
        },
    });

    return (
        <View style={styles.container} >
            <Text>Cryptos</Text>
                <View style={styles.container} >
                    <ScrollView>
                        <View>
                            <Text>{`Bitcoin ${bitcoin}`}</Text>
                            <Button title='Log' onPress={() => {console.log(btcPriceData())}} ></Button>
                        </View>
                    </ScrollView>
                </View>
        </View>
    )
}