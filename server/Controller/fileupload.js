exports.EmployeeProfile = (req, res) => {
  if (req.files) {
    const file = req.files.file;
    const filename = file.name;
    file.mv("./public/profile/" + filename, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({ msg: "File Uploaded!", fileName: filename });
      }
    });
  }
};
