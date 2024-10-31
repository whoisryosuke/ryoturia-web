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
  const {
    mute,
    setMute,
    setWaveform,
    setFft,
    volume,
    attack,
    release,
    pitchShift,
  } = useAppStore();
  const loaded = useRef(false);

  // Create a synth and connect it to the main output (your speakers)
  const synth = useRef<Tone.PolySynth | Tone.Sampler | null>(null);
  const pitchShiftComponent = useRef<Tone.PitchShift | null>(null);
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
      pitchShiftComponent.current = new Tone.PitchShift(4);

      // Initialize synth with user's config
      // and "chain" in the plugins
      synth.current = new Tone[type]({
        ...config,
        onload: () => {
          // loaded.current = true;
          console.log("loaded now!");
        },
      })
        .chain(waveform.current, Tone.getDestination())
        .chain(fft.current, Tone.getDestination())
        .chain(pitchShiftComponent.current, Tone.getDestination())
        .toDestination();

      // synth.current.connect(pitchShift.current);

      setWaveform(waveform);
      setFft(fft);
    }

    return () => {
      if (synth.current) {
        synth.current.releaseAll();
        synth.current.dispose();
        waveform.current.dispose();
        fft.current.dispose();
      }
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

  // Sync volume with store
  useEffect(() => {
    if (synth.current && synth.current.volume.value != volume) {
      synth.current.volume.set({
        value: volume,
      });
    }
  }, [volume]);

  // Sync envelope with store
  useEffect(() => {
    const sampler = synth.current as Tone.Sampler;
    if (!sampler) return;

    if (sampler.attack != attack) {
      sampler.set({
        attack: attack,
      });
    }
    if (sampler.release != release) {
      sampler.set({
        attack: release,
      });
    }
  }, [attack, release]);

  // Sync pitch shift with store
  useEffect(() => {
    if (pitchShiftComponent.current.pitch != pitchShift) {
      pitchShiftComponent.current.set({
        pitch: pitchShift,
      });
    }
  }, [pitchShift]);

  return <></>;
};

export default BaseSynth;
