const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true]
        },
        image: {
            type: String,
            default: 0
        }
    }, { versionKey: false }
);
const User = mongoose.model('users', userSchema);

module.exports = User;