const fs = require('fs');
var express = require('express');
var app = express();
app.use(express.json());
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev_data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results:tours.length,
        data: {
            tours
            
        }
    });
});


app.get('/api/v1/tours/:id', (req, res) => {
    const id=req.params.id*1;

    const tour=tours.find(el=> el.id ===id)
    res.status(200).json({
        status: 'success',
        data:{
            tour
        }
    });
});

app.post('/api/v1/tours', (req,res)=>{
    // console.log(req.body);
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev_data/tours-simple.json`, JSON.stringify(tours),err=>{
        res.status(201).json({
            status:'success',
        data:{
            tour:newTour
        }
        });
        

    } );

    // res.send('DONE');
})

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
