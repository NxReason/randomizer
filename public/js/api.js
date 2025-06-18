const API = {
  async removeSet(id) {
    try {
      const res = await fetch(`/api/sets/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        console.error(`Can't remove set, res status: ${res.status}`);
        return null;
      }
      return await res.json();
    } catch (err) {
      console.error(`Can't remove set, error: ${err}`);
      return null;
    }
  },
};
