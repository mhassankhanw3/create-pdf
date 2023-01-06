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
import CountriesData from "../country";
import data from "../data.json";
import {
  abbreviateNumber,
  abbreviateNumberNew,
} from "../src/functions/Sanitizer";

export default function Compeitors() {
  const styles = StyleSheet.create({
    page: {
      // backgroundColor: "#e5e7eb",
      padding: 12,
      backgroundColor: "#F4F4F4",
    },
    nord: {
      width: "100%",
      marginTop: 10,
    },
    nord_two: {
      width: "100%",
    },
    nord_two_bgwhite: {
      marginTop: 8,
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
      backgroundColor: "white",
      padding: 14,
    },
    site_text_flex: {
      padding: "14px 24px",
      //   border: "1px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    vpn_text: {
      fontSize: 14,
      color: "#565656",
    },
    nord_no_text: {
      fontSize: 14,
    },

    nord_link_view: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 4,
      marginTop: 6,
      marginBottom: 2,
      padding: "14px 24px",
      // border: "0.7px",
      borderColor: "#a1a1aa",
    },
    nordvpn_button: {
      fontSize: 12,
      border: "0.5px",
      width: "20%",
      textAlign: "center",
    },
    nord_link_text: {
      fontSize: "13px",
    },
    link_text: {
      textDecoration: "none",
    },
    newborder: {
      height: "1px",
      width: "100%",
      margin: "auto",
      backgroundColor: "#E8E8E8",
    },
  });
  return (
    <>
      <Page style={styles.page}>
        <View style={styles.nord}>
          <View style={styles.nord_two}>
            <View style={styles.nord_two_bgwhite}>
              <Text style={{ fontSize: "16px", padding: "14px 24px" }}>
                privateinternetaccess.com Competitors
              </Text>
              <View style={styles.site_text_flex}>
                <Text style={styles.vpn_text}>Site</Text>
                <Text style={styles.vpn_text}>Category rank</Text>
              </View>
              <View style={styles.newborder}></View>
              {data.domain.sites.similar_sites.map((y) => (
                <View>
                  <View style={styles.nord_link_view}>
                    <Text style={styles.nord_link_text}>
                      <Link
                        style={styles.link_text}
                        href={y.site}
                        src={`https://www.${y.site}`}
                      >
                        <Text>{y.site}</Text>
                      </Link>{" "}
                    </Text>
                    <Text style={styles.nord_no_text}># {y.rank}</Text>
                  </View>
                  <View style={styles.newborder}></View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </>
  );
}
