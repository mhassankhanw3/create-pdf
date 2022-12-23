import data from "../../data.json";
import CountriesData from "../../country"
export default function find() {
  let ccode = CountriesData.find((e) => e.location_name === 'United Kingdom');
  const name = () => {
     console.log(ccode.country_iso_code
        );
  }
  return <div>
    <button onClick={name}>ccode</button>
  </div>
}

// export default function App() {
//   const employee = {
//     id: 1,
//     name: "Alice",
//     'salary salary': 100,
//   };

//   return (
//     <div>
//       {/* 👇️ iterate object KEYS */}
//       {Object.keys(data.domain_index).map((i) => {
//         return (
//           <div key={i}>
//             <h2>
//               {i}: <h3>{data.domain_index[i]}</h3>
//             </h2>

//             <hr />
//           </div>
//         );
//       })}
//       {/* {Object.keys(employee).map((key) => {
//         return (
//           <div key={key}>
//             <h2>
//               {key}: {employee[key]}
//             </h2>

//             <hr />
//           </div>
//         );
//       })} */}
//     </div>
//   );
// }
