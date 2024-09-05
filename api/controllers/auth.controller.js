import User from "../models/use.model.js";
import bcryptjs from 'bcryptjs';

export const singup = async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password using bcrypt
    const hashPassword = bcryptjs.hashSync(password, 10);

    // Create a new User instance
    const newUser = new User({
        username,
        email,
        password: hashPassword
    });

    try {
        // Attempt to save the new user
        await newUser.save();
        res.status(201).json({
            message: "User created successfully."
        });
    } catch (err) {
        // Check if the error is a duplicate key error
        if (err.code === 11000) {
            // Determine which field caused the error
            const field = Object.keys(err.keyPattern)[0];
            res.status(400).json({
                message: `The ${field} is already in use. Please choose a different ${field}.`
            });
        } else {
            // Handle other errors
            res.status(500).json({
                message: "An error occurred while creating the user.",
                error: err.message
            });
        }
    }
};
