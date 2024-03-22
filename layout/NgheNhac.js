import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Audio } from 'expo-av'


export default function NgheNhac() {

    const [Sound, setSound] = useState(null)

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
        )
        setSound(sound);
        await sound.playAsync();

    }

    async function pauseSound() {
        if (Sound) {
            await Sound.stopAsync();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ví dụ về nghe nhạc</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Text style={styles.text}>Play</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={pauseSound}>
                    <Text style={styles.text}>Stop</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: { height: '100%', justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 15, fontWeight: 'bold', margin: 10 },
    button: { backgroundColor: 'orange', marginHorizontal: 10, width: 100, alignItems: 'center', borderRadius: 10, borderBlockColor: 'red', borderWidth: 2 }
})