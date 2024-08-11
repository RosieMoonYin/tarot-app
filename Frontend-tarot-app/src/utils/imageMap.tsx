import hermitFront from "../assets/hermit.png";
import loversFront from "../assets/lovers.png";
import emperorFront from "../assets/emperor.png";
import hierophantFront from "../assets/hierophant.png";
import backImg from "../assets/tarot-card-back.png";

export const imageMap: {
  [key: string]: {
    frontImg: string;
    backImg: string;
  };
} = {
  "1": {
    frontImg: hermitFront,
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
};
