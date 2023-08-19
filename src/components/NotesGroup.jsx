import React, { useState, useEffect } from "react";
import styles from "../css/NotesGroup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NotesGroup({
  onGroupClick,
  setSelectedGroup,
  selectedGroup
}) {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [notesGroups, setNotesGroups] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const createNotesGroup = () => {
    if (groupName && selectedColor) {
      const newNotesGroup = {
        name: groupName,
        color: selectedColor,
      };

      // Update notesGroups
      const updatedNotesGroups = [...notesGroups, newNotesGroup];
      setNotesGroups(updatedNotesGroups);

      // Update local storage
      localStorage.setItem("notesGroups", JSON.stringify(updatedNotesGroups));

      setGroupName("");
      setSelectedColor("");
      setShowModal(false);
    }
  };

  const showGroupPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  useEffect(() => {
    // Load notesGroups from local storage
    const notesGroupsData =
      JSON.parse(localStorage.getItem("notesGroups")) || [];
    setNotesGroups(notesGroupsData);
  }, []);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["app-logo"]}>Notes Nest</div>
      <button
        className={styles["create-notes-group-btn"]}
        onClick={() => setShowModal(true)}
        style={{ whiteSpace: "nowrap" }}
      >
        <FontAwesomeIcon icon={faPlus} /> Create Notes Group
      </button>
      <div className={styles["container"]}>
        <div className={styles["notes-group-container"]}>
          {notesGroups.map((group, index) => (
            <div
              key={index}
              className={`${styles["new-group-1"]} ${
                selectedGroup === group ? styles["selected-group"] : ""
              }`}
              onClick={() => {
                onGroupClick(group);
                setSelectedGroup(group);
                if (window.innerWidth < 520) {
                  showGroupPopup();
                }
              }}

            >
              <div
                className={styles["notes-group-icon"]}
                style={{ backgroundColor: group.color, cursor: "pointer" }}
              >
                <span>
                  {group.name
                    .split(" ")
                    .filter((word) => word.length > 0)
                    .map((word, index, words) =>
                      words.length === 1
                        ? word[0]
                        : index === 0 || index === words.length - 1
                        ? word[0]
                        : ""
                    )
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              <div
                className={styles["notes-group-name"]}
                style={{ cursor: "pointer" }}
              >
                {group.name.length > 15
                  ? group.name.substring(0, 15) + "..."
                  : group.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal-diaplay ----------------------------------------------------*/}
      {showModal && (
        <div className={styles["backdrop"]}>
          <div className={`${styles["modal-overlay"]} ${styles["centered"]}`}>
            <div className={styles["modal"]}>
              <h2>Create New Notes Group</h2>
              <div className={styles["group-name-input-section"]}>
                <label htmlFor="group-name">Group Name:</label>
                <input
                  type="text"
                  id="group-name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter group name..."
                />
              </div>
              <div className={styles["color-picker-section"]}>
                <label>Color:</label>
                <div className={styles["color-picker"]}>
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`${styles["color-option"]} ${
                        selectedColor === color ? styles["selected-color"] : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className={styles["modal-btn-container"]}>
                <button onClick={createNotesGroup}>Create</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
     {/* Popup */}
     {showPopup && (
        <div className={styles["popup-notification"]}>
          Notes Group opened below
        </div>
      )}
    </div>
  );
}

export default NotesGroup;
