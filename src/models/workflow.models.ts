import mongoose, { Schema } from "mongoose";

export interface IWorkflowType {
    prompt: string;
    task: 'google_docs' | 'notion',
    file: String,
    model: 'gemini-2.0-flash' | 'llama-3.4'
}

const workflowSchema = new Schema<IWorkflowType>(
    {
        prompt: {
            type: String
        },
        task: {
            type: String
        },
        file: {
            type: String
        }
    },
    { timestamps: true }
);

export const Workflow = mongoose.models.User ?? mongoose.model<IWorkflowType>("Workflow", workflowSchema);
