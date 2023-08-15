import React from "react";
// import NotesDisplay from "../components/NotesDisplay";
import NotesGroup from "../components/NotesGroup";
import styles from "../css/StartPage.module.css";

function StartPage() {
  return (
    <div>
      <div className={styles["notesgroup"]}>
        <NotesGroup />
      </div>

      {/* <NotesDisplay /> */}
    </div>
  );
}

export default StartPage;
