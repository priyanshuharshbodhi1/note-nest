import React, { useState, useEffect } from "react";
import NotesDisplay from "../components/NotesDisplay";
import NotesGroup from "../components/NotesGroup";
import styles from "../css/StartPage.module.css";

function StartPage() {
  const [showDefaultView, setShowDefaultView] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [savedNotesMap, setSavedNotesMap] = useState(new Map());
  const [notesGroups, setNotesGroups] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 450);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setShowDefaultView(false);
  };

  useEffect(() => {
    // Load savedNotesMap from local storage
    const savedNotesMapData =
      JSON.parse(localStorage.getItem("savedNotesMap")) || {};
    setSavedNotesMap(new Map(Object.entries(savedNotesMapData)));

    // Load notesGroups from local storage
    const notesGroupsData =
      JSON.parse(localStorage.getItem("notesGroups")) || [];
    setNotesGroups(notesGroupsData);

    // Add event listener for window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 450);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles["main-container"]} `}>
      <div className={styles["notesgroup"]}>
        <NotesGroup
          onGroupClick={handleGroupClick}
          setSelectedGroup={setSelectedGroup}
          selectedGroup={selectedGroup}
          isSmallScreen={isSmallScreen}
        />
      </div>
      <div className={styles["notesdisplay"]}>
          <NotesDisplay
            showDefaultView={showDefaultView}
            selectedGroup={selectedGroup}
            isSmallScreen={isSmallScreen}
          />
      </div>
    </div>
  );
}

export default StartPage;
