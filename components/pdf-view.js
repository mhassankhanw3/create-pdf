import React, { useState, useEffect } from "react";
import MyDocument from "../components/MyDocument";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

export default function PDFViewerComp() {
  const [client, setClient] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <PDFViewer style={{ width: 1550, height: 1200 }}>
        <MyDocument />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument />} fileName="document">
        {({ loading }) =>
          loading ? (
            <button>loading..</button>
          ) : (
            <button>Download Report</button>
          )
        }
      </PDFDownloadLink>
    </>
  );
}
