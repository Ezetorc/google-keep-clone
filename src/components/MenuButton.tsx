import { ReactNode } from 'react'
import { useNotes } from '../hooks/useNotes'
import { Section } from '../models/Section'
import clsx from 'clsx'

interface MenuButtonProps {
  label: string
  toSection: Section
  icon: ReactNode
}

export function MenuButton ({ label, toSection, icon }: MenuButtonProps) {
  const { setSection, section } = useNotes()
  const selected = toSection === section

  const handleClick = (): void => {
    setSection(toSection)
  }

  return (
    <ul>
      <button
        onClick={handleClick}
        className={`${clsx([
          { 'bg-[#41331c]': selected === true },
          { 'bg-transparent': selected === false },
          { 'hover:bg-[#fff1]': selected === false }
        ])} w-full h-[45px] pl-[7%] flex items-center justify-start rounded-r-full gap-x-[15%]`}
      >
        {icon}
        <span className='font-semibold text-[clamp(10px,3vw,15px)]'>{label}</span>
      </button>
    </ul>
  )
}
