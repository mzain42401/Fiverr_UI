import mongoose,{Schema} from "mongoose";


const contentSchema  = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        textContent: { type: String, required: true },
        designUrl: { type: String },
        createdAt: { type: Date, default: Date.now() },
        updatedAt: { type: Date, default: Date.now() }
      }
      
  
);

const user= mongoose.models.Content || mongoose.model("Content", contentSchema);

export default user;