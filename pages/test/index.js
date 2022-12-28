import data from "../../data.json";
import { useState, useEffect } from "react";

export default function Test() {
  const [jsonData, setJsonData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    mainData(data);

    console.log(data);
  }, [jsonData]);
  const mainData = async (data) => {
    setIsLoading(true);
    setJsonData(data);
    setIsLoading(false);
  };
  // console.log(mainData);

  return (
    <>
      {isloading
        ? "Loading"
        : jsonData.map((i) => <div>{i.domain}</div>)}
    </>
  );
}

// <PDFDownloadLink document={<MyDocument />} fileName="myPdf">
//   {({ loading }) =>
//     loading ? (
//       <Button>loading..</Button>
//     ) : (
//       <Button>Download Report</Button>
//     )
//   }
// </PDFDownloadLink>


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

