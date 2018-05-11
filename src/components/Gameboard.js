/* eslint-disable global-require */
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerDouble: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerSingle: {
    alignItems: 'center',
  },
  holeImage: {
    height: 80,
    width: 120,
  },
});

class GameBoard extends React.Component {
  moleContainers = (n) => {
    console.log('moleContainers = ');
    const containers = [];
    /* eslint-disable */
    for (let i = 0; i < n; i++) {
      const component = (
        <TouchableOpacity
          style={{ height: 65, width: 65 }}
          onPress={() => console.log('clicking')}
        >
          <Image style={{ height: 65, width: 65 }} source={require('../../assets/hole.png')} />
        </TouchableOpacity>
      );

      containers.push({
        key: `hole${i}`,
        component,
      });
    }
    console.log('containers = ', containers);
    return containers;
  };

  keyExtractor = (item) => {
    console.log('keyExtractor = ', item);
    return item.key;
  };

  renderItem = ({ item }) => {
    console.log('renderItem = ', item);
    return item.component;
  };

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        <View style={styles.containerDouble}>          
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="center" />
          </TouchableOpacity>        
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerSingle}>         
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>        
        </View>

        <View style={styles.containerDouble}>          
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>        
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>        
        </View>

        <View style={styles.containerSingle}>         
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>        
        </View>

        <View style={styles.containerDouble}>          
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>
        
        
          <TouchableOpacity
            onPress={() => console.log('clicking')}
          >
            <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
          </TouchableOpacity>          
        </View>

        <View style={styles.containerSingle}>          
            <TouchableOpacity
              onPress={() => console.log('clicking')}
            >
              <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
            </TouchableOpacity>          
        </View>
      </View>
    );
  }
}

export default GameBoard;
/*
<FlatList
        data={moleContainers(9)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

*/
