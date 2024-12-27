import { useNotes } from '../hooks/useNotes'
import { Note } from '../models/Note'

interface NoteDisplayProps {
  note: Note
  type: 'trash' | 'notes'
}

export function NoteDisplay ({ note, type }: NoteDisplayProps) {
  const { setFullNote, recoverNote, deleteNote, removeNote } = useNotes()

  const handleClick = (): void => {
    setFullNote(note)
  }

  const handleRemove = (): void => {
    removeNote(note)
  }

  const handleDelete = (): void => {
    deleteNote(note)
  }

  const handleRecover = (): void => {
    recoverNote(note)
  }

  return (
    <article className='hover:shadow-note xl:transition-shadow bg-[#232427] w-[230px] min-h-[100px] max-h-[400px] flex flex-col rounded-[5px] overflow-hidden group'>
      <button
        className='flex-grow flex flex-col overflow-hidden text-left p-[10px]'
        onClick={handleClick}
      >
        <h2 className='w-full mb-[10px] text-[clamp(10px,3vw,20px)]'>{`${note.id} | ${note.title}`}</h2>
        <p className='w-full break-words whitespace-pre-wrap text-[clamp(8px,2vw,18px)]'>
          {note.content}
        </p>
      </button>

      <footer className='w-full h-[40px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[10px]'>
        {type === 'notes' ? (
          <button
            className='hover:bg-[#fff1] px-[15px] py-[3px] w-fit rounded-[5px]'
            onClick={handleRemove}
          >
            Delete
          </button>
        ) : (
          <>
            <button
              className='hover:bg-[#fff1] px-[15px] py-[3px] w-fit rounded-[5px]'
              onClick={handleRecover}
            >
              Recover
            </button>
            <button
              className='hover:bg-[#fff1] px-[15px] py-[3px] w-fit rounded-[5px]'
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}
      </footer>
    </article>
  )
}
