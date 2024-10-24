import jwt from "jsonwebtoken";

const generateToken = (res, userId, isAdmin) => {
  const token = jwt.sign(
    {
      userId,
      //add isAdmin 
      isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

 export default generateToken;
