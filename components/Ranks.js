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
import data from "../data.json";

export default function Ranks() {
  //   const range = (data) => {
  //     let percentage = data + "px";
  //     return percentage;
  //   };
  const lastRange = (lRange) => {
    console.log(lRange, "lRange");
    let percentageRange = lRange;
    let value = abbreviateNumberNew(percentageRange);
    console.log(typeof value, "value");
    let result = value + "%";
    console.log(typeof result, "result");
    return result;
  };
  const colorArr = ["#F3882E", "#00A361", "#502FCF"];
  const month = ["July", "August", "September"];
  //   console.log();
  const styles = StyleSheet.create({
    flex_compo: {
      marginTop: "56px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    main_rank: {
      height: "230px",
      margin: "24px 0px 8px auto",
      backgroundColor: "white",
      padding: "18px 24px",
      border: "1px",
      borderColor: "#E8E8E8",
      borderRadius: "15px",
      width: "49%",
    },
    rank_flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "10px 0px",
    },
    bg_img: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#EDFFF7",
      width: "35px",
      height: "35px",
      borderRadius: "50px",
    },
    bg_img_two: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFF2E9",
      width: "35px",
      height: "35px",
      borderRadius: "50px",
    },
    bg_img_three: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#EDE9FF",
      width: "35px",
      height: "35px",
      borderRadius: "50px",
    },
    rank_text: {
      color: "#565656",
      fontSize: "12px",
    },
    rank_text_rank: {
      fontSize: "12px",
      marginTop: "6px",
    },
    visit_flex: {
      // border: "1px",
      // marginTop: "120px",
      paddingTop: "100px",
      margin: "50px auto 0px auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      width: "100%",
      justifyContent: "space-between",
    },
    main_color: {
      textAlign: "center",
      width: "68px",
    },
  });
  return (
    <>
      <View style={styles.flex_compo}>
        <View style={styles.main_rank}>
          <View style={styles.ranks_box}>
            <View>
              <Text style={{ fontSize: "16px" }}>Ranks</Text>
            </View>
            <View style={{ marginTop: "10px" }}>
              <View style={styles.rank_flex}>
                <View style={styles.bg_img}>
                  <Image
                    style={{ width: "17px", height: "auto" }}
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewRank.7214d91d.png&w=32&q=75"
                    alt="ranks"
                  />
                </View>
                <View style={{ marginLeft: "8px" }}>
                  <Text style={styles.rank_text}>Global Rank</Text>
                  <Text style={styles.rank_text_rank}>
                    # {data.domain.global_rank.rank}
                  </Text>
                </View>
              </View>
              <View style={styles.rank_flex}>
                <View style={styles.bg_img_two}>
                  <Image
                    style={{ width: "17px", height: "auto" }}
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewFlag.d26b4294.png&w=32&q=75"
                    alt="flags"
                  />
                </View>
                <View style={{ marginLeft: "6px" }}>
                  <Text style={styles.rank_text}>Category Rank</Text>
                  <Text style={styles.rank_text_rank}>
                    # {data.domain.category_rank.rank}
                  </Text>
                </View>
              </View>
              <View style={styles.rank_flex}>
                <View style={styles.bg_img_three}>
                  <Image
                    style={{ width: "17px", height: "auto" }}
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglass.f28ec19f.png&w=32&q=75"
                    alt="flags"
                  />
                </View>
                <View style={{ marginLeft: "6px" }}>
                  <Text style={styles.rank_text}>Country Rank</Text>
                  <Text style={styles.rank_text_rank}>
                    # {data.domain.country_rank.rank}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.main_rank}>
          <View>
            <Text style={{ fontSize: "16px" }}>Total Visits Last 3 Months</Text>
          </View>
          <View style={styles.visit_flex}>
            {data.domain.traffic.estimated.map((i, col) => (
              <View style={styles.main_color}>
                <Text style={{ fontSize: "14px" }}>
                  {abbreviateNumber(i.value)}
                </Text>
                <View
                  style={{
                    backgroundColor: colorArr[col % colorArr.length],
                    // height: "24px",
                    height: lastRange(i.value),
                    width: "100%",
                    borderRadius: "3px",
                    margin: "7px 0px",
                  }}
                ></View>
                <Text style={{ fontSize: "11px", color: "#565656" }}>
                  {month[col % month.length]}
                </Text>
              </View>
            ))}

            {/* <View style={styles.main_color}>
              <Text style={{ fontSize: "14px" }}>14.1</Text>
              <View
                style={{
                  backgroundColor: "#00A361",
                  height: "80px",
                  width: "100%",
                  borderRadius: "3px",
                  margin: "7px 0px",
                }}
              ></View>
              <Text style={{ fontSize: "14px", color: "#565656" }}>Sept</Text>
            </View>
            <View style={styles.main_color}>
              <Text style={{ fontSize: "14px" }}>14.9</Text>
              <View
                style={{
                  backgroundColor: "#502FCF",
                  height: "79px",
                  width: "100%",
                  borderRadius: "3px",
                  margin: "7px 0px",
                }}
              ></View>
              <Text style={{ fontSize: "14px", color: "#565656" }}>Oct</Text>
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
}
