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
      
      <div className="grid grid-cols-7 gap-5 pt-5 px-1 lg:px-10 overflow-hidden">
        {imagePaths.map((imagePath, index) => (
          <div key={index} className={`thumbnail ${activeIndex === index ? 'border-4 border-indigo-500 p-1 rounded-xl' : 'border-4 border-grey-500 p-1 rounded-xl'}`} onClick={() => handleImageClick(index)}>
            <img src={imagePath} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>



                        {/* <div className='mx-auto w-full px-6 lg:px-8 bg-gray-100 p-16'>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                                <div className='relative mt-15 group'>
                                    <img src='/images/prowoks-workbench-taskdetails1.png' alt='' className='transition group-hover:scale-110 w-full object-contain object-center' />
                                </div>
                                <div className='relative mt-15 group'>
                                    <img src='/images/prowoks-workbench-taskdetails2.png' alt='' className='transition group-hover:scale-110 w-full object-contain object-center' />
                                </div>
                                <div className='relative mt-15 group'>
                                    <img src='/images/prowoks-workbench-taskdetails3.png' alt='' className='transition group-hover:scale-110 w-full object-contain object-center' />
                                </div>
                            </div>
                        </div> */}
    </div>
  );
};

export default ImageGallery;
