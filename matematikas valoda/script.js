document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const popupContainer = document.getElementById('popup-container');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const popupType = button.getAttribute('data-popup');
      showPopupContent(popupType);
    });
  });

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      popupContainer.style.display = 'none';
      popupContainer.innerHTML = '';
    }
  });

  function showPopupContent(type) {
    popupContainer.innerHTML = `
      <div class="popup-content">
        ${getPopupText(type)}
      </div>
    `;
    popupContainer.style.display = 'flex';
  }

  function getPopupText(type) {
    const popups = {
      'plāns1': "<h2>Saīsinātās reizināšanas formulas</h2><p>Šīs formulas ļauj ātrāk reizināt binomus, samazinot darbības.</p>",
      'plāns2': "<h2>Skaitļu kopas</h2><p>Skaitļi tiek sadalīti kopās, piemēram, naturālie, veseli, racionāli, reāli.</p>",
      'plāns3': "<h2>Skaitļa normālforma</h2><p>Normālforma ir veids, kā pierakstīt ļoti lielus vai mazos skaitļus kā a × 10ⁿ.</p>",
      'plāns4': "<h2>Skaitļa modulis</h2><p>Modulis ir skaitļa attālums no nulles uz skaitļu ass.</p>",
      'plāns5': "<h2>Pakāpes</h2><p>Pakāpes ir reizinājumu saīsināts pieraksts, piemēram, aⁿ nozīmē 'a' reizināts pats ar sevi 'n' reizes.</p>",
      'plāns6': "<h2>Kvadrātvienādojums</h2><p>Atvasināšana izmantojot diskriminantu. Saknes aprēķina ar D = b² - 4ac un formulu x = (-b±√D)/2a.</p>",
      'plāns7': "<h2>Kvadrātrinom</h2><p>Izteiksme ax² + bx + c. Meklē saknes vai faktorizē.</p>",
      'plāns8': "<h2>Kvadrātfunkcija</h2><p>Funkcijas grafiks ir parabola, forma: y = ax² + bx + c.</p>",
      'plāns9': "<h2>Kvadrātsaknes</h2><p>Skaitlis, kas reizināts pats ar sevi dod sākotnējo skaitli.</p>",
      'plāns10': "<h2>Proporcijas īpašības</h2><p>Ja a/b = c/d, tad ad = bc.</p>",
      'plāns11': "<h2>Aritmētiskā progresija</h2><p>Skaitļu virkne, kurā katrs nākamais elements ir lielāks par iepriekšējo par vienu un to pašu skaitli.</p>",
      'plāns12': "<h2>Notikuma varbūtība</h2><p>Varbūtības aprēķins ir labvēlīgo iznākumu skaits dalīts ar visiem iespējamajiem.</p>",
      'plāns13': "<h2>Sakarības starp leņķiem un malām trijstūrī</h2><p>Leņķu summa trijstūrī ir 180°.</p>",
      'plāns14': "<h2>Sakarības taisnleņķa trijstūrī</h2><p>Trigonometrijas funkcijas: sin, cos, tg.</p>",
      'plāns15': "<h2>Vjeta teorēma</h2><p>Vieta starp kvadrātvienādojuma saknēm un koeficientiem.</p>",
      'plāns16': "<h2>Trijstūris</h2><p>Figūra ar trim malām un trim leņķiem.</p>",
      'plāns17': "<h2>Taisnleņķa trijstūris</h2><p>Viens leņķis ir 90°.</p>",
      'plāns18': "<h2>Līdzīgi trijstūri</h2><p>Vienādi leņķi, proporcionālas malas.</p>",
      'plāns19': "<h2>Rombs</h2><p>Četrstūris ar vienādām malām un diagonālēm, kas šķērsojas taisnā leņķī.</p>",
      'plāns20': "<h2>Trapece</h2><p>Četrstūris ar vienu pāri paralēlām malām.</p>",
      'plāns21': "<h2>Riņķa līnija un riņķis</h2><p>Riņķa līnija - punktu kopa, kas atrodas vienādā attālumā no centra.</p>",
      'plāns22': "<h2>Ģeometriskie ķermeņi</h2><p>Trīsdimensiju figūras: prizma, piramīda, cilindrs, konuss, lode.</p>",
      'form1': "<h2>(a+b)²</h2><p>Paplašinot: a² + 2ab + b²</p>",
      'form2': "<h2>(a-b)²</h2><p>Paplašinot: a² - 2ab + b²</p>",
      'form3': "<h2>(a+b)(a-b)</h2><p>Paplašinot: a² - b²</p>",
      'form4': "<h2>Skaitļu kopas</h2><p>ℕ - Naturālie, ℤ - Veselie, ℚ - Racionālie, ℝ - Reālie</p>",
      'form5': "<h2>Normālforma</h2><p>a × 10ⁿ, kur 1 ≤ a < 10</p>",
      'form6': "<h2>Modulis</h2><p>Skaitļa attālums no nulles.</p>",
      'form7': "<h2>Pakāpju reizināšana</h2><p>aⁿ × aᵐ = aⁿ⁺ᵐ</p>",
      'form8': "<h2>Pakāpes pakāpe</h2><p>(aⁿ)ᵐ = aⁿᵐ</p>",
      'form9': "<h2>Pakāpes reizinājums</h2><p>(ab)ⁿ = aⁿbⁿ</p>",
      'form10': "<h2>Diskriminants</h2><p>D = b² - 4ac</p>",
      'form11': "<h2>Kvadrātvienādojuma saknes</h2><p>x = (-b ± √D)/2a</p>",
      'form12': "<h2>Kvadrātrinom</h2><p>ax² + bx + c</p>",
      'form13': "<h2>Kvadrātfunkcija</h2><p>y = ax² + bx + c</p>",
      'form14': "<h2>Sakņu reizinājums</h2><p>√a × √b = √(ab)</p>",
      'form15': "<h2>Sakņu dalījums</h2><p>√(a/b) = √a / √b</p>",
      'form16': "<h2>Proporcija</h2><p>a/b = c/d</p>",
      'form17': "<h2>Aritmētiskā progresija</h2><p>aₙ = a₁ + (n-1)d</p>",
      'form18': "<h2>Aritmētiskās progresijas summa</h2><p>Sₙ = (a₁+aₙ)n/2</p>",
      'form19': "<h2>Varbūtība</h2><p>P(A) = labvēlīgie/visi</p>",
      'form20': "<h2>Leņķu summa trijstūrī</h2><p>180°</p>",
      'form21': "<h2>sin</h2><p>pretī/mala</p>",
      'form22': "<h2>cos</h2><p>blakus/mala</p>",
      'form23': "<h2>tg</h2><p>pretī/blakus</p>",
      'form24': "<h2>Vjeta teorēma</h2><p>x₁+x₂ = -b/a, x₁×x₂ = c/a</p>",
    };
    return popups[type] || '';
  }

  // Spēles uzstādīšana
  setupGame('game-multiplication', '*');
  setupGame('game-division', '/');
  setupGame('game-exponent', '^');
  setupGame('game-root', '√');
});
// Spēles uzstādīšana
setupGame('game-multiplication', '*');
setupGame('game-division', '/');
setupGame('game-exponent', '^');
setupGame('game-root', '√');

// Funkcija setupGame
function setupGame(containerId, operation) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
      <div class="progress-bar"><div class="progress-bar-fill"></div></div>
      <div class="task"></div>
      <input type="text" class="answer" placeholder="Atbilde">
      <button class="submit">Iesniegt</button>
      <p class="feedback"></p>
      <button class="restart">Sākt no jauna</button>
  `;

  const taskEl = container.querySelector('.task');
  const answerEl = container.querySelector('.answer');
  const submitBtn = container.querySelector('.submit');
  const feedbackEl = container.querySelector('.feedback');
  const progressFill = container.querySelector('.progress-bar-fill');
  const restartBtn = container.querySelector('.restart');

  let currentAnswer = 0;
  let solved = 0;
  let wrongCount = 0;

  generateTask(); // Iznāk uzdevumu sākotnējo izveidi

  // Poga "Iesniegt" klikšķis
  submitBtn.addEventListener('click', () => {
      let userAnswer = parseFloat(answerEl.value);
      if (isNaN(userAnswer)) {
          feedbackEl.textContent = "Ievadi skaitli!";
          return;
      }

      if (Math.abs(userAnswer - currentAnswer) < 0.01) { // Pieļauj nelielu kļūdu
          feedbackEl.textContent = "Pareizi!";
          feedbackEl.style.color = "limegreen";
          wrongCount = 0;
          solved++;
          progressFill.style.width = (solved / 15000 * 100) + '%';
          generateTask(); // Nākamais uzdevums
          answerEl.value = '';
      } else {
          wrongCount++;
          feedbackEl.style.color = "red";
          if (wrongCount >= 3) {
              feedbackEl.textContent = "Paskaidrojums: " + explain(currentAnswer, operation);
          } else {
              feedbackEl.textContent = "Nepareizi!";
          }
      }
  });

  // Restartēt spēli
  restartBtn.addEventListener('click', () => {
      solved = 0;
      wrongCount = 0;
      progressFill.style.width = '0%';
      feedbackEl.textContent = '';
      generateTask(); // Atjauno uzdevumu
  });

  // Uzdevumu ģenerēšana
  function generateTask() {
      let num1, num2;
      if (solved < 100) {
          num1 = Math.floor(Math.random() * 10) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;
      } else if (solved < 500) {
          num1 = Math.floor(Math.random() * 20) + 1;
          num2 = Math.floor(Math.random() * 20) + 1;
      } else {
          num1 = (Math.random() * 100).toFixed(2);
          num2 = (Math.random() * 100).toFixed(2);
      }

      if (operation === '*') {
          currentAnswer = num1 * num2;
          taskEl.textContent = `${num1} × ${num2}`;
      } else if (operation === '/') {
          currentAnswer = num1 / num2;
          taskEl.textContent = `${num1} ÷ ${num2}`;
      } else if (operation === '^') {
          currentAnswer = Math.pow(num1, 2);
          taskEl.textContent = `${num1}²`;
      } else if (operation === '√') {
          currentAnswer = Math.sqrt(num1);
          taskEl.textContent = `√${num1}`;
      }
  }

  // Skaitļu operāciju paskaidrojumi
  function explain(answer, operation) {
      if (operation === '*') return "Reizinām skaitļus savā starpā.";
      if (operation === '/') return "Dalām pirmo skaitli ar otro.";
      if (operation === '^') return "Kāpinām skaitli otrajā pakāpē.";
      if (operation === '√') return "Atrodam skaitļa kvadrātsakni.";
  }
}

