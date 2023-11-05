import { useEffect, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.closest(".modal")) {
        return;
      }

      closeModal();
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return { isModalOpen, openModal, closeModal };
};

export const useModalInfo = () => {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

  const openModalInfo = () => {
    setIsModalInfoOpen(true);
  };

  const closeModalInfo = () => {
    setIsModalInfoOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalInfoOpen && e.target.closest(".contain-task")) {
        return;
      }

      closeModalInfo();
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalInfoOpen]);

  return { isModalInfoOpen, openModalInfo, closeModalInfo };
};
