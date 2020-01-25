// Requring The Admin Schema
var Admin = require("../models/adminSchema");

// Seeding Middlwe-Ware for Admin
Admin.find({}, (err, admin) => {
  if (admin.length === 0) {
    var admin = {
      name: "AmanSharma",
      email: "sharmaaman4419@gmail.com",
      password: "aman1234"
    };
    Admin.create(admin, (err, seededAdmin) => {
      if (err) return console.log("Error While Seeding");
      return console.log(seededAdmin, " Admin Seeded Into Db Sucessfully");
    });
  } else {
    console.log("Admin May Also Presented In The Database");
  }
});
