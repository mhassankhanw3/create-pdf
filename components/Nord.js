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

export default function Nord() {
  const getccode = (country) => {
    let ccode = CountriesData.find((e) => e.location_name === country);
    return ccode;
  };
  const styles = StyleSheet.create({
    nord: {
      //   maxWidth: "100%",
      width: "55%",
      borderRadius: "15px",
      backgroundColor: "white",
      border: "1px",
      borderColor: "#E8E8E8",
      // border: "1px",
    },
    border: {
      width: "100%",
      height: "1px",
      //   borderColor: "#E8E8E8",
      backgroundColor: "#E8E8E8",
    },
    border_list: {
      margin: "0px auto",
      width: "93%",
      height: "0.7px",
      backgroundColor: "#E8E8E8",
    },
    nord_flex: {
      width: "100%",
      //   border: "1px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "16px",
      // justifyContent:
    },
    nord_country: {
      width: "50%",
      color: "#565656",
      fontSize: "11px",
    },
    nord_traffic: {
      color: "#565656",
      width: "25%",
      fontSize: "11px",
    },
    nord_change: {
      color: "#565656",
      width: "25%",
      fontSize: "11px",
    },
    nord_country_text: {
      fontSize: "12px",
      marginLeft: "6px",
    },
    nord_percent_text: {
      //   border: "1px",
      width: "25%",
      fontSize: "11px",
      color: "#16812E",
    },
    nord_traffic_text: {
      //   border: "1px",
      fontSize: "11px",
      width: "25%",
    },
    nord_key_flex: {
      //   border: "1px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "16px",
    },
    // nord_flex_flag: {
    //   border: "1px",
    //   display: "flex",
    //   flexDirection: "row",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   width: "50%",
    // },
    nord_country_flag: {
      //   border: "1px",
      width: "50%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      //   justifyContent: "center",
    },
  });
  return (
    <>
      <View style={styles.nord}>
        <View style={styles.nord_flex}>
          <View style={styles.nord_country}>
            <Text>Country</Text>
          </View>
          <View style={styles.nord_traffic}>
            <Text>Traffic</Text>
          </View>
          <View style={styles.nord_change}>
            <Text>Change</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View>
          {data.domain.traffic.countries.map((x) => {
            return (
              <View>
                <View style={styles.nord_key_flex}>
                  <View style={styles.nord_country_flag}>
                    {getccode(x.country)?.country_iso_code && (
                      <Image
                        style={{ width: "15px" }}
                        src={`https://flagcdn.com/w20/${getccode(
                          x.country
                        )?.country_iso_code.toLowerCase()}.png`}
                      />
                    )}
                    <View style={styles.nord_country_text}>
                      <Text>{x.country}</Text>
                    </View>
                  </View>
                  <View style={styles.nord_traffic_text}>
                    <Text>{abbreviateNumber(x.value)}</Text>
                  </View>
                  <View style={styles.nord_percent_text}>
                    <Text>~ {x.percent}%</Text>
                  </View>
                </View>
                <View style={styles.border_list}></View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}
