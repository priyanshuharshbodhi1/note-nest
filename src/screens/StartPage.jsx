import React, {useState} from "react";
import NotesDisplay from "../components/NotesDisplay";
import NotesGroup from "../components/NotesGroup";
import styles from "../css/StartPage.module.css";

function StartPage() {
  const [showDefaultView, setShowDefaultView] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setShowDefaultView(false);
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles["notesgroup"]}>
        <NotesGroup onGroupClick={handleGroupClick}/>
      </div>
      <div className={styles["notesdisplay"]}>
        <NotesDisplay showDefaultView={showDefaultView} selectedGroup={selectedGroup}/>
      </div>
    </div>
  );
}

export default StartPage;
