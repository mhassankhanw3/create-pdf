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

export default function TopMarket() {
  const colors = [
    "#FF222F",
    "#00A361",
    "#FFB331",
    "#502FCF",
    "#D766FF",
    "#F3882E",
    "#0184FF",
  ];
  const styles = StyleSheet.create({
    network_one_last: {
      //   marginTop: '56px',
      width: "49.5%",
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
      fontSize: "13px",
    },
    flex_channel: {
      margin: "6px auto",
      display: "flex",
      flexDirection: "row",
      width: "100%",
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
          <Text style={styles.network_text}>
            nordvpn.com Top Marketing Channels
          </Text>
        </View>

        <View style={styles.border}></View>
        <View style={{ marginTop: "10px", padding: "18px 24px" }}>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#FF222F",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                direct
              </Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(data.domain.traffic.sources.direct.percent)}%
              </Text>
            </View>
          </View>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#00A361",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                search_organic
              </Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(
                  data.domain.traffic.sources.search_organic.percent
                )}
                %
              </Text>
            </View>
          </View>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#FFB331",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                search_ad
              </Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(
                  data.domain.traffic.sources.search_ad.percent
                )}
                %
              </Text>
            </View>
          </View>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#502FCF",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                referring
              </Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(
                  data.domain.traffic.sources.referring.percent
                )}
                %
              </Text>
            </View>
          </View>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#D766FF",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                social
              </Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(data.domain.traffic.sources.social.percent)}%
              </Text>
            </View>
          </View>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#F3882E",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                display_ad
              </Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(
                  data.domain.traffic.sources.display_ad.percent
                )}
                %
              </Text>
            </View>
          </View>
          <View style={styles.flex_channel}>
            <View style={styles.txt_flex}>
              <Text
                style={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50px",
                  backgroundColor: "#0184FF",
                }}
              ></Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>mail</Text>
            </View>

            <View style={styles.txt_flex}>
              <Text style={{ fontSize: "11px" }}>
                {abbreviateNumber(data.domain.traffic.sources.mail.percent)}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
