import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface Actor {
  id: number,
  name: string,
  bornAt: string,
  photo: string,
}

function ActorItem(props: Actor) {
  const {name, bornAt, photo} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{uri: photo}}/>
      <View style={styles.profileContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.bornAtText}>{bornAt}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "red"
  },
  profileContainer: {
    flexDirection: "column",
    marginLeft: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bornAtText: {
    fontSize: 18,
  }
});

export default ActorItem
