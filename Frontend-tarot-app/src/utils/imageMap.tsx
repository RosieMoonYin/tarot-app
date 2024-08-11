import hermitFront from "../assets/hermit.png";
import loversFront from "../assets/lovers.png";
import emperorFront from "../assets/emperor.png";
import hierophantFront from "../assets/hierophant.png";
import foolFront from "../assets/thefool.png";
import backImg from "../assets/tarot-card-back.png";
import chariotFront from "../assets/chariot.png";
import justiceFront from "../assets/justice.png";
import strengthFront from "../assets/strength.png";
import wheelFront from "../assets/wheel-of-fortune.png";

export const imageMap: {
  [key: string]: {
    frontImg: string;
    backImg: string;
  };
} = {
  "1": {
    frontImg: foolFront,
    backImg: backImg,
  },
  "2": {
    frontImg: loversFront,
    backImg: backImg,
  },
  "3": {
    frontImg: emperorFront,
    backImg: backImg,
  },
  "4": {
    frontImg: hierophantFront,
    backImg: backImg,
  },
  "5": {
    frontImg: chariotFront,
    backImg: backImg,
  },
  "6": {
    frontImg: justiceFront,
    backImg: backImg,
  },
  "7": {
    frontImg: strengthFront,
    backImg: backImg,
  },
  "8": {
    frontImg: hermitFront,
    backImg: backImg,
  },
  "9": {
    frontImg: wheelFront,
    backImg: backImg,
  },
};
