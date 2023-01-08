import data from "../data.json";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
  Image,
  usePDF,
} from "@react-pdf/renderer";

export default function Bubbles() {
  const styles = StyleSheet.create({
    bubbles_flex: {
      //   marginTop: "8px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "8px auto",
      width: "100%",
      justifyContent: "space-between",
    },
    bubble: {
      height: "250px",
      width: "49%",
      padding: "18px 24px",
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
      backgroundColor: "white",
    },
    bubble_text: {
      fontSize: "14px",
    },
    bubble_title: {
      fontSize: "9px",
      color: "white",
    },
    bubble_title_black: {
      fontSize: "9px",
      color: "black",
    },
    relative_one: {
      display: "flex",
      flexDirection: "row",
      position: "relative",
      top: "55px",
      left: "70px",
      width: "100px",
      height: "100px",
      borderRadius: "50px",
      backgroundColor: "#f1f5f9",
    },
    bubble_blue_one: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "4px",
      width: "100px",
      height: "100px",
      borderRadius: "50px",
      top: "-35px",
      left: "-70px",
      backgroundColor: "#2563eb",
    },
    bubble_blue_two: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "75px",
      height: "75px",
      borderRadius: "50px",
      top: "62px",
      left: "-30px",
      backgroundColor: "#3b82f6",
    },
    bubble_blue_three: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "47px",
      height: "47px",
      borderRadius: "50px",
      top: "30px",
      left: "30px",
      color: "black",
      backgroundColor: "#c7d3f8",
    },
    bubble_blue_four: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "75px",
      height: "75px",
      borderRadius: "50px",
      top: "-45px",
      left: "45px",
      color: "black",
      backgroundColor: "#9bb5fa",
    },
    bubble_blue_five: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "75px",
      height: "75px",
      borderRadius: "50px",
      top: "45px",
      left: "75px",
      color: "black",
      backgroundColor: "#7096fb",
    },
    bubble_light_one: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "100px",
      height: "100px",
      borderRadius: "50px",
      top: "-35px",
      left: "-70px",
      backgroundColor: "#9bb5fa",
    },
    bubble_light_two: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "75px",
      height: "75px",
      borderRadius: "50px",
      top: "62px",
      left: "-30px",
      backgroundColor: "#4478fd",
    },
    bubble_light_three: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      top: "28px",
      left: "29px",
      color: "black",
      backgroundColor: "#c7d3f8",
    },
    bubble_light_four: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "75px",
      height: "75px",
      borderRadius: "50px",
      top: "-45px",
      left: "45px",
      color: "black",
      backgroundColor: "#195afe",
    },
    bubble_light_five: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      padding: "2px",
      width: "75px",
      height: "75px",
      borderRadius: "50px",
      top: "45px",
      left: "75px",
      color: "black",
      backgroundColor: "#7096fb",
    },
  });
  return (
    <>
      <View style={styles.bubbles_flex}>
        <View style={styles.bubble}>
          <Text style={styles.bubble_text}>Top Categories</Text>
          <View>
            <View style={styles.relative_one}>
              <View style={styles.bubble_blue_one}>
                <Text style={styles.bubble_title}>
                  Other Computers Electronics and Technology
                </Text>
              </View>
              <View style={styles.bubble_blue_two}>
                <Text style={styles.bubble_title}>TV Movies and Stream...</Text>
              </View>
              <View style={styles.bubble_blue_three}>
                <Text style={styles.bubble_title_black}>Adult</Text>
              </View>
              <View style={styles.bubble_blue_four}>
                <Text style={styles.bubble_title_black}>
                  Video Games Consoles...
                </Text>
              </View>
              <View style={styles.bubble_blue_five}>
                <Text style={styles.bubble_title}>Programming and Deve...</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.bubble_text}>Top Topics</Text>
          <View>
            <View style={styles.relative_one}>
              <View style={styles.bubble_light_one}>
                <Text style={styles.bubble_title_black}>news</Text>
              </View>
              <View style={styles.bubble_light_two}>
                <Text style={styles.bubble_title}>online</Text>
              </View>
              <View style={styles.bubble_light_three}>
                <Text style={styles.bubble_title_black}>shopping</Text>
              </View>
              <View style={styles.bubble_light_four}>
                <Text style={styles.bubble_title}>software</Text>
              </View>
              <View style={styles.bubble_light_five}>
                <Text style={styles.bubble_title}>games</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
