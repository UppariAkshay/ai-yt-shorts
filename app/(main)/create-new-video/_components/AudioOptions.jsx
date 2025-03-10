import React, { useEffect, useState } from 'react'

function AudioOptions({onHandleInputChange}) {
  const [voiceOptions, setVoiceOptions] = useState()
  const [voiceSelectedID, setVoiceSelectedID] = useState()

  useEffect( () => {
    const fetchAudioOptions = async () => {
      const response = await fetch('https://api.elevenlabs.io/v1/voices')
      const data = await response.json()

      setVoiceOptions(data.voices.map(voice => ({voice_id: voice.voice_id, labels: voice.labels, name: voice.name})))
    }
   
    fetchAudioOptions()
  }, [])
  
  return (
    <div>
        <h1 className='text-4xl'>Audio Styles</h1>
        <p className='text-gray-400 mb-4'>Select Any Audio option</p>

        <ul className='flex gap-2 grid grid-cols-5'>
          {
            voiceOptions?.map((voice, index) => <li key={index} onClick={() =>{ setVoiceSelectedID(voice.voice_id)  
            onHandleInputChange('voiceId', voice.voice_id)}} className={`border p-3 ${voice.voice_id === voiceSelectedID && 'border-white'}`}>
              <p className='text-xl text-center mb-3'>{`${voice.name} (${voice.labels.gender})`} </p>
              <div className='flex flex-wrap gap-1'>
                <p className='rounded-xs bg-white text-black p-1 text-[10px]'>{voice.labels.accent}</p>
                <p className='rounded-xs bg-white text-black p-1 text-[10px]'>{voice.labels.age}</p>
                <p className='rounded-xs bg-white text-black p-1 text-[10px]'>{voice.labels.description}</p>
                <p className='rounded-xs bg-white text-black p-1 text-[10px]'>{voice.labels.use_case}</p>
              </div>
              
            </li>)
          }
        </ul>
    </div>
  )
}

export default AudioOptions