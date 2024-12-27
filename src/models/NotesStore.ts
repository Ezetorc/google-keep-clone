import { Note } from './Note'
import { Section } from './Section'

export interface NotesStore {
  notes: Note[]
  setNotes: (newNotes: Note[]) => void

  trash: Note[]
  setTrash: (newTrash: Note[]) => void

  fullNote: Note | null
  setFullNote: (newFullNote: Note | null) => void

  section: Section
  setSection: (newSection: Section) => void
}
