import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact page" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number (Optional)" />
          <textarea 
          name="" 
          id="" 
          placeholder="Message">
          </textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
