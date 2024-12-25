import { useNotes } from '../hooks/useNotes'
import { NoteDisplay } from './NoteDisplay'

export function Notes () {
  const { notes, createNote } = useNotes()

  const handleClick = (): void => {
    createNote()
  }

  return (
    <main className='w-full h-full col-span-6 row-[span_14_/_span_14] overflow-auto'>
      <header className='w-full h-[100px] flex items-center pl-[2%]'>
        <button
          className='text-gk_background border-[#c2e7ff] border-2 pb-[14px] hover:text-[#c2e7ff] hover:bg-gk_background flex justify-center overflow-hidden items-center text-[clamp(30px,10vw,60px)] bg-[#c2e7ff] aspect-square w-[80px] rounded-full content-center text-center'
          onClick={handleClick}
        >
          +
        </button>
      </header>

      <section className='px-[90px] w-full h-full grid grid-cols-5 grid-flow-row gap-4'>
        {notes.map(note => (
          <NoteDisplay key={note.id} note={note} />
        ))}
      </section>
    </main>
  )
}
