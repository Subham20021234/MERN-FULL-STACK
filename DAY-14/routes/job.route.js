import express from 'express';
import { allUsers } from '../data/users.js';


const jobrout = express.Router();


jobrout.route("/getjob/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = allUsers.find(user => user.id === id);

    if (!user) {
        return res.send("User not found!!");
    }

    const job = {

        name: `${user.firstName} ${user.lastName}`,
         
        department: user.company.department,  
        role: user.role
    };

    res.send(job)
});



export default jobrout