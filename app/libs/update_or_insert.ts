export default function updateOrInsert(schema) {
  schema.statics.updateOrInsert = async function updateOrInsert(
    query,
    update,
    options
  ) {
    try {
      const doc = await this.findOneAndUpdate(query, update, options);
      if (doc) return doc;
      return await this.create(update);
    } catch (error) {
      throw error;
    }
  };
}
