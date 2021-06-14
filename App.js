import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import useAxios from "axios-hooks";
import base64 from "react-native-base64";

export default function App() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://201.147.245.165:6000/jolly/services/categoria/getCategorias")
      .then(function (response) {
        console.log(response.data);
        setCategories(response.data);
      });
  }, []);

  function convertData(blobValue)
  {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(blobValue)))
    return base64String;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          {categories.map((categorie) => (
            <View key={categorie.guid}>
              <Text> {categorie.nombre}</Text>
              <Text> {categorie.nombre}</Text>
              <Text> {categorie.nombre}</Text>
              <Text> {categorie.nombre}</Text>
             

              <Text>  {categorie.imagen.data = convertData(categorie.imagen.data)} Imagen : {categorie.imagen.data}</Text>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/png;base64,"+categorie.imagen.data,
                }}
              />

            </View>
          ))}

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});
