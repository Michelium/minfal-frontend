import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Container, StackHeader, Text, Button, View, Card } from '../../common';

import * as Colors from '../../config/colors';

const ListScreen = (props) => {
  const navigation = useNavigation();
  const _handleLinkPress = to => {
    if (to === 'HomeDrawer') {
      navigation.navigate(to);
      drawerRef.current.close();
    } else {
      navigation.navigate(to);
    }
  };

  const { category, distance, rating, opened } = props.route.params;
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCompanies = async () => {
    try {
      const response = await fetch('https://app.minfal.nl/api/companies', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: category,
          rating: rating,
        }),
      })
      const json = await response.json();

      setCompanies(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    getCompanies();
  }, []);

  const renderData = (item) => {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: 'https://app.minfal.nl/uploads/images/' + item.logo }} style={{ width: 60, height: 60, marginRight: 10 }} />
        <View style={{alignItems: "right"}}>
        </View>
        <View style={{ alignItems: "left", flex: 1 }}>
          <Text lg style={{ fontWeight: "bold", color: Colors.black }}>{item.name}</Text>
          <Text sm style={{color: Colors.black}}>{item.location_name}</Text>
        </View>
      </View>
    );
  }

  if (companies !== [] && !loading) {
    return (
      <Container>
        <StackHeader title="Winkels in de buurt" />
        <FlatList
          data={companies}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={item => `${item.id}`}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <StackHeader title="Winkels in de buurt" />
        <ActivityIndicator size="large" />
      </Container>
    );
  }

};

const styles = StyleSheet.create({
  titleTxt: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
});

export default ListScreen;
