const optionsList = {
  root: document.getElementById('options-list'),

  options: [],
  addOption(value) {
    const id = window.crypto.randomUUID();
    this.options = [...this.options, { id, value }];

    const $li = document.createElement('li');
    $li.classList.add('options-list-item');
    $li.textContent = value;

    const $removeIcon = document.createElement('span');
    $removeIcon.textContent = 'x';
    $removeIcon.classList.add('remove-option-icon');
    $li.appendChild($removeIcon);

    this.root.appendChild($li);

    $removeIcon.addEventListener('click', () => {
      this.root.removeChild($li);
      this.options = this.options.filter(o => o.id !== id);
    });
  },
  getOptionNames() {
    return this.options.map(o => o.value);
  },
};

const optionsMenu = {
  init() {
    this.root.addEventListener('submit', e => {
      e.preventDefault();
      this.addOption();
    });
  },
  root: document.getElementById('options-menu'),
  nameInput: document.getElementById('options-name-input'),

  addOption() {
    const optionName = this.nameInput.value;
    optionsList.addOption(optionName);
    this.nameInput.value = '';
  },
};
optionsMenu.init();

const picker = {
  init() {
    this.runBtn.addEventListener('click', () => {
      this.generateWinner();
    });
  },
  runBtn: document.getElementById('picker-run-btn'),
  result: document.getElementById('picker-result'),

  generateWinner() {
    const options = optionsList.getOptionNames();
    const winIndex = Math.floor(Math.random() * options.length);
    const winValue = options[winIndex];
    this.result.textContent = winValue;
    historyList.addRecord(winValue);
  },
};
picker.init();

const historyList = {
  list: document.getElementById('history-list'),
  addRecord(value) {
    const $li = document.createElement('li');
    $li.textContent = value;
    this.list.prepend($li);
  },
};
