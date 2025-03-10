
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon, SparkleIcon } from 'lucide-react'

const suggestionsList = ['Historic Story', 'Kids Story', 'Movie Stories', 'AI Innovations', 'Space Mystries', 'Horror Stories', 'Mythological Tales', 'Tech Breakthroughs', 'True Crime Stories', 'Fantasy Adventures', 'Science Experiements', 'Motivational Stories']

function Topic(props) {
  const [selectedTopic, setSelectedTopic] = useState()
  const [generatedScripts, setGeneratedScripts] = useState()
  const [selectedScriptIndex, setSelectedScriptIndex] = useState()
  const [loading, setLoading] = useState()
  const {onHandleInputChange} = props

  const generateScript = async () => {
    setSelectedScriptIndex(-1)
    setLoading(true)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {topic: selectedTopic} )
    }

    const result = await fetch('/api/generate-script', options)
    const data = await result.json()
    setGeneratedScripts(data)
    setLoading(false)
  }

  return (
    <div>
        <h1>Project Title</h1>
        <Input onChange={(e) => onHandleInputChange('title', e.target.value)} placeholder='Enter Project Title' />

        <h1>Video Topic</h1>
        <p className='text-[12px] text-gray-500'>Select topic for your video</p>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Suggestions</TabsTrigger>
            <TabsTrigger value="password">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="account"> {suggestionsList.map((suggestion, index) => <Button onClick={() => {setSelectedTopic(suggestion)
                                                                                                            onHandleInputChange('topic', suggestion)}} className={`m-2 ${selectedTopic===suggestion && 'bg-white text-black'}`} variant='outline' key={index}>{suggestion}</Button>)} </TabsContent>
          <TabsContent value="password">
            <h1>Enter Your Own Topic</h1>
            <Textarea placeholder="Enter Your Topic Here." onChange={(e) => onHandleInputChange(e.target.value)} />
          </TabsContent>
        </Tabs>

        <Button onClick={generateScript} disabled={loading} className='bg-red-600 text-white hover:bg-red-700'>{loading ? <Loader2Icon className='animate-spin' /> : <SparkleIcon />} Generate Script</Button>

        <ul className='flex gap-3'>
          {
            generatedScripts?.map((script, index) => <li key={index} onClick={() => setSelectedScriptIndex(index)} className={`text-gray-400 rounded-2xl p-5 mt-5 ${selectedScriptIndex === index ? 'border border-white bg-secondary' : 'border'}`}>{script.script}</li>)
          }
        </ul>

    </div>
  )
}

export default Topic