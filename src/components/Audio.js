import React from "react";
import { Button, Empty, Radio } from "antd";
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import { useState, useRef, useEffect } from "react";

const Audio = (props) => {
  const { src } = props;
  const [playRate, setPlayRate] = useState(1)
  const [isPlay, setIsPlay] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(100)
  const [allTime, setAllTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef(null);
  const rateList = [1, 1.25, 1.5, 2, 2.5, 3]

  useEffect(() => {
    setAllTime(0)
    setCurrentTime(0)
    setPlayRate(1)
    setIsPlay(false)
  }, [src])

  const formatSecond = (time) => {
    const second = Math.floor(time % 60);
    let minite = Math.floor(time / 60);
    return `${minite}:${second >= 10 ? second : `0${second}`}`;
  }

  // 该视频已准备好开始播放
  const onCanPlay = () => {
    setAllTime(audioRef.current.duration)
  };

  const playAudio = () => {
    try {
      audioRef.current.play();
      setIsPlay(true)
    } catch (err) {
      console.log(err);
    }

  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlay(false)
  };

  const onMuteAudio = () => {
    setIsMuted(!audioRef.current.muted)
    audioRef.current.muted = !audioRef.current.muted;
  };

  const changeTime = (e) => {
    const { value } = e.target;
    setCurrentTime(value)
    audioRef.current.currentTime = value;
    if (value === audioRef.current.duration) {
      setIsPlay(false)
    }
  };

  // 当前播放位置改变时执行
  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)

    if (audioRef.current.currentTime === audioRef.current.duration) {
      setIsPlay(false)
    }
  };

  const changeVolume = (e) => {
    const { value } = e.target;
    audioRef.current.volume = value / 100;
    setVolume(value)
    setIsMuted(!value)
  };

  // 倍速播放
  const changePlayRate = (e) => {
    console.log(e.target.value);
    audioRef.current.playbackRate = e.target.value;
    setPlayRate(e.target.value)
  };

  return (
    <div>
      {
        src
          ? (
            <>
              <audio
                src={src}
                ref={audioRef}
                preload={"auto"}
                onCanPlay={() => {
                  onCanPlay()
                }}
                onTimeUpdate={() => {
                  onTimeUpdate()
                }}
              >
                <track src={src} kind="captions" />
              </audio>

              <div>
                <input
                  type="range"
                  step="0.01"
                  max={allTime}
                  value={currentTime}
                  onChange={() => {
                    changeTime()
                  }}
                />
              </div>

              <div>

                {
                  isPlay ? (
                    <Button type="primary" shape="round" icon={<PauseCircleFilled />} onClick={() => {
                      pauseAudio()
                    }}>暂停</Button>
                  ) : (
                      <Button type="primary" shape="round" icon={<PlayCircleFilled />} onClick={() => {
                        playAudio()
                      }}>播放</Button>
                    )
                }
                <span>
                  {formatSecond(currentTime) + "/" + formatSecond(allTime)}
                </span>
              </div>
              <div>
                <Button type="primary" shape="round" onClick={() => {
                  onMuteAudio()
                }} >静音</Button>
                <input
                  type="range"
                  onChange={(e) => {
                    changeVolume(e)
                  }}
                  value={isMuted ? 0 : volume}
                />
              </div>

              <div>
                <span>倍速播放：</span>
                <Radio.Group value={playRate} onChange={(e) => {
                  changePlayRate(e)
                }}>
                  {
                    rateList.map((item) => {
                      return (
                        <Radio.Button value={item} key={item}>{item}</Radio.Button>
                      )
                    })
                  }
                </Radio.Group>
              </div>
            </>
          ) : (
            <>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </>
          )
      }
    </div>
  )
}
export default Audio