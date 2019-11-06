import mongoose from 'mongoose';
import mongoosePaginete from '../../config/paginate';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

ContactSchema.plugin(mongoosePaginete);

export default mongoose.model('Contact', ContactSchema);
