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
import {
  abbreviateNumber,
  abbreviateNumberNew,
} from "../src/functions/Sanitizer";

export default function TopSocial() {
  const styles = StyleSheet.create({
    network_one_last: {
      //   marginTop: '56px',
      width: "49%",
      margin: "8px auto",
      //   border: "1px",
    },
    network_flex_text: {
      padding: "18px 24px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    network_bg_color_last: {
      //   padding: "18px 24px",
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
      backgroundColor: "white",
    },
    network_text_flex_last: {
      padding: "15px 0px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      //   margin: "10px 0px 10px 0px",
    },
    bg_btn: {
      padding: "2px 10px",
      borderRadius: "15px",
      backgroundColor: "#EDE9FF",
      color: "#502FCF",
      fontSize: "14px",
    },
    network_text: {
      fontSize: "14px",
    },
    flex_channel: {
      margin: "0px auto",
      display: "flex",
      flexDirection: "row",
      width: "100%",
    //   border: "1px",
      padding: "18px 24px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    channel_color: {
      height: "8px",
      width: "8px",
      borderRadius: "50px",
      backgroundColor: "red",
    },
    text_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    txt_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    border: {
      width: "100%",
      margin: "auto",
      height: "1px",
      backgroundColor: "#E8E8E8",
    },
  });
  return (
    <View style={styles.network_one_last}>
      <View style={styles.network_bg_color_last}>
        <View style={styles.network_flex_text}>
          <Text style={styles.network_text}>Top Socials</Text>
          <Text style={styles.bg_btn}>
            {abbreviateNumber(data.domain.traffic.sources.social.value)}
          </Text>
        </View>

        <View style={styles.border}></View>
        <View style={styles.flex_channel}>
          <Text style={styles.channel_color}></Text>
          <View style={styles.txt_flex}>
            <Text style={{ fontSize: "12px", marginLeft: "4px" }}>
              Youtube{" "}
            </Text>
            <Text style={{ fontSize: "12px" }}> - 82%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
