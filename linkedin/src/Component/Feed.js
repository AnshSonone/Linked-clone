import React from 'react'
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Feed = () => {

    return (
        <div>
            <div className="flex items-center flex-wrap justify-evenly my-2 sm:rounded-md shadow-sm">
                <div className="px-2 py-2 rounded-md flex items-center cursor-pointer hover:bg-gray-200">
                    <PhotoSizeSelectActualOutlinedIcon className="text-blue-400 mr-1" />
                    <p className="text-[14px] text-gray-500 font-bold">Photos</p>
                </div>
                <div className="px-2 py-2 rounded-md flex items-center cursor-pointer hover:bg-gray-200">
                    <SlideshowOutlinedIcon className="text-green-600 mr-1" />
                    <p className="text-[14px] text-gray-500 font-bold">Video</p>
                </div>
                <div className="px-2 py-2 rounded-md flex items-center my-1 cursor-pointer hover:bg-gray-200">
                    <EventNoteOutlinedIcon className="text-amber-700" />
                    <p className="text-[14px] text-gray-500 font-bold mr-1">Events</p>
                </div>
                <div className="px-2 py-2 rounded-md flex items-center my-1 cursor-pointer hover:bg-gray-200">
                    <NewspaperIcon className="text-orange-500 mr-1" />
                    <p className="text-[14px] text-gray-500 font-bold">Write articles</p>
                </div>
            </div>
        </div>
    )
}

export default Feed
