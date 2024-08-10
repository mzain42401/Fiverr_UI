import mongoose,{Schema} from "mongoose";


const userSchema = new Schema(
  {
    username:String,
    email: String
  },
  { timestamps: true}
);

const user= mongoose.models.user || mongoose.model("user", userSchema);

export default user;