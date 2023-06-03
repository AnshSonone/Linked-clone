import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendIcon from '@mui/icons-material/Send';

const Socialtiles = () => {
    return (
        <div>
            <div className="flex items-center border-t-[1px] border-gray-200 mx-3 my-1 justify-around ">
                <div className="flex items-center py-3 sm:px-6 rounded-md hover:bg-gray-200 my-1 cursor-pointer">
                    <ThumbUpOutlinedIcon sx={{ color: 'gray' }} />
                    <p className=' hidden sm:block text-[14px] text-gray-500 ml-1'>Likes</p>
                </div>
                <div className=" flex items-center py-3 sm:px-6 rounded-md hover:bg-gray-200 my-1 cursor-pointer">
                    <InsertCommentOutlinedIcon sx={{ color: 'gray' }} />
                    <p className=' hidden sm:block text-[14px] text-gray-500 ml-1'>Comments</p>
                </div>
                <div className=" flex items-center py-3 sm:px-6 rounded-md hover:bg-gray-200 my-1 cursor-pointer">
                    <RepeatOutlinedIcon sx={{ color: 'gray' }} />
                    <p className=' hidden sm:block text-[14px] text-gray-500 ml-1'>Repost</p>
                </div>
                <div className=" flex items-center py-3 sm:px-6 rounded-md hover:bg-gray-200 my-1 cursor-pointer">
                    <SendIcon sx={{ color: 'gray' }} />
                    <p className=' hidden sm:block text-[14px] text-gray-500 ml-1'>Send</p>
                </div>
            </div>
        </div>
    )
}

export default Socialtiles
