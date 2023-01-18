import data from "../data.json";
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
import KeywordCard from "./keywordCard";
import KeywordAds from "./KeywordAds";
import Allkeyword from "./Allkeyword";

export default function KeywordData() {
  return (
    <View>
      <KeywordCard />
      <KeywordAds />
      <Allkeyword />
    </View>
  );
}
