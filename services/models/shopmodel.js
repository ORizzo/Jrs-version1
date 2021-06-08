const mongoose = require("mongoose")

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itens: {
        seda: {
            type: Number,                                      
            required: true,
            default: 2
        },    
        pino: {
            type: Number,                                      
            required: true,
            default: 4
        },
        garrafinha: {
            type: Number,                                      
            required: true,
            default: 6
        }
    },
    armas: {
        taurus: {
            type: Number,                                      
            required: true,
            default: 2500
        },
        oitão: {
            type: Number,                                      
            required: true,
            default: 4000
        },
        glock: {
            type: Number,                                      
            required: true,
            default: 7000
        },
        fal: {
            type: Number,                                      
            required: true,
            default: 13000
        },
        AR15: {
            type: Number,                                      
            required: true,
            default: 15000
        },
        ak: {
            type: Number,                                      
            required: true,
            default: 20000
        },
        g3: {
            type: Number,                                      
            required: true,
            default: 35000
        }
    } 
})
mongoose.model('shop', shopSchema)
const shopmodel = mongoose.model('shop')

module.exports = shopmodel
