import { NoteMessageEvent, WebMidi } from "webmidi";
import React, { useEffect, useState } from "react";
import { Note, useInputStore } from "@/store/input";

type Props = {};

const MidiKeyboard = (props: Props) => {
  const [instruments, setInstrument] = useState<string[]>([]);
  const [playedNotes, setPlayedNotes] = useState<string[]>([]);
  const [currentNotes, setCurrentNotes] = useState<string[]>([]);
  const { input, setInput } = useInputStore();

  function onEnabled() {
    // Inputs
    WebMidi.inputs.forEach((input) => {
      console.log("manu", input.manufacturer, "name", input.name);

      const checkInstrument = instruments.findIndex(
        (instrument) => instrument === input.name
      );
      if (checkInstrument >= 0) return;
      setInstrument((prevInstruments) => [...prevInstruments, input.name]);
    });

    // Outputs
    WebMidi.outputs.forEach((output) => {
      console.log(output.manufacturer, output.name);
    });
  }

  // console.log("instruments", instruments);
  // console.log("currentNotes", currentNotes);
  // console.log("input", input);
  useEffect(() => {
    WebMidi.enable()
      .then(onEnabled)
      .catch((err) => alert(err));

    return () => {
      WebMidi.disable();
    };
  }, []);

  const keyLog = (e: NoteMessageEvent) => {
    // C2 - C7 (and more if user changes oct +/-)
    console.log(e.note.identifier);
    setPlayedNotes((prevNotes) => [...prevNotes, e.note.identifier]);
    setInput(e.note.identifier as Note, true);
    setCurrentNotes((prevNotes) =>
      Array.from(new Set([...prevNotes, e.note.identifier]))
    );
  };

  const clearKey = (e: NoteMessageEvent) => {
    const clearNote = `${e.note.identifier}`;
    console.log("key off", e.note.identifier, clearNote, currentNotes);
    setInput(e.note.identifier as Note, false);

    setCurrentNotes((prevNotes) =>
      prevNotes.filter((note) => note !== clearNote)
    );
    console.log("clearing key");
  };

  useEffect(() => {
    if (instruments[0]) {
      const myInput = WebMidi.getInputByName(instruments[0]);
      myInput?.addListener("noteon", keyLog);
      myInput?.addListener("noteoff", clearKey);
    }
    return () => {
      if (instruments[0]) {
        const myInput = WebMidi.getInputByName(instruments[0]);
        myInput?.removeListener("noteon", keyLog);
        myInput?.removeListener("noteoff", clearKey);
      }
    };
  }, [instruments]);
  return <></>;
};

export default MidiKeyboard;
