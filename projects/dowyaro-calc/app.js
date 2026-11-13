(() => {
'use strict';
const display=document.getElementById('display'), expression=document.getElementById('expression');
let current='0', previous=null, operator=null, waiting=false, history='';
const symbols={'+':'+','-':'−','*':'×','/':'÷'};
function pretty(n){if(n==='Error')return n;const [whole,decimal]=String(n).split('.');const numeric=Number(whole);return (Number.isFinite(numeric)?numeric.toLocaleString('en-US',{maximumFractionDigits:0}):whole)+(decimal!==undefined?'.'+decimal:'');}
function render(){display.textContent=pretty(current);expression.textContent=operator!==null?`${pretty(previous)} ${symbols[operator]}`:history||'\u00a0';}
function digit(d){if(current==='Error')clear();if(waiting){current=d;waiting=false;history='';}else if(current.replace(/[^0-9]/g,'').length>=14)return;else current=current==='0'?d:current+d;render();}
function decimal(){if(current==='Error')clear();if(waiting){current='0';waiting=false;history='';}if(!current.includes('.'))current+='.';render();}
function clear(){current='0';previous=null;operator=null;waiting=false;history='';render();}
function del(){if(current==='Error'){clear();return;}if(waiting){current='0';waiting=false;}else current=current.length<=1||current.length===2&&current.startsWith('-')?'0':current.slice(0,-1);render();}
function calculate(a,b,op){let result;switch(op){case '+':result=a+b;break;case '-':result=a-b;break;case '*':result=a*b;break;case '/':result=b===0?NaN:a/b;break;default:return null;}return Number.isFinite(result)?Number(result.toPrecision(12)).toString():'Error';}
function choose(op){if(current==='Error')return;if(operator!==null&&!waiting){const result=calculate(Number(previous),Number(current),operator);current=result;if(result==='Error'){previous=null;operator=null;waiting=true;history='Cannot divide by zero';render();return;}}previous=current;operator=op;waiting=true;history='';render();}
function equals(){if(operator===null||current==='Error')return;const a=previous,b=current,op=operator;current=calculate(Number(a),Number(b),op);history=`${pretty(a)} ${symbols[op]} ${pretty(b)} =`;operator=null;previous=null;waiting=true;if(current==='Error')history='Cannot divide by zero';render();}
function percent(){if(current==='Error')return;current=Number((Number(current)/100).toPrecision(12)).toString();waiting=false;render();}
function sign(){if(current==='Error'||Number(current)===0)return;current=current.startsWith('-')?current.slice(1):'-'+current;render();}
function action(name){({clear,delete:del,decimal,equals,percent,sign})[name]?.();}
document.querySelector('.keys').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.digit!==undefined)digit(b.dataset.digit);else if(b.dataset.operator)choose(b.dataset.operator);else action(b.dataset.action);});
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;const k=e.key;if(/^[0-9]$/.test(k))digit(k);else if(['+','-','*','/'].includes(k)){e.preventDefault();choose(k);}else if(k==='.'||k===',')decimal();else if(k==='Enter'||k==='='){e.preventDefault();equals();}else if(k==='Backspace')del();else if(k==='Escape')clear();else if(k==='%')percent();});
render();
})();