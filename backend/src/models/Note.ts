import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
   title: string;
  content: string;
  category: string;
  user: Schema.Types.ObjectId; 
}

const NoteSchema = new Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

export const Note = mongoose.model<INote>('Note', NoteSchema);

