import Mongoose from "mongoose";

//defines the structure
const EventSchema=new Mongoose.Schema({
    "img" : {
        type : String,
        //defined required : on error it will say the following
        required : "Title is a required field"
    },
    "description" : {
        type : String,
        //defined required : on error it will say the following
        required : "Description is a required field"
    }
},
{
    //added when lines 32 added
    versionKey:false
}
);
//after installing postmann
//id doesnt exist so we are adding virtual id
EventSchema.virtual('id',()=>this._id.toHexString());
EventSchema.set('toJSON',{virtuals:true});

//Contact is the connection name and ContactSchema is the schema
//Use contact Schema when called?

const Event=Mongoose.model('Event',EventSchema);

export default Event;

