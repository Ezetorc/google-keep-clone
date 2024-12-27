import { Note } from '../models/Note'
import { NotesStore } from '../models/NotesStore'
import { getNotesStore } from '../stores/getNotesStore'

export function useNotes () {
  const notesStore: NotesStore = getNotesStore()
  const { setNotes, notes, trash, setTrash } = notesStore

  const createNote = (title?: string, content: string = ''): void => {
    let newNote: Note

    if (title) {
      newNote = {
        title,
        content,
        id: notes.length
      }
    } else {
      newNote = {
        title: 'New Note',
        content: '',
        id: notes.length
      }
    }

    const updatedNotes = [...notes, newNote]

    updateIndexes(updatedNotes)
    setNotes([...notes, newNote])
  }

  const removeNote = (note: Note): void => {
    const updatedNotes: Note[] = notes.filter(n => n.id !== note.id)
    const updatedTrash: Note[] = [...trash, note]

    updateIndexes(updatedNotes)
    updateIndexes(updatedTrash)

    setNotes(updatedNotes)
    setTrash(updatedTrash)
  }

  const deleteNote = (note: Note): void => {
    const updatedTrash: Note[] = trash.filter(n => n.id !== note.id)

    updateIndexes(updatedTrash)
    setTrash(updatedTrash)
  }

  const recoverNote = (note: Note): void => {
    const updatedNotes: Note[] = [...notes, note]
    const updatedTrash: Note[] = trash.filter(n => n.id !== note.id)

    updateIndexes(updatedNotes)
    updateIndexes(updatedTrash)

    setNotes(updatedNotes)
    setTrash(updatedTrash)
  }

  const updateIndexes = (notes: Note[]): void => {
    notes.forEach((note, index) => {
      note.id = index
    })
  }

  return { ...notesStore, createNote, removeNote, deleteNote, recoverNote }
}
