import express, { response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import {SavedJob} from "./models/savedJob.js";

const app = express(); 

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
}));

app.use(express.json());

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(233).send('hello')
})

app.post('/savedJobs', async (request,response)=>{
    // console.log(request)
    // return response.status(400).send({
    //     message: ' '
    // })
    try{
        if(!request.body.title|| !request.body.company || !request.body.postedDate){
            return response.status(400).send({message:'job body not fullfilled'});
        }
        const newSavedJob = {
            title:request.body.title,
            company: request.body.company,
            postedDate: request.body.postedDate
        };
        const savedJob= await SavedJob.create(newSavedJob);
        return response.status(500).send(savedJob);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
 
app.get('/savedJobs',async(request,response)=>{
    try{
        const savedJobs= await SavedJob.find({});
        return response.status(200).json({
            count:savedJobs.length,
            data:savedJobs
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

app.get('/savedJobs/:id',async(request,response)=>{
    try{
        const{id} = request.params;
        const savedJob= await SavedJob.findById(id);
        return response.status(200).json(savedJob);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

app.put('/savedJobs/:id',async(request,response)=>{
    try{
        if(!request.body.title|| !request.body.company || !request.body.postedDate){
            return response.status(400).send({message:'job body not fullfilled'});
        }
        const{id} = request.params;
        const result = await SavedJob.findByIdAndUpdate(id,request.body)

        if(!result) return response.status(404).send({message:'Book not found'});
        return response.status(200).send({
            message:'Saved Job updated successfully',
            data:result
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

app.delete('/savedJobs/:id',async(request,response)=>{
    try{
        const{id} = request.params;
        const result = await SavedJob.findByIdAndDelete(id)

        if(!result) return response.status(404).send({message:'Book not found'});
        return response.status(200).send({
            message:'Saved Job deleted successfully',
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('connected to MongoDB')
        app.listen(PORT,()=>{
            console.log('App is listening on port: '+ PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    });