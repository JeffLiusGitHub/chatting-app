import React from "react";
import closeIcon from "../../icons/closeIcon.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./InfoBar.module.css";
import { dark as darkAtom } from "../../store/atoms";
import { useRecoilState } from "recoil";
import { ThemeSwitch } from "./switch";

const InfoBar = ({ room }) => {
  const [dark, setDark] = useRecoilState(darkAtom);
  return (
    <div className={styles.infoBar}>
      <div className={styles.leftInnerContainer}>
        <h3>Room:{room}</h3>
        <div className={styles.icon}>
          <FormControlLabel
            checked={dark}
            onChange={(event) => setDark(event.target.checked)}
            control={<ThemeSwitch sx={{ m: 1 }} />}
            label={dark ? "Dark mode" : "Bright mode"}
          />
        </div>
      </div>
      <div className={styles.rightInnerContainer}>
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
