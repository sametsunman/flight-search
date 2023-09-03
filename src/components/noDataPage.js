import React from "react";

function NotDataPage() {
  return (
    <div
      className="h-100 d-flex justify-content-center"
      style={{ alignItems: "center" }}
    >
      <div className="d-flex justify-content-center">
        <div>
          <div
            className="text-muted"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            There is no available flights
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotDataPage;
