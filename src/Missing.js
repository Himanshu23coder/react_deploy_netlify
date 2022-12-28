import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2 className="missing-heading">Page Not Found</h2>
      <p>Well, that disappointing</p>
      <p>
        <Link to="/">Vistit Our HomePage</Link>
      </p>
    </main>
  );
};

export default Missing;
