import React, { useState } from "react";
import styles from "../css/NotesDisplay.module.css";
import defaultImage from "../assets/images/default-view.png";
import lock from "../assets/images/privacy-lock.png";

function NotesDisplay() {
  //typing input
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePostClick = () => {
    if (message.trim() !== "") {
      // Do something with the posted message, e.g., send it to a server
      console.log("Posted:", message);
      setMessage("");
    }
  };
  return (
    <div className={styles["main-container"]}>
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
          <img src={lock} alt="Default View" className={styles["lock-image"]} />{" "}
          end-to-end encrypted
        </div>
      </div>
      <div className={styles["note-group-view"]}>
        <div className={styles["note-group"]}>
          <div className={styles["note-group-header"]}>
            {/* <div
              className={styles["notes-group-icon"]}
              style={{ backgroundColor: group.color }}
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
            <div className={styles["notes-group-name"]}>
              {group.name.length > 15
                ? group.name.substring(0, 15) + "..."
                : group.name} 
             </div> */}
          </div>
          <div className={styles["saved-notes-container"]}>
            <div className={styles["saved-notes"]}></div>
          </div>
        </div>
        <div className={styles["note-input-typepad"]}>
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className={styles["typing-input"]}
          />
          <button onClick={handlePostClick} className={styles["post-button"]}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesDisplay;
