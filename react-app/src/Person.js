import './Person.css'

function Person(props) {
  return (
      <tr className='data'>
        <td className='name'>
          {props.data.name}
        </td>
        <td className='email'>
          {props.data.email}
        </td>
        <td className='phone'>
          {props.data.phone}
        </td>
      </tr>
  )
}

export default Person
