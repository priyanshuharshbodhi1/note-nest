import React from "react";
import styles from "../css/NotesGroup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NotesGroup() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["app-logo"]}>Notes Nest</div>
      <div className={styles["container"]}>
        <button className={styles["create-notes-group-btn"]}>
          <FontAwesomeIcon icon={faPlus} /> Create Notes Group
        </button>
        <div className={styles["notes-group-container"]}></div>
      </div>
    </div>
  );
}

export default NotesGroup;
