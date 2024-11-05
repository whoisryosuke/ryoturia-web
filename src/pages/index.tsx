import Footer from "@/components/dom/Footer";
import Logo from "@/components/dom/Logo/Logo";
import Sidebar from "@/components/dom/Sidebar/Sidebar";
import DebugInput from "@/features/input/DebugInput";
import MusicSwitcher from "@/features/Music/MusicSwitcher";
import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import Shader from '@/components/canvas/ShaderExample/ShaderExample'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(
  () => import("@/components/canvas/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);
const PianoScene = dynamic(
  () => import("@/components/canvas/PianoScene/PianoScene"),
  {
    ssr: false,
  }
);

// DOM elements here
const DOM = () => {
  return (
    <>
      <Logo />
      <Sidebar />
      <MusicSwitcher />
      <Footer />
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  // Example of using the router to change pages
  // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)
  const { router } = useStore();
  const handleOnClick = () => {
    router.push("/two");
  };

  return (
    <>
      <PianoScene />
    </>
  );
};

export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "",
    },
  };
}
