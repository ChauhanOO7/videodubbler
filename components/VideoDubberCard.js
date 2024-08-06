import Image from 'next/image';

export default function VideoDubberCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden lg:flex lg:h-60">
      <div className="p-10 lg:text-2xl">
        <Image className="ml-2 lg:ml-3" src="/kiss-icon.png" alt="Kiss Icon" width={72} height={72} />
        <div className="ml-3 text-left lg:w-96">
          <h2 className="text-lg font-bold text-gray-900">VideoDubber - Fast Video Translator</h2>
          <p className="text-gray-600">Translate videos in your own voice, globalize in a click!</p>
        </div>
      </div>
      <div className="flex pl-10 pb-5 lg:items-end lg:mr-5 lg:mb-2">
        <button className="bg-white text-gray-900 font-semibold py-1 px-3 rounded mx-2 lg:h-16 lg:w-32 border border-gray-500">
          Visit
        </button>
        <button className="flex items-center bg-red-500 text-white font-semibold py-1 px-8 rounded lg:h-16 lg:w-48">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          UPVOTED 38
        </button>
      </div>
    </div>
  );
}
