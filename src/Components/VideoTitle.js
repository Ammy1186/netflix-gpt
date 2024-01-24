import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ( {title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
            <button className='bg-green-800 text-white px-4 py-3 mr-3 shadow-sm rounded-md border-2 border-green-900
            hover:bg-white hover:text-green-900'><FontAwesomeIcon icon= {faPlay} className='mr-2'/>Play Now</button>
            <button className=' hidden md:inline-block bg-gray-700 text-white px-4 py-3 mr-3 shadow-sm rounded-md border-gray-800 border-2
            hover:bg-white hover:text-gray-900'><FontAwesomeIcon icon= {faExclamation} className='mr-2'/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle