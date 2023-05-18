import mongoose, { Model, Schema, model } from "mongoose";

const vacantSchema = new Schema({
    title           : { type: String, trim: true, required: true },
    description     : { type: String, trim: true, required: true },
    requirements    : { 
        type: {
            experience  : String,
            skills      : String,
            education   : String,
        }, 
        default: {
            experience  : null,
            skills      : null,
            education   : null,
        } 
    },

    location    : { type: String, trim: true, required: true },
    salary      : { type: Number, trim: true, required: true },
    type        : { type: String, trim: true, required: true, enum:{ values: ['Remoto', 'Presencial'] } },
    workingHour : { 
        type: String, 
        trim: true, 
        required: true, 
        enum: { 
            values: ['Tiempo completo','Medio tiempo','Turno'] 
        }, 
        message: '{VALUE} working hour',
    },

    benefits    : [{ type: String, trim: true, required: true }],
    deadline    : { type: String, require:true, },
    image       : { type: String, trim: true, default:'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

},{ timestamps: true });

const Vacant:Model<any> = mongoose.models.Vacant  || model('Vacant', vacantSchema);

export default Vacant;