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
        <div className={styles["notes-group-container"]}>
          <div className={styles["new-group-1"]}>
            <div className={styles["notes-group-icon"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
              >
              </svg>
              <span>NG</span>
            </div>

            <div className={styles["notes-group-name"]}>New Group 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesGroup;
