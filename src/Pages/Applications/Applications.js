import React, { useEffect, useState } from "react";
import ApplicationCard from "../../Componant/ApplicationCard/ApplicationCard";
import NothingAvailable from "../../Componant/NothingAvailable/NothingAvailable";
import { getData } from "../../Functions/autoFunctions";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    getData("http://localhost:5500/getapplications")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10  mx-auto">
            {applications.length === 0 ? (
              <NothingAvailable data="No Application available"></NothingAvailable>
            ) : (
              <div className="table-responsive ">
                <table className="table  text-left table-striped cursor-pointer">
                  <thead className="thead-light ">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Avater</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Course</th>
                      <th scope="col">Session</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications?.map((appl, id) => (
                      <ApplicationCard key={id} appl={appl}></ApplicationCard>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
