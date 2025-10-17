import { Schema, model } from 'mongoose';

const ContractSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  contract_number: { type: String, required: true, unique: true },
  start_date: { type: Date, required: true },
  status: { type: String, default: 'active' },
}, { timestamps: true });

export default model('Contract', ContractSchema);