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
import GeneratorTwo from "./GeneratorTwo";
import { Button, Space, Progress } from "antd";
import CardTwo from "./CardTwo";
import Ranks from "./Ranks";
import EngagementCards from "./EngagementCards";
import Nord from "./Nord";
import OtherWeb from "./OtherWeb";
import Compeitors from "./Compeitors";
export default function MyDocument({ code }) {
  const [jsonData, setJsonData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    mainData(data);
    console.log(jsonData);
  }, [jsonData]);
  const mainData = async (data) => {
    setIsLoading(true);
    setJsonData(data);
    setIsLoading(false);
  };
  const getccode = (country) => {
    let ccode = CountriesData.find((e) => e.location_name === country);
    return ccode;
  };

  const range = (data) => {
    let percentage = data + "%";
    return percentage;
  };
  const lastRange = (lRange) => {
    let percentageRange = lRange + "px";
    return percentageRange;
  };
  const adsData = (ads) => {
    let totalads = ads;
    return adsData;
  };
  const styles = StyleSheet.create({
    page: {
      // backgroundColor: "#e5e7eb",
      padding: 12,
      backgroundColor: "#F4F4F4",
    },
    page_keyword: {
      backgroundColor: "#e5e7eb",
      padding: 8,
    },
    domain_text_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      // border: '1px'
    },
    domain_text_flex_text: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    flex_cards: {
      marginTop: 13,
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
    info: {
      fontSize: 14,
      marginBottom: 14,
      // marginTop: 20,
    },
    flex_info: {
      display: "flex",
      flexDirection: "row",
      width: "445px",
      alignItems: "flex-start",
      marginTop: 5,
      marginBottom: 5,
    },
    main_info: {
      marginBottom: 6,
      marginTop: 6,
      backgroundColor: "white",
      padding: 20,
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
    },
    info_text: {
      fontSize: 11,
      color: "#565656",
    },
    info_text_two: {
      fontSize: 11,
      marginLeft: 8,
    },
    info_text_two_text: {
      fontSize: 11,
      marginLeft: 28,
    },
    info_text_empl: {
      fontSize: 11,
      marginLeft: 1,
    },
    rank: {
      marginBottom: 4,
    },
    rank_flex: {
      // border: '1px',
      marginTop: 16,
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    rank_flex_one: {
      width: "49.5%",
      marginLeft: 3,
      marginRight: 3,
    },
    rank_bg_white: {
      backgroundColor: "white",
      padding: 14,
      // height: "37%",
      //   marginLeft: 3,
      //   marginRight: 3,
      //   marginTop: 6,
    },
    flex_colors: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    block_colors: {
      display: "block",
      width: "25%",
      textAlign: "center",
      marginLeft: 7,
      marginRight: 7,
    },
    color_one: {
      width: "100%",
      height: 64,
      backgroundColor: "#8b5cf6",
    },
    colors_text: {
      fontSize: 12,
    },
    color_two: {
      width: "100%",
      height: 68,
      backgroundColor: "#8b5cf6",
    },
    color_three: {
      width: "100%",
      height: 72,
      backgroundColor: "#8b5cf6",
    },
    border: {
      backgroundColor: "black",
      height: 1,
      width: "100%",
    },
    text_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "88%",
      margin: "auto",
      // marginLeft: 36,
      textAlign: "center",
      justifyContent: "center",
    },
    text_flex_text: {
      fontSize: 10,
      color: "#6b7280",
      width: "28%",
    },
    text_flex_text_two: {
      fontSize: 10,
      color: "#6b7280",
      marginLeft: 16,
      marginRight: 16,
      width: "28%",
    },
    traffic: {
      marginTop: 20,
    },
    traffic_heading_text: {
      fontWeight: "bold",
    },
    traffic_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    traffic_text_light: {
      fontSize: 10,
      color: "#6b7280",
    },
    traffic_flex_one: {
      marginTop: 6,
      backgroundColor: "white",
      padding: 15,
      width: "24%",
    },
    traffic_text_meters: {
      fontSize: 26,
      marginTop: 8,
    },
    nord: {
      width: "100%",
      marginTop: 10,
    },
    nord_one: {
      width: "100%",
      marginTop: 16,
    },
    nord_one_bg_white: {
      backgroundColor: "white",
      padding: 14,
      width: "48%",
      marginTop: 8,
    },
    nord_one_flex_Text: {
      display: "flex",
      alignItems: "center",
    },
    nord_one_flags: {
      display: "flex",
      alignItems: "center",
    },
    nord_country_text: {
      fontSize: 12,
      color: "#71717a",
    },
    nord_text_value: {
      fontSize: 12,
      marginTop: 10,
      marginLeft: 28,
    },
    nord_percent_text: {
      fontSize: 12,
      marginLeft: 4,
      color: "#166534",
      fontWeight: "400px",
    },
    nord_flex: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 14,
    },
    nord_text_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 4,
    },
    flag_img: {
      width: 18,
      height: 13,
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
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    vpn_text: {
      fontSize: 14,
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
    market_main: {
      marginTop: 16,
    },
    market: {
      marginTop: 10,
      backgroundColor: "white",
      padding: 14,
      paddingTop: 50,
      paddingBottom: 30,
    },
    market_flex: {
      width: "97%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      margin: "auto",
    },
    main_color_bg: {
      width: "13%",
      marginRight: 3,
      textAlign: "center",
    },
    bg_blue: {
      backgroundColor: "#1d4ed8",
      padding: "37px",
      // width: '2%',
      // marginRight: 2,
    },
    bg_blue_text: {
      color: "#1d4ed8",
      fontSize: 14,
    },
    bg_blue_two: {
      backgroundColor: "#f97316",
      padding: "34px",
      height: 52,
    },
    bg_blue_text_two: {
      color: "#f97316",
      fontSize: 14,
    },
    bg_blue_three: {
      backgroundColor: "#16a34a",
      padding: "7px",
      height: 4,
    },
    bg_blue_text_three: {
      color: "#16a34a",
      fontSize: 14,
    },
    bg_blue_four: {
      backgroundColor: "#1d4ed8",
      padding: "4px",
    },
    bg_blue_text_four: {
      color: "#1d4ed8",
      fontSize: 14,
    },
    bg_blue_five: {
      backgroundColor: "#f97316",
      padding: "5px",
    },
    bg_blue_text_five: {
      fontSize: 14,
      color: "#f97316",
    },
    bg_blue_six: {
      backgroundColor: "black",
      padding: "12px",
    },
    bg_blue_text_six: {
      color: "black",
      fontSize: 14,
    },
    bg_blue_seven: {
      border: "0.3px",
      backgroundColor: "black",
    },
    border_color: {
      border: "0.5px",
    },
    market_flex_text: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    market_main_text: {
      // border: '1px',
      fontSize: 10,
      marginTop: 2,
      color: "#44403c",
      width: "13%",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    },
    market_main_text_one: {
      marginLeft: 30,
      fontSize: 10,
      color: "#44403c",
    },
    market_main_text_two: {
      marginLeft: 22,
      fontSize: 10,
      color: "#44403c",
    },
    network: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    network_one: {
      width: "49.5%",
      marginTop: 16,
    },
    network_one_last: {
      marginTop: 56,
    },
    network_bg_color: {
      marginTop: 10,
      backgroundColor: "white",
      padding: 16,
    },
    network_bg_color_last: {
      padding: 20,
      backgroundColor: "white",
      marginTop: 10,
    },
    network_text_flex: {
      marginBottom: 7,
      marginTop: 7,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    network_text_flex_last: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
      marginTop: 10,
    },
    network_text_flex_two: {
      marginBottom: 4.8,
      marginTop: 4.8,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    network_text_small: {
      fontSize: 11,
    },
    social: {
      marginTop: 16,
      backgroundColor: "white",
      paddingTop: 40,
      paddingLeft: 17,
      paddingRight: 17,
      paddingBottom: 26,
    },
    social_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      margin: "auto",
      width: "90%",
      justifyContent: "space-between",
    },
    social_block: {
      width: "14%",
      textAlign: "center",
    },
    social_color_one_text: {
      color: "#2563eb",
      fontSize: 12,
    },
    social_color_one: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: "100px",
      marginTop: 3,
    },
    social_color_two: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: "100px",
      marginTop: 3,
    },
    social_color_three: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: "100px",
      marginTop: 3,
    },
    social_color_four: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: "100px",
      marginTop: 3,
    },
    social_color_five: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: "100px",
      marginTop: 3,
    },
    social_border_color: {
      border: "0.6px",
      // borderColor: '#3f3f46',
    },
    social_head_text: {
      marginTop: 130,
    },
    social_last: {
      width: "90%",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    social_last_text: {
      fontSize: 9,
      width: "15%",
      textAlign: "center",
      color: "#374151",
    },
    keyword_main: {
      borderRadius: 4,
      marginTop: 16,
      backgroundColor: "#f3f4f6",
    },
    keyword_head: {
      padding: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    keyword_head_text_one: {
      fontSize: 12,
      width: "60%",
    },
    keyword_head_text_two: {
      width: "20%",
      fontSize: 12,
    },
    keyword_head_text_three: {
      width: "20%",
      fontSize: 12,
    },
    keyword_link: {
      backgroundColor: "white",
      padding: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    keyword_link_text_one: {
      fontSize: 14,
      width: "60%",
    },
    keyword_link_text_two: {
      fontSize: 11,
      width: "20%",
    },
    keyword_link_text_three: {
      fontSize: 11,
      width: "20%",
    },
    border_bottom: {
      height: 0.2,
      backgroundColor: "#6b7280",
      width: "100%",
    },
    channel: {
      marginTop: 176,
    },
    channel_bg: {
      backgroundColor: "white",
      padding: 20,
      paddingTop: 100,
      paddingBottom: 20,
      marginTop: 10,
    },
    channel_flex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      maxWidth: "96%",
      margin: "auto",
    },
    channel_block: {
      width: "14%",
      textAlign: "center",
      marginLeft: 6,
      marginRight: 6,
    },
    channel_Text_one: {
      color: "#2563eb",
      fontSize: 11,
    },
    channel_color_one: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: 100,
    },
    channel_Text_two: {
      color: "#f97316",
      fontSize: 11,
    },
    channel_color_two: {
      backgroundColor: "#f97316",
      width: "100%",
      height: 100,
    },
    channel_Text_three: {
      color: "#16a34a",
      fontSize: 11,
    },
    channel_color_three: {
      backgroundColor: "#16a34a",
      width: "100%",
      height: 100,
    },
    channel_Text_four: {
      color: "#1d4ed8",
      fontSize: 11,
    },
    channel_color_four: {
      backgroundColor: "#1d4ed8",
      width: "100%",
      height: 100,
    },
    channel_Text_five: {
      color: "#f97316",
      fontSize: 11,
    },
    channel_color_five: {
      backgroundColor: "#f97316",
      width: "100%",
      height: 100,
    },
    channel_Text_six: {
      color: "black",
      fontSize: 11,
    },
    channel_color_six: {
      backgroundColor: "black",
      width: "100%",
      height: 100,
    },
    channel_Text_seven: {
      color: "black",
      fontSize: 11,
    },
    channel_color_seven: {
      backgroundColor: "black",
      width: "100%",
      height: 100,
    },
    channel_border: {
      border: "0.4px",
      width: "100%",
      margin: "auto",
    },
    channel_last_text: {
      marginTop: 4,
      fontSize: 10,
      width: "14%",
      textAlign: "center",
      marginLeft: 4,
      marginRight: 4,
      color: "#374151",
    },
    channel_flex_text: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    other_flex: {
      width: "100%",
      // border: "1px",
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      // justifyContent: "space-between",
    },
    other: {
      marginTop: 16,
    },
    other_main: {
      padding: 8,
      marginTop: 60,
    },

    other_main_head_one: {
      fontSize: 14,
    },

    other_web: {
      width: "38%",
    },
    // #f3f4f6
    bubble_relative_one: {
      backgroundColor: "red",
      width: "22%",
      maxWidth: "100%",
      height: 110,
      borderRadius: 100,
      position: "relative",
      top: 400,
    },
    relative_text: {
      fontSize: 9,
    },
    relative_text_four: {
      fontSize: 9,
      color: "white",
    },
    relative_text_five: {
      fontSize: 8,
    },
    relative_one_one: {
      padding: 10,
      color: "white",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#2563eb",
      width: "17%",
      height: 95,
      borderRadius: 100,
      top: 0,
      left: -5,
    },
    relative_one_two: {
      padding: 8,
      color: "white",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "rgba(67, 107, 255, 1)",
      borderRadius: 100,
      top: 95,
      left: 25,
      width: "13%",
      height: 72,
    },
    relative_one_three: {
      padding: 2,
      color: "white",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "rgba(67, 107, 255, 0.79)",
      borderRadius: 100,
      top: 93,
      left: 105,
      width: "12%",
      height: 68,
    },
    relative_one_four: {
      padding: 12,
      color: "black",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#a5b4fc",
      borderRadius: 100,
      top: -18,
      left: 96,
      width: "13%",
      height: 72,
    },
    relative_one_five: {
      padding: 12,
      color: "black",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#a5b4fc",
      borderRadius: 100,
      top: 52,
      left: 90,
      width: "8%",
      height: 45,
    },
    //          <<<<========================>>>>          bubble two          <<<<==============================>>>>

    bubble_relative_two: {
      backgroundColor: "#f3f4f6",
      width: "20%",
      maxWidth: "100%",
      height: 110,
      borderRadius: 100,
      position: "relative",
      top: -10,
      right: 10,
    },
    relative_two_one: {
      padding: 10,
      color: "black",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#a5b4fc",
      width: "16%",
      height: 88,
      borderRadius: 100,
      top: 5,
      // left: 125,
      right: 75,
    },
    relative_two_two: {
      padding: 8,
      color: "white",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "rgba(67, 107, 255, 1)",
      borderRadius: 100,
      top: 95,
      right: 73,
      width: "13%",
      height: 72,
    },
    relative_two_three: {
      padding: 2,
      color: "white",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "rgba(67, 107, 255, 0.79)",
      borderRadius: 100,
      right: 0,
      top: 100,
      width: "12%",
      height: 68,
    },
    relative_two_four: {
      padding: 12,
      color: "black",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#2563eb",
      borderRadius: 100,
      right: 0,
      top: -20,
      width: "12%",
      height: 67,
    },
    relative_two_five: {
      fontSize: 8,
      padding: 12,
      color: "black",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#a5b4fc",
      borderRadius: 100,
      top: 50,
      right: 28,
      width: "9%",
      height: 50,
    },
    other_second_text: {
      fontSize: 13,
      marginTop: -150,
      marginLeft: 280,
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
  let result =
    data.domain_index.ads_android +
    data.domain_index.ads_macos +
    data.domain_index.ads_ios +
    data.domain_index.ads_windows +
    data.domain_index.ads_desktop +
    data.domain_index.ads_mobile;
  return (
    <>
      <Document>
        <Page style={styles.page}>
          {isloading ? (
            "Loading"
          ) : (
            <View>
              <View style={styles.main_info}>
                <View style={styles.domain_text_flex}>
                  <View style={styles.domain_text_flex_text}>
                    <Text style={{ fontSize: "14px" }}>Domain:</Text>
                    <Text style={{ marginLeft: "7px", fontSize: "16px" }}>
                      {data.domain.site_url}
                    </Text>
                  </View>
                  <View style={styles.domain_text_flex_text}>
                    <Text style={{ fontSize: "14px" }}>Country:</Text>
                    <Text style={{ marginLeft: "7px", fontSize: "16px" }}>
                      {data.domain.headquarters.country}
                    </Text>
                  </View>
                </View>
                <View style={styles.flex_cards}>
                  <View style={styles.card}>
                    <Text style={styles.text}>Total Ads</Text>
                    <Text style={styles.text_two}>{result}</Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.text}>Android Ads</Text>
                    <Text style={styles.text_two}>
                      {data.domain_index.ads_android}
                    </Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.text}>MacOS Ads</Text>
                    <Text style={styles.text_two}>
                      {data.domain_index.ads_macos}
                    </Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.text}>IOS Ads</Text>
                    <Text style={styles.text_two}>
                      {data.domain_index.ads_ios}
                    </Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.text}>Window Ads</Text>
                    <Text style={styles.text_two}>
                      {data.domain_index.ads_windows}
                    </Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.text}>Desktop Ads</Text>
                    <Text style={styles.text_two}>
                      {data.domain_index.ads_desktop}
                    </Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.text}>Mobile Ads</Text>
                    <Text style={styles.text_two}>
                      {data.domain_index.ads_mobile}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.main_info}>
                <Text style={styles.info}>Company Info</Text>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Company Name:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain_index.domain}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Company Description:</Text>
                  <Text style={styles.info_text_two_text}>
                    {data.domain.site_description}
                  </Text>
                </View>
                {/* <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Description:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.location_company}
                  </Text>
                </View> */}

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>Country:</Text>
                      <Text style={styles.info_text_two}>
                        {data.domain.headquarters.country}
                      </Text>
                    </View>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>Employees:</Text>
                      <Text style={styles.info_text_two}>
                        {data.domain.employees.employees_min} -
                      </Text>
                      <Text style={styles.info_text_empl}>
                        {data.domain.employees.employees_max}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>City:</Text>
                      <Text style={styles.info_text_two}>
                        {data.domain.headquarters.city}
                      </Text>
                    </View>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>Annual Revenue:</Text>
                      <Text style={styles.info_text_two}>15M - 25M</Text>
                    </View>
                  </View>
                </View>
              </View>
              <CardTwo />
              <Ranks />
              <EngagementCards />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <Nord />
                <OtherWeb />
              </View>


              <View style={styles.other_main}>
                <Text style={styles.other_main_head_one}>Top Categories</Text>
                <View style={styles.other_flex}>
                  <View style={styles.bubble_relative_one}></View>
                  <View style={styles.relative_one_one}>
                    <Text style={styles.relative_text}>
                      Other Computers Electronics and Technology
                    </Text>
                  </View>
                  <View style={styles.relative_one_two}>
                    <Text style={styles.relative_text}>
                      TV Movies and Stream...
                    </Text>
                  </View>
                  <View style={styles.relative_one_three}>
                    <Text style={styles.relative_text}>
                      Programming and Deve...
                    </Text>
                  </View>
                  <View style={styles.relative_one_four}>
                    <Text style={styles.relative_text}>
                      Video Games Consoles...
                    </Text>
                  </View>
                  <View style={styles.relative_one_five}>
                    <Text style={styles.relative_text}>Adult</Text>
                  </View>

                  <Text style={styles.other_second_text}>Top Topics</Text>
                  <View style={styles.bubble_relative_two}></View>
                  <View style={styles.relative_two_one}>
                    <Text style={styles.relative_text}>news</Text>
                  </View>
                  <View style={styles.relative_two_two}>
                    <Text style={styles.relative_text}>online</Text>
                  </View>
                  <View style={styles.relative_two_three}>
                    <Text style={styles.relative_text}>games</Text>
                  </View>
                  <View style={styles.relative_two_four}>
                    <Text style={styles.relative_text_four}>software</Text>
                  </View>
                  <View style={styles.relative_two_five}>
                    <Text style={styles.relative_text_five}>shopping</Text>
                  </View>
                </View>
              </View>
              {/* <View style={styles.rank_flex}>
                <View style={styles.rank_flex_one}>
                  <Text style={styles.rank}>Ranks:</Text>
                  <View style={styles.rank_bg_white}>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>Global Rank:</Text>
                      <Text style={styles.info_text_two}>
                        #{data.domain.global_rank.rank}
                      </Text>
                    </View>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>Country Rank:</Text>
                      <Text style={styles.info_text_two}>
                        #{data.domain.country_rank.rank}
                      </Text>
                    </View>
                    <View style={styles.flex_info}>
                      <Text style={styles.info_text}>Category Rank:</Text>
                      <Text style={styles.info_text_two}>
                        #{data.domain.category_rank.rank}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rank_flex_one}>
                  <Text>Total Visits Last 3 Months:</Text>
                  <View style={styles.rank_bg_white}>
                    <View style={styles.flex_colors}>
                      <View style={styles.block_colors}>
                        <Text style={styles.colors_text}>13.5M</Text>
                        <Text style={styles.color_one}></Text>
                      </View>
                      <View style={styles.block_colors}>
                        <Text style={styles.colors_text}>14.1M</Text>
                        <Text style={styles.color_two}></Text>
                      </View>
                      <View style={styles.block_colors}>
                        <Text style={styles.colors_text}>14.9M</Text>
                        <Text style={styles.color_three}></Text>
                      </View>
                    </View>
                    <Text style={styles.border}></Text>
                    <View style={styles.text_flex}>
                      <Text style={styles.text_flex_text}>July</Text>
                      <Text style={styles.text_flex_text_two}>August</Text>
                      <Text style={styles.text_flex_text}>September</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.traffic}>
                <Text style={styles.traffic_heading_text}>
                  Traffic & Engagement Last Month
                </Text>
                <View style={styles.traffic_flex}>
                  <View style={styles.traffic_flex_one}>
                    <Text style={styles.traffic_text_light}>Total Visits</Text>
                    <Text style={styles.traffic_text_meters}>14.9M</Text>
                  </View>
                  <View style={styles.traffic_flex_one}>
                    <Text style={styles.traffic_text_light}>
                      Page Views Avg.
                    </Text>
                    <Text style={styles.traffic_text_meters}>2.06</Text>
                  </View>
                  <View style={styles.traffic_flex_one}>
                    <Text style={styles.traffic_text_light}>
                      Time On Site Avg.
                    </Text>
                    <Text style={styles.traffic_text_meters}>00:01:46</Text>
                  </View>
                  <View style={styles.traffic_flex_one}>
                    <Text style={styles.traffic_text_light}>Bounce Rate</Text>
                    <Text style={styles.traffic_text_meters}>57.07%</Text>
                  </View>
                </View>
              </View> */}
            </View>
          )}
        </Page>
        <Compeitors />
        <Page style={styles.page_keyword}>
          {/* <View style={styles.nord_one}>
            <Text>Top Countries</Text>
            <View style={styles.nord_one_bg_white}>
              <View>
                {data.domain.traffic.countries.map((x) => {
                  return (
                    <View>
                      <View style={styles.nord_flex}>
                        {getccode(x.country)?.country_iso_code && (
                          <Image
                            style={styles.flag_img}
                            src={`https://flagcdn.com/w20/${getccode(
                              x.country
                            )?.country_iso_code.toLowerCase()}.png`}
                          />
                        )}
                        <View style={styles.nord_text_flex}>
                          <Text style={styles.nord_country_text}>
                            {x.country}
                          </Text>
                          <Text style={styles.nord_percent_text}>
                            ~ {x.percent}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.nord_text_value}>7.2M</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View> */}

          {/* <View style={styles.channel}>
            <Text>nordvpn.com Top Marketing Channels</Text>
            <View style={styles.channel_bg}>
              <View style={styles.channel_flex}>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_one}>
                    {data.domain.traffic.sources.direct.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#2563eb",
                      width: "100%",
                      height: range(data.domain.traffic.sources.direct.percent),
                    }}
                  ></View>
                </View>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_two}>
                    {data.domain.traffic.sources.search_organic.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#f97316",
                      width: "100%",
                      height: range(
                        data.domain.traffic.sources.search_organic.percent
                      ),
                    }}
                  ></View>
                </View>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_three}>
                    {data.domain.traffic.sources.search_ad.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#16a34a",
                      width: "100%",
                      height: range(
                        data.domain.traffic.sources.search_ad.percent
                      ),
                    }}
                  ></View>
                </View>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_four}>
                    {data.domain.traffic.sources.referring.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#1d4ed8",
                      width: "100%",
                      height: range(
                        data.domain.traffic.sources.referring.percent
                      ),
                    }}
                  ></View>
                </View>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_five}>
                    {data.domain.traffic.sources.social.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#f97316",
                      width: "100%",
                      height: range(data.domain.traffic.sources.social.percent),
                    }}
                  ></View>
                </View>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_six}>
                    {data.domain.traffic.sources.display_ad.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "black",
                      width: "100%",
                      height: range(
                        data.domain.traffic.sources.display_ad.percent
                      ),
                    }}
                  ></View>
                </View>
                <View style={styles.channel_block}>
                  <Text style={styles.channel_Text_seven}>
                    {data.domain.traffic.sources.mail.percent}%
                  </Text>
                  <View
                    style={{
                      backgroundColor: "black",
                      width: "100%",
                      height: range(data.domain.traffic.sources.mail.percent),
                    }}
                  ></View>
                </View>
              </View>
              <Text style={styles.channel_border}></Text>
              <View style={styles.channel_flex_text}>
                <Text style={styles.channel_last_text}>direct</Text>
                <Text style={styles.channel_last_text}>search_organic</Text>
                <Text style={styles.channel_last_text}>search_ad</Text>
                <Text style={styles.channel_last_text}>referring</Text>
                <Text style={styles.channel_last_text}>social</Text>
                <Text style={styles.channel_last_text}>display_ad</Text>
                <Text style={styles.channel_last_text}>mail</Text>
              </View>
            </View>
          </View> */}
          {/* <View style={styles.network}>
            <View style={styles.network_one}>
              <Text>Top Ad Networks (1.7M)</Text>
              <View style={styles.network_bg_color}>
                {data.domain.traffic.sources.display_ad.top_ad_networks.map(
                  (to) => (
                    <View style={styles.network_text_flex}>
                      <Text style={styles.network_text_small}>
                        <Link
                          style={styles.link_text}
                          href={to.site}
                          src={`https://www.${to.site}`}
                        >
                          <Text>{to.site ? to.site : "none"}</Text>
                        </Link>
                      </Text>
                      <Text style={styles.network_text_small}>
                        {to.percent}%
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
            <View style={styles.network_one}>
              <Text>Top Referral Traffic (479.4K)</Text>
              <View style={styles.network_bg_color}>
                {data.domain.traffic.sources.referring.top_referring.map(
                  (to) => (
                    <View style={styles.network_text_flex_two}>
                      <Text style={styles.network_text_small}>
                        <Link
                          style={styles.link_text}
                          href={to.site}
                          src={`https://www.${to.site}`}
                        >
                          <Text>{to.site ? to.site : "none"}</Text>
                        </Link>
                      </Text>
                      <Text style={styles.network_text_small}>
                        {to.percent}%
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </View> */}
          {/* <View style={styles.other_web}>
            <Text style={styles.other_main_head}>Other Visited Websites</Text>
            <View style={styles.other_bg}>
              {data.domain.audience.other_visited_websites.map((i) => (
                <Text style={styles.other_text}>
                  <Link
                    style={styles.link_text}
                    href={i}
                    src={`https://www.${i}`}
                  >
                    <Text>{i}</Text>
                  </Link>
                </Text>
              ))}
            </View>
          </View> */}
          {/* <View style={styles.network_one_last}>
            <Text>Top Keywords (5.7M)</Text>
            <View style={styles.network_bg_color_last}>
              {data.domain.traffic.sources.search_organic.top_keywords.map(
                (to) => (
                  <View style={styles.network_text_flex_last}>
                    <Text style={styles.network_text_small}>
                      {to.keyword ? to.keyword : "none"}
                    </Text>
                    <Text style={styles.network_text_small}>{to.percent}%</Text>
                  </View>
                )
              )}
            </View>
          </View> */}
          {/* <View style={styles.social_head_text}>
            <Text>Top Socials (552.8K)</Text>
            <View style={styles.social}>
              <View style={styles.social_flex}>
                {data.domain.traffic.sources.social.top_socials.map((i) => (
                  <View style={styles.social_block}>
                    <Text style={styles.social_color_one_text}>
                      {i.percent} %
                    </Text>
                    <View
                      style={{
                        backgroundColor: "#2563eb",
                        width: "100%",
                        height: `${lastRange(i.percent)}`,
                      }}
                    ></View>
                  </View>
                ))}
              </View>
              <Text style={styles.social_border_color}></Text>
              <View style={styles.social_last}>
                <Text style={styles.social_last_text}>Youtube</Text>
                <Text style={styles.social_last_text}>Reddit</Text>
                <Text style={styles.social_last_text}>Facebook</Text>
                <Text style={styles.social_last_text}>Twitter</Text>
                <Text style={styles.social_last_text}>WhatsApp Webapp</Text>
              </View>
            </View>
          </View> */}
          {/* <View style={styles.keyword}>
            <View style={styles.keyword_main}>
              <View style={styles.keyword_head}>
                <Text style={styles.keyword_head_text_one}>Keyword</Text>
                <Text style={styles.keyword_head_text_two}>Competetion</Text>
                <Text style={styles.keyword_head_text_three}>
                  High Bid - Low Bid
                </Text>
              </View>
              {data.keywords.map((to) => (
                <View key={to._id}>
                  <View style={styles.border_bottom}></View>
                  <View style={styles.keyword_link}>
                    <Text style={styles.keyword_link_text_one}>
                      {to.keyword}
                    </Text>
                    <Text style={styles.keyword_link_text_two}>
                      <Text>{to.competition} - </Text>
                      <Text> {to.competition_index}</Text>
                    </Text>
                    <Text style={styles.keyword_link_text_three}>
                      <Text>${to.high_top_of_page_bid} - </Text>
                      <Text> ${to.low_top_of_page_bid}</Text>
                    </Text>
                  </View>
                  <View style={styles.border_bottom}></View>
                </View>
              ))}
            </View>
          </View> */}
        </Page>
      </Document>
    </>
  );
}

{
  /* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"></path></svg> */
}
