import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { generateInvoice } from "../../Functions/autoFunctions";

const CreateUser = () => {
  const { register, handleSubmit } = useForm();
  const [createdUsers, setCreatedUsers] = useState("text");
  const [identify, setIdentify] = useState(true);

  // user generation function
  const generateUser = (initialValue, finalValue) => {
    let listString =
      "********Student ID & Password List (Total " +
      (finalValue - initialValue + 1) +
      ")********\n\n\n";
    let userArray = [];
    for (let i = initialValue; i <= finalValue; i++) {
      let pass = generateInvoice(8);
      listString =
        listString +
        `${
          identify ? "Student Id" : "Employee Phone"
        } : ${!identify ? `0${i}` : i}\nPassword : ${pass}\n\n`;
      userArray = [
        ...userArray,
        {
          id: !identify ? `0${i}` : ""+i,
          password: pass,
        }
      ];
    }
    return [listString, userArray];
  };
  const onSubmit = (data) => {
    if(!identify) {
     data.endsOn = data.startsFrom 
    }
    let [generatedList, userArray] = generateUser(
      +data.startsFrom,
      +data.endsOn
    );
    const successfull = true;
    if (successfull) setCreatedUsers(generatedList);
    else setCreatedUsers("No User Created! Server Error");
  };

  // txt generation
  const download = (filename, text) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  return (
    <div className="mx-auto col-9 my-2">
      <div className="profile-card shadow border-rounded">
        <h3 className="profile-card-header">Create User</h3>
        <div className="row  profile-card-child">
          <div className="col-12 my-2">
            <div className="form-check form-check-inline">
              <label
                onClick={() => setIdentify(true)}
                className="form-check-label mr-2 border p-2 btn-outline-primary rounded mx-auto"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="identify-user"
                  
                />{" "}
                Create Students List
              </label>
              <label
                onClick={() => setIdentify(false)}
                className="form-check-label mr-2 border p-2 btn-outline-primary rounded mx-auto"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="identify-user"
                />{" "}
                Create Employee Account
              </label>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {identify ? (
                <div className="form-group">
                  <label className="w-100">
                    <h6>Enter Student Id Range : </h6>
                    <input
                      type="text"
                      className="form-control d-inline-block mx-auto"
                      style={{ width: "40%" }}
                      placeholder="ID Starts from "
                      autoComplete="off"
                      {...register("startsFrom", {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    <span className="mx-3">to</span>
                    <input
                      type="text"
                      className="form-control d-inline-block mx-auto"
                      style={{ width: "40%" }}
                      placeholder="ID Ends on"
                      autoComplete="off"
                      {...register("endsOn", {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                  </label>
                </div>
              ) : (
                <div className="form-group">
                  <label className="w-100">
                    <h6>Enter Employee Phone Number : </h6>
                    <input
                      type="text"
                      className="form-control d-inline-block mx-auto"
                      style={{ width: "40%" }}
                      placeholder="Phone Number "
                      autoComplete="off"
                      {...register("startsFrom", {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                  </label>
                </div>
              )}
              <button className="btn-lg btn-block btn-primary" type="submit">
                Create {identify ? "Student" : "Employee"}
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </button>
              <div className="form-group mt-5">
                <label className="w-100">
                  <h6>Created Student List :</h6>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      value={createdUsers}
                      placeholder="Generated Student Id and Secret Password will appear here"
                      onChange={console.log(
                        "Click Download to download the user list"
                      )}
                      rows="20"
                    ></textarea>
                  </div>
                </label>
              </div>
            </form>
            <div className="text-right">
              <button
                onClick={() =>
                  download("Download UserId&Password.txt", createdUsers)
                }
                className="btn btn-outline-primary click-effect"
              >
                Download UserId&Password.txt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
