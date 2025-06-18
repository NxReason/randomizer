const sets = {
  init() {
    const items = document.querySelectorAll('.set-list-item');
    for (let item of items) {
      this.items.push({
        id: parseInt(item.dataset['id']),
        name: item.dataset['name'],
      });

      const removeBtn = item.querySelector('.icon-remove');
      removeBtn.addEventListener('click', async () => {
        const deleted = await API.removeSet(item.dataset['id']);

        if (deleted?.set) {
          console.log(deleted.set);

          this.items = this.items.filter(item => item.id !== deleted.set.id);
          this.list.removeChild(item);
        }
      });
    }
  },

  list: document.getElementById('sets-list'),
  items: [],
};

sets.init();
