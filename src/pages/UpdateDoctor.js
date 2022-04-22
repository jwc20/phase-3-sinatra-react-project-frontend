import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";

const BASE_URL = "http://localhost:9292";

const FormDiv = styled.div`
  width: 90%;
  margin: auto;
  background: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function UpdateDoctor() {
  const { id } = useParams();
  const [updatedDoctor, setUpdatedDactor] = useState([]);
  const [doctor_firstname, setDoctorFirstName] = useState("");
  const [doctor_lastname, setDoctorLastName] = useState("");
  const [doctor_phone, setDoctorPhone] = useState("");
  const [doctor_email, setDoctorEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL + `/doctors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctor_firstname: doctor_firstname,
        doctor_lastname: doctor_lastname,
        doctor_phone: doctor_phone,
        doctor_email: doctor_email,
      }),
    })
      .then((r) => r.json())
      .then(setUpdatedDactor);
      // .then((updateDoctor) => {
      //   console.log(updatedDoctor);
      // });
    console.log("Updated doctor");
  }

  function handleDoctorFirstNameChange(e) {
    setDoctorFirstName(e.target.value);
  }

  function handleDoctorLastNameChange(e) {
    setDoctorLastName(e.target.value);
  }

  function handleDoctorPhoneChange(e) {
    setDoctorPhone(e.target.value);
  }

  function handleDoctorEmailChange(e) {
    setDoctorEmail(e.target.value);
  }

  return (
    <div>
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <div className="grid-container halves">
            <div>
              <label for="appdoc">First Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handleDoctorFirstNameChange}
                value={doctor_firstname}
                placeholder="First Name"
              />
            </div>

            <div>
              <label for="appdoc">Last Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handleDoctorLastNameChange}
                value={doctor_lastname}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="grid-container halves">
            <div>
              <label for="appdoc">Phone</label>
              <input
                id="appdoc"
                type="text"
                onChange={handleDoctorPhoneChange}
                value={doctor_phone}
                placeholder="xxx-xxx-xxxx"
              />
            </div>

            <div>
              <label for="appdoc">Email</label>
              <input
                id="appdoc"
                type="text"
                onChange={handleDoctorEmailChange}
                value={doctor_email}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid-container full">
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </form>
      </FormDiv>
    </div>
  );
}

export default UpdateDoctor;
