const { response } = require("express");
const { config } = require("../Database/makeConnection");
const mysql = require('mysql');

const configuration = {
    host: config.host,
    user: config.user, // Use a string for the username
    password: config.password,
    database: config.database, // Change this to your actual database name
};

const insertData=(req,res)=>{
    const db = mysql.createConnection(configuration);
    let data=req.body
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        const checkquery=`select * from userdetails where email='${data.email}'`
        const query = `INSERT INTO userDetails (firstname, lastname, email, password, confirmpassword, contact, gender, dob, address) VALUES 
        ('${data.firstname}', '${data.lastname}', '${data.email}', '${data.password}', '${data.confirmpassword}', '${data.contact}', '${data.gender}', '${data.dob}', '${data.address}')`;   
// Corrected query
db.query(checkquery, (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
        res.status(500).send({message:"Invalid Query"})
    }
    console.log('Query result:', result);
    // db.end(); // Close the connection
    if(result.length>0){
    res.status(400).send({message:"User Already Exists"})
}else{
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({message:"Invalid Query"})
        }
        //console.log('Query result:', result);
        db.end(); // Close the connection
        res.status(200).send({message:"SUCCESS"})
    });
}
}
); 
    });
    
}
const senddata=(req,res)=>{
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        // const datequery=`SELECT CONVERT('${data.dob}', DATE)`;
        const query = `select * from userDetails`;   
// Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
            console.log('Query result:', result);
            res.status(200).send(result)
            db.end(); // Close the connection
        });
    });
    
    
}
const getMembership=(req,res)=>{
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        // const datequery=`SELECT CONVERT('${data.dob}', DATE)`;
        const query = `select * from membership`;   
// Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
           // console.log('Query result:', result);
            res.status(200).send(result)
            db.end(); // Close the connection
        });
    });
    
    
}
const getCity=(req,res)=>{
     payload=req.body
     console.log(payload);  
     
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        // const datequery=`SELECT CONVERT('${data.dob}', DATE)`;
        let query =``
        if(payload.adventure==="AdventurousForest"){
          query = `select forestname as name,videosrc from ${payload.adventure}`;
        }
        else if(payload.adventure==="HillStation"){
            query = `select hillstationname as name,videosrc from ${payload.adventure}`;
          }
          if(payload.adventure==="CityandBeaches"){
            query = `select cityname as name,videosrc from ${payload.adventure}`;
          }
           
// Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
            console.log('Query result:', result);
            res.status(200).send(result)
            db.end(); // Close the connection
        });
    });
    
    
}
const getTourData=(req,res)=>{
    const body=req.body
    // console.log(body,"jdhkjldshgjksdhgkjsdhgskjdghskjg");
    
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
       if (err) {
           console.error('Error connecting to the database:', err);
           res.status(500).send({message:"Error connecting to the database"})
       }
       console.log('Connected to the database!');
       // const datequery=`SELECT CONVERT('${data.dob}', DATE)`;
       const query = `select * from ${body.membershipvalue}`;   
// Corrected query
       db.query(query, (err, result) => {
           if (err) {
               console.error('Error executing query:', err);
               res.status(500).send({message:"Invalid Query"})
           }
           res.status(200).send(result)
           db.end(); // Close the connection
       });
   });
   
   
}
const checkLogin=(req,res)=>{
    const body=req.body
    console.log(body);
    
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
       if (err) {
           console.error('Error connecting to the database:', err);
           res.status(500).send({message:"Error connecting to the database"})
       }
       console.log('Connected to the database!');
       const query = `select * from userdetails where email='${body.email}' and password='${body.password}'`;   
// Corrected query
       db.query(query, (err, result) => {
           if (err) {
               console.error('Error executing query:', err);
               res.status(500).send({message:"Invalid Query"})
           }
           console.log('Query result:', result);
           if(result.length>0){
           res.status(200).send(result)}
           else{
            res.status(400).send(result)
           }
           db.end(); // Close the connection
       });
   });
   
   
}
const emailexist=(req,res)=>{
    const body=req.body
    console.log(body);
    
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
       if (err) {
           console.error('Error connecting to the database:', err);
           res.status(500).send({message:"Error connecting to the database"})
       }
       console.log('Connected to the database!');
       const query = `select * from userdetails where email='${body.email}'`;   
// Corrected query
       db.query(query, (err, result) => {
           if (err) {
               console.error('Error executing query:', err);
               res.status(500).send({message:"Invalid Query"})
           }
           console.log('Query result:', result.length);
           if(result.length>0){
           res.status(200).send(result)}
           else{
            res.status(400).send(result)
           }
           db.end(); // Close the connection
       });
   });
   
   
}
const updatepassword=(req,res)=>{
    const body=req.body
    console.log(body);
    
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
       if (err) {
           console.error('Error connecting to the database:', err);
           res.status(500).send({message:"Error connecting to the database"})
       }
       console.log('Connected to the database!');
       const query = `update userdetails 
       set password='${body.password}',confirmpassword='${body.confirmpassword}'
       where email='${body.email}'`;   
// Corrected query
       db.query(query, (err, result) => {
           if (err) {
               console.error('Error executing query:', err);
               res.status(500).send({message:"Invalid Query"})
           }
           console.log('Query result:', result);
           if(result){
           res.status(200).send({message:'success'})
        }
           else{
            res.status(400).send({message:'failure'})
           }
           db.end(); // Close the connection
       });
   });
   
   
}
const blogdata=(req,res)=>{
    
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
       if (err) {
           console.error('Error connecting to the database:', err);
           res.status(500).send({message:"Error connecting to the database"})
       }
       console.log('Connected to the database!');
       const query = `select * from blogs`;   
// Corrected query
       db.query(query, (err, result) => {
           if (err) {
               console.error('Error executing query:', err);
               res.status(500).send({message:"Invalid Query"})
           }
           console.log('Query result:', result);
           if(result.length>0){
           res.status(200).send(result)}
           else{
            res.status(400).send(result)
           }
           db.end(); // Close the connection
       });
   });
   
   
}
const getpackagedata=(req,res)=>{
    const body=req.body
    console.log(body);
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        const query = `select * from tourpackages where placeId=${body.membershipvalue}`;   
 // Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
            console.log('Query result:', result);
            if(result.length>0){
            res.status(200).send(result)}
            else{
             res.status(400).send(result)
            }
            db.end(); // Close the connection
        });
    });
    
    
 }
 const BookTour=(req,res)=>{
    const body=req.body
    console.log(body);
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        const query = `INSERT INTO TourBookings (membership, city, accountType, childcount, adultcount, packagetype, startdate, enddate, email)
               VALUES ('${body.membership}', '${body.city}', '${body.accountType}', 
               ${body.childcount}, ${body.adultcount}, '${body.packagetype}', '${body.startdate}',
                '${body.enddate}', '${body.email}')`;   
 // Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
            console.log('Query result:', result);
            if(result.affectedRows>0){
            res.status(200).send(result)}
            else{
             res.status(400).send(result)
            }
            db.end(); // Close the connection
        });
    });
    
    
 }
 const getDestination=(req,res)=>{
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        const query = `select * from CombinedView`;   
 // Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
            //console.log('Query result:', result);
            if(result.length>0){
            res.status(200).send(result)}
            else{
             res.status(400).send(result)
            }
            db.end(); // Close the connection
        });
    });
    
    
 }
 const getFavourites=(req,res)=>{
    const body=req.body 
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        const query = `select * from Favourites where email='${body.mail}'`;   
 // Corrected query
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send({message:"Invalid Query"})
            }
            console.log('Query result', result);
            if(result.length>0){
            res.status(200).send(result)}
            else{
             res.status(400).send("no data")
            }
            db.end(); // Close the connection
        });
    });
    
    
 }
 
 const addFavourites=(req,res)=>{
    const body=req.body
   const{placeid,img,name,desc,email,visible}=body.data
console.log(visible,"////////////////////////////");

    const db = mysql.createConnection(configuration);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send({message:"Error connecting to the database"})
        }
        console.log('Connected to the database!');
        let query = `select * from Favourites where placeid=${placeid} and email='${email}'`;  
        let resultmessage="" 
// Corrected query
db.query(query, (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ message: "Invalid Query" });
        return;
    }
  if(visible){  
    if (result.length > 0) {        
        resultmessage="already there"
        query = `update Favourites set placeid=${placeid} WHERE placeid=${placeid} AND email='${email}'`;
    }
    else {
        query = `INSERT INTO Favourites (placeid, img, name, description, email) VALUES (${placeid}, '${img}', '${name}', '${desc}', '${email}')`;
        resultmessage="Inserted"
    }
} 
else{
             query = `DELETE FROM Favourites WHERE placeid=${placeid} AND email='${email}'`;
        resultmessage="Deleted"
    }
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: "Invalid Query" });
            return;
        }
        //console.log('Query result:', result);
        if (result.affectedRows > 0) {
            res.status(200).send(resultmessage);
        } else {
            res.status(400).send("No rows affected");
        }
        db.end(); // Close the connection
    });
});
    });
    
    
}
 const removeFavourites = (req, res) => {
     const body = req.body;
     const{email,placeid}=body.mydata
     console.log(body,"''''''''''''''''''''''''''''''");
     
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
     if (err) {
       console.error("Error connecting to the database:", err);
       res.status(500).send({ message: "Error connecting to the database" });
     }
     console.log("Connected to the database!");
     const query = `delete from Favourites where email='${email}' and placeid=${placeid}`;
     // Corrected query
     db.query(query, (err, result) => {
       if (err) {
         console.error("Error executing query:", err);
         res.status(500).send({ message: "Invalid Query" });
       }
       console.log("Query result", result);
       if (result.affectedRows > 0) {
         res.status(200).send("done");
       } else {
         res.status(400).send("no data");
       }
       db.end(); // Close the connection
     });
   });
};
 const getBookings = (req, res) => {
   const body = req.body;
   const { mydata } = body;
   console.log(body, "''''''''''''''''''''''''////''''''");

   const db = mysql.createConnection(configuration);
   db.connect((err) => {
     if (err) {
       console.error("Error connecting to the database:", err);
       res.status(500).send({ message: "Error connecting to the database" });
     }
     console.log("Connected to the database!");
     const query = `select * from tourbookings where email='${mydata}'`;
     // Corrected query
     db.query(query, (err, result) => {
       if (err) {
         console.error("Error executing query:", err);
         res.status(500).send({ message: "Invalid Query" });
       }
       console.log("Query result", result,query);
       if (result.length > 0) {
         res.status(200).send(result);
       } else {
         res.status(400).send(result);
       }
       db.end(); // Close the connection
     });
   });
};
 const getRegions = (req, res) => {
   const db = mysql.createConnection(configuration);
   db.connect((err) => {
     if (err) {
       console.error("Error connecting to the database:", err);
       res.status(500).send({ message: "Error connecting to the database" });
     }
     console.log("Connected to the database!");
     const query = `select * from Regions`;
     // Corrected query
     db.query(query, (err, result) => {
       if (err) {
         console.error("Error executing query:", err);
         res.status(500).send({ message: "Invalid Query" });
       }
       console.log("Query result", result);
       if (result.length > 0) {
         res.status(200).send(result);
       } else {
         res.status(400).send("no data");
       }
       db.end(); // Close the connection
     });
   });
};
const getPlaces = (req, res) => {
    const body = req.body;
    console.log(body);
    
    const db = mysql.createConnection(configuration);
    db.connect((err) => {
      if (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send({ message: "Error connecting to the database" });
      }
      console.log("Connected to the database!");
      const query = `select * from countries where countryrefid=${body.regionid}`;
      // Corrected query
      db.query(query, (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          res.status(500).send({ message: "Invalid Query" });
        }
        console.log("Query result", result);
        if (result.length > 0) {
          res.status(200).send(result);
        } else {
          res.status(400).send("no data");
        }
        db.end(); // Close the connection
      });
    });
  };
module.exports = {
  insertData,
  senddata,
  getMembership,
  getCity,
  getTourData,
  checkLogin,
  emailexist,
  updatepassword,
  blogdata,
  getpackagedata,
  BookTour,
  getDestination,
  addFavourites,
  getFavourites,
  removeFavourites,
  getBookings,
  getRegions,
  getPlaces,
};