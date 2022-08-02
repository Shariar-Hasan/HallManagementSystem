import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingCard from "./../../Componant/LoadingCard/LoadingCard";
import {
  generateInvoice,
  postData,
  SharuDecryption,
  SharuEncryption,
} from "../../Functions/autoFunctions";
import toast from "react-hot-toast";

const CreateUser = () => {
  const { register, handleSubmit } = useForm();
  const [createdUsers, setCreatedUsers] = useState("");
  const [identify, setIdentify] = useState(true);
  const [loadpage, setLoadpage] = useState(false);

  // user generation function
  const generateUser = (initialValue, finalValue) => {
    let listString =
      "********" +
      (identify ? "Student Id" : "Employee Phone") +
      " & Password List (Total " +
      (finalValue - initialValue + 1) +
      ")********\n\n\n";
    let userArray = [];
    for (let i = initialValue; i <= finalValue; i++) {
      let pass = generateInvoice(10);
      listString =
        listString +
        `${identify ? "Student Id" : "Employee Phone"} : ${
          !identify ? `0${i}` : i
        }\nPassword : ${pass}\n\n`;
      userArray = [
        ...userArray,
        {
          id: !identify ? `0${i}` : "" + i,
          password: SharuEncryption(pass),
          authentication: {
            isAdmin: false,
            isStudent: identify,
            isEmployee: !identify,
          },
        },
      ];
    }
    return [listString, userArray];
  };
  // set to database function
  const setToDatabase = (userArray, generatedList) => {
    postData("http://localhost:5500/createUser/", userArray)
      .then((res) => {
        if (res.status === 200) {
          toast.success("All user Successfully created!");
          setLoadpage(false);
          setCreatedUsers(generatedList);
          console.log(res);
        } else {
          console.log(res);
          toast.error(res.statusText);
          setCreatedUsers("");
          setLoadpage(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoadpage(false);
      });
  };
  // console.log(SharuDecryption("}vnmql~jit"));
  // onsubmit function
  const onSubmit = (data) => {
    setLoadpage(true);
    if (!identify) {
      data.endsOn = data.startsFrom;
    }
    if (+data.endsOn - +data.startsFrom > 500) {
      toast.error("Can not create more then 500 user at a time");
      setLoadpage(false);
      return;
    }
    let [generatedList, userArray] = generateUser(
      +data.startsFrom,
      +data.endsOn
    );
    setToDatabase(userArray, generatedList);
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
    <>
      {loadpage && <LoadingCard></LoadingCard>}

      <div className="mx-auto col-9 my-2">
        <div className="profile-card shadow border-rounded">
          <h3 className="profile-card-header">Create User</h3>
          <div className="row  profile-card-child">
            <div className="col-12 my-2">
              <div className="form-check form-check-inline">
                <label className="form-check-label mr-2 border p-2 btn-outline-primary rounded mx-auto">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="identify-user"
                    checked={identify}
                    onChange={() => setIdentify(!identify)}
                  />{" "}
                  Create Students List
                </label>
                <label className="form-check-label mr-2 border p-2 btn-outline-primary rounded mx-auto">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="identify-user"
                    checked={!identify}
                    onChange={() => setIdentify(!identify)}
                  />{" "}
                  Create Employee Account
                </label>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {identify ? (
                  <div className="form-group">
                    <label className="w-100">
                      <h6>Student Id Range : </h6>
                      <input
                        type="text"
                        className="form-control d-inline-block mx-auto"
                        style={{ width: "40%" }}
                        placeholder="First Student ID"
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
                        placeholder="Last Student ID"
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
                      <h6>Employee Phone Number : </h6>
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
                  <i className="fa fa-user-plus mx-2" aria-hidden="true"></i>
                </button>
                <div className="form-group mt-5">
                  <label className="w-100">
                    <h6>Created {identify ? "Student List" : "Employee"} :</h6>
                    <div className="form-group">
                      <textarea
                        disabled
                        className="form-control"
                        value={createdUsers}
                        placeholder="Generated Student Id and Secret Password will appear here"
                        onChange={() =>
                          console.log(
                            "Dont be so depressed! I am always with you"
                          )
                        }
                        rows="20"
                      ></textarea>
                    </div>
                  </label>
                </div>
              </form>
              <div className="text-right">
                <button
                  onClick={() =>
                    download(
                      identify
                        ? "Student Id & Password.txt"
                        : "Employee Phone & Password.txt",
                      createdUsers
                    )
                  }
                  className="btn btn-outline-primary click-effect"
                >
                  Download{" "}
                  {identify
                    ? "Student Id & Password"
                    : "Employee Phone & Password"}
                  .txt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
