const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const UserSchema = new Schema({
  shortId: { type: String, default: shortId.generate, unique: true },
  avatar: { type: Object },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  // name: { type: String, required: true },
  profile: { type: Schema.Types.ObjectId, ref: 'profile' },
  posts: [{ type: Schema.Types.ObjectId, ref: 'post' }],
  postComments: [{ type: Schema.Types.ObjectId, ref: 'postComment' }],
  conversations: [{ type: Schema.Types.ObjectId, ref: 'conversation' }],
  placeReviews: [{ type: Schema.Types.ObjectId, ref: 'placereview' }],

  notifications: {
    onNewPost: { type: Boolean, default: true },
    onOwnPost: { type: Boolean, default: true },
    onBookmarkedPost: { type: Boolean, default: true },
    onCommentedPost: { type: Boolean, default: true }
  },

  isActive: { type: Boolean, default: false },
  isActiveToken: { type: String },
  isActiveTokenExpires: { type: Date },

  resetPasswordToken: { type: String },
  resetPasswordTokenExpires: { type: Date },

  dateCreated: { type: Date, default: Date.now }
  // dateOnline: { type: Date },
  // dateOffline: { type: Date },
  // isOnline: { type: Boolean },
  // sockets: [{ type: String }]
})

module.exports = mongoose.model('user', UserSchema)
