import React from "react";
//*my imports
import Link from "next/link";
import Links from "@/components/navbar/links/Links.jsx";
import styles from "./links/navbar.module.css";

// import Links from "./links/links"; - the same as the previous

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Lama</Link>
      <div>
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;
