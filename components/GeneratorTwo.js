import { Button, Space, Progress } from "antd";
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

export default function generatorTwo({ title, percentage, color }) {
    const range = (data) => {
        let percentage = data + "%";
        return percentage;
      };
  const styles = StyleSheet.create({
    steps: {
      width: "23px",
      display: "flex",
      flexDirection: "row",
      border: "1px",
      height: "9px !impo",
      gap: "5px",
      marginRight: "4.8px",
    },
    wrapper: {
      width: "100%",
      //   border: '1px',
    },

    progress_bar: {
      width: "100%",
      backgroundColor: "#e0e0e0",
      borderRadius: "50px",
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, .2)",
    },

    progress_bar_fill: {
      width: "70%",
      display: "block",
      height: "8px",
      backgroundColor: "#659cef",
      borderRadius: "50px",
      transition: "width 500ms ease-in-out",
    },
  });
  return (
    <>
      <View style={{ marginTop: "10px" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#565656", fontSize: "13px" }}>{title}</Text>
          <Text style={{ fontWeight: "bold", fontSize: "13px", color: color }}>
            {percentage}%
          </Text>
          {/* <p style={{color: color}}>{percentage}%</p> */}
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <View style={styles.wrapper}>
            <View style={styles.progress_bar}>
              <Text
                style={{
                  width: range(percentage),
                  display: "block",
                  height: "8px",
                  backgroundColor: color,
                  borderRadius: "50px",
                }}
              ></Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

{
  /* <progress id="file" value="12" max="100"> 32% </progress> */
}
{
  /* <Progress
            type="line"
            percent={percentage}
            showInfo={false}
            steps={10}
            trailColor="#D9D9D9"
            strokeColor={color}
          /> */
}
{
  /* <Progress percent={50} showInfo={false} /> */
}
{
  /* <Progress showInfo={false} percent={percentage} status="active" trailColor="#D9D9D9" strokeColor={color}/> */
}
