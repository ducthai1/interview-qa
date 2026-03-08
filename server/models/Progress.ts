import mongoose, { Schema, type Document } from 'mongoose'

/* Shape of a single answered question */
export interface AnsweredEntry {
  correct: boolean
  timestamp: number
  attempts: number
}

/* Full progress document stored in MongoDB */
export interface IProgress extends Document {
  userId: string
  answered: Map<string, AnsweredEntry>
  bookmarked: string[]
  updatedAt: Date
  createdAt: Date
}

const ProgressSchema = new Schema<IProgress>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    answered: {
      type: Map,
      of: new Schema(
        {
          correct: { type: Boolean, required: true },
          timestamp: { type: Number, required: true },
          attempts: { type: Number, required: true, default: 1 },
        },
        { _id: false }
      ),
      default: () => new Map(),
    },
    bookmarked: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

export const Progress = mongoose.model<IProgress>('Progress', ProgressSchema)
