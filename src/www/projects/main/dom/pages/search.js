'use strict';

const LS = require('../../strings');
const Element = require('../element');
const Page = require('./page');
const Form = require('../form');

class Search extends Page{
  constructor(parent){
    super(parent);

    const form = new Form(this);
    const field = form.createField(Element.InputDropdown);

    const searchTypes = [
      ['user', 'users'],
      ['comp', 'competitions'],
      ['func', 'functionalities'],
      ['post', 'posts'],
    ];

    searchTypes.forEach(([type, label], i) => {
      field.addOpt(type, LS.labels.forms.fields[label], i === 0);
    });

    form.createField(Element.InputText, LS.labels.forms.fields.keyWords);
    form.addConfirm(LS.labels.forms.buttons.search);

    form.on('confirm', () => {
      O.glob.dom.noimpl();
    });

    this.form = form;
  }

  static title(){ return LS.titles.search; }

  css(){ return 'page-search'; }
};

module.exports = Search;