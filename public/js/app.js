const optionsList = {
  root: document.getElementById('options-list'),

  options: [],
  addOption(value) {
    this.options = [...this.options, value];

    const $li = document.createElement('li');
    $li.textContent = value;
    this.root.appendChild($li);
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
    const { options } = optionsList;
    const winIndex = Math.floor(Math.random() * options.length);
    const winValue = options[winIndex];
    this.result.textContent = winValue;
  },
};
picker.init();
