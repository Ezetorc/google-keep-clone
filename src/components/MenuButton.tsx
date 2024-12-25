import { useNotes } from '../hooks/useNotes'
import { Section } from '../models/Section'
import clsx from 'clsx'

interface MenuButtonProps {
  label: string
  toSection: Section
}

export function MenuButton ({ label, toSection }: MenuButtonProps) {
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
        ])} w-full h-[45px] text-left pl-[25%] content-center rounded-r-full`}
      >
        {label}
      </button>
    </ul>
  )
}
