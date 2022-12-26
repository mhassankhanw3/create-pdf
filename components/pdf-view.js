import React, { useState, useEffect } from "react";
import MyDocument from "../components/MyDocument";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

export default function PDFViewerComp() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer style={{ width: 1600, height: 1200 }}>
      <MyDocument />
    </PDFViewer>
  );
}
