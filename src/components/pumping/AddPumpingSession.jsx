import React, { useState } from "react";
import axios from "axios";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

function AddPumpingSession(props) {
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState("");
  const [leftVolume, setLeftVolume] = useState("");
  const [rightVolume, setRightVolume] = useState("");
  const [notes, setNotes] = useState("");

  function addEntry(e) {
    e.preventDefault();
    const newSession = { dateTime, duration, leftVolume, rightVolume, notes };

    axios
      .post(
        "https://breast-pump-tracker-378404.wl.r.appspot.com/sessions",
        newSession
      )
      .then((res) => {
        axios
          .get("https://breast-pump-tracker-378404.wl.r.appspot.com")
          .then((res) => {
            // Sort res.data
            res.data.sort((a, b) => {
              const dateA = new Date(a.dateTime);
              const dateB = new Date(b.dateTime);
              return dateB.getTime() - dateA.getTime();
            });
            props.setPumpingLog(res.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

    setDateTime("");
    setDuration("");
    setLeftVolume("");
    setRightVolume("");
    setNotes("");

    confetti({
      particleCount: 150,
      spread: 60,
    });
  }

  return (
    <div id='addForm'>
      <form>
        <div className='form-group'>
          <input
            className='form-control'
            id='date'
            type='datetime-local'
            placeholder='dateTime'
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <input
          className='form-control'
          type='number'
          placeholder='Duration (min)'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <div className='row'>
          <div className='col'>
            <input
              className='form-control'
              type='number'
              placeholder='Left (oz)'
              value={leftVolume}
              onChange={(e) => setLeftVolume(e.target.value)}
              required
            />
          </div>
          <div className='col'>
            <input
              className='form-control'
              type='number'
              placeholder='Right (oz)'
              value={rightVolume}
              onChange={(e) => setRightVolume(e.target.value)}
              required
            />
          </div>
        </div>
        <textarea
          className='form-control'
          type='text'
          placeholder='Notes'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows='3'
          required
        />
        <button onClick={addEntry} className='btn btn-secondary float-right'>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPumpingSession;
