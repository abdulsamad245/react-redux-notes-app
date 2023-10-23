import { Request, Response } from "express";
import { Note, INote } from "../models/Note";

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find({}).exec(); 
    res.json(notes);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body; 

    const newNote: INote = new Note({
      title,
      content,
      user: userId,
    });

    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const noteId = req.params.id;

    const deletedNote = await Note.findOneAndDelete({
      _id: noteId,
    }).exec();

    if (!deletedNote) {
      return res.status(404).send("Note not found");
    }

    res.send("Note deleted successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const noteId = req.params.id;
    const { title, content, userId } = req.body; 

    const updatedNote = await Note.findOneAndUpdate(
      { _id: noteId, user: userId },
      { title, content },
      { new: true }
    ).exec();

    if (!updatedNote) {
      return res.status(404).send("Note not found");
    }

    res.json(updatedNote);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const noteId = req.params.id;

    const note = await Note.findOne({ _id: noteId }).exec();

    if (!note) {
      return res.status(404).send("Note not found");
    }

    res.json(note);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
