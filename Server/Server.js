const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./Model/Task")
const cors = require("cors")
const path = require("path");
const multer = require('multer');
const { static } = require("express")

mongoose.connect("mongodb://localhost:27017/iServiceDB", { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
/*app.use(cors({
  origin: ["http://localhost:3000"]
}))*/
app.use(cors());
app.use(bodyParser.json())
app.use(static("public"));



//upload image

const storage = multer.diskStorage({
  //upload file
  destination: path.join(__dirname, '/public', 'uploads'),
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage
});


app.post('/task', upload.single('image'), (req, res) => {
  //const url = req.protocol + '://' + req.get('host')
  
  task_type = req.body.task_type,
    tittle = req.body.task_tittle,
    description = req.body.task_description,
    date = req.body.task_date,
    payment_type = req.body.payment_type,
    budget = req.body.budget,
    //suburb = req.body.task_suburb,
    //image = url + '/public/' + req.file.filename
    image = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`;
    

  const task = new Task({
    //_id: new mongoose.Types.ObjectId(),
    Task_type: task_type,
    Tittle: tittle,
    Description: description,
    Date: date,
    Payment_type: payment_type,
    Budget: budget,
    Image: image,
    //Suburb: suburb
  })
  if (req.body.task_type == "Person") {
    task.set("Suburb", req.body.task_suburb)
  
  }
  task.save()
    .catch((err) => console.log(err))
  console.log(task)
  res.redirect("/")
  
})

// task list
app.get('/task', async (req, res) => {
  try {
    const taskList = await Task.find();
    res.send(taskList);
  } catch (error) {
    const err = error.errors;
    if (err) {
      let messages = [];
      for (let key in err) {
        messages.push(err[key].message);
      }
      return res.status(500).send({ messages: messages.join("-------") });
    }
  }
})

/*app.get('/task', (req, res)=>{ // return all tasks
  Task.find((err, taskList)=>{
      if (err)
          res.send(err);
      else 
          res.send(taskList);
  });
})*/

// delete task
app.post('/delete_task', async (req, res) => {
  try {
    const { id } = req.body;
    const { ok } = await Task.deleteOne({ _id: id });
    if (ok) {
      res.send({ code: 0, message: 'delete success' });
    } else {
      res.send({ code: 1, message: 'delete failed' });
    }
  } catch (error) {
    const err = error.errors;
    if (err) {
      let messages = [];
      for (let key in err) {
        messages.push(err[key].message);
      }
      return res.status(500).send({ messages: messages.join("-------") });
    }
  }
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, (req, res) => {
  console.log("Server is running on port 8000")
})