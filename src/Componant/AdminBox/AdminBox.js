import React from "react";

const AdminBox = ({header, total, list1, list2}) => {
  return (
    <div className="col-md-5 mx-auto">
      <div className="admin-box p-4 m-2 border rounded">
        <fieldset className="border bg-white rounded p-2">
            <legend className="w-auto m-0 px-3 rounded border bg-white">
                <h4>{header}</h4>
            </legend>
            <h3 className="ml-3">{total}</h3>
            <ul className="text-muted">
                <li>{list1}</li>
                <li>{list2}</li>
            </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default AdminBox;
