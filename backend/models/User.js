

const userSchema = new mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // confirmPassword: { type: String, required: true },
  id: { type: String },
});

module.export = mongoose.model("User", userSchema);