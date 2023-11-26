import React from "react";
import { Dialog } from "primereact/dialog";
export const BlogModal = ({ visible, handleClose, title, text, date }) => {
  return (
    <Dialog
      blockScroll={true}
      maskStyle={{ color: "red", backdropFilter: "blur(2px)" }}
      draggable={false}
      position="center"
      className="bg-blue-800 bg-opacity-80 border border-blue-400 px-6 py-4 max-w-[320px] md:max-w-lg max-h-[450px] w-full h-auto"
      visible={visible}
      onHide={handleClose}
    >
      
    </Dialog>
  );
};
