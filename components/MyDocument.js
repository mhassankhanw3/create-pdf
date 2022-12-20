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
export default function MyDocument() {
    const styles = StyleSheet.create({
        text:{
            padding: '20px',
            borderRadius: '20px',
            border: '1px solid black',
            width: "80%",
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        bg_color: {
          backgroundColor: '#6495ED',
          textAlign: 'center',
          padding: '12px',
        },
        main_Text:{
            fontSize: 22,
            color: 'white',
            fontStyle: 'bold',
        }
    })
  return (
    <Document>
      <Page style={styles.page}>
        <View>
            <View style={styles.bg_color}>
                <Text style={styles.main_Text}>Massiv Ventures</Text>
            </View>
        </View>
      </Page>
    </Document>
  );
}
