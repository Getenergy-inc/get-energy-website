'use-client';

import ReactPlayer from 'react-player/youtube';

export default function WhoWeAreVideo() {
    return (
        <div className='w-full flex justify-center'>
            <div className="container my-10 w-full h-[560px]">
                <div className="w-full h-full">
                    <ReactPlayer
                        url={"https://www.youtube.com/watch?v=m19F4IHTVGc"}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
            </div>
        </div>
    )
}
