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
import { Button } from "antd";
import MyDocument from "../../components/MyDocument";
const styles = StyleSheet.create({
    size:{
        height: 900,
        width:900,
    }
})
export default function Home() {
  return (
    <div>
        {process.browser && (
            <PDFViewer  style={styles.size}>
                <MyDocument />
            </PDFViewer>
            
            // <PDFDownloadLink document={<MyDocument />} fileName="myPdf">
            //   {({ loading }) =>
            //     loading ? (
            //       <Button>loading..</Button>
            //     ) : (
            //       <Button>Download Report</Button>
            //     )
            //   }
            // </PDFDownloadLink>
          )}
        {/* {process.browser && (
          <PDFDownloadLink document={<MyDocument />} fileName="document">
            {({ loading }) =>
              loading ? (
                <Button>loading..</Button>
              ) : (
                <Button>Download Report</Button>
              )
            }
          </PDFDownloadLink>
        )} */}
    </div>
  );
}
