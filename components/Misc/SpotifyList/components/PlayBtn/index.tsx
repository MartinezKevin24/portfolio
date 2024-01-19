import React, {Dispatch, memo} from 'react'
import classNames from 'classnames'

const PlayBtn = ({play, setPlay, song}:
  {play:boolean, setPlay: Dispatch<React.SetStateAction<boolean>>,song: HTMLAudioElement | null}) => {

  const handleAudio = () =>{
    
    if(song){
      song.volume = 0.5
      if(play){
        song.pause()
      }else{
        song.play()
      }
      setPlay(!play)
    }

  }

  return(
    <div className='relative flex justify-center items-center'>
      <div className='bg-black z-20 hover:bg-gray-800 rounded-full flex justify-center items-center w-10 h-10'>
        <span className={classNames(['text-white text-sm py-2 px-4', {'icon-play3' : !play}, {'icon-pause2' : play}])} 
          onClick={handleAudio}/>
      </div>
      <div className={classNames(['bg-[#32a059] z-10 absolute rounded-full w-10 h-10', {'animate-slowPing' : play}])}/>
      <span className={classNames(['icon-music absolute text-green-500 z-0 blur-[1px]', {'noteRigth' : play}])}/>
      <span className={classNames(['icon-music absolute text-green-500 z-0 blur-[1px]', {'noteTop' : play}])}/>
      <span className={classNames(['icon-music absolute text-green-500 z-0 blur-[1px]', {'noteLeft' : play}])}/>

      <style jsx>{`
        
      .noteRigth {
        animation: 1.8s infinite ease-out noteRight;
        animation-delay: 0.2s; 
      }

      .noteTop {
        animation: 2s infinite ease-out noteTop;
        animation-delay: 0.6s;
      }

      .noteLeft {
        animation: 1.6s infinite ease-out noteLeft;
        animation-delay: 1s;
      }

      @keyframes noteRight {
        0% {
          transform: translate(0, 0);
        }
        100%{
          transform: translate(28px, 28px);
        }
      }

      @keyframes noteLeft {
        0% {
          transform: translate(0, 0);
        }
        100%{
          transform: translate(-42px, 20px);
        }
      }

      @keyframes noteTop {
        0% {
          transform: translate(0, 0);
        }
        100%{
          transform: translate(12px, -42px);
        }
      }

      `}</style>
    </div>
  )
}

export default PlayBtn
