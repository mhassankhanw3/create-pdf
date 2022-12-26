import data from "../data.json";
import { useState, useEffect } from "react";
import CountriesData from "../country";
import { Button, Space } from "antd";
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
  const getccode = (country) => {
    let ccode = CountriesData.find((e) => e.location_name === country);

    return ccode;
  };

  //   console.log(data);
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#e5e7eb",
      padding: 8,
    },
    flex_cards: {
      marginTop: 10,
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
      marginTop: 32,
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
      marginBottom: 4,
    },
    rank_flex: {
      marginTop: -178,
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
      marginTop: 28,
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
      width: "100%",
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
    nord_link_text: {
      fontSize: 12,
    },
    nord_link_view: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 4,
      marginTop: 6,
      marginBottom: 2,
      padding: 24,
      border: "0.7px",
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
      marginTop: 16,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    network_one: {
      width: "49.5%",
    },
    network_bg_color: {
      marginTop: 10,
      backgroundColor: "white",
      padding: 16,
    },
    network_text_flex: {
      marginBottom: 7,
      marginTop: 7,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
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
    social_color_one: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: 84,
      marginTop: 3,
    },
    social_color_one_text: {
      color: "#2563eb",
      fontSize: 12,
    },
    social_color_two: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: 5,
      marginTop: 3,
    },
    social_color_three: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: 3,
      marginTop: 3,
    },
    social_color_four: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: 1.2,
      marginTop: 3,
    },
    social_color_five: {
      backgroundColor: "#2563eb",
      width: "100%",
      height: 0.8,
      marginTop: 3,
    },
    social_border_color: {
      border: "0.6px",
      // borderColor: '#3f3f46',
    },
    social_head_text: {
      marginTop: 20,
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
      fontSize: 12,
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
      padding: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    keyword_link_text_one: {
      fontSize: 12,
      width: "60%",
      color: "#2563eb",
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
      height: 0.3,
      backgroundColor: "#6b7280",
      width: "100%",
    },
  });
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
            </View>
          )}
        </Page>
        <Page style={styles.page}>
          <View style={styles.nord}>
            <View style={styles.nord_two}>
              <Text>nordvpn.com Competitors</Text>
              <View style={styles.nord_two_bgwhite}>
                <View style={styles.site_text_flex}>
                  <Text style={styles.vpn_text}>Site</Text>
                  <Text style={styles.vpn_text}>Category rank</Text>
                </View>
                {data.domain.sites.similar_sites.map((y) => (
                  <View style={styles.nord_link_view}>
                    <Text style={styles.nord_link_text}>{y.site}</Text>
                    <Text style={styles.nord_no_text}># {y.rank}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Page>
        <Page style={styles.page}>
          <View style={styles.nord_one}>
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
          </View>
          <View style={styles.market_main}>
            <Text>nordvpn.com Top Marketing Channels</Text>
            <View style={styles.market}>
              <View style={styles.market_flex}>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text}>
                    {data.domain.traffic.sources.direct.percent}%
                  </Text>
                  <Text style={styles.bg_blue}></Text>
                </View>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text_two}>
                    {data.domain.traffic.sources.search_organic.percent}%
                  </Text>
                  <Text style={styles.bg_blue_two}></Text>
                </View>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text_three}>
                    {data.domain.traffic.sources.search_ad.percent}%
                  </Text>
                  <Text style={styles.bg_blue_three}></Text>
                </View>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text_four}>
                    {data.domain.traffic.sources.referring.percent}%
                  </Text>
                  <Text style={styles.bg_blue_four}></Text>
                </View>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text_five}>
                    {data.domain.traffic.sources.social.percent}%
                  </Text>
                  <Text style={styles.bg_blue_five}></Text>
                </View>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text_six}>
                    {data.domain.traffic.sources.display_ad.percent}%
                  </Text>
                  <Text style={styles.bg_blue_six}></Text>
                </View>
                <View style={styles.main_color_bg}>
                  <Text style={styles.bg_blue_text_seven}>
                    {data.domain.traffic.sources.mail.percent}%
                  </Text>
                  <Text style={styles.bg_blue_seven}></Text>
                </View>
              </View>
              <Text style={styles.border_color}></Text>
              <View style={styles.market_flex_text}>
                <Text style={styles.market_main_text_one}>direct</Text>
                <Text style={styles.market_main_text_two}>seacrh_organic</Text>
                <Text style={styles.market_main_text}>seacrh_ad</Text>
                <Text style={styles.market_main_text}>referring</Text>
                <Text style={styles.market_main_text}>social</Text>
                <Text style={styles.market_main_text}>display_ad</Text>
                <Text style={styles.market_main_text}>mail</Text>
              </View>
            </View>
          </View>
          <View style={styles.network}>
            <View style={styles.network_one}>
              <Text>Top Ad Networks (1.7M)</Text>
              <View style={styles.network_bg_color}>
                {data.domain.traffic.sources.display_ad.top_ad_networks.map(
                  (to) => (
                    <View style={styles.network_text_flex}>
                      <Text style={styles.network_text_small}>
                        {to.site ? to.site : "none"}
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
                        {to.site ? to.site : "none"}
                      </Text>
                      <Text style={styles.network_text_small}>
                        {to.percent}%
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
          <View style={styles.network_one}>
            <Text>Top Keywords (5.7M)</Text>
            <View style={styles.network_bg_color}>
              {data.domain.traffic.sources.search_organic.top_keywords.map(
                (to) => (
                  <View style={styles.network_text_flex_two}>
                    <Text style={styles.network_text_small}>
                      {to.keyword ? to.keyword : "none"}
                    </Text>
                    <Text style={styles.network_text_small}>{to.percent}%</Text>
                  </View>
                )
              )}
            </View>
          </View>
          <View style={styles.social_head_text}>
            <Text>Top Socials (552.8K)</Text>
            <View style={styles.social}>
              <View style={styles.social_flex}>
                <View style={styles.social_block}>
                  <Text style={styles.social_color_one_text}>87.82%</Text>
                  <View style={styles.social_color_one}></View>
                </View>
                <View style={styles.social_block}>
                  <Text style={styles.social_color_one_text}>5.38%</Text>
                  <View style={styles.social_color_two}></View>
                </View>
                <View style={styles.social_block}>
                  <Text style={styles.social_color_one_text}>2.68%</Text>
                  <View style={styles.social_color_three}></View>
                </View>
                <View style={styles.social_block}>
                  <Text style={styles.social_color_one_text}>1.87%</Text>
                  <View style={styles.social_color_four}></View>
                </View>
                <View style={styles.social_block}>
                  <Text style={styles.social_color_one_text}>0.7%</Text>
                  <View style={styles.social_color_five}></View>
                </View>
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
          </View>
          <View style={styles.keyword}>
            <View style={styles.keyword_main}>
              <View style={styles.keyword_head}>
                <Text style={styles.keyword_head_text_one}>Keyword</Text>
                <Text style={styles.keyword_head_text_two}>Competetion</Text>
                <Text style={styles.keyword_head_text_three}>
                  High Bid - Low Bid
                </Text>
              </View>
              {data.keywords.map((sh) => (
                <View>
                  <View style={styles.border_bottom}></View>
                  <View style={styles.keyword_link}>
                    <Text style={styles.keyword_link_text_one}>Keyword</Text>
                    <Text style={styles.keyword_link_text_two}>
                      Competetion
                    </Text>
                    <Text style={styles.keyword_link_text_three}>
                      High Bid - Low Bid
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}

{
  /* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"></path></svg> */
}
