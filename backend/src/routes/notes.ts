import express from 'express';
import { isLoggedIn } from '../controllers/auth';
import { getNotes, createNote, deleteNote, getNoteById, updateNote } from '../controllers/notes';

const notesRouter = express.Router();

notesRouter.use(isLoggedIn);

notesRouter.get('/:user', getNotes);
notesRouter.post('/', createNote);
notesRouter.delete('/:user/:id', deleteNote);
notesRouter.get('/:user/:id', getNoteById);

notesRouter.put('/:id', updateNote);

export default notesRouter;
