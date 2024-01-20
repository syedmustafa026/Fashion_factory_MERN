import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


let orderSchema = new mongoose.Schema({
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    streetaddress: { type: String, required: false },
    country: { type: String, required: false },
    postal: { type: String, required: false },
    city: { type: String, required: false },
    province: { type: String, required: false },
    card: { type: String, required: false },
    expiration: { type: String, required: false },
    cvv: { type: String, required: false },
    classId: String,
    createdOn: { type: Date, default: Date.now }
});
const orderModel = mongoose.model('orders', orderSchema);

const app = express()
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.post('/order', (req, res) => {
    console.log(req.body);
    orderModel.create(req.body, (err, saved) => {
        if (!err) {
            console.log("jaraha", saved)
            res.send({
                message: "your order is saved"
            })
        } else {
            console.log(err);
            res.status(500).send({
                message: "server error"
            })
        }
    })
})

app.get('/orders', (req, res) => {

    orderModel.find({}, (err, data) => {
        if (!err) {
            res.send({
                message: "here is you orders list",
                data: data

            })
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    });
})
// delete single order
app.delete('/order/:id', (req, res) => {

    orderModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.send({
                message: "your order is deleted"
            })
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    });
})

// delete all order
app.delete('/orders', (req, res) => {

    mongoose.connection.db.dropCollection('orders', function (err, result) {
        if (!err) {
            res.send({
                message: "all order is deleted"
            })
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    });
})

// start server
app.listen(port, () => {
    console.log(`Server app is listening on port ${port}`)
})


/////////////////////////////////////////////////////////////////////////////////////////////////
let dbURI = 'mongodb+srv://dbuser:dbpassword@cluster0.flvokf8.mongodb.net/orderDatabase?retryWrites=true&w=majority    ';
mongoose.connect(dbURI);


////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
    // process.exit(1);
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
