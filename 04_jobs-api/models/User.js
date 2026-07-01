const mongoose = require('mongoose')
const bcrypt =require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
     match: [// this checks that if it matches the given regular expression now why we use that bcz we want to check for valid email expression 
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide valid email',
    ],
     unique: true,// it creates a unique index its not a validator 
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})

UserSchema.pre('save',async function(){
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password,salt) 
})// in mongooze upper vdersion next is not used 

module.exports = mongoose.model('User', UserSchema)

// hurbaar same email mat bhejna => 
  /**
   john@gmail.com
   john1@gmail.com
   john2@gmail.com
   */

/**
genSalt(10) → generate a new salt.
getSalt(10) → extract the salt from an existing hash.
 */
