export default function DesignPhilosophy() {
  return (
    <div className='w-full space-y-8'>
      <h1 className='text-[3rem] text-white font-[Lora] leading-normal font-black'>Key things I&apos;ve learnt</h1>
      <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">Here are a few key takeaways I’ve learned over my years as a designer. They’ve come in handy for me, hopefully they’ll come in handy for you too.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 text-zinc-400'>

        <div className='flex flex-col md:flex-row border border-gray-800 bg-page gap-4 rounded h-full transition duration-500 p-6'>
          <div className='relative w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
            <img src='images/BalanceIcon.png' className="" />
          </div>

          <div className='space-y-2'>
            <h3 className='text-gray-100 text-xl font-lora font-bold'>Balancing Design Freedom</h3>
            <p className=" leading-relaxed">Let standards guide, not dictate, our design processes. What works in one situation may not apply universally.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row border border-gray-800 bg-page gap-4 rounded h-full transition duration-500 p-6'>
          <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
            <img src='images/HarmonyIcon.png' />
          </div>
          <div className='space-y-2'>
            <h3 className='text-gray-100 text-xl font-lora font-bold'>Unvailing The Harmony</h3>
            <p className="leading-relaxed">Design is similar to mathematics; understanding the problem simplifies proposing a solution.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row border border-gray-800 bg-page gap-4 rounded h-full transition duration-500 p-6'>
          <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
            <img src='images/PrecisionIcon.png' />
          </div>
          <div className='space-y-2'>
            <h3 className='text-gray-100 text-xl font-lora font-bold'>Precision and Purpose</h3>
            <p className="leading-relaxed">I focus on design details, understanding the core problem, and identifying success metrics.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row border border-gray-800 bg-page gap-4 rounded h-full transition duration-500 p-6'>
          <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
            <img src='images/SuccessIcon.png' />
          </div>
          <div className='space-y-2'>
            <h3 className='text-gray-100 text-xl font-lora font-bold'>Successful Product Development</h3>
            <p className="leading-relaxed">Balancing business goals, user needs, and available technology is key to creating a successful product.</p>
          </div>
        </div>

      </div>
    </div>
  )
}