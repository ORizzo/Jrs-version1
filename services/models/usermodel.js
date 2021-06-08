const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    name: {
        type: String,                                      
        required: true
    },
    discriminator: {
        type: Number,
        required: true
    },
    user:{
        level: {
            type: Number,
            required: true,
            default: 1
        },
        money: {
            type: Number,
            required: true,
            default: 0
        },
        bank: {
            type: Number,
            required: true,
            default: 0
        },
        respect: {
            type: Number,
            required: true,
            default: 0
        }
    },
    inventario: {
        seda: {
            type: Number,
            required: true,
            default: 0
        },
        pino: {
            type: Number,
            required: true,
            default: 0
        },
        garrafinha: {
            type: Number,                                      
            required: true,
            default: 0
        },
        maconha:{
            type: Number,                                      
            required: true,
            default: 0
        },
        po: {
            type: Number,                                      
            required: true,
            default: 0
        },
        lança: {
            type: Number,                                      
            required: true,
            default: 0
        },
        LSD:  {
            type: Number,                                      
            required: true,
            default: 0
        },
        ecstasy:  {
            type: Number,                                      
            required: true,
            default: 0
        },
        hasTaurus: {
            type: Boolean
        },
        has38: {
            type: Boolean
        },
        hasGlock: {
            type: Boolean
        },
        hasFal: {
            type: Boolean
        },
        hasAr15: {
            type: Boolean
        },
        hasAk: {
            type: Boolean
        },
        hasG3: {
            type: Boolean
        },
    },  
    cooldowntraficar:{
        type: Number,
        required: true,
        default: 0
    },
    cooldownfoguetar: {
        type: Number,
        required: true,
        default: 0
    },
    cooldownplantão: {
        type: Number,
        required: true,
        default: 0
    },
    cooldowncorre: {
        type: Number,
        required: true,
        default: 0
    },
    cooldownassalto: {
        type: Number,
        required: true,
        default: 0
    }
    
})
mongoose.model('usuarios', usuarioSchema)
const usermodel = mongoose.model('usuarios')

module.exports = usermodel
