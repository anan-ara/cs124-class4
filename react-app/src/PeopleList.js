import './PeopleList.css'
import Person from './Person'

function PeopleList(props) {
  return (
    <>
      <h1>
        People
      </h1>
      <table>
        <thead>
        <tr className="header">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map(e => <Person key={e.id} data={e}/>)}
        </tbody>
      </table>
    </>
  );
}

export default PeopleList;
