'use client'
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VideoStyle from './_components/VideoStyle'
import AudioOptions from './_components/AudioOptions'
import { Button } from '@/components/ui/button'

function CreateNewVideo() {
  const [formData, setFormData] = useState()

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData(prevState => ( {...prevState, [fieldName]: fieldValue}) )
  }

  console.log(formData)

  return (
    <div>
      <h1 className='text-3xl px-4'>Create New Video</h1>

      <Topic onHandleInputChange={onHandleInputChange} />

      <VideoStyle onHandleInputChange={onHandleInputChange} />

      <AudioOptions onHandleInputChange={onHandleInputChange} />

      <Button className='font-bold'>Generate Video</Button>
    </div>
  )
}

export default CreateNewVideo