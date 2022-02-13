import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  hasError as hasErrorAtom,
  errorInfo as errorInfoAtom,
} from "../store/atoms.js";
import { useRecoilState } from "recoil";
const Snackbars = () => {
  const [hasError, setHasError] = useRecoilState(hasErrorAtom);
  const [errorInfo] = useRecoilState(errorInfoAtom);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setHasError(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={hasError}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert severity="info" sx={{ width: "100%" }}>
        {errorInfo}
      </MuiAlert>
    </Snackbar>
  );
};

export default Snackbars;
