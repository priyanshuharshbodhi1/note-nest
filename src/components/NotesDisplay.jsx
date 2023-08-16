import React, { useState, useEffect } from "react";
import styles from "../css/NotesDisplay.module.css";
import defaultImage from "../assets/images/default-view.png";
import lock from "../assets/images/privacy-lock.png";
import postBtn from "../assets/images/post.png";

function NotesDisplay({ showDefaultView, selectedGroup, isSmallScreen }) {
  //typing input
  const [message, setMessage] = useState("");
  const [savedNotesMap, setSavedNotesMap] = useState(new Map());
  

  useEffect(() => {
    // Load savedNotesMap from local storage
    const savedNotesMapData =
      JSON.parse(localStorage.getItem("savedNotesMap")) || {};
    setSavedNotesMap(new Map(Object.entries(savedNotesMapData)));
  }, []);

  const handleTextareaKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handlePostClick();
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePostClick = () => {
    if (message.trim() !== "") {
      const currentDate = new Date();

      const optionsDate = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = currentDate.toLocaleDateString(
        undefined,
        optionsDate
      );

      const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
      const formattedTime = currentDate.toLocaleTimeString(
        undefined,
        optionsTime
      );

      const newNote = {
        date: formattedDate,
        time: formattedTime,
        message: message,
      };
      const updatedNotesMap = new Map(savedNotesMap);
      if (!updatedNotesMap.has(selectedGroup.name)) {
        updatedNotesMap.set(selectedGroup.name, [newNote]);
      } else {
        updatedNotesMap.get(selectedGroup.name).push(newNote);
      }

      setSavedNotesMap(updatedNotesMap);
      setMessage("");

      // Save savedNotesMap to localStorage
      localStorage.setItem(
        "savedNotesMap",
        JSON.stringify(Object.fromEntries(updatedNotesMap))
      );
    }
  };

  //for typepad

  return (
    <div className={`${styles["main-container"]} ${isSmallScreen ? styles["small-screen"] : ""}`}>
      {showDefaultView ? (
        <div className={styles["default-view"]}>
          <img
            src={defaultImage}
            alt="Default View"
            className={styles["image"]}
          />
          <div className={styles["app-logo"]}>Notes Nest</div>
          <div className={styles["app-description"]}>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </div>
          <div className={styles["encription-para"]}>
            <img
              src={lock}
              alt="Default View"
              className={styles["lock-image"]}
            />{" "}
            end-to-end encrypted
          </div>
        </div>
      ) : (
        <div className={styles["note-group-view"]}>
          <div className={styles["note-group-header"]}>
            <div
              className={styles["notes-group-icon"]}
              style={{ backgroundColor: selectedGroup.color }}
            >
              <span>
                {selectedGroup.name
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
            <div className={styles["notes-group-name"]}>
              {selectedGroup.name.length > 35
                ? selectedGroup.name.substring(0, 35) + "..."
                : selectedGroup.name}
            </div>
          </div>
          <div className={styles["saved-notes-container"]}>
            {savedNotesMap.get(selectedGroup.name)?.map((note, index) => (
              <div className={styles["saved-notes"]} key={index}>
                <div className={styles["date-time-box"]}>
                  <div className={styles["date"]}>{note.date}</div>
                  <div className={styles["time"]}>{note.time}</div>
                </div>
                <div className={styles["note-box"]}>
                  <div className={styles["note-message"]}>{note.message}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["note-input-typepad"]}>
            <div className={styles["textarea-wrapper"]}>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                type="text"
                value={message}
                onKeyDown={handleTextareaKeyDown}
                onChange={handleInputChange}
                placeholder="Type your message here ........"
                className={styles["typing-input"]}
              ></textarea>
            </div>
            <img
              src={postBtn}
              alt="Default View"
              className={styles["post-btn"]}
              onClick={handlePostClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesDisplay;
