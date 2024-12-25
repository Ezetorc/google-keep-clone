import { Note } from '../models/Note'
import { NotesStore } from '../models/NotesStore'
import { getNotesStore } from '../stores/getNotesStore'

export function useNotes () {
  const notesStore: NotesStore = getNotesStore()
  const { setNotes, getNotes, setFullNote, notes } = notesStore

  const orderNotesIndexes = (notesToOrder: Note[]): void => {
    notesToOrder.map((newNote, index) => (newNote.id = index))
    setNotes(notesToOrder)
  }

  const deleteNote = (noteId: number): void => {
    const newNotes = getNotes().filter(note => note.id !== noteId)

    orderNotesIndexes(newNotes)
    setNotes(newNotes)
    setFullNote(null)
  }

  const createNote = (newNote?: Note): void => {
    const newNotes = [...notes]

    if (newNote) {
      newNotes.push(newNote)
    } else {
      newNotes.push({ title: '', content: '', id: notes.length })
    }

    orderNotesIndexes(newNotes)
    setNotes(newNotes)
  }

  

  return { ...notesStore, deleteNote, createNote }
}
