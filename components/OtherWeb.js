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

export default function OtherWeb() {
  const styles = StyleSheet.create({
    other_web: {
      width: "43%",
      borderRadius: "15px",
      border: "1px",
      borderColor: "#E8E8E8",
      backgroundColor: "white",
    },
    other_main_head: {
      marginBottom: "10px",
      fontSize: "12px",
    },
    headPad: {
      padding: "20px 24px",
    },
    site_text: {
      fontSize: "11px",
      color: "#565656",
      margin: "5px 0px 6px 0px",
    },
    other_text: {
      //   border: "1px",
      fontSize: "12px",
      color: "black",
      marginTop: "16px",
      marginBottom: "16px",
    },
    nord_link_text: {
      fontSize: "12px",
    },
    link_text: {
      textDecoration: "none",
    },
    border: {
      height: "1px",
      width: "100%",
      margin: "auto",
      backgroundColor: "#E8E8E8",
    },
    border_one: {
      marginTop: "10px",
      height: "1px",
      width: "100%",
      margin: "auto",
      backgroundColor: "#E8E8E8",
    },
  });
  return (
    <>
      <View style={styles.other_web}>
        <View style={styles.headPad}>
          <Text style={styles.other_main_head}>Other Visited Websites</Text>
          <Text style={styles.site_text}>Site</Text>
        </View>
        <View style={styles.border_one}></View>
        {data.domain.audience.other_visited_websites.map((i) => (
          <View style={{ padding: "0px 24px" }}>
            <Text style={styles.other_text}>
              <Link style={styles.link_text} href={i} src={`https://www.${i}`}>
                <Text>{i}</Text>
              </Link>
            </Text>
            <View style={styles.border}></View>
          </View>
        ))}
      </View>
    </>
  );
}
