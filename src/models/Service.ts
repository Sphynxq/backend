import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema({
  contract_id: { type: Schema.Types.ObjectId, ref: 'Contract', required: true },
  type: { type: String, enum: ['internet', 'tv'], required: true },
  plan_name: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default model('Service', ServiceSchema);