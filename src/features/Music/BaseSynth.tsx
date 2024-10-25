import React, { useEffect, useRef } from "react";
import { UserInputKeys, UserInputMap, useInputStore } from "../../store/input";
import * as Tone from "tone";
import { useAppStore } from "@/store/app";

const SYNTH_TYPES = ["PolySynth", "Sampler"] as const;

type Props = {
  type: typeof SYNTH_TYPES[number];
  config?: any;
};

const BaseSynth = ({ type, config = {} }: Props) => {
  const notesPlaying = useRef<UserInputMap>({});
  const { input } = useInputStore();
  const { mute, setMute, setWaveform, setFft } = useAppStore();
  const loaded = useRef(false);

  // Create a synth and connect it to the main output (your speakers)
  const synth = useRef<Tone.PolySynth | Tone.Sampler | null>(null);
  const waveform = useRef<Tone.Waveform | null>(null);
  const fft = useRef<Tone.FFT | null>(null);
  const inputKeys = Object.keys(input) as UserInputKeys[];

  useEffect(() => {
    // If we're muted, don't play anything
    if (mute) return;
    // Make sure Synth is loaded before playing notes (or it crashes app)
    // if (!loaded.current) return;
    const now = Tone.now();
    if (!synth.current) return;

    // Find out what input changed
    const pressedKeys = inputKeys.filter(
      (key) => input[key] && !notesPlaying.current[key]
    );
    const releasedKeys = inputKeys.filter(
      (key) => !input[key] && notesPlaying.current[key]
    );

    pressedKeys.forEach((key) => {
      Tone.start();
      //   console.log("playing note!");
      synth.current?.triggerAttack(key, now);
      notesPlaying.current[key] = true;
    });

    releasedKeys.forEach((key) => {
      Tone.start();
      //   console.log("releasing note!");
      synth.current?.triggerRelease(key, now);
      notesPlaying.current[key] = false;
    });

    if (pressedKeys.length == 0) synth.current.releaseAll(now + 3);
  }, [input]);

  useEffect(() => {
    if (!synth.current) {
      console.log("creating synth");
      // Initialize plugins
      fft.current = new Tone.FFT();
      waveform.current = new Tone.Waveform();

      // Initialize synth with user's config
      // and "chain" in the plugins
      synth.current = new Tone[type]({
        ...config,
        onload: () => {
          // loaded.current = true;
          console.log("loaded now!");
        },
      })
        .chain(waveform.current, Tone.Destination)
        .chain(fft.current, Tone.Destination)
        .toDestination();

      setWaveform(waveform);
      setFft(fft);
    }

    return () => {
      if (synth.current) synth.current.releaseAll();
    };
  }, []);

  // Mute audio when requested
  useEffect(() => {
    if (mute) {
      const now = Tone.now();
      synth.current?.releaseAll(now);
      // setMute(false);
    }
  }, [mute]);

  return <></>;
};

export default BaseSynth;
