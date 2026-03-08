import mongoose, { Schema, type Document } from 'mongoose'

export interface IAttemptHistory extends Document {
  userId: string
  questionId: string
  attemptNumber: number
  correct: boolean
  createdAt: Date
}

const AttemptHistorySchema = new Schema<IAttemptHistory>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    questionId: {
      type: String,
      required: true,
      index: true,
    },
    attemptNumber: {
      type: Number,
      required: true,
    },
    correct: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
)

// Compound index for efficient per-question history queries
AttemptHistorySchema.index({ userId: 1, questionId: 1, attemptNumber: 1 })

export const AttemptHistory = mongoose.model<IAttemptHistory>('AttemptHistory', AttemptHistorySchema)
