import {FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from "react";
import ActorItem, {Actor} from "./components/ActorItem";
import {listItems} from "./data/Data";

export default function App() {
  /**
   *  Avoid arrow functions inline for renderItem
   */
  const renderItem: ListRenderItem<Actor> = useCallback(({item}) => (
    <ActorItem id={item.id} name={item.name} bornAt={item.bornAt} photo={item.photo}/>
  ), []);

  /**
   *  Use keyExtractor prop
   */
  const keyExtractor = useCallback((items: Actor) => items.id.toString(), [])

  /**
   * Always use  getItemLayout to optimize FlatList
   */
  const ITEM_HEIGHT = 200;
  const getItemLayout = useCallback((data: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index
  }), [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>React Native FlatList Example</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
          getItemLayout={getItemLayout}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#eee7e7"
  },
  listContainer: {
    padding: 8,
    flex: 1,
  },
  header: {
    padding: 8,
    fontSize: 24,
    color: "white",
    lineHeight: 48,
    backgroundColor: '#ff0000',
  },
});
