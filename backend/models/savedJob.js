import mongoose from "mongoose";

const SavedJobSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        company:{
            type:String,
            required:true,
        },
        postedDate:{
            type:Number,
            required:true,
        }
    }
);

export const SavedJob=mongoose.model('Software Engineer',SavedJobSchema);