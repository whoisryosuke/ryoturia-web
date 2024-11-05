import { BASE_COLORS, ThemeColors } from "./base";

const shadows = {
  default: `0px 2px 8.4px rgba(0, 0, 0, 0.5),
    0px 0px 16.4px rgba(255, 255, 255, 0.1),
    inset 0px 3px 2px rgba(255, 255, 255, 0.25),
    inset 0px -8px 3px rgba(0, 0, 0, 0.25)`,
  hovered: `0px 2px 8.4px rgba(0, 0, 0, 0.5),
      0px 0px 16.4px rgba(255, 255, 255, 0.1),
      inset 0px 3px 2px rgba(255, 255, 255, 0.25),
      inset 0px -8px 3px rgba(0, 0, 0, 0.25)`,
  pressed: `0px 2px 8.4px rgba(0, 0, 0, 0.5),
      0px 0px 16.4px rgba(153, 233, 242, 0.5),
      inset 0px -3px 2px rgba(255, 255, 255, 0.25),
      inset 0px 8px 3px rgba(0, 0, 0, 0.25)`,
  bottomHighlight: `0px 1px 2px rgba(255, 255, 255, 0.25)`,
  pianoRollNote: `0px 1px 4.2px rgba(0, 0, 0, 0.5),
    0px 0px 8.2px rgba(255, 255, 255, 0.1),
    inset 0px 1.5px 1px rgba(255, 255, 255, 0.25),
    inset 0px -4px 1.5px rgba(0, 0, 0, 0.25)`,
};

export const generateDarkTheme = (color: ThemeColors) => ({
  colors: {
    text: BASE_COLORS["gray-0"],
    textOverlay: "rgba(234,234,241,0.7)",
    textInverted: "rgba(16,16,9,1)",
    reading: "rgba(221,221,228,1)",
    background: BASE_COLORS["gray-9"],
    background_level1: BASE_COLORS["gray-8"],
    background_level2: BASE_COLORS["gray-7"],
    background_level3: BASE_COLORS["gray-6"],
    background_overlay: "rgba(0,0,0,0.8)",
    icon: BASE_COLORS["gray-5"],
    button: {
      bg: {
        default: `linear-gradient(180deg, ${BASE_COLORS["gray-7"]} 0%, ${BASE_COLORS["gray-8"]} 65%)`,
        hovered: `linear-gradient(180deg, ${BASE_COLORS["gray-8"]} 0%, ${BASE_COLORS["gray-9"]} 100%)`,
        pressed: `linear-gradient(180deg, ${BASE_COLORS["gray-8"]} 42.5%, ${BASE_COLORS["gray-7"]} 100%)`,
      },
      text: {
        default: BASE_COLORS["gray-0"],
        disabled: "rgba(0,0,0,0.2)",
      },
      border: {
        default: {
          color: BASE_COLORS["gray-9"],
        },
        hovered: {
          color: BASE_COLORS[`${color}-5`],
        },
      },
    },
    input: {
      bg: {
        default: BASE_COLORS["gray-9"],
      },
    },
    piano: {
      whiteKey: {
        text: BASE_COLORS["gray-6"],
        background: "linear-gradient(270deg, #f2f9ff 0%, #dee2e6 100%)",
        boxShadow: `0px 1px 4.2px rgba(0, 0, 0, 0.5),
    0px 0px 8.2px rgba(255, 255, 255, 0.1),
    inset 0px -4px 1.5px rgba(0, 0, 0, 0.25)`,
      },
      blackKey: {
        background: "linear-gradient(270deg, #262626 0%, #0d0d0d 100%)",
      },
      note: {
        text: BASE_COLORS["gray-9"],
      },
      marker: {
        background: {
          default: BASE_COLORS["gray-5"],
          hovered: BASE_COLORS[`${color}-5`],
          pressed: BASE_COLORS[`${color}-8`],
          playing: BASE_COLORS[`${color}-3`],
        },
      },
    },
    primary: {
      default: BASE_COLORS[`${color}-4`],
      hovered: BASE_COLORS[`${color}-5`],
      pressed: BASE_COLORS[`${color}-6`],
    },
    // secondary: primaryColors.purple[500],
    muted: "#f6f6f9",
    highlight: "hsla(205, 100%, 40%, 0.125)",
  },

  gradients: {
    primary: `linear-gradient(90deg, ${BASE_COLORS[`${color}-2`]} 0%, ${
      BASE_COLORS[`${color}-4`]
    } 100%)`,
    button: {
      active: `linear-gradient(180deg, ${BASE_COLORS[`${color}-7`]} 42.5%, ${
        BASE_COLORS[`${color}-8`]
      } 100%)`,
    },
    pianoNote: {
      default: `linear-gradient(90deg, ${BASE_COLORS[`${color}-7`]} 0%, ${
        BASE_COLORS[`${color}-5`]
      } 100%)`,
    },
    pianoMarker: {
      playing: `linear-gradient(
    269.99deg,
    #22b8cf 0%,
    rgba(34, 184, 207, 0) 99.99%
  )`,
    },
  },

  shadows: shadows,
});

export default generateDarkTheme;
