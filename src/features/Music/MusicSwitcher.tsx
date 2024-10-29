import React from "react";
import { useAppStore } from "@/store/app";
import Music from "./Music";

type Props = {};

const MusicSwitcher = (props: Props) => {
  const { synthType } = useAppStore();

  return <Music type={synthType} />;
};

export default MusicSwitcher;
