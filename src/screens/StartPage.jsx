import React from "react";
import NotesDisplay from "../components/NotesDisplay";
import NotesGroup from "../components/NotesGroup";
import styles from "../css/StartPage.module.css";

function StartPage() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["notesgroup"]}>
        <NotesGroup />
      </div>
      <div className={styles["notesdisplay"]}>
        <NotesDisplay />
      </div>
    </div>
  );
}

export default StartPage;
