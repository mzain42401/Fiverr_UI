import mongoose,{Schema} from "mongoose";


const userSchema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    subscriptionPlan: { type: String, default: 'Free' },
    createdAt: { type: Date, default: Date.now() }
  }
  
);

const user= mongoose.models.User || mongoose.model("User", userSchema);

export default user;