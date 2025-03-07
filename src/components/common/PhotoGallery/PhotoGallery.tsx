import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useEventPhotosFetch } from '../../../utils/hooks';
import { EventPhoto } from '@alexwilk/spacesteps-types';
import styles from './PhotoGallery.module.scss';

interface PhotoGalleryProps {
  images: EventPhoto[] | null;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const { onDelete } = useEventPhotosFetch();

  return (
    <div className={styles.gallery}>
      {images?.map((image) => (
        <div key={image.photo_id} className={styles.tile}>
          <img
            src={image.photo_url}
            alt={`${image.photo_id} `}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <FaTrash
              className={styles.delete}
              onClick={() => onDelete(image.photo_id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export { PhotoGallery };
