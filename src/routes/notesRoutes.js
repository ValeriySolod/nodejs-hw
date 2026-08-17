// src/routes/notesRoutes.js
import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
const notesRoutes = Router();

// routes...

export default notesRoutes;

export const notesRoutes = Router();

notesRoutes.get('/notes', getAllNotes);
notesRoutes.get('/notes/:noteId', getNoteById);
notesRoutes.post('/notes', createNote);
notesRoutes.delete('/notes/:noteId', deleteNote);
notesRoutes.patch('/notes/:noteId', updateNote);
