import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>

        {/* Ícones do canto direito */}
        <View
          style={{ flex: 1, flexDirection: 'row-reverse', marginRight: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="plus-circle" size={24} color="#2890fa" />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <Feather name="search" size={24} color="#2890fa" />
          </View>
        </View>
      </View>
      {/*Conteúdo */}
      <View style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Text style={styles.contentText}>My Work</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Feather
              name="more-horizontal"
              size={24}
              color="#6e6f74"
              style={{ marginLeft: '70%' }}
            />
          </View>
        </View>

        {/* Lista de ícones */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginTop: 20,
            paddingLeft: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Image
              source={require('../assets/1.png')}
              style={{ width: 44, height: 44 }}
            />
            <Text style={{ color: '#fff', fontSize: 17, marginLeft: 15 }}>
              Issues
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Image
              source={require('../assets/2.png')}
              style={{ width: 44, height: 44 }}
            />
            <Text style={{ color: '#fff', fontSize: 17, marginLeft: 15 }}>
              Pull Requests
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Image
              source={require('../assets/3.png')}
              style={{ width: 44, height: 44 }}
            />
            <Text style={{ color: '#fff', fontSize: 17, marginLeft: 15 }}>
              Discussions
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Image
              source={require('../assets/4.png')}
              style={{ width: 44, height: 44 }}
            />
            <Text style={{ color: '#fff', fontSize: 17, marginLeft: 15 }}>
              Repositories
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Image
              source={require('../assets/5.png')}
              style={{ width: 44, height: 44 }}
            />
            <Text style={{ color: '#fff', fontSize: 17, marginLeft: 15 }}>
              Organizations
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Image
              source={require('../assets/6.png')}
              style={{ width: 44, height: 44 }}
            />
            <Text style={{ color: '#fff', fontSize: 17, marginLeft: 15 }}>
              Starred
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#333',
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <View style={styles.favSec}>
          <Text style={[styles.contentText, {marginLeft: 20}]}>Favorites</Text>
          <Text style={styles.favText}>
            Add favorite repositories for quick access at any time, without
            having to search
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de navegação */}
      <View style={styles.navBar}>
        <View style={styles.navButton}>
          <Feather name="home" size={30} color="#2890fa" />
          <Text style={[styles.navText, { color: '#2890fa' }]}>Home</Text>
        </View>

        <View style={styles.navButton}>
          <Feather name="bell" size={30} color="gray" />
          <Text style={styles.navText}>Notifications</Text>
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
  contentText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  favText: {
    color: '#B7BABF',
    fontSize: 17,
    textAlign: 'center',
    margin: 25,
  },
  button: {
    backgroundColor: '#201F24',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  buttonText: {
    color: '#3D8DE4',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
