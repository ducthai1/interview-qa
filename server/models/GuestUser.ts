import mongoose, { Schema, type Document } from 'mongoose'

export interface IGuestUser extends Document {
  guestId: string
  lastActiveAt: Date
  settings: {
    language: string
    theme: string
  }
  createdAt: Date
}

const GuestUserSchema = new Schema<IGuestUser>(
  {
    guestId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    lastActiveAt: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    settings: {
      type: new Schema(
        {
          language: { type: String, default: 'en' },
          theme: { type: String, default: 'light' },
        },
        { _id: false }
      ),
      default: () => ({ language: 'en', theme: 'light' }),
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
)

export const GuestUser = mongoose.model<IGuestUser>('GuestUser', GuestUserSchema)
