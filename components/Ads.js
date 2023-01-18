import { View, Text, Image } from "@react-pdf/renderer";
import ads from "../ads.json";
import GeneratorTwo from "./GeneratorTwo";
export default function Ads({ title, percentage, color }) {
  const rangeColor = (data) => {
    let bgColor = data;
    return bgColor;
  };
  return (
    <View style={{ marginTop: "50px" }}>
      {ads.ads.map((i) => (
        <View
          style={{
            borderRadius: "15px",
            padding: "20px",
            border: "1px",
            borderColor: "#E8E8E8",
            backgroundColor: "white",
            width: "100%",
            margin: "14px auto",
            // border: '1px',
          }}
        >
          <View
            style={{
              // border: '1px',
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "semibold",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                Ad<Text style={{ marginTop: "-2px" }}>.</Text>
              </Text>
              <Text
                style={{ marginLeft: 2, color: "#565656", fontSize: "12px" }}
              >
                {i.url}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: "#EDE9FF",
                  color: "#502FCF",
                  fontWeight: "semibold",
                  fontSize: "12px",
                  borderRadius: "25px",
                  padding: "3px 5px",
                }}
              >
                Coverage: 13
              </Text>
            </View>
          </View>
          <View style={{ marginTop: "12px" }}>
            <Text
              style={{
                fontWeight: "semibold",
                color: "#1A11F7",
                fontSize: "14px",
              }}
            >
              {i.title}
            </Text>
            <Text
              style={{
                fontSize: "11px",
                color: "#565656",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            >
              {i.description}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* <View style={{ marginTop: "16px", width: "240px" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                      padding: 1,
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#EDFFF7",
                    }}
                  >
                    <Image
                    style={{width: '23px', height: 'auto'}}
                      src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVector.172662ca.png&w=32&q=75'
                      alt=""
                    />
                  </View>
                  <View style={{ marginLeft: "4px" }}>
                    <Text style={{ fontSize: "13px", color: "#565656" }}>
                      Desktop
                    </Text>
                    <Text
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontSize: "13px",
                      }}
                    >
                      Top of Page:{" "}
                      <Text style={{ fontWeight: "medium", marginLeft: 1 }}>
                        {i.desktop.top_of_page}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: "14px" }}>Total:</Text>
                  <Text
                    style={{
                      fontWeight: "medium",
                      marginLeft: "3px",
                      fontSize: "14px",
                    }}
                  >
                    {i.percentage_total}%
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: "14px" }}>
                <GeneratorTwo percentage={20} title="Windows" color="#00A361" />
              </View>
              <View style={{ marginTop: "14px" }}>
                <GeneratorTwo percentage={80} title="MacOs" color="#00A361" />
              </View>
            </View> */}

            <View style={{ marginTop: "16px", width: "240px" }}>
              {" "}
              {/* ============================= lenght ============================ */}
              {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  //   border: '1px',
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                      padding: 1,
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#FFF2E9",
                    }}
                  >
                    <Image
                    style={{width: '13.5px', height: 'auto'}}
                      src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile.dd136887.png&w=16&q=75"
                      alt=""
                    />
                  </View>
                  <View style={{ marginLeft: "4px" }}>
                    <Text style={{ fontSize: "12px", color: "#565656" }}>
                      Mobile
                    </Text>
                    <Text
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontSize: "12px",
                      }}
                    >
                      Top of Page:{" "}
                      <Text style={{ fontWeight: "medium", marginLeft: 1 }}>
                        {i.mobile.top_of_page}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: "14px" }}>Total:</Text>
                  <Text
                    style={{
                      fontWeight: "medium",
                      marginLeft: "2px",
                      fontSize: "14px",
                    }}
                  >
                    {i.percentage_total}%
                  </Text>
                </View>
              </View> */}
              {/* <View style={{ marginTop: "14px" }}>
                <GeneratorTwo percentage={90} title="MacOs" color="#F3882E" />
              </View>
              <View style={{ marginTop: "14px" }}>
                <GeneratorTwo percentage={20} title="MacOs" color="#F3882E" />
              </View> */}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
