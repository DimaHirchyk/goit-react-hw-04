import Modal from "react-modal";

export default function ImageModal({ isOpen, onClose, photo }) {
  return (
    <>
      <Modal>
        <img src={photo.urls.regular} alt={photo.description} />
      </Modal>
    </>
  );
}
