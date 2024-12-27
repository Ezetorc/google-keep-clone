import { useNotes } from '../hooks/useNotes'
import { NoteDisplay } from './NoteDisplay'

export function Notes () {
  const { notes, createNote } = useNotes()
  const arrayOfNotes = Array.from(notes)

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

      <section className='px-[90px] w-full min-h-[80%] grid grid-cols-5 grid-flow-row gap-4 relative'>
        {arrayOfNotes.length > 0 ? (
          arrayOfNotes.map(note => (
            <NoteDisplay key={note.id} note={note} type='notes' />
          ))
        ) : (
          <div className='text-[#a1a1a1] p-[3%] text-[clamp(20px,10vw,40px)] w-[50%] h-full font-bold absolute'>
            Any notes here...
          </div>
        )}
      </section>
    </main>
  )
}
