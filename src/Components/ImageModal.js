import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark } from "react-icons/fa6";
const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="image-modal-overlay w-full h-full fixed top-0 left-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} // 在此处添加点击事件处理程序
        >
          <motion.div
            className="   bg-white absolute top-1/2 left-1/2  "
            initial={{ scale: 0,x:'-50%', y:"-50%"}}
            animate={{ scale: 1,x:'-50%', y:"-50%" }}
            exit={{ scale: 0,x:'-50%', y:"-50%" }}
          >
            <img src={imageUrl} alt="Image" className='max-w-full ' />
            <button onClick={handleClose} className=' absolute -top-6 -right-6 text-white'><FaXmark size={25} /></button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;