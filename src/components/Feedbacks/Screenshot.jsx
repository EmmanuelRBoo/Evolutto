import { useState } from 'react'
import html2canvas from 'html2canvas'
import { AiOutlineCamera, AiOutlineLoading3Quarters, BsTrash } from 'react-icons/all'

export function ScreenshotButton({ screenshot, takeScreenshot }) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html'))
    const base64 = canvas.toDataURL('image/png')

    takeScreenshot(base64)
    console.log(base64)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type='button'
        onClick={() => takeScreenshot(null)}
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 'cover'
        }}
      >
        <BsTrash className='text-gray-600 hover:text-black hover:w-4 hover:h-4 transition-all'/>
      </button>
    )
  }

  return (
    <button 
      type='button'
      className='w-10 h-10 flex items-center justify-center rounded-md border-1 border-blue-600'
      onClick={handleTakeScreenshot}
    >
      {
        isTakingScreenshot
        ? 
        <AiOutlineLoading3Quarters size={20} color='black' className='animate-spin' />
        :
        <AiOutlineCamera size={20} color='black' />
      }
    </button>
  )
}