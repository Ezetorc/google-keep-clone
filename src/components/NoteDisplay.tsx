import { useNotes } from '../hooks/useNotes'
import { Note } from '../models/Note'

interface NoteDisplayProps {
  note: Note
}

export function NoteDisplay ({ note }: NoteDisplayProps) {
  const { setFullNote, deleteNote } = useNotes()

  const handleClick = (): void => {
    setFullNote(note)
  }

  const handleDelete = (): void => {
    deleteNote(note.id)
  }

  return (
    <article className='hover:shadow-note xl:transition-shadow bg-[#232427] w-[230px] min-h-[100px] max-h-[400px] flex flex-col rounded-[5px] overflow-hidden group'>
      <button
        className='flex-grow overflow-hidden text-left p-[10px]'
        onClick={handleClick}
      >
        <h2 className='w-full mb-[10px]'>{`${note.id} | ${note.title}`}</h2>
        <p className='w-full break-words whitespace-pre-wrap'>{note.content}</p>
      </button>

      <footer className='w-full h-[40px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[10px]'>
        <button onClick={handleDelete}>Delete</button>
      </footer>
    </article>
  )
}
