import AirCarIcon from './assets/AirCarIcon.tsx';
import BitterFlyIcon from './assets/BitterFlyIcon.tsx';
import DiamondIcon from './assets/DiamondIcon.tsx';
import MacroHardIcon from './assets/MacroHardIcon.tsx';
import RobinWoodIcon from './assets/RobinWoodIcon.tsx';
import SwapDoIcon from './assets/SwapDoIcon.tsx';
import WanNainIcon from './assets/WanNainIcon.tsx';
import WirangIcon from './assets/WirangIcon.tsx';

import styles from './LogoStrip.module.css';

const images = [
  AirCarIcon,
  BitterFlyIcon,
  DiamondIcon,
  MacroHardIcon,
  RobinWoodIcon,
  SwapDoIcon,
  WanNainIcon,
  WirangIcon,
];

const LogoStrip = () => {
  return (
    <>
      {images.map((Image, index) => {
        return (
          <div className={styles.slide} key={index}>
            <Image />
          </div>
        );
      })}
    </>
  );
};

export default LogoStrip;
