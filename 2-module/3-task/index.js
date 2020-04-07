let calculator = {
  sum(){
    return this.firstValue + this.secondValue;
  },
  mul(){
    return this.firstValue * this.secondValue;
  },
  read(firstVariable, secondVariable){
    this.firstValue = firstVariable;
    this.secondValue = secondVariable;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
