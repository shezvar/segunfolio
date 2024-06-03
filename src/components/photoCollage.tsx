import React from 'react';

type MasonryPhotoGalleryProps = {
  images: string[];
};

const getRandomHeight = () => {
  const heights = [200, 250, 300, 350, 400, 450];
  return heights[Math.floor(Math.random() * heights.length)];
};

const MasonryPhotoGallery: React.FC<MasonryPhotoGalleryProps> = ({ images }) => {
  return (
    <div style={styles.masonry}>
      {images.map((src, index) => {
        const randomHeight = getRandomHeight();
        return (
          <div key={index} style={{ ...styles.item, height: `${randomHeight}px` }}>
            <img src={src} alt={`Photo ${index + 1}`} style={styles.image} />
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  masonry: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px',
  },
  item: {
    overflow: 'hidden' as 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
  },
};

export default MasonryPhotoGallery;
