import { useEffect, useState } from "react";
import AppointmentList from "../components/AppointmentList";

const BASE_URL = "http://localhost:9292/";

function Home() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "appointments")
      .then((r) => r.json())
      .then((appointments) => setAppointments(appointments));
  }, []);

  return (
    <div>
      <p>This is the Home Page</p>
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default Home;
