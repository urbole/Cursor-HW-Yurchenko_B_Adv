(()=>{var e={232:()=>{(async function(e){let t="",n=0;for(;n<4;)n++,await new Promise((e=>{setTimeout((()=>{e()}),50)})),t+=String.fromCharCode(parseInt(String(Date.now()).slice(-5)));return t})().then((e=>{document.getElementById("for_promise").innerHTML=`${e}`}))}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";const e=15.678,t=123.965,i=90.2345,o=100*Math.random().toFixed(2),r=229.8775,s=Math.floor(e)+Math.floor(t)+Math.floor(i),l=100*Math.round(2.298775),c=s%2==0,d=(r/3).toFixed(2),a=(r-2.298775*o).toFixed(2),u=r.toFixed(2)/2-(r.toFixed(2)-a);Math.max(e,t,i),Math.min(e,t,i);const p=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],y=["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"],f=[4,5,5,3,4,5],m=function(e){const t=[e[0],e[2]],n=[e[1],e[3]],i=[e[4],e[5]],o=[];return o.push(t,n,i),o},g=m(p),h=function(e,t){const n=[];for(let i=0;i<e.length;i++){const o=e[i],r=t[i];n.push([o.join(" і ")].concat(r))}return n},b=h(g,y),x=function(e,t){const n=[];for(let i=0;i<e.length;i++){const o=e[i],r=t[i];n.push([o].concat(r))}return n},w=(x(p,f),function(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].concat(Math.trunc(4*Math.random()+1)));return t}),$=(w(b),function(e,t,n){const i=[];for(let o=0;o<e;o++)i.push(Math.trunc(Math.random()*(n-t)+t));return i}),k=($(15,1,100),function(...e){let t=0,n=0;for(let n=0;n<e.length;n++)t+=e[n];return n=t/e.length,n}),A=(k(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2),function(...e){const t=[];let n=0,i=0;return t.push(...e),n=e.length/2,t.sort(((e,t)=>e-t)),i=n%2==0?(t[n-1]+t[n])/2:t[Math.floor(n)],i}),E=(A(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2),function(...e){return e.filter((e=>e%2!=0))}),v=(E(1,2,3,4,5,6),function(...e){return e.filter((e=>e>0)).length}),M=(v(1,-2,3,-4,-5,6),function(...e){return e.filter((e=>e%5==0))}),S=(M(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2),function(e){let t="",n=["shit","fuck"];t=e;for(let e=0;e<n.length;e++)t=t.replaceAll(n[e],"****");return t}),I=(S("Are you fucking kidding? fuck... Holy shit! It's bullshit"),function(e){let t=[];const n=[];t=e.toLowerCase().replaceAll(/\s+/g,"");for(let e=0;e<Math.ceil(t.length/3);e++)n[e]=t.slice(3*e,3*e+3);return n}),B=(I("Live live commander"),[{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}]),L=e=>{if(e.subjects)return Object.keys(e.subjects).map((e=>e[0].toUpperCase().concat(e.slice(1)).replaceAll("_"," ")))},T=(L(B[0]),e=>{let t=0;if(e.subjects){let n=0;Object.values(e.subjects).flat().forEach((function(e,i,o){n+=e/o.length,t=+n.toFixed(2)}))}return t}),j=(T(B[0]),function(e){const t=Object.values(e),n=T(e),i=t[0];return{course:t[1],name:i,averageMark:n}}),_=(j(B[0]),function(e){return e.map((e=>e.name)).sort()}),H=(_(B),function(e){let t="",n="";for(let i=0;i<e.length;i++){const o=T(e[i]);n<o&&(n=o,t=e[i].name)}return t});function N(e){const t={},n=[...e];let i=0;for(let e=0;e<n.length;e++){let o=0;i=n[e];for(let e=0;e<n.length;e++)i===n[e]&&(o+=1);t[n[e]]=o}return t}H(B),N("тест");const C={tax:.195,middleSalary:1789,vacancies:11476},O={tax:.25,middleSalary:1586,vacancies:3921};function F(){const e=+(500*Math.random()+1500).toFixed(2),t=this.tax*e;return{salary:e,taxes:t,profit:+(e-t).toFixed(2)}}setInterval((()=>F.call(O)),1e4);const z=()=>"#"+Math.floor(16777215*Math.random()).toString(16),J=document.querySelector("#btn-a"),q=document.querySelector("#btn-s"),P=document.querySelector("#btn-d"),W=document.querySelector("#btn-f");document.getElementById("sound-a"),document.getElementById("sound-s"),document.getElementById("sound-d"),document.getElementById("sound-f"),n(232),function*(){let e=1;for(;;)yield e++}();const D=document.getElementById("current_font-size"),R=document.getElementById("up_font-size"),U=document.getElementById("down_font-size"),V=document.getElementById("reset_font-size"),G=document.getElementById("title"),K=getComputedStyle(G).fontSize.slice(0,-2);document.getElementById("wrap_reset-btn"),D.innerText=`current font size: ${K}px`;let Q=K;function*X(e){for(;;)"up"===e?(Q=+Q+1,yield Q):"down"===e?(Q-=1,yield Q):"reset"===e&&(Q=K,yield Q)}const Y=X("up"),Z=X("down"),ee=X("reset");R.addEventListener("click",(()=>{G.style.fontSize=`${Y.next().value}px`,V.setAttribute("style","display:block"),D.innerText=`current font size: ${G.style.fontSize}`})),U.addEventListener("click",(()=>{G.style.fontSize=`${Z.next().value}px`,V.setAttribute("style","display:block"),D.innerText=`current font size: ${G.style.fontSize}`})),V.addEventListener("click",(()=>{G.style.fontSize=`${ee.next().value}px`,G.removeAttribute("style"),V.setAttribute("style","display:none"),D.innerText=`current font size: ${K}px`}));const te=n.p+"assets/img/5f6d2bb51aefbf06d65ca26c3094a7e0.jpeg",ne=n.p+"assets/img/3d92dc36813e1a623b94716b7e35ab55.png",ie=n.p+"assets/img/71590747d634ece4c326b020244f802f.png",oe=n.p+"assets/sounds/43ef145ae3879a3d8a0b37bf288e2ed4.mp3",re=n.p+"assets/sounds/a123ddb808077fd9f63351a93de25041.mp3",se=n.p+"assets/sounds/8feb2276f485b4222678dcb17e405aa1.mp3",le=n.p+"assets/sounds/be3009409711878233bb810be10db1ef.mp3",ce=new Audio(oe),de=new Audio(re),ae=new Audio(se),ue=new Audio(le),pe=document.body;document.head.insertAdjacentHTML("afterbegin",`<link rel="shortcut icon" href="${te}" type="image/x-icon">`);const ye=document.getElementById("hw1");ye.insertAdjacentHTML("beforeend",`<p>Максимальна ціна: <i>${Math.max(e,t,i)}</i></p>\n    <p>Мінімальна ціна: <i>${Math.min(e,t,i)}</i></p>\n    <p>Вартість всіх товарів: <i>229.8775</i></p>\n    <p>Округлена у меншу сторону вартість всіх товарів: <i>${s}</i></p>\n    <p>Округлена до сотень вартість всіх товарів: <i>${l}</i></p>\n    <p>Чи є сума всіх товарів парним числом: <i>${c}</i></p>\n    <p>Сума решти, при оплаті всіх товарів (без округлення): <i>270.1225</i></p>\n    <p>Cереднє значення цін, округлене до другого знаку: <i>${d}</i></p>\n    <p>Сумма до сплати з урахуванням знижки: <i>${a}</i></p>\n    <p>Чистий прибуток, якщо клієнт заплатив зі знижкою: <i>${u.toFixed(2)}</i></p>\n`),document.getElementById("hw2").insertAdjacentHTML("beforeend",function(){alert("Програма яка виконує складання чисел від N до M обраних користувачем");let e=null,t=null,n=0;do{e=+prompt("Введіть ціле число, від якого ми почнемо складати")}while(Number.isNaN(e)||e<=0);do{t=+prompt("Введіть ціле число, до якого ми будемо складати")}while(Number.isNaN(t)||t<=0);const i=confirm("Чи потрібно пропускати при складанні парні числа");for(let o=e;o<=t;o++)(!1===i||o%2)&&(n+=o);let o=null;return o=i?"з пропуском парних":"без пропуску парних",`Сума чисел від ${e} до ${t} ${o}  дорівнює ~ ${n}`}()),document.getElementById("hw3").insertAdjacentHTML("beforeend",`<h3>Результати виконання функцій:</h3>\n    <p>1. console.log(&#96;&#36;&#123;getMaxDigit(41288931)&#125;&#96;) - <i>${(e=>{let t=0;const n=String(e);for(let e=0;e<n.length;e++)n[e]>t&&(t=n[e]);return t})(41288931)}</i></p>\n    <p>2. raiseToPower(5, 3) - <i>${function(e,t){let n=5;for(let e=1;e<3;e++)n*=5;return n}()}</i></p>\n    <p>3. fixCamelCase("tEST") - <i>${function(e){const t="tEST".toLowerCase();return t[0].toUpperCase()+t.slice(1)}()}</i></p>\n    <p>4. calculateSalaries(18, 1.5, 25000) - <i>${18,1.5,25e3,20125}</i></p>\n    <p>5. getRandomNumber(10, 100) - <i>${10,100,Math.trunc(90*Math.random()+10)}</i></p>\n    <p>6. countLetters('Hello World', 'l') - <i>${function(e,t){let n=0;const i="Hello World".toLowerCase();for(let e=0;e<i.length;e++)"l"===i[e]&&n++;return n}()}</i></p>\n    <p>7. convertCurrency('2801uah') - <i>${function(e){let t=0;const n=parseFloat(e);return t=e.includes("uah")>0&&n>0?+(n/28).toFixed(2):e.includes("$")>0&&n>0?+(28*n).toFixed(2):"Error",t}("2801uah")}</i></p>\n    <p>8. getRandomPassword(4) - <i>${function(e=8){return Math.trunc((.9*Math.random()+.1)*10**e)}(4)}</i></p>\n    <p>9. deleteLetters('Hello, hello World', 'h') - <i>${function(e,t){let n=new RegExp("h","gi");return"Hello, hello World".replace(n,"")}()}</i></p>\n    <p>10. isPalindrome('Я с леди все же свиделся') - <i>${function(e){const t="Я с леди все же свиделся".toLowerCase().split(" ").join(""),n=t.split("").reverse().join("");let i=null;return t===n?i=!0:console.log("Error"),i}()}</i></p>\n    <p>11. deleteDuplicateLetter('Бісквіт був дуже ніжним') - <i>${function(e){const t="Бісквіт був дуже ніжним".toLowerCase();let n="";for(let e=0;e<t.length;e++)t.indexOf(t[e])===t.lastIndexOf(t[e])&&(n+=t[e]);return n}()}</i></p>\n`),document.getElementById("hw4").insertAdjacentHTML("beforeend",`<h3>Результати виконання функцій:</h3>\n    <p>1. getPairs(students) - <i>${JSON.stringify(m(p))}</i></p>\n    <p>2. assignThemesToPairs(pairs, themes) - <i>${JSON.stringify(h(g,y))}</i></p>\n    <p>3. matchStudentsMarks(students, marks) - <i>${JSON.stringify(x(p,f))}</i></p>\n    <p>4. matchPairsMarks(pairsThemes) - <i>${JSON.stringify(w(b))}</i></p>\n`),document.getElementById("hw5").insertAdjacentHTML("beforeend",`<h3>Результати виконання функцій:</h3>\n    <p>1. getRandomArray(15, 1, 100) - <i>${JSON.stringify($(15,1,100))}</i></p>\n    <p>3. getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)\n      - <i>${k(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</i></p>\n    <p>4. getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)\n      - <i>${A(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</i></p>\n    <p>5. filterEvenNumbers(1, 2, 3, 4, 5, 6) - <i>${JSON.stringify(E(1,2,3,4,5,6))}</i></p>\n    <p>6. countPositiveNumbers(1, -2, 3, -4, -5, 6) - <i>${v(1,-2,3,-4,-5,6)}</i></p>\n    <p>7. getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)\n      - <i>${JSON.stringify(M(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2))}</i></p>\n    <p>8. replaceBadWords("Are you fucking kidding? fuck... Holy shit! It's bullshit")\n      - <i>${S("Are you fucking kidding? fuck... Holy shit! It's bullshit")}</i></p>\n    <p>9. divideByThree('Live live commander' - <i>${JSON.stringify(I("Live live commander"))}</i></p>\n`),document.getElementById("hw6").insertAdjacentHTML("beforeend",`<h3>Результати виконання функцій:</h3>\n    <p>1. getSubjects(studentsArr[0]) - <i>${JSON.stringify(L(B[0]))}</i></p>\n    <p>2. getAverageMark(studentsArr[0]) - <i>${T(B[0])}</i></p>\n    <p>3. getStudentInfo(studentsArr[0]) - <i>${JSON.stringify(j(B[0]))}</i></p>\n    <p>4. getArrNames(studentsArr) - <i>${JSON.stringify(_(B))}</i></p>\n    <p>5. getBestStudent(studentsArr) - <i>${H(B)}</i></p>\n    <p>6. calculateWordLetters("тест") - <i>${JSON.stringify(N("тест"))}</i></p>\n`),document.getElementById("hw7").insertAdjacentHTML("beforeend",`<h3>Результати виконання функцій:</h3>\n    <p>1. getMyTaxes.call(ukraine, 12500) - <i>${function(e){return+(e*this.tax).toFixed(2)}.call(C,12500)}</i></p>\n    <p>2. getMiddleTaxes.call(litva) - <i>${function(){return+(this.tax*this.middleSalary).toFixed(2)}.call({tax:.15,middleSalary:1509,vacancies:1114})}</i></p>\n    <p>3. getTotalTaxes.call(ukraine) - <i>${function(){return+(this.tax*this.middleSalary*this.vacancies).toFixed(2)}.call(C)}</i></p>\n    <p>4. getMySalary.call(latvia) - <i><span id="for_hw7_f4"></span></i></p>\n`);const fe=document.getElementById("for_hw7_f4");setInterval((()=>{fe.innerHTML=`${JSON.stringify(F.call(O))}`}),1e4),document.getElementById("hw9").innerHTML=`<h2>#9</h2>\n    <img class="english_img" src="${ie}"\n      alt='a blackboard with the text "English lessons" written on it'>`;const me=document.getElementById("hw10");me.insertAdjacentHTML("beforeend",'<button id="show_blocks"\n    style="display:inline-block;\n    background-color: bisque;\n    color: #242424;\n    padding: 0 10px;\n    height: 50px;\n    width: 150px;\n    cursor: pointer;\n    border-radius: 3px;\n    border: 1px solid #242424;">\n      Show blocks\n  </button>'),document.getElementById("show_blocks").addEventListener("click",(function(){document.getElementById("show_blocks").setAttribute("style","display:none");const e=document.getElementById("blink_blocks");e.setAttribute("style","display:inline-block;\n      background-color: #242424;\n      color: bisque;\n      padding: 0 10px;\n      height: 50px;\n      width: 150px;\n      cursor: pointer;\n      border-radius: 3px;\n      border: 1px solid bisque;"),e.insertAdjacentHTML("afterend",'<div class="box"\n      style="display: flex;\n      flex-wrap: wrap;\n      margin: 50px auto;\n      width: 250px;\n      height: 250px;">\n    </div>');const t=document.querySelector(".box");let n=0;for(let e=1;e<=25;e++)n=n++,t.insertAdjacentHTML("beforeend",`<div class="box__item"\n        style="background-color:${z()};\n        width: 50px;\n        height: 50px;\n        display: inline-block;">\n      </div>`)})),me.insertAdjacentHTML("beforeend",'<button id="blink_blocks" style="display:none;">Blink blocks</button>'),document.getElementById("blink_blocks").addEventListener("click",(function(e=1e3){setInterval((()=>(document.getElementById("blink_blocks").setAttribute("style","display:none"),void document.querySelectorAll(".box__item").forEach((e=>e.style.backgroundColor=z())))),1e3)})),pe.addEventListener("keydown",(function(e){65===e.keyCode?ce.play():83===e.keyCode?de.play():68===e.keyCode?ae.play():70===e.keyCode?ue.play():console.log(`Кнопка - "${e.key}" не используется`)})),pe.addEventListener("click",(function(e){e.target===J?ce.play():e.target===q?de.play():e.target===P?ae.play():e.target===W&&ue.play()})),document.getElementById("hw12").insertAdjacentHTML("beforeend",'<h1 id="for_promise"></h1>'),document.getElementById("hw14").innerHTML=`<h2>#14</h2>\n    <img class="english_img" src="${ie}" \n      alt='a blackboard with the text "English lessons" written on it'>`;const ge=document.getElementById("logo_btn");ge.innerHTML=`<img src="${ne}" alt="logo Cursor">`;const he=document.getElementById("wrap_btns");ge.addEventListener("click",(()=>{var e;"display: none;"===(e=he).getAttribute("style")?e.setAttribute("style","display: flex;"):e.setAttribute("style","display: none;"),ke.setAttribute("style","display: block;"),ge.setAttribute("style","display: none;"),ye.setAttribute("style","display: block;"),document.getElementById("hw16").setAttribute("style","display: none;")}));let be=1;function*xe(e){for(;be<=16||be>=0;)"up"===e?(be++,yield be):"down"===e&&(be--,yield be)}const we=xe("up"),$e=xe("down"),ke=document.getElementById("next_hw");ke.addEventListener("click",(function(){const e=document.getElementById(`hw${we.next().value}`);e.previousElementSibling.setAttribute("style","display: none;"),e.setAttribute("style","display: flex;"),Ae.setAttribute("style","display: block;"),"hw16"===e.getAttribute("id")&&(ke.setAttribute("style","display: none;"),Ae.setAttribute("style","display: none;"),ge.setAttribute("style","display: block;"),ge.addEventListener("click",(()=>window.location.reload())))}));const Ae=document.getElementById("prev_hw");Ae.addEventListener("click",(function(){const e=document.getElementById(`hw${$e.next().value}`);e.setAttribute("style","display: flex;"),e.nextElementSibling.setAttribute("style","display: none;"),"hw1"===e.getAttribute("id")&&Ae.setAttribute("style","display: none;")}))})()})();