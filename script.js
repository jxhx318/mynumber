'use strict';
/*
//document:修改文档，querySelector：引用HTML中的指定选择器，如果选择器有效，就返回该选择器所属文档的内容; .textContent:返回指定的文本内容，
//和querySelector的区别在于：querySelector方法会把HTML标签一起返回，而textContent方法只返回文本内容
console.log(document.querySelector('.message').textContent);

//document:修改文档，querySelector：引用HTML中的指定选择器，如果选择器有效，就返回该选择器所属文档的内容; .textContent:返回指定的文本内容，
//和querySelector的区别在于：querySelector方法会把HTML标签一起返回，而textContent方法只返回文本内容
console.log(document.querySelector('.message').textContent);

//将指定的class选择器用.textContent赋值，改变了其所属的HTML标签的内容
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//将指定的class选择器赋值，改变了其所属的HTML标签的内容,但.guess选择器是input标签，本身没有内容，所以不能用textContent方法，可以用value来赋值和获取所输入的值
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let setNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //设置分数或次数
let highscore = 0; //设置最高分的初始值为0；
//创建displayMessage通用组件，通过调用该组件来简洁代码：
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//addEventListener:事件监听方法;click:当鼠标点击一个元素时激活事件处理程序，例如下面的function函数
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(score, typeof score);
  //if判断条件：!guess(guess为false)、guess === setNumber
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number'); //调用displayMessage组件并赋值，当满足if条件时触发组件，输出该值
  } else if (guess === setNumber) {
    document.querySelector('.number').textContent = setNumber;
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    //通过style函数调用CSS样式
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      //当score > highscore时，highscore = score;
      highscore = score;
      document.querySelector('.highscore').textContent = highscore; //将获取到最高分赋值到class选择器
    }
    //重构代码，相较于第一版更简洁更高效
  } else if (guess !== setNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > setNumber ? 'It"s bigger than the numbers.' : ' less than that';
      displayMessage(
        guess > setNumber ? 'It"s bigger than the numbers.' : ' less than that'
      ); //调用displayMessage组件并赋值，当满足if条件时触发组件，输出该值
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //当score无法大于1时，则执行该语句
      // document.querySelector('.message').textContent = '🤢 You lost the game.';
      displayMessage('🤢 You lost the game.'); //调用displayMessage组件并赋值，当满足if条件时触发组件，输出该值
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > setNumber) {
    //   //if判断条件：当guess>setNumber时，还要在执行是否score>1的判断，如果score>1则执行它内部的判断语句，即输入的数字是否大于随机生成的数字,如果一直输错，则score--
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       ' It"s bigger than the numbers.';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     //当score无法大于1时，则执行该语句
    //     document.querySelector('.message').textContent = '🤢 You lost the game.';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < setNumber) {
    //   //if判断条件：当guess<setNumber时，还要在执行是否score>1的判断，如果score>1则执行它内部的判断语句，即输入的数字是否大于随机生成的数字,如果一直输错，则score--
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = ' less than that';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     //当score无法大于1时，则执行该语句
    //     document.querySelector('.message').textContent = '🤢 You lost the game.';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

/*1.理解问题
 1、恢复score和setNumber的原始值是获取全局变量还是在新的处理程序再写新的设置原始值的变量？
 2、恢复消息是简单的重置文字吗？、
 3、恢复数字是简单的重新设置问号吗？
 4、恢复分数是重新设置为20吗
 5、恢复猜测输入栏的初始条件是清空吗？*/

/*2.分解问题
 1、获取全局变量，不用写新的
 2、是简单的重置文字
 3、是重新设置问号
 4、获取score全局变量，程序设置为20
 5、点击按钮清空输入框*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
