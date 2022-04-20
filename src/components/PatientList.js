


import PatientRow from "./PatientRow";

function PatientList({ patients }) {

  const patientRow = patients.map((patient) => (
    <PatientRow key={patient.patient_id} patient={patient} />
  ))

  return (

    <div>
      <table className="u-full-width">
        <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>{patientRow}</tbody>
      </table>


    </div>

  )



}






export default PatientList;



