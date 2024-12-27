import { useNotes } from '../hooks/useNotes'
import { NoteDisplay } from './NoteDisplay'

export function Trash () {
  const { trash } = useNotes()
  const arrayOfTrash = Array.from(trash)

  return (
    <section className='w-full pt-[2%] h-full col-span-6 row-[span_14_/_span_14] overflow-auto px-[90px] grid grid-cols-5 grid-flow-row gap-4'>
      {arrayOfTrash.length > 0 ? (
        arrayOfTrash.map((note, index) => (
          <NoteDisplay key={index} note={note} type='trash' />
        ))
      ) : (
        <div className='text-[#a1a1a1] p-[3%] text-[clamp(20px,10vw,40px)] w-[50%] font-bold absolute'>
          Any notes here...
        </div>
      )}
    </section>
  )
}
