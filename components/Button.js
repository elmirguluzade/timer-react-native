import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { timerHandler } from '../helper'

const ButtonComponent = ({ setTimer, timer, setLaps, laps }) => {
    const [started, setStarted] = useState(false)

    const clearTimer = () => {
        setTimer('00:00:00')
        setLaps([])
    }

    useEffect(() => {
        if (started) {
            timerInterval = setInterval(() => {
                const newTime = timerHandler(timer)
                setTimer(newTime)
            }, 1000)

            return () => clearInterval(timerInterval)
        }
    }, [started, timer])

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setStarted(!started)}>
                <Text style={styles.text}>{!started ? "Start" : "Stop"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setLaps([...laps, timer])}>
                <Text style={styles.text}>Lap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={clearTimer}>
                <Text style={styles.text}>Clear</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: "flex-end",
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e6c97a',
        alignItems: 'center',
        paddingVertical: 15
    },
    text: {
        color: '#e6c97a',
        fontSize: 20,
        fontWeight: 700
    }
})



export default ButtonComponent