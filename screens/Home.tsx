import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { removeData } from '../utils/Utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../AuthProvider';

export const Home = () => {
    const { signOut } = useAuth()
    const handleLogout = async () => {
        await removeData()
        signOut()
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
                <Text style={styles.messageText}>Welcome to Reddit</Text>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    messageText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', 
        fontFamily: 'Arial',
    },
    logoutButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#DDDDDD',
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

