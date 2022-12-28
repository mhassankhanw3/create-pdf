import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
  usePDF,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TestPDF = dynamic(() => import("../components/pdf-view"), {
  ssr: false,
});

const styles = StyleSheet.create({
  size: {
    height: 900,
    width: 1400,
  },
});

export default function Home() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div>
      <TestPDF />
    </div>
    
    // <div suppressHydrationWarning={true}>
    //   <div>
    //     {process.browser && (
    //       <PDFViewer style={styles.size}>
    //         <MyDocument />{" "}
    //       </PDFViewer>
    //     )}
    //   </div>
    // </div>
  );
}

// import React, { useState, useEffect, Fragment } from "react";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Link,
//   Image,
//   usePDF,
// } from "@react-pdf/renderer";
// import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
// import MyDocument from "../components/MyDocument";

// import { Button } from "antd";

// // Create styles

// // Create Document Component

// // const MyDocument = () => (
// //   <Document>
// //     <Page style={styles.body}>
// //       {/* <View>
// //         <Text style={styles.quizname}>{quiz_name}</Text>
// //       </View>

// //       <View style={styles.username}>
// //         <Text style={styles.usernametitle}> Name: </Text>
// //         <Text style={styles.usernamevalue}>{name}</Text>
// //       </View>

// //       <View style={{ border: 1, borderColor: "black" }}>
// //         <View style={styles.tableContainerNoMargin}>
// //           <View style={styles.containerdetails}>
// //             <Text style={styles.rategrey}>REPORT ID:</Text>
// //             <Text style={styles.rate}>{report_id}</Text>
// //             <Text style={styles.rategreylabel}>PASSING SCORE:</Text>
// //             <Text style={styles.rate}>{passing?.toFixed(2)}</Text>
// //           </View>
// //         </View>
// //         <View style={styles.tableContainerNoMargin}>
// //           <View style={styles.containerdetails}>
// //             <Text style={styles.rategrey}>AGE:</Text>
// //             <Text style={styles.rate}>{age}</Text>
// //             <Text style={styles.rategreylabel}>ACTUAL SCORE:</Text>
// //             <Text style={styles.rate}>{score}</Text>
// //           </View>
// //         </View>
// //         <View style={styles.tableContainerNoMargin}>
// //           <View style={styles.containerdetails}>
// //             <Text style={styles.rategrey}>EDUCATION:</Text>
// //             <Text style={styles.rate}>{edu}</Text>
// //             <Text style={styles.rategreylabel}>OVERALL STATUS:</Text>
// //             <Text
// //               style={
// //                 passed
// //                   ? {
// //                       width: "30%",
// //                       fontSize: 10,
// //                       textAlign: "left",

// //                       color: "white",
// //                       padding: 5,
// //                       backgroundColor: "#00FF00",
// //                     }
// //                   : {
// //                       width: "30%",
// //                       fontSize: 10,
// //                       textAlign: "left",
// //                       color: "white",
// //                       padding: 5,

// //                       backgroundColor: "#FF0000",
// //                     }
// //               }
// //             >
// //               {passed ? "PASSED" : "FAILED"}
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.tableContainerNoMargin}>
// //           <View style={styles.containerdetails}>
// //             <Text style={styles.rategrey}>TEST DATE</Text>
// //             <Text style={styles.rate}>{starttime}</Text>
// //             <Text style={styles.rategreylabel}>COMPLETE</Text>
// //             <Text
// //               style={
// //                 complete
// //                   ? {
// //                       width: "30%",
// //                       fontSize: 10,
// //                       textAlign: "left",

// //                       color: "white",
// //                       padding: 5,
// //                       backgroundColor: "#00FF00",
// //                     }
// //                   : {
// //                       width: "30%",
// //                       fontSize: 10,
// //                       textAlign: "left",
// //                       color: "white",
// //                       padding: 5,
// //                       backgroundColor: "#FF0000",
// //                     }
// //               }
// //             >
// //               {complete ? "COMPLETED" : "INCOMPLETE"}
// //             </Text>
// //           </View>
// //         </View>
// //       </View>

// //       <View style={{ marginTop: 20 }}>
// //         <Text style={styles.quizname}>SCORES DETAIL</Text>
// //       </View>

// //       <View style={styles.tableContainer}>
// //         <View style={styles.container}>
// //           <Text style={styles.ratetable}>CATEGORY</Text>
// //           <Text style={styles.ratetable}>QUESTIONS</Text>
// //           <Text style={styles.ratetable}>CORRECT</Text>
// //           <Text style={styles.ratetable}>%</Text>
// //           <Text style={styles.ratetable}>STATUS</Text>
// //         </View>
// //         {correct?.map((i) => {
// //           return (
// //             <View style={styles.row}>
// //               <View style={styles.container}>
// //                 <Text
// //                   style={
// //                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
// //                       ? styles.ratetable
// //                       : styles.ratetableweak
// //                   }
// //                 >
// //                   {i.label}
// //                 </Text>
// //                 <Text
// //                   style={
// //                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
// //                       ? styles.ratetable
// //                       : styles.ratetableweak
// //                   }
// //                 >
// //                   {i.count}
// //                 </Text>
// //                 <Text
// //                   style={
// //                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
// //                       ? styles.ratetable
// //                       : styles.ratetableweak
// //                   }
// //                 >
// //                   {i.correct}
// //                 </Text>
// //                 <Text
// //                   style={
// //                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
// //                       ? styles.ratetable
// //                       : styles.ratetableweak
// //                   }
// //                 >
// //                   {Number(Number(i.correct / i.count) * 100).toFixed(2)}%
// //                 </Text>
// //                 <Text
// //                   style={
// //                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
// //                       ? styles.ratetablestrong
// //                       : styles.ratetableweak
// //                   }
// //                 >
// //                   {" "}
// //                   {Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
// //                     ? "STRONG"
// //                     : "WEAK"}
// //                 </Text>
// //               </View>
// //             </View>
// //           );
// //         })}
// //       </View>

// //       <View style={{ marginTop: 20 }}>
// //         <Text style={styles.quizname}>DOWNLOAD MATERIAL</Text>
// //         <Link href={learn} style={styles.quizname}>
// //           CLICK HERE
// //         </Link>
// //       </View>

// //       {passed && (
// //         <>
// //           <View style={{ marginTop: 20 }}>
// //             <Text style={styles.quizname}>NOTES</Text>
// //           </View>

// //           <View style={{ marginTop: 20 }}>
// //             <Text style={styles.quizdetail}>
// //               CONGRATULATIONS! YOU HAVE PASSED THE ASSESSMENT TEST ; HOWEVER,
// //               YOU NEED TO PRACTICE MORE ON [PHISHING SCAMS] IN ORDER TO
// //               IMPROVE YOUR KNOWLEDGE. YOU CAN FIND AND DOWNLOAD THE STUDY
// //               MATERIAL ON YOUR ACCOUNT AT THE ISAT TOOL’S WEBSITE.
// //             </Text>
// //           </View>
// //         </>
// //       )}

// //       <View
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           flexDirection: "row",
// //           marginTop: 20,
// //         }}
// //       >
// //         <Text style={{ flex: 1 }}>Training Manager</Text>
// //         <Text style={{ flex: 1 }}>STAMP</Text>
// //       </View>

// //       <View
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           flexDirection: "row",
// //         }}
// //       >
// //         <Image
// //           src={
// //             "https://d21b0h47110qhi.cloudfront.net/bo/image1-wrYiEeBy8F2Hm6o.png"
// //           }
// //           style={{ flex: 1, height: "140px" }}
// //         ></Image>

// //         <Image
// //           src={
// //             "https://d21b0h47110qhi.cloudfront.net/bo/image2-1hFxsxUC35JFBUB.jpeg"
// //           }
// //           style={{ flex: 1, height: "140px" }}
// //         ></Image>
// //       </View> */}
// //       <View>
// //         <Text>
// //         hassan khan
// //         </Text>
// //       </View>
// //     </Page>
// //   </Document>
// // );
