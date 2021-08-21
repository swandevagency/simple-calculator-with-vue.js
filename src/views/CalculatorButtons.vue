<template>
  <div>
    <div class="calculator-wrapper">
      <div class="back-to-home-page">
        <p>dont click this</p>
      <router-link to='/' class="back-buttom">GO BACK</router-link>
      </div>
        <div class="calculator">
          <div class="display">{{current || '0'}}</div>
          <button @click="clear" class="allclear-button bottons">AC</button>
          <button @click="del" class="delete-button bottons">DEL</button>
          <button @click="doOperator('/')" class="operators-button bottons">/</button>
          <button @click="userinput('1')" class="numbers-button bottons">1</button>
          <button @click="userinput('2')" class="numbers-button bottons">2</button>
          <button @click="userinput('3')" class="numbers-button bottons">3</button>
          <button @click="doOperator('+')" class="operators-button bottons">+</button>
          <button @click="userinput('4')" class="numbers-button bottons">4</button>
          <button @click="userinput('5')" class="numbers-button bottons">5</button>
          <button @click="userinput('6')" class="numbers-button bottons">6</button>
          <button @click="doOperator('-')" class="operators-button bottons">-</button>
          <button @click="userinput('7')" class="numbers-button bottons">7</button>
          <button @click="userinput('8')" class="numbers-button bottons">8</button>
          <button @click="userinput('9')" class="numbers-button bottons">9</button>
          <button @click="doOperator('*')" class="operators-button bottons">*</button>
          <button @click="userinput('0')" class="numbers-button bottons button-zero">0</button>
          <button @click="dot" class="numbers-button bottons">.</button>
          <button @click="equal" class="equal bottons">=</button>
        </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorButtons",
  data() {
    return{
      current: '',
      previous: null,
      operator: null,
      operatorClicked: false,
    }
  },
  methods:{
    clear() {
      this.current = ''
      this.previous = null
      this.operatorClicked = false
      this.operator = null
    },
    del() {
      this.current = this.current.slice(0, -1);
    },
    userinput(number){
      if(this.operatorClicked) {
        this.current = number;
        this.operatorClicked = false;
      }else {
        this.current = this.current === '0' ? number: `${this.current}${number}`
      } 
    },
    dot(){
      if(this.operatorClicked) {
        this.current = '.'
        this.operatorClicked = false
      }
      if(this.current.indexOf('.') === -1){
        this.current += '.'
      }
    },
    doOperator(newOperator){
      const numberValue = parseFloat(this.current);
      if(this.operator && this.operatorClicked) {
        this.operator = newOperator
      }
      if (this.previous == null) {
        this.previous = numberValue
      }else if (this.operator) {
        const result = this.calculator(this.previous, numberValue, this.operator)
        this.current = String(result)
        this.previous = result
      }
      this.operatorClicked = true
      this.operator = newOperator
    },
    calculator(first, second, operator){
      switch (operator) {
        case '+':
          return first + second
        case '-':
          return first - second
        case '*':
          return first * second
        case '/':
          return first / second
        default:
          return second
      }
    },
    equal() {
      this.doOperator()
    }
  }
}
</script>

<style scoped>
  .calculator{
    margin-top: 5px;
    display: inline-grid;
    grid-gap: 2px;
    grid-template-columns: 70px 70px 70px 70px;
    justify-content: center;
  }
  .display{
    grid-column-start: 1;
    grid-column-end: 5;
    background: rgb(233, 255, 36);
    color: rgb(56, 160, 56);
    border: 1px solid transparent;
    padding: 30px;
    text-align: left;
    border-radius: 5px;
  }
  .allclear-button{
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .delete-button{
    grid-column-start: 3;
    grid-column-end: 4;
  }
  .button-zero{
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .bottons{
    background: rgb(56, 160, 56);;
    color: rgb(35, 83, 20);;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
     font-family: 'Caveat','Parisienne', cursive,sans-serif;
  }
  .bottons:active{
    transform: scale(0.95);
  }
  .bottons:hover{
    box-shadow: 2px 5px 15px -3px #31110470;
    background: rgb(56, 160, 56);
    color: rgb(233, 255, 36);
  }
  .calculator-wrapper{
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .back-to-home-page{
    display: inline-block;
  }
  .back-buttom{
    text-decoration: none;
    border: 2px solid transparent;
    color: rgba(241, 180, 180, 0.705);
    border-radius: 5px;
    padding: 5px;
    background: rgb(1, 29, 18);
    font-size: .9rem;
  }
  .back-buttom:hover{
    color: rgb(221, 12, 12);
    background: rgb(1, 29, 18);
  }
</style>>
