import dynamic from 'next/dynamic';

import { VideoPlayerProps } from './types';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="relative size-full pt-[56.25%]">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        config={{
          youtube: {
            playerVars: { origin: process.env.NEXT_PUBLIC_BASE_URL },
          },
        }}
        className="absolute left-0 top-0"
      />
    </div>
  );
};
