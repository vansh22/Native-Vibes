import mongoose from 'mongoose';
const ownerSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    businessName: String,
    businessType: String,
    address: String
  });
  const owner=mongoose.model('owner',ownerSchema);
export default owner;
