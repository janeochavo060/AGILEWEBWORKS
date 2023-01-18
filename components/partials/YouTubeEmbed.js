import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import PlayIcon from "../svgComponents/PlayIcon";

export default function YouTubeEmbed({ src = "", height = "80vh" }) {
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
    <div className="relative w-full h-full" style={{ minHeight: height }}>
      {played ? (
        <ReactPlayer url={src} playing={played} height={height} width="100%" />
      ) : (
        <>
          <Image
            alt=""
            src={thumbnail}
            blurDataURL={thumbnail}
            className="w-full h-full"
            width="100"
            height="100"
            unoptimized
          />
          <button
            aria-label="Play Video"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            onClick={onPlay}
          >
            <PlayIcon width="40%" height="40%" />
          </button>
        </>
      )}
    </div>
  ) : (
    <></>
  );
}
