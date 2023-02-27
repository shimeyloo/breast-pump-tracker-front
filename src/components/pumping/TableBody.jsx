import React, { useState } from "react";
import axios from "axios";

function TableBody(props) {
  const [editSession, setEditSession] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState("");
  const [leftVolume, setLeftVolume] = useState("");
  const [rightVolume, setRightVolume] = useState("");
  const [notes, setNotes] = useState("");

  function editEntry(key) {
    setEditSession(key.id);
    setDateTime(key.dateTime);
    setDuration(key.duration);
    setLeftVolume(key.leftVolume);
    setRightVolume(key.rightVolume);
    setNotes(key.notes);
  }

  function saveEntry(id, serverURL) {
    const updatedSession = {
      dateTime,
      duration,
      leftVolume,
      rightVolume,
      notes,
    };
    axios
      .put(`${serverURL}/${id}`, updatedSession)
      .then((res) => {
        updatedSession["id"] = id;
        let updatedLog = props.pumpingLog.filter((log) => log.id !== id);
        updatedLog = [updatedSession].concat(updatedLog);
        props.setPumpingLog(updatedLog);
      })
      .catch((error) => console.log(error));

    setEditSession("");
  }

  function deleteEntry(id, serverURL) {
    axios
      .delete(`${serverURL}/${id}`)
      .then((res) => {
        let updatedLog = props.pumpingLog.filter((log) => log.id !== id);
        props.setPumpingLog(updatedLog);
      })
      .catch((error) => console.log(error));
  }

  return (
    <tbody>
      {props.pumpingLog.map((key, val) => {
        if (key.id !== editSession) {
          return (
            <tr key={key.id}>
              <td>{key.dateTime}</td>
              <td>{key.duration}</td>
              <td>{key.leftVolume}</td>
              <td>{key.rightVolume}</td>
              <td>{key.notes}</td>
              <td>
                <button
                  className='btn btn-outline-secondary btn-sm float-right'
                  onClick={() => editEntry(key)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-outline-secondary btn-sm float-right'
                  onClick={() => deleteEntry(key.id, props.serverURL)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        } else {
          return (
            <tr key={key.id}>
              <td>
                <input
                  className='form-control'
                  type='datetime-local'
                  placeholder={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                />
              </td>
              <td>
                <input
                  className='form-control'
                  type='number'
                  placeholder={duration + " (min)"}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </td>
              <td>
                <input
                  className='form-control'
                  type='number'
                  placeholder={leftVolume + " (oz)"}
                  onChange={(e) => setLeftVolume(e.target.value)}
                />
              </td>
              <td>
                <input
                  className='form-control'
                  type='number'
                  placeholder={rightVolume + " (oz)"}
                  onChange={(e) => setRightVolume(e.target.value)}
                />
              </td>
              <td>
                <input
                  className='form-control'
                  type='text'
                  placeholder={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </td>
              <td>
                <button
                  className='btn btn-outline-secondary btn-sm float-right'
                  onClick={() => saveEntry(key.id, props.serverURL)}
                >
                  Save
                </button>
              </td>
            </tr>
          );
        }
      })}
    </tbody>
  );
}

export default TableBody;
