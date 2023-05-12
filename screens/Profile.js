import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Issues() {
  return (
    <View style={styles.container}>
      
      {/*Conteúdo */}
      <View style={styles.content}>
        </View>
      {/* Barra de navegação */}
      <View style={styles.navBar}>
        <View style={styles.navButton}>
          <Feather name="home" size={30} color="grey" />
          <Text style={styles.navText}>Home</Text>
        </View>

        <View style={styles.navButton}>
          <Feather name="bell" size={30} color="#2890fa" />
          <Text style={[styles.navText, { color: '#2890fa' }]}>Notifications</Text>
        </View>

        <View style={styles.navButton}>
          <Feather name="search" size={30} color="gray" />
          <Text style={styles.navText}>Explore</Text>
        </View>

        <View style={styles.navButton}>
          <Feather name="user" size={30} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17181c',
    fontFamily: 'Helvetica',
  },
  header: {
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  content: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    padding: 20,
    backgroundColor: '#17181c',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Helvetica',
  },
});
