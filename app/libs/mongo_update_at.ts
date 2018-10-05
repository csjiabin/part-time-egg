export default function updateOrInsertAt(schema) {
  schema.pre("findOneAndUpdate", function(next) {
    this.findOneAndUpdate({}, { update_at: Date.now() });
    next();
  });
}
