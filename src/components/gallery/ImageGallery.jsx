import ImageCard from "../imgCard/ImageCard";

export default function ImageGallery({ images, onClick }) {
  return (
    <>
      <ul>
        {images.map((image) => (
          <li key={image.id} onClick={() => onClick(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}
