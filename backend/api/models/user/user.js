import Mongoose from "mongoose";

/**
 * Create user schema
 */

const UserSchema = new Mongoose.Schema({
    "userName": {
        type: String,
        required: "Username is a required field."
    },
    "password": {
        type: String,
        required: "Password is a required field."
    },
    "email": {
        type: String,
        required: "Email is a required field."
    },
    "fullName": {
        type: String,
        required: "FullName is a required field."
    },
    "createdDate": {
        type: Date,
        default: Date.now
    },
    "roles": [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]

},
{
    versionKey: false
})

/**
 * Use this collection
 */
 const User = Mongoose.model('User', UserSchema)

 /**
  * Default export
  */
 export default User