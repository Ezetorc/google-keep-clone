import { useCallback, useRef, useEffect } from 'react'
import { Note } from '../models/Note'
import { useNotes } from '../hooks/useNotes'

interface FullNoteDisplayProps {
  noteToDisplay: Note
}

export function FullNoteDisplay ({ noteToDisplay }: FullNoteDisplayProps) {
  const { setFullNote, notes, setNotes, removeNote } = useNotes()
  const fullNoteContainerRef = useRef<null | HTMLDivElement>(null)
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null)
  const titleInputRef = useRef<HTMLInputElement>(null)

  const handleRemove = (): void => {
    removeNote(noteToDisplay)
  }

  const handleTitleInput = useCallback(
    (event: React.FormEvent<HTMLInputElement>): void => {
      const currentNote = notes.find(note => note.id === noteToDisplay.id)

      if (currentNote) {
        const newTitle: string = event.currentTarget.value
        currentNote.title = newTitle

        const newNotes = notes.map(note =>
          note.id === currentNote.id ? currentNote : note
        )

        setNotes(newNotes)
      }
    },
    [noteToDisplay, notes, setNotes]
  )

  const handleContentInput = useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>): void => {
      const currentNote = notes.find(note => note.id === noteToDisplay.id)

      if (currentNote) {
        const newContent: string = event.currentTarget.value
        currentNote.content = newContent

        const newNotes = notes.map(note =>
          note.id === currentNote.id ? currentNote : note
        )

        setNotes(newNotes)
      }
    },
    [noteToDisplay, notes, setNotes]
  )

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
      if (event.target === event.currentTarget) {
        setFullNote(null)
      }
    },
    [setFullNote]
  )

  const adjustTextareaHeight = useCallback(() => {
    if (contentTextareaRef.current) {
      contentTextareaRef.current.style.height = `${contentTextareaRef.current.scrollHeight}px`
    }
  }, [])

  useEffect(() => {
    adjustTextareaHeight()
  }, [adjustTextareaHeight, noteToDisplay.content])

  return (
    <div
      ref={fullNoteContainerRef}
      className='bg-[#1119] z-[5] fixed flex justify-center items-center w-screen h-screen'
      onClick={handleClose}
    >
      <article className='bg-[#232427] min-w-[clamp(320px,50vw,600px)] min-h-[500px] max-h-[850px] flex flex-col rounded-[5px] overflow-hidden relative z-10'>
        <main className='flex-grow overflow-auto text-left px-[20px] pt-[20px]'>
          <input
            value={noteToDisplay.title}
            onInput={handleTitleInput}
            ref={titleInputRef}
            className='w-full mb-[10px] text-[clamp(22px,2vw,25px)] bg-transparent focus:outline-none'
          />

          <textarea
            className='bg-transparent focus:outline-none w-full resize-none overflow-hidden break-words whitespace-pre-wrap text-[clamp(20px,1vw,18px)]'
            value={noteToDisplay.content}
            onInput={handleContentInput}
            ref={contentTextareaRef}
          />
        </main>

        <footer className='w-full h-[70px] place-content-center grid grid-cols-[3fr,1fr] p-[2px] shadow-[0px_-5px_8px_0px_#0002]'>
          <div className='w-full h-full flex justify-start'>
            <button
              onClick={handleRemove}
              className='hover:bg-[#fff1] px-[15px] py-[3px] w-fit rounded-[5px]'
            >
              Delete
            </button>
          </div>

          <div className='w-full h-full'>
            <button
              onClick={handleClose}
              className='hover:bg-[#fff1] px-[15px] py-[3px] w-fit rounded-[5px]'
            >
              Close
            </button>
          </div>
        </footer>
      </article>
    </div>
  )
}
