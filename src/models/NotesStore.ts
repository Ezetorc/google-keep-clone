import { Note } from './Note'
import { Section } from './Section'

export interface NotesStore {
  notes: Note[]
  getNotes: () => Note[]
  setNotes: (newNotes: Note[]) => void

  fullNote: Note | null
  getFullNote: () => Note | null
  setFullNote: (newFullNote: Note | null) => void

  section: Section
  getSection: () => Section
  setSection: (newSection: Section) => void
}
