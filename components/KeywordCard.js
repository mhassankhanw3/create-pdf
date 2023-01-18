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
import { useState, useEffect } from "react";
import CountriesData from "../country";
import ads from "../ads.json";
export default function KeywordCard() {
  const styles = StyleSheet.create({
    main_info: {
      marginBottom: 6,
      marginTop: 6,
      backgroundColor: "white",
      padding: 20,
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
    },
    domain_text_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    domain_text_flex_text: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    flex_cards: {
      marginTop: "16px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      // border: '1px',
      width: "100%",
    },
    card: {
      backgroundColor: "white",
      // padding: 10,
      // width: "20%",
      // maxWidth: "26%",
      marginRight: 4,
      marginTop: 4,
      // border: '1px',
    },
    text: {
      fontWeight: 900,
      fontSize: 10,
      color: "#374151",
    },
    text_two: {
      fontSize: 18,
      marginTop: 7,
    },
    yellowBtn: {
      backgroundColor: "yellow",
      padding: "4px 5px",
      color: "black",
      fontSize: "9px",
      marginLeft: "6px",
    },
    text_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "cemter",
    },
  });
  let result =
    ads.index.ads_android +
    ads.index.ads_macos +
    ads.index.ads_ios +
    ads.index.ads_windows +
    ads.index.ads_desktop +
    ads.index.ads_mobile;
  return (
    <>
      <View style={styles.main_info}>
        <View style={styles.domain_text_flex}>
          <View style={styles.domain_text_flex_text}>
            <View style={styles.text_flex}>
              <Text style={{ fontSize: "14px" }}>Keyword:</Text>
              <Text style={{ marginLeft: "7px", fontSize: "14px" }}>
                {ads.index.keyword}
              </Text>
            </View>
            <Text style={styles.yellowBtn}>This Keyword is new to us</Text>
          </View>
          <View style={styles.domain_text_flex_text}>
            <Text style={{ fontSize: "14px" }}>Country:</Text>
            <Image
              style={{ width: "14px", marginLeft: "4px" }}
              src="https://flagcdn.com/w20/fr.png"
            />
          </View>
        </View>
        <View style={styles.flex_cards}>
          <View style={styles.card}>
            <Text style={styles.text}>Total Ads</Text>
            <Text style={styles.text_two}>{result}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Android Ads</Text>
            <Text style={styles.text_two}>{ads.index.ads_android}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>MacOS Ads</Text>
            <Text style={styles.text_two}>{ads.index.ads_macos}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>IOS Ads</Text>
            <Text style={styles.text_two}>{ads.index.ads_ios}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Window Ads</Text>
            <Text style={styles.text_two}>{ads.index.ads_windows}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Desktop Ads</Text>
            <Text style={styles.text_two}>{ads.index.ads_desktop}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Mobile Ads</Text>
            <Text style={styles.text_two}>{ads.index.ads_mobile}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
