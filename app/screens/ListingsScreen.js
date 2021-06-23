import React from "react";
import { FlatList, StyleSheet, } from "react-native";

import Card from "../components/Card";
import listingApi from '../api/listing';
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppButton from "../components/Button";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListing } = useApi(listingApi.getListings);

  React.useEffect(() => {
    loadListing();
  }, [])


  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Couldn't retrieve the listings</AppText>
        <AppButton title='Retry' onPress={loadListing} />
      </>
      }
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
