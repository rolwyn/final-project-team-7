import Mongoose from "mongoose";

//defines the structure
const EventSchema=new Mongoose.Schema({
    "eventName" :{
        type :String,
        required : "Event name is needed to create it"
    },
    "img" : {
        type : String,
        //defined required : on error it will say the following
        required : "Add an image, it will look prettier"
    },
    "description" : {
        type : String,
        //defined required : on error it will say the following
        required : "Please add a description"
    },
    "time" :{
        type : String,
        required : "Time is a required field"
    },
    // "creationDate" : {
    //     type : Date,
    //     default : new Date()
    // },
    // "likeCount" : {
    //     type : Number,
    //     default : 0
    // },
    // "creator" : {
    //     type : String,
    //     required : "User is not logged in"
    // },
    // "tags" : {
    //     type : [String]
    // }

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

