import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Hoyrdahi({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cv}>
          <TouchableOpacity>
            <Image
              source={require("../../minii-anhnii-app/assets/favicon.png")}
              style={styles.pro}
            ></Image>
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style={styles.doodBack}>
          <View style={styles.golloh}>
            <Image
              source={require("../../minii-anhnii-app/assets/1465569.png")}
              style={styles.nuur}
            ></Image>
            <Text style={styles.proNer}>Г. Билүүн</Text>
            <Text style={styles.proHuis}>21, Male</Text>
          </View>
          <View style={styles.second}>
            <Image
              source={require("../../minii-anhnii-app/assets/chess.png")}
              style={styles.buuMed}
            ></Image>
            <Button
              style={styles.buttun}
              title="Мэргэжил"
              onPress={() => navigation.navigate("Second")}
            />
          </View>
          <View>
           
            <TouchableOpacity
              style={styles.second}
              title="Мэргэжил"
              onPress={() => navigation.navigate("Second")}
            >
              <Text>Mergejil</Text>
               <Image
              source={require("../../minii-anhnii-app/assets/chess.png")}
              style={styles.buuMed}
            ></Image>
            <Text style={{ color: 'white', fontSize: 16 }}>Мэргэжил</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.medeh}>
            <Image
              source={require("../../minii-anhnii-app/assets/volleyball-player.png")}
              style={styles.buuMed}
            ></Image>
            <Button
              title="Хувийн мэдээлэл"
              onPress={() => navigation.navigate("Guravdahi")}
            />
            <StatusBar style="auto" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  second: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 20,
  },
  // pro: {
  //   width: 420,
  //   height: 150,
  // },
  cv: {
    padding: 10,
    width: "100%",
    backgroundColor: "#5F9EA0",
    height: 150,
  },
  nuur: {
    width: 140,
    height: 140,
    borderRadius: 150,
    marginTop: -70,
  },
  golloh: {
    alignItems: "center",
  },
  proNer: {
    fontSize: 25,
    fontWeight: "bold",
  },
  proHuis: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  buuMed: {
    width: 25,
    height: 25,
  },
  medeh: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  doodBack: {
    backgroundColor: "#20B2AA",
    height: 700,
  },
});
