/**
 * @file React component of buttons with multiple effects.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 * @reference <https://mui.com/components/snackbars/>
 */

import React, { createContext, useEffect, useState } from "react";

import Alert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

type SnackbarOriginVertical = "top" | "bottom";
type SnackbarOriginHorizontal = "left" | "center" | "right";

interface UtilityContextInterface {
  showAlertSnack: ({
    message,
    severity,
    vertical,
    horizontal,
    autoHideDuration,
  }: {
    message: string;
    severity?: AlertColor;
    vertical?: SnackbarOriginVertical;
    horizontal?: SnackbarOriginHorizontal;
    autoHideDuration?: number;
  }) => void;
  showDialog: ({
    title,
    description,
    image,
  }: {
    title: string;
    description?: string;
    image?: string;
  }) => void;
}

export const UtilityContext = createContext<UtilityContextInterface | undefined>(undefined);

type UtilityContextProps = { children: React.ReactNode };

const UtilityContextProvider: React.FC<UtilityContextProps> = ({ children }) => {
  /** <--- SnackBar --- */
  const [snackBarProps, setSnackBarProps] = useState<{
    isOpen: boolean;
    message: string;
    severity: AlertColor;
    vertical: SnackbarOriginVertical;
    horizontal: SnackbarOriginHorizontal;
    autoHideDuration: number;
  }>({
    isOpen: false,
    message: "",
    severity: "error",
    vertical: "bottom",
    horizontal: "left",
    autoHideDuration: 3000,
  });

  /**
   * @summary Show SnackBar Alert Message.
   */
  const showAlertSnack = ({
    message,
    severity = "error",
    vertical = "bottom",
    horizontal = "left",
    autoHideDuration = 3000,
  }: {
    message: string;
    severity?: AlertColor;
    vertical?: SnackbarOriginVertical;
    horizontal?: SnackbarOriginHorizontal;
    autoHideDuration?: number;
  }): void => {
    setSnackBarProps({
      isOpen: true,
      message: message,
      severity: severity,
      vertical: vertical,
      horizontal: horizontal,
      autoHideDuration: autoHideDuration,
    });
  };
  const handleCloseSnack = (): void => {
    setSnackBarProps({
      isOpen: false,
      message: "",
      severity: "error",
      vertical: "bottom",
      horizontal: "left",
      autoHideDuration: 3000,
    });
  };
  /** --- END SnackBar ---> */

  /** <--- Dialog --- */
  const [dialogProps, setDialogProps] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    image?: string;
  }>({
    isOpen: false,
    title: "",
    description: "",
    image: undefined,
  });

  const showDialog = ({
    title,
    description = "",
    image,
  }: {
    title: string;
    description?: string;
    image?: string;
  }): void => {
    setDialogProps({
      isOpen: true,
      title: title,
      description: description,
      image: image,
    });
  };

  const handleCloseDialog = (): void => {
    setDialogProps({
      isOpen: false,
      title: "",
      description: "",
      image: undefined,
    });
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  useEffect(() => {
    if (dialogProps.isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [dialogProps.isOpen]);
  /** --- END Dialog ---> */

  return (
    <UtilityContext.Provider
      value={{
        showAlertSnack,
        showDialog,
      }}
    >
      {children}
      <Snackbar
        open={snackBarProps.isOpen}
        autoHideDuration={snackBarProps.autoHideDuration}
        anchorOrigin={{
          vertical: snackBarProps.vertical,
          horizontal: snackBarProps.horizontal,
        }}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
        onClose={handleCloseSnack}
        className={snackBarProps.isOpen ? "" : "hidden"}
      >
        <Alert onClose={handleCloseSnack} severity={snackBarProps.severity} className="w-full">
          {snackBarProps.message}
        </Alert>
      </Snackbar>
      <Dialog
        open={dialogProps.isOpen}
        onClose={handleCloseDialog}
        scroll={"paper"}
        fullWidth={true}
        maxWidth={"sm"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className="flex items-center font-genjyuu-gothic">
          <div className="flex items-center mr-auto">
            <div className="ml-2">
              <span className="bold-text">{dialogProps.title}</span>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <IconButton
              onClick={() => {
                handleCloseDialog();
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="font-genjyuu-gothic"
          >
            {dialogProps.image !== undefined && (
              <div className="mx-auto w-full h-60 relative">
                <a href={dialogProps.image} target="_blank" rel="noreferrer">
                  <Image
                    src={dialogProps.image}
                    alt={dialogProps.title}
                    fill={true}
                    className="object-contain"
                  />
                </a>
              </div>
            )}
            {dialogProps.description}
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
        </DialogActions> */}
      </Dialog>
    </UtilityContext.Provider>
  );
};

export default UtilityContextProvider;
