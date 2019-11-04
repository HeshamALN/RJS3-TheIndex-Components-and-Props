import React from "react";
import authors from "./data";

//componants

import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <div id="sidebar">
            <Sidebar />
          </div>
        </div>
        <div className="content col-10">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}

export default App;
