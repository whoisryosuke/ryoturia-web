import { create } from "zustand";

export type WhiteNotes = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type BlackNotes = "C#" | "D#" | "F#" | "G#" | "A#";
export type BaseNote = WhiteNotes | BlackNotes;
export type Octaves = "1" | "2" | "3" | "4" | "5" | "6" | "7";
export type Note = `${BaseNote}${Octaves}`;

export type UserInputMap = Record<Note, boolean>;
// Object.entries() version that's commonly used to iterate over it easily
export type UserInputMapEntries = [Note, boolean][];

const DEFAULT_USER_MAP: UserInputMap = {
  C1: false,
  C2: false,
  C3: false,
  C4: false,
  C5: false,
  C6: false,
  C7: false,
  D1: false,
  D2: false,
  D3: false,
  D4: false,
  D5: false,
  D6: false,
  D7: false,
  E1: false,
  E2: false,
  E3: false,
  E4: false,
  E5: false,
  E6: false,
  E7: false,
  F1: false,
  F2: false,
  F3: false,
  F4: false,
  F5: false,
  F6: false,
  F7: false,
  G1: false,
  G2: false,
  G3: false,
  G4: false,
  G5: false,
  G6: false,
  G7: false,
  A1: false,
  A2: false,
  A3: false,
  A4: false,
  A5: false,
  A6: false,
  A7: false,
  B1: false,
  B2: false,
  B3: false,
  B4: false,
  B5: false,
  B6: false,
  B7: false,
  "C#": false,
  "D#": false,
  "F#": false,
  "G#": false,
  "A#": false,
  "C#1": false,
  "C#2": false,
  "C#3": false,
  "C#4": false,
  "C#5": false,
  "C#6": false,
  "C#7": false,
  "C##": false,
  "D#1": false,
  "D#2": false,
  "D#3": false,
  "D#4": false,
  "D#5": false,
  "D#6": false,
  "D#7": false,
  "D##": false,
  "E#": false,
  "F#1": false,
  "F#2": false,
  "F#3": false,
  "F#4": false,
  "F#5": false,
  "F#6": false,
  "F#7": false,
  "F##": false,
  "G#1": false,
  "G#2": false,
  "G#3": false,
  "G#4": false,
  "G#5": false,
  "G#6": false,
  "G#7": false,
  "G##": false,
  "A#1": false,
  "A#2": false,
  "A#3": false,
  "A#4": false,
  "A#5": false,
  "A#6": false,
  "A#7": false,
  "A##": false,
  "B#": false,
};

export type UserInputKeys = keyof UserInputMap;

interface InputState {
  input: UserInputMap;
  setInput: (key: UserInputKeys, input: boolean) => void;
  setMultiInput: (keys: Partial<UserInputMap>) => void;

  currentDevice: InputDevices;
  setCurrentDevice: (currentDevice: InputDevices) => void;
  deviceName: string;
  setDeviceName: (deviceName: string) => void;
}

export const useInputStore = create<InputState>()((set) => ({
  input: DEFAULT_USER_MAP,
  setInput: (key, input) =>
    set((state) => ({ input: { ...state.input, [key]: input } })),
  setMultiInput: (keys) =>
    set((state) => ({ input: { ...state.input, ...keys } })),

  currentDevice: "KEYBOARD",
  setCurrentDevice: (currentDevice) => set(() => ({ currentDevice })),
  deviceName: "Keyboard",
  setDeviceName: (deviceName) => set(() => ({ deviceName })),
}));
