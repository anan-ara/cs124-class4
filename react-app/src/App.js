import './App.css';
import PeopleList from "./PeopleList"

const data = [
  {
    id: 512,
     name: "Neil Rhodes",
     email: "rhodes@hmc.edu",
     phone: "(909) 555-1212"
   },
  {
    id: 787,
     name: "Barack Obama",
     email: "ex-prez@whitehouse.gov",
     phone: "(312) 555-1212"
   }
];

function App() {
  return (
    <PeopleList data={data}/>
  );
}

export default App;