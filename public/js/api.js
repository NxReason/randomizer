const API = {
  async saveSet(data) {
    try {
      const res = await fetch('/api/sets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        console.error(`Can't save set, res status: ${res.status}`);
        return null;
      }
      return await res.json();
    } catch (err) {
      console.error(`Can't save set, error: ${err}`);
      return null;
    }
  },
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
