import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET); //This line decodes and verifies the token, and gives you back the original payload you used while signing it

        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id }; // ✅ best practice     You're just taking the embedded user ID from the token and attaching it to the request — perfect for authorization middleware.
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }

        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default userAuth;
