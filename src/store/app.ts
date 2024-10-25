import * as Tone from "tone";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { SynthTypes } from "../features/Music/Music";
// import type {} from "@redux-devtools/extension"; // required for devtools typing

interface AppState {
  // Theming
  // theme: ThemeOptions;
  // setTheme: (theme: ThemeOptions) => void;
  // toggleTheme: () => void;
  // colorMode: ThemeColors;
  // setColorMode: (colorMode: ThemeColors) => void;

  // UI
  showGamepad: boolean;
  setShowGamepad: (showGamepad: boolean) => void;

  // Sound state
  mute: boolean;
  setMute: (mute: boolean) => void;
  synthType: SynthTypes;
  setSynthType: (synthType: SynthTypes) => void;
  waveform: React.RefObject<Tone.Waveform> | null;
  setWaveform: (fft: React.RefObject<Tone.Waveform>) => void;
  fft: React.RefObject<Tone.FFT> | null;
  setFft: (fft: React.RefObject<Tone.FFT>) => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    // theme: "dark",
    // setTheme: (theme) => set(() => ({ theme })),
    // toggleTheme: () =>
    //   set((state) => ({
    //     theme: state.theme === "light" ? "dark" : "light",
    //   })),
    // colorMode: "cyan",
    // setColorMode: (colorMode) => set(() => ({ colorMode })),

    // UI
    showGamepad: true,
    setShowGamepad: (showGamepad) => set((state) => ({ showGamepad })),

    // Sound
    mute: false,
    setMute: (mute) => set(() => ({ mute })),
    synthType: "piano",
    setSynthType: (synthType) => set(() => ({ synthType })),
    waveform: null,
    setWaveform: (waveform) => set(() => ({ waveform })),
    fft: null,
    setFft: (fft) => set(() => ({ fft })),
  }))
);
