import React from "react";

const Sidebar = props => {
  console.log("PROPS", props);
  return (
    <div>
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
};

export default Sidebar;
