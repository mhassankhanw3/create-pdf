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
import data from "../data.json";
import Arrow from "./arrow";
import {
  abbreviateNumber,
  abbreviateNumberNew,
} from "../src/functions/Sanitizer";
import totalvisitsImgcar from "../public/images/totalvisitsImgcar.png";
import Head from "next/head";
export default function AllVisits() {
  const styles = StyleSheet.create({
    main_rank: {
      margin: "30px 0px 10px 0px",
      backgroundColor: "white",
      padding: "18px 24px",
      borderRadius: "15px",
      border: "1px",
      borderColor: "#E8E8E8",
      width: "100%",
    },
    traffic_flex: {
      // border: "1px",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px auto 0px auto",
      width: "100%",
    },
    card_one: {
      margin: "10px 10px",
      backgroundColor: "#dbeafe",
      border: "1px",
      borderColor: "#dbeafe",
      height: "160px",
      width: "240px",
      padding: "24px",
      borderRadius: "15px",
    },
    img_bg: {
      width: "35px",
      height: "35px",
      borderRadius: "50px",
      border: "1px",
      borderColor: "#E4F2FF",
      backgroundColor: "#E4F2FF",
      // display: "flex",
      // flexDirection: "row",
      // alignItems: "center",
      // justifyContent: "center",
    },
    card_text: {
      color: "#949494",
      fontSize: "14px",
    },
    card_rank_text: {
      fontSize: "14px",
      marginTop: "8px",
    },
    card_two: {
      margin: "10px 10px",
      backgroundColor: "#fce7f3",
      border: "1px",
      borderColor: "#E8E8E8",
      height: "160px",
      width: "240px",
      padding: "24px",
      borderRadius: "15px",
    },
    card_three: {
      margin: "10px 10px",
      backgroundColor: "#f3e8ff",
      border: "1px",
      borderColor: "#E8E8E8",
      height: "160px",
      width: "240px",
      padding: "24px",
      borderRadius: "15px",
    },
    card_four: {
      margin: "10px 10px",
      backgroundColor: "#dbeafe",
      border: "1px",
      borderColor: "#E8E8E8",
      height: "160px",
      width: "240px",
      padding: "24px",
      borderRadius: "15px",
    },
    img_bg_two: {
      width: "35px",
      height: "35px",
      borderRadius: "50px",
      // backgroundColor: "#FFF2E9",
      // display: "flex",
      // flexDirection: "row",
      // alignItems: "center",
      // justifyContent: "center",
    },
    img_bg_three: {
      width: "35px",
      height: "35px",
      borderRadius: "50px",
      // backgroundColor: "#EDE9FF",
      // display: "flex",
      // flexDirection: "row",
      // alignItems: "center",
      // justifyContent: "center",
    },
    img_bg_four: {
      width: "35px",
      height: "35px",
      borderRadius: "50px",
      // backgroundColor: "#EDFFF8",
    },
  });
  return (
    <>
      <View style={styles.main_rank}>
        <Text style={{ fontSize: "18px" }}>
          Traffic & Engagement Last Month
        </Text>
        <View style={styles.traffic_flex}>
          <View style={styles.card_one}>
            <View style={styles.img_bg}>
              <Image src="https://d21b0h47110qhi.cloudfront.net/pdf/totalvisitsimgcar-gZWnTX3lF0iW4nY.png" />
            </View>
            <View style={{ marginTop: "22px" }}>
              <Text style={styles.card_text}>Total Visits</Text>
              <Text style={styles.card_rank_text}>
                {abbreviateNumber(data.domain.audience.visits)}
              </Text>
            </View>
          </View>
          <View style={styles.card_two}>
            <View style={styles.img_bg_two}>
              <Image
                // style={{ width: "21px", height: "16px" }}
                src="https://d21b0h47110qhi.cloudfront.net/pdf/pagesviewsimgeye-95iwTmxEG6C3mGa.png"
              />
            </View>
            <View style={{ marginTop: "22px" }}>
              <Text style={styles.card_text}>Page Views Avg.</Text>
              <Text style={styles.card_rank_text}>
                {abbreviateNumber(data.domain.audience.page_views_avg)}
              </Text>
            </View>
          </View>
          <View style={styles.card_three}>
            <View style={styles.img_bg_three}>
              <Image
                // style={{ width: "20px", height: "21px" }}
                src="https://d21b0h47110qhi.cloudfront.net/pdf/timeavgimgclock-85S2nCSN3zzn8wC.png"
              />
            </View>
            <View style={{ marginTop: "22px" }}>
              <Text style={styles.card_text}>Time On Site Avg.</Text>
              <Text style={styles.card_rank_text}>
                {data.domain.audience.time_on_site_avg}
              </Text>
            </View>
          </View>
          <View style={styles.card_four}>
            <View style={styles.img_bg_four}>
              <Image src="https://d21b0h47110qhi.cloudfront.net/pdf/bouncerateimgarrow-QxlCwUzJKS4NZ68.png" />
            </View>
            <View style={{ marginTop: "22px" }}>
              <Text style={styles.card_text}>Bounce Rate</Text>
              <Text style={styles.card_rank_text}>
                {data.domain.audience.bounce_rate}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
