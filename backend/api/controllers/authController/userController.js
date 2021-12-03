
const setSuccessResponse = (data, res) => {
  res.status(200);
  res.json(data)
}


export function allAccess(req, res) {
  return setSuccessResponse("Public Content", res)
  //res.status(200).send("Public Content.");
}

export function userBoard(req, res) {
  return setSuccessResponse("User Content", res)
  // res.status(200).send("User Content.");
}