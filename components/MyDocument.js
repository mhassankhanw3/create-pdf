import data from "../data.json";
import { useState, useEffect } from "react";
import CountriesData from "../country";
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
  //   console.log(data);
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#e5e7eb",
      padding: 6,
    },
    flex_cards: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      width: "100%",
    },
    card: {
      backgroundColor: "white",
      padding: 12,
      width: "19%",
      maxWidth: "19%",
      marginRight: 4,
      marginTop: 4,
    },
    text: {
      fontWeight: "extrabold",
      fontSize: 13,
    },
    text_two: {
      fontSize: 11,
      marginTop: 4,
    },
    info: {
      marginTop: 16,
    },
    flex_info: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 7,
      marginBottom: 7,
    },
    main_info: {
      marginTop: 6,
      backgroundColor: "white",
      padding: 10,
    },
    info_text: {
      fontSize: 15,
    },
    info_text_two: {
      fontSize: 13,
      marginLeft: 6,
    },
    info_text_empl: {
      fontSize: 13,
    },
    rank: {
      marginTop: 16,
    },
    rank_flex: {
      marginTop: -150,
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    rank_flex_one: {
      width: "49.5%",
    },
    rank_bg_white: {
      backgroundColor: "white",
      padding: 14,
      height: "37%",
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
      marginTop: 18,
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
      marginTop: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nord_one_bg_white: {
      backgroundColor: "white",
      padding: 14,
      width: "49.5%",
    },
    nord_one_flex_Text: {
      display: "flex",
      alignItems: "center",
    },
    nord_one_flags: {
      display: "flex",
      alignItems: "center",
    },
    country_text: {
      fontSize: 12,
      color: "#6b7280",
    },
    percent_text: {
      color: "#16a34a",
    },
    value_text: {
      fontSize: 12,
    },
  });

  const getccode = (country) => {
    let ccode = CountriesData.find((e) => e.location_name === country);

    return ccode;
  };

  //   let a = Math.round(data.domain.traffic.countries.map((last) => (
  //     <Text>{last.value}</Text>
  //   )))
  return (
    <>
      <Document>
        <Page style={styles.page}>
          {isloading ? (
            "Loading"
          ) : (
            <View>
              <View style={styles.flex_cards}>
                <View style={styles.card}>
                  <Text style={styles.text}>Total Ads</Text>
                  <Text style={styles.text_two}>
                    {data.domain_index.ads_desktop}
                  </Text>
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
              <Text style={styles.info}>Company Info:</Text>
              <View style={styles.main_info}>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Company Name:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain_index.domain}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Company:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.site_description}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Description:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.location_company}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Country:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.headquarters.country}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>City:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.headquarters.city}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Employees:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.employees.employees_min}-
                  </Text>
                  <Text style={styles.info_text_empl}>
                    {data.domain.employees.employees_max}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Category Rank:</Text>
                  <Text style={styles.info_text_two}>
                    {data.domain.category_rank.rank}
                  </Text>
                </View>
                <View style={styles.flex_info}>
                  <Text style={styles.info_text}>Annual Revenue:</Text>
                  <Text style={styles.info_text_two}>15M-25M</Text>
                </View>
              </View>
              <View style={styles.rank_flex}>
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
              </View>
              <View style={styles.nord}>
                <View style={styles.nord_one}>
                  <Text>Top Countries</Text>
                  <View style={styles.nord_one_bg_white}>
                    <Text style={styles.nord_one_flex_Text}>
                      {
                        <View>
                          {data.domain.traffic.countries.map((x) => {
                            return (
                              <View>
                                {getccode(x.country)?.country_iso_code && (
                                  <Image
                                    src={`https://flagcdn.com/w20/${getccode(
                                      x.country
                                    )?.country_iso_code.toLowerCase()}.png`}
                                  />
                                )}
                              </View>
                            );
                          })}
                        </View>
                      }
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Page>
      </Document>
    </>
  );
}

{
  /* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"></path></svg> */
}
