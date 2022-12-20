import React, { useState, useEffect, Fragment } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
  usePDF,
} from "@react-pdf/renderer";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../components/MyDocument";

import { Button } from "antd";

export default function Home({
  report_id,
  name,
  quiz_name,
  age,
  passing,
  questions,
  complete,
  passed,
  edu,
  learn,
  time_spent,
  starttime,
  score,
  percentage,
  status,
}) {
  // const styles = StyleSheet.create({
  //   body: {
  //     paddingTop: 35,
  //     paddingBottom: 65,
  //     paddingHorizontal: 35,
  //   },
  //   tableContainer: {
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     marginTop: 24,
  //     borderWidth: 1,
  //     borderColor: "black",
  //   },
  //   tableContainerNoMargin: {
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //   },
  //   row: {
  //     flexDirection: "row",
  //     borderBottomColor: "#bff0fd",
  //     borderBottomWidth: 1,
  //     alignItems: "center",
  //     height: 24,
  //     fontStyle: "bold",
  //   },
  //   containerdetails: {
  //     flexDirection: "row",

  //     alignItems: "center",

  //     textAlign: "center",
  //     fontStyle: "bold",
  //     flexGrow: 1,
  //   },
  //   container: {
  //     flexDirection: "row",
  //     borderBottomColor: "black",
  //     borderBottomWidth: 1,
  //     alignItems: "center",
  //     height: 24,
  //     textAlign: "center",
  //     fontStyle: "bold",
  //     flexGrow: 1,
  //   },
  //   description: {
  //     width: "60%",
  //     // borderRightColor: borderColor,
  //     borderRightWidth: 1,
  //   },
  //   qty: {
  //     width: "10%",
  //     // borderRightColor: borderColor,
  //     borderRightWidth: 1,
  //   },
  //   ratetable: {
  //     width: "30%",
  //     fontSize: 10,
  //     textAlign: "center",
  //     borderRight: 1,
  //     padding: 5,
  //   },

  //   ratetablestrong: {
  //     width: "30%",
  //     fontSize: 10,
  //     textAlign: "center",
  //     borderRight: 1,
  //     padding: 5,
  //     backgroundColor: "#00008B",
  //     color: "white",
  //   },
  //   ratetableweak: {
  //     width: "30%",
  //     fontSize: 10,
  //     textAlign: "center",
  //     borderRight: 1,
  //     padding: 5,
  //     backgroundColor: "#FF0000",
  //     color: "white",
  //   },
  //   rate: {
  //     width: "30%",
  //     fontSize: 10,
  //     textAlign: "left",
  //     padding: 5,
  //   },
  //   rategrey: {
  //     width: "15%",
  //     backgroundColor: "#d3d3d3",
  //     fontSize: 10,

  //     textAlign: "left",
  //     padding: 5,
  //   },
  //   rategreylabel: {
  //     width: "25%",
  //     backgroundColor: "#d3d3d3",
  //     fontSize: 10,

  //     textAlign: "left",
  //     padding: 5,
  //   },
  //   amount: {
  //     width: "15%",
  //   },
  //   quizname: {
  //     textAlign: "center",
  //   },
  //   quizdetail: {
  //     textAlign: "center",
  //     fontSize: 12,
  //   },
  //   usernamestamp: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     flexDirection: "row",
  //     marginTop: 20,
  //     marginBottom: 20,
  //     border: "1px solid #D3D3D3",
  //   },
  //   username: {
  //     display: "flex",

  //     flexDirection: "row",
  //     marginTop: 20,
  //     marginBottom: 20,
  //     border: "1px solid #D3D3D3",
  //   },
  //   usernametitle: {
  //     width: "20%",
  //     backgroundColor: "#D3D3D3",
  //     padding: "5px 5px ",
  //     fontSize: 14,
  //   },
  //   usernamevalue: {
  //     width: "80%",
  //     padding: "5px 5px ",
  //     textAlign: "left",
  //     fontSize: 14,
  //   },
  //   details: {
  //     display: "flex",
  //     flexDirection: "row",
  //     marginTop: 20,
  //     marginBottom: 70,
  //     border: "1px solid #D3D3D3",
  //   },
  //   detailstitle: {
  //     width: "10%",
  //     backgroundColor: "#D3D3D3",
  //     padding: "5px 5px ",
  //     fontSize: 14,
  //   },
  //   detailsvalue: {
  //     width: "20%",
  //     padding: "5px 5px ",
  //     textAlign: "left",
  //     fontSize: 14,
  //   },
  // });

  // const borderColor = "black";

  // const [correct, setCorrect] = useState();

  // useEffect(() => {
  //   const countans = Object.assign(
  //     {},
  //     ...Array.from(new Set(questions), (key) => ({
  //       [key.category]: questions.filter(
  //         (value) => value.category === key.category
  //       ).length,
  //     }))
  //   );

  //   const correctans = Object.assign(
  //     {},
  //     ...Array.from(new Set(questions), (key) => ({
  //       [key.category]: questions.filter(
  //         (value) => value.category === key.category && key.is_correct === true
  //       ).length,
  //     }))
  //   );
  //   let arr = [];

  //   for (let item of Object.entries(countans)) {
  //     for (let item2 of Object.entries(correctans)) {
  //       if (item[0] === item2[0]) {
  //         arr.push({ label: item[0], count: item[1], correct: item2[1] });
  //       }
  //     }
  //   }

  //   setCorrect(arr);
  // }, [questions]);

  // const TableRow = ({ items }) => {
  //   const rows = items.map((item) => (
  //     <div>
  //       <View style={styles.row} key={Math.random()}>
  //         <Text style={styles.description}>{item.desc}</Text>
  //         <Text style={styles.xyz}>{item.xyz}</Text>
  //       </View>
  //     </div>
  //   ));
  //   return <Fragment>{rows}</Fragment>;
  // };

  // const ItemsTable = ({ data }) => (
  //   <div>
  //     <View style={styles.tableContainer}>
  //       {/*<TableHeader />*/}
  //       <TableRow items={data} />
  //       {/*<TableFooter items={data.items} />*/}
  //     </View>
  //   </div>
  // );


  const styles = StyleSheet.create({
    do:{
      color: 'black',
      fontSize: 14,
      textDecoration: 'none'
    }
  })


  return (
    <>
      <p suppressHydrationWarning={false}>
        {/* {process.browser && (
          <PDFDownloadLink document={<MyDocument />} fileName="myPdf">
            {({ loading }) =>
              loading ? (
                <Button>loading..</Button>
              ) : (
                <Button>Download Report</Button>
              )
            }
          </PDFDownloadLink>
        )} */}
        {process.browser && (
          <PDFDownloadLink document={<MyDocument />} fileName="document">
            {({ loading }) =>
              loading ? (
                <Button>loading..</Button>
              ) : (
                  <Button>Download Report</Button>
              )
            }
          </PDFDownloadLink>
        )}
      </p>
    </>
  );
}

// Create styles

// Create Document Component

// const MyDocument = () => (
//   <Document>
//     <Page style={styles.body}>
//       {/* <View>
//         <Text style={styles.quizname}>{quiz_name}</Text>
//       </View>

//       <View style={styles.username}>
//         <Text style={styles.usernametitle}> Name: </Text>
//         <Text style={styles.usernamevalue}>{name}</Text>
//       </View>

//       <View style={{ border: 1, borderColor: "black" }}>
//         <View style={styles.tableContainerNoMargin}>
//           <View style={styles.containerdetails}>
//             <Text style={styles.rategrey}>REPORT ID:</Text>
//             <Text style={styles.rate}>{report_id}</Text>
//             <Text style={styles.rategreylabel}>PASSING SCORE:</Text>
//             <Text style={styles.rate}>{passing?.toFixed(2)}</Text>
//           </View>
//         </View>
//         <View style={styles.tableContainerNoMargin}>
//           <View style={styles.containerdetails}>
//             <Text style={styles.rategrey}>AGE:</Text>
//             <Text style={styles.rate}>{age}</Text>
//             <Text style={styles.rategreylabel}>ACTUAL SCORE:</Text>
//             <Text style={styles.rate}>{score}</Text>
//           </View>
//         </View>
//         <View style={styles.tableContainerNoMargin}>
//           <View style={styles.containerdetails}>
//             <Text style={styles.rategrey}>EDUCATION:</Text>
//             <Text style={styles.rate}>{edu}</Text>
//             <Text style={styles.rategreylabel}>OVERALL STATUS:</Text>
//             <Text
//               style={
//                 passed
//                   ? {
//                       width: "30%",
//                       fontSize: 10,
//                       textAlign: "left",

//                       color: "white",
//                       padding: 5,
//                       backgroundColor: "#00FF00",
//                     }
//                   : {
//                       width: "30%",
//                       fontSize: 10,
//                       textAlign: "left",
//                       color: "white",
//                       padding: 5,

//                       backgroundColor: "#FF0000",
//                     }
//               }
//             >
//               {passed ? "PASSED" : "FAILED"}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableContainerNoMargin}>
//           <View style={styles.containerdetails}>
//             <Text style={styles.rategrey}>TEST DATE</Text>
//             <Text style={styles.rate}>{starttime}</Text>
//             <Text style={styles.rategreylabel}>COMPLETE</Text>
//             <Text
//               style={
//                 complete
//                   ? {
//                       width: "30%",
//                       fontSize: 10,
//                       textAlign: "left",

//                       color: "white",
//                       padding: 5,
//                       backgroundColor: "#00FF00",
//                     }
//                   : {
//                       width: "30%",
//                       fontSize: 10,
//                       textAlign: "left",
//                       color: "white",
//                       padding: 5,
//                       backgroundColor: "#FF0000",
//                     }
//               }
//             >
//               {complete ? "COMPLETED" : "INCOMPLETE"}
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={{ marginTop: 20 }}>
//         <Text style={styles.quizname}>SCORES DETAIL</Text>
//       </View>

//       <View style={styles.tableContainer}>
//         <View style={styles.container}>
//           <Text style={styles.ratetable}>CATEGORY</Text>
//           <Text style={styles.ratetable}>QUESTIONS</Text>
//           <Text style={styles.ratetable}>CORRECT</Text>
//           <Text style={styles.ratetable}>%</Text>
//           <Text style={styles.ratetable}>STATUS</Text>
//         </View>
//         {correct?.map((i) => {
//           return (
//             <View style={styles.row}>
//               <View style={styles.container}>
//                 <Text
//                   style={
//                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
//                       ? styles.ratetable
//                       : styles.ratetableweak
//                   }
//                 >
//                   {i.label}
//                 </Text>
//                 <Text
//                   style={
//                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
//                       ? styles.ratetable
//                       : styles.ratetableweak
//                   }
//                 >
//                   {i.count}
//                 </Text>
//                 <Text
//                   style={
//                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
//                       ? styles.ratetable
//                       : styles.ratetableweak
//                   }
//                 >
//                   {i.correct}
//                 </Text>
//                 <Text
//                   style={
//                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
//                       ? styles.ratetable
//                       : styles.ratetableweak
//                   }
//                 >
//                   {Number(Number(i.correct / i.count) * 100).toFixed(2)}%
//                 </Text>
//                 <Text
//                   style={
//                     Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
//                       ? styles.ratetablestrong
//                       : styles.ratetableweak
//                   }
//                 >
//                   {" "}
//                   {Number(Number(i.correct / i.count) * 100).toFixed(2) >= 30
//                     ? "STRONG"
//                     : "WEAK"}
//                 </Text>
//               </View>
//             </View>
//           );
//         })}
//       </View>

//       <View style={{ marginTop: 20 }}>
//         <Text style={styles.quizname}>DOWNLOAD MATERIAL</Text>
//         <Link href={learn} style={styles.quizname}>
//           CLICK HERE
//         </Link>
//       </View>

//       {passed && (
//         <>
//           <View style={{ marginTop: 20 }}>
//             <Text style={styles.quizname}>NOTES</Text>
//           </View>

//           <View style={{ marginTop: 20 }}>
//             <Text style={styles.quizdetail}>
//               CONGRATULATIONS! YOU HAVE PASSED THE ASSESSMENT TEST ; HOWEVER,
//               YOU NEED TO PRACTICE MORE ON [PHISHING SCAMS] IN ORDER TO
//               IMPROVE YOUR KNOWLEDGE. YOU CAN FIND AND DOWNLOAD THE STUDY
//               MATERIAL ON YOUR ACCOUNT AT THE ISAT TOOL’S WEBSITE.
//             </Text>
//           </View>
//         </>
//       )}

//       <View
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexDirection: "row",
//           marginTop: 20,
//         }}
//       >
//         <Text style={{ flex: 1 }}>Training Manager</Text>
//         <Text style={{ flex: 1 }}>STAMP</Text>
//       </View>

//       <View
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexDirection: "row",
//         }}
//       >
//         <Image
//           src={
//             "https://d21b0h47110qhi.cloudfront.net/bo/image1-wrYiEeBy8F2Hm6o.png"
//           }
//           style={{ flex: 1, height: "140px" }}
//         ></Image>

//         <Image
//           src={
//             "https://d21b0h47110qhi.cloudfront.net/bo/image2-1hFxsxUC35JFBUB.jpeg"
//           }
//           style={{ flex: 1, height: "140px" }}
//         ></Image>
//       </View> */}
//       <View>
//         <Text>
//         hassan khan
//         </Text>
//       </View>
//     </Page>
//   </Document>
// );
