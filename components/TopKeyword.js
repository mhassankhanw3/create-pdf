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

export default function TopKeyword() {
  const styles = StyleSheet.create({
    network_one_last: {
      //   marginTop: '56px',
      width: "48%",
      margin: "8px auto",
      //   border: "1px",
    },
    network_bg_color_last: {
      //   padding: "18px 24px",
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
      backgroundColor: "white",
    },
    network_flex_text: {
      padding: "18px 24px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
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
    network_text_small: {
      fontSize: "11px",
    },
    network_text_link: {
      fontSize: "11px",
      color: "#2563eb",
    },
    network_text: {
      fontSize: "14px",
    },
    main_network: {
      padding: "0px 24px 18px 24px",
      //   marginTop: "10px",
    },
    main_network_flex: {
      padding: "0px 24px 18px 24px",
      marginTop: "8px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    main_network_text: {
      color: "#565656",
      fontSize: "12px",
    },
    border: {
      width: "100%",
      margin: "auto",
      height: "1px",
      backgroundColor: "#E8E8E8",
    },
  });
  return (
    <>
      <View style={styles.network_one_last}>
        <View style={styles.network_bg_color_last}>
          <View style={styles.network_flex_text}>
            <Text style={styles.network_text}>Top Keywords</Text>
            <Text style={styles.bg_btn}>
              {abbreviateNumber(
                data.domain.traffic.sources.search_organic.value
              )}
            </Text>
          </View>
          <View style={styles.main_network_flex}>
            <Text style={styles.main_network_text}>Keyword</Text>
            <Text style={styles.main_network_text}>Change</Text>
          </View>
          <View style={styles.border}></View>
          <View style={styles.main_network}>
            {data.domain.traffic.sources.search_organic.top_keywords.map(
              (to) => (
                <View>
                  <View style={styles.network_text_flex_last}>
                    <Text style={styles.network_text_small}>
                      {to.keyword ? to.keyword : "none"}
                    </Text>
                    <Text style={styles.network_text_small}>{to.percent}%</Text>
                  </View>
                  <View style={styles.border}></View>
                </View>
              )
            )}
          </View>
        </View>
      </View>
    </>
  );
}
