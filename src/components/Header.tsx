import googleKeepIcon from '../assets/images/google_keep_icon.webp'
import { useNotes } from '../hooks/useNotes'

export function Header () {
  const { section } = useNotes()

  return (
    <header className='flex items-center pl-[3%] gap-x-[10px] w-full h-full col-span-7 row-span-1 overflow-hidden border-b-gk_border border-b-[1px]'>
      <img src={googleKeepIcon} alt='Google Keep Icon' className='w-[40px]' />
      <h1 className='text-[clamp(20px,5vw,22px)]'>
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </h1>
    </header>
  )
}
