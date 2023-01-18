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

export default function Allkeyword() {
  const styles = StyleSheet.create({
    keyword_main: {
      borderRadius: "15px",
      margin: "8px auto",
      border: "1px",
      borderColor: "#E8E8E8",
      // backgroundColor: "#f3f4f6",
      backgroundColor: "white",
    },
    keyword_head: {
      padding: "24px 24px",
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
      padding: "15px 24px",
      display: "flex",
      // borderRadius: "15px",
      flexDirection: "row",
      alignItems: "center",
    },
    keyword_link_text_one: {
      fontSize: "12px",
      width: "60%",
      color: "blue",
    },
    keyword_link_text_two: {
      fontSize: "12px",
      width: "20%",
    },
    keyword_link_text_three: {
      fontSize: 11,
      width: "20%",
    },
  });
  return (
    <>
      <View>
        <View style={styles.keyword_main}>
          <View style={styles.keyword_head}>
            <Text style={styles.keyword_head_text_one}>Keyword</Text>
            <Text style={styles.keyword_head_text_two}>Competetion</Text>
            <Text style={styles.keyword_head_text_three}>Bid Range</Text>
          </View>
          {data.keywords.map((to) => (
            <View key={to._id}>
              <View style={styles.border_bottom}></View>
              <View style={styles.keyword_link}>
                <Text style={styles.keyword_link_text_one}>{to.keyword}</Text>
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
      </View>
    </>
  );
}
