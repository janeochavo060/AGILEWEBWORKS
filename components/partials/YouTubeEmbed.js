import Image from "next/image";
import React, { useRef, userRef, useState } from "react";
import ReactPlayer from "react-player";
import PlayIcon from "@/components/svgComponents/PlayIcon";

export default function YouTubeEmbed({ src = "", height = "calc(100vh-60%)" }) {
  const getYoutubeId = () => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = src.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };
  const youtubeId = getYoutubeId();
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  const [played, setPlayed] = useState(false);

  const onPlay = async () => {
    setPlayed(!played);
  };

  return src ? (
    <div className="relative w-full h-full">
      {played ? (
        <ReactPlayer url={src} playing={played} height={height} width="100%" />
      ) : (
        <>
          <Image
            alt=""
            src={thumbnail}
            blurDataURL={thumbnail}
            className="w-full h-full object-cover object-center z-10 relative max-h-full"
            style={{
              height: height,
            }}
            width="100"
            height="100"
            unoptimized
          />
          <button
            aria-label="Play Video"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 hover:bg-black/10 transition"
            onClick={onPlay}
          >
            <PlayIcon width="100" height="100" />
          </button>
        </>
      )}
    </div>
  ) : (
    <></>
  );
}
