import React from "react";

const AdminBox = ({ header, total, list1, list2, para1, para2  }) => {
  return (
    <div className="col-md-5 mx-auto">
      <div className="admin-box p-4 m-2 border rounded">
        <fieldset className="border bg-white rounded p-2">
          <legend className="w-auto m-0 px-3 rounded border bg-white">
            <h4>{header}</h4>
          </legend>
          <h3 className="ml-3">{total + ""}</h3>
          <ul className="text-muted">
            <li>{list1 + ""}</li>
            <li>{list2 + ""}</li>
          </ul>
        </fieldset>
        <div className="progress" style={{height: "20px"}}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: `${para1/total*100}%`}}
          >{para1}</div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{width: `${para2/total*100}%`}}
          >{para2}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminBox;
