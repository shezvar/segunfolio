import React from 'react';

// Define a type for the imagePaths prop
type ImagePathsProp = string[];

const ImageGallery: React.FC<{ imagePaths: ImagePathsProp }> = ({ imagePaths }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='mx-auto w-full'>
      <div className="active-image">
        <img src={imagePaths[activeIndex]} alt={`Image ${activeIndex}`} className='transition group-hover:scale-110 w-full object-contain object-center' />
      </div>
      
      <div className="flex gap-5 pt-5 px-1 lg:px-10 overflow-hidden">
        {imagePaths.map((imagePath, index) => (
          <div key={index} className={`thumbnail ${activeIndex === index ? 'border-4 border-indigo-500 p-1 rounded-xl' : 'cursor-pointer border-4 border-grey-500 p-1 rounded-xl'}`} onClick={() => handleImageClick(index)}>
            <img src={imagePath} alt={`Thumbnail ${index}`} className='w-[7rem]'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
