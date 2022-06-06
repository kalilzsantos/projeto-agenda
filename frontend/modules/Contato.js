import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]')
    const emailInput = el.querySelector('input[name="email"]')
    const telefoneInput = el.querySelector('input[name="telefone"]')
    let error = false;

    if(!nomeInput.value){
      alert('Nome é um campo obrigatório!');
      error = true;
    }

    if(!validator.isEmail(emailInput.value)){
      alert('Insira um email válido!');
      error = true;
    }

    if(!telefoneInput.value && !emailInput.value){
      alert('Pelo menos uma forma de contato deve ser preenchida: email ou telefone.');
      error = true;
    }

    if(!error) {
      el.submit();
    }
  }
}