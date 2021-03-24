import './assets/css/style.css';

export default {
  mounted() {
    this.initCopy();
  },

  updated() {
    this.initCopy();
  },

  methods: {
    initCopy() {
      console.log(COPY_ELEM);
      setTimeout(() => {
        if (typeof COPY_ELEM === 'string') {
          document.querySelectorAll(COPY_ELEM).forEach(this.createCopyBtn);
        } else if (COPY_ELEM instanceof Array || Array.isArray(COPY_ELEM)) {
          COPY_ELEM.forEach((item) => {
            document.querySelectorAll(item).forEach(this.createCopyBtn);
          });
        }
      }, 1000);
    },
    createCopyBtn(parent) {
      if (parent.classList.contains('codecopy-enabled')) return;
      const copyElement = document.createElement('span');
      copyElement.className = 'code-copy';
      copyElement.innerHTML = '复制';
      copyElement.title = 'click to copy';
      copyElement.addEventListener('click', () => {
        this.copyContToClipboard(parent.innerText);
      });
      console.log(copyElement);
      console.log(parent);
      parent.appendChild(copyElement);
      parent.classList.add('codecopy-enabled');
    },
    copyContToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    }
  }
};
