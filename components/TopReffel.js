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
import { abbreviateNumber } from "../src/functions/Sanitizer";

export default function TopReffel() {
  const styles = StyleSheet.create({
    network_one_last: {
      //   marginTop: '56px',
      width: "100%",
      margin: "54px auto 8px auto",
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
      color: "blue",
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
            <Text style={styles.network_text}>Top Referral Traffic</Text>
            <Text style={styles.bg_btn}>
              {abbreviateNumber(data.domain.traffic.sources.referring.value)}
            </Text>
          </View>
          <View style={styles.main_network_flex}>
            <Text style={styles.main_network_text}>Site</Text>
            <Text style={styles.main_network_text}>Change</Text>
          </View>
          <View style={styles.border}></View>
          <View style={styles.main_network}>
            {data.domain.traffic.sources.referring.top_referring.map((to) => (
              <View>
                <View style={styles.network_text_flex_last}>
                  <Text style={styles.network_text_link}>
                    <Link
                      style={styles.link_text}
                      href={to.site}
                      src={`https://www.${to.site}`}
                    >
                      <Text>
                        {to.site ? (
                          to.site
                        ) : (
                          <Text style={{ color: "black" }}>none</Text>
                        )}
                      </Text>
                    </Link>
                  </Text>
                  <Text style={styles.network_text_small}>{to.percent}%</Text>
                </View>
                <View style={styles.border}></View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}
