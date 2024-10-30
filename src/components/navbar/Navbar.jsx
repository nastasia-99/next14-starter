import React from "react";
//*my imports
import Link from "next/link";
import Links from "@/components/navbar/links/Links.jsx";
// import Links from "./links/links"; - the same as the previous

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;
