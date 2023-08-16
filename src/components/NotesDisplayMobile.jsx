import React,{useState, useEffect} from 'react'
import NotesDisplay from './NotesDisplay'

function NotesDisplayMobile() {
    const [showDefaultView, setShowDefaultView] = useState(true);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [savedNotesMap, setSavedNotesMap] = useState(new Map());
    const [notesGroups, setNotesGroups] = useState([]);

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
        setShowDefaultView(false);
      };
    
      useEffect(() => {
        // Load savedNotesMap from local storage
        const savedNotesMapData = JSON.parse(localStorage.getItem('savedNotesMap')) || {};
        setSavedNotesMap(new Map(Object.entries(savedNotesMapData)));
    
        // Load notesGroups from local storage
        const notesGroupsData = JSON.parse(localStorage.getItem('notesGroups')) || [];
        setNotesGroups(notesGroupsData);
      }, []);
  return (
    <div><NotesDisplay showDefaultView={showDefaultView} selectedGroup={selectedGroup}/></div>
  )
}

export default NotesDisplayMobile      