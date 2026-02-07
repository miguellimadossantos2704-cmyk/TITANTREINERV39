// --- DATA SECTOR ---
const exercises = [
    // --- TREINO A: PEITO, OMBRO E TRÍCEPS ---
    {
        id: "gym_supino_reto",
        name: "Supino Reto (Barra ou Halter)",
        category: "Chest",
        equipment: "Barbell/Dumbbell",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 8 a 12 reps"
    },
    {
        id: "gym_supino_inclinado",
        name: "Supino Inclinado (Halter ou Máquina)",
        category: "Chest",
        equipment: "Machine/Dumbbell",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 10 a 12 reps"
    },
    {
        id: "gym_crucifixo_cross",
        name: "Crucifixo no Cross (Polia Média)",
        category: "Chest",
        equipment: "Cable",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 12 a 15 reps"
    },
    {
        id: "gym_desenvolvimento_militar",
        name: "Desenvolvimento Militar",
        category: "Shoulders",
        equipment: "Barbell",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 10 reps"
    },
    {
        id: "gym_elevacao_lateral",
        name: "Elevação Lateral",
        category: "Shoulders",
        equipment: "Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 12 a 15 reps (foco na técnica)"
    },
    {
        id: "gym_triceps_corda",
        name: "Tríceps Corda",
        category: "Arms",
        equipment: "Cable",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 12 reps (foco na contração)"
    },
    {
        id: "gym_triceps_testa",
        name: "Tríceps Testa (Barra W)",
        category: "Arms",
        equipment: "EZ Bar",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 10 a 12 reps"
    },

    // --- TREINO B: COSTAS, TRAPÉZIO E BÍCEPS ---
    {
        id: "gym_puxada_alta",
        name: "Puxada Alta (Pegada Aberta)",
        category: "Back",
        equipment: "Cable",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 10 a 12 reps"
    },
    {
        id: "gym_remada_curvada",
        name: "Remada Curvada (Barra Livre)",
        category: "Back",
        equipment: "Barbell",
        difficulty: "Advanced",
        image: "",
        series: "4 séries de 8 a 10 reps (carga alta)"
    },
    {
        id: "gym_remada_baixa",
        name: "Remada Baixa (Triângulo)",
        category: "Back",
        equipment: "Cable",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 12 reps"
    },
    {
        id: "gym_pulldown",
        name: "Pulldown (Polia Alta)",
        category: "Back",
        equipment: "Cable",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 15 reps (finalizador)"
    },
    {
        id: "gym_encolhimento",
        name: "Encolhimento com Halteres",
        category: "Shoulders", // Trapézio usually grouped with Shoulders or Back
        equipment: "Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 15 reps"
    },
    {
        id: "gym_rosca_direta",
        name: "Rosca Direta",
        category: "Arms",
        equipment: "Barbell/Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 10 reps"
    },
    {
        id: "gym_rosca_martelo",
        name: "Rosca Martelo",
        category: "Arms",
        equipment: "Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 12 reps"
    },

    // --- TREINO C: PERNAS COMPLETAS ---
    {
        id: "gym_agachamento",
        name: "Agachamento Livre",
        category: "Legs",
        equipment: "Barbell",
        difficulty: "Advanced",
        image: "",
        series: "4 séries de 8 a 10 reps"
    },
    {
        id: "gym_leg_press",
        name: "Leg Press 45º",
        category: "Legs",
        equipment: "Machine",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 12 reps (amplitude máxima)"
    },
    {
        id: "gym_extensora",
        name: "Cadeira Extensora",
        category: "Legs",
        equipment: "Machine",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 15 reps (pode usar drop-set)"
    },
    {
        id: "gym_flexora",
        name: "Mesa Flexora",
        category: "Legs",
        equipment: "Machine",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 12 reps"
    },
    {
        id: "gym_stiff",
        name: "Stiff",
        category: "Legs",
        equipment: "Barbell",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 10 a 12 reps"
    },
    {
        id: "gym_panturrilha",
        name: "Panturrilha em Pé ou Sentado",
        category: "Legs",
        equipment: "Machine",
        difficulty: "Beginner",
        image: "",
        series: "5 séries de 15 a 20 reps"
    },

    // --- TREINO D: OMBROS COMPLETO ---
    {
        id: "gym_desenv_halteres",
        name: "Desenvolvimento com Halteres",
        category: "Shoulders",
        equipment: "Dumbbell",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 10 reps"
    },
    {
        id: "gym_elev_lat_high",
        name: "Elevação Lateral (Volume)",
        category: "Shoulders",
        equipment: "Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 15 reps"
    },
    {
        id: "gym_elev_frontal",
        name: "Elevação Frontal (Corda na Polia)",
        category: "Shoulders",
        equipment: "Cable",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 12 reps"
    },
    {
        id: "gym_crucifixo_inverso",
        name: "Crucifixo Inverso",
        category: "Shoulders",
        equipment: "Machine/Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 12 reps (foco posterior)"
    },
    {
        id: "gym_remada_alta",
        name: "Remada Alta (Pegada Aberta)",
        category: "Shoulders",
        equipment: "Barbell",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 12 reps"
    },

    // --- TREINO E: BRAÇOS ---
    {
        id: "gym_triceps_biset",
        name: "Bi-set: Tríceps Testa + Supino Fechado",
        category: "Arms",
        equipment: "Barbell",
        difficulty: "Advanced",
        image: "",
        series: "3 séries de 10+10 reps"
    },
    {
        id: "gym_triceps_frances",
        name: "Tríceps Francês Unilateral",
        category: "Arms",
        equipment: "Dumbbell",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 12 reps"
    },
    {
        id: "gym_triceps_pulley",
        name: "Tríceps Pulley (Barra Reta)",
        category: "Arms",
        equipment: "Cable",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 15 reps"
    },
    {
        id: "gym_rosca_scott",
        name: "Rosca Scott (Máquina)",
        category: "Arms",
        equipment: "Machine",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 10 reps"
    },
    {
        id: "gym_rosca_alt_rotacao",
        name: "Rosca Alternada com Rotação",
        category: "Arms",
        equipment: "Dumbbell",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 10 reps"
    },
    {
        id: "gym_rosca_inversa",
        name: "Rosca Inversa",
        category: "Arms",
        equipment: "Barbell",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 12 reps"
    },

    // --- TREINO F: GLÚTEOS E POSTERIOR ---
    {
        id: "gym_elev_pelvica",
        name: "Elevação Pélvica",
        category: "Legs", // Or specific Glutes category if added
        equipment: "Barbell",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 10 reps (carga máxima)"
    },
    {
        id: "gym_agachamento_sumo",
        name: "Agachamento Sumô",
        category: "Legs",
        equipment: "Barbell/Dumbbell",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 12 reps"
    },
    {
        id: "gym_abdutora",
        name: "Cadeira Abdutora",
        category: "Legs",
        equipment: "Machine",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 15 reps"
    },
    {
        id: "gym_gluteo_caneleira",
        name: "Glúteo Caneleira",
        category: "Legs",
        equipment: "Cable/Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 15 reps"
    },
    {
        id: "gym_afundo",
        name: "Afundo (Passada)",
        category: "Legs",
        equipment: "Dumbbell",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 12 passos cada perna"
    },

    // --- CALISTENIA NÍVEL 1 (Iniciante) ---
    {
        id: "cali_flexao",
        name: "Flexão de Braço (Push-up)",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 8 a 12 reps"
    },
    {
        id: "cali_agachamento_air",
        name: "Agachamento Livre (Air Squat)",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 15 reps"
    },
    {
        id: "cali_remada_australiana",
        name: "Remada Australiana",
        category: "Calisthenics",
        equipment: "Low Bar",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 10 reps"
    },
    {
        id: "cali_afundo_estatico",
        name: "Afundo Estático",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 10 cada perna"
    },
    {
        id: "cali_prancha",
        name: "Prancha Abdominal (Isometria)",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 20 a 30 segundos"
    },
    {
        id: "cali_polichinelo",
        name: "Polichinelos",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 1 minuto"
    },

    // --- CALISTENIA NÍVEL 2 (Intermediário) ---
    {
        id: "cali_barra_fixa",
        name: "Barra Fixa (Pull-up)",
        category: "Calisthenics",
        equipment: "Pull-up Bar",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 6 a 10 reps"
    },
    {
        id: "cali_dips",
        name: "Mergulho na Paralela (Dips)",
        category: "Calisthenics",
        equipment: "Parallel Bars",
        difficulty: "Intermediate",
        image: "",
        series: "4 séries de 8 a 12 reps"
    },
    {
        id: "cali_flexao_diamante",
        name: "Flexão Diamante",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 10 a 12 reps"
    },
    {
        id: "cali_agachamento_bulgaro",
        name: "Agachamento Búlgaro",
        category: "Calisthenics",
        equipment: "Bench/Chair",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 10 cada perna"
    },
    {
        id: "cali_leg_raise",
        name: "Hanging Leg Raise",
        category: "Calisthenics",
        equipment: "Pull-up Bar",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 10 reps"
    },
    {
        id: "cali_aust_unilateral",
        name: "Barra Australiana Unilateral",
        category: "Calisthenics",
        equipment: "Low Bar",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 8 cada braço"
    },

    // --- CALISTENIA NÍVEL 3 (Avançado) ---
    {
        id: "cali_muscle_up",
        name: "Muscle-Up",
        category: "Calisthenics",
        equipment: "Bar/Rings",
        difficulty: "Pro",
        image: "",
        series: "3 a 5 séries até a falha técnica"
    },
    {
        id: "cali_hspu",
        name: "Flexão de Parada de Mão (HSPU)",
        category: "Calisthenics",
        equipment: "Wall",
        difficulty: "Pro",
        image: "",
        series: "3 séries de 5 a 8 reps"
    },
    {
        id: "cali_front_lever_tuck",
        name: "Front Lever Tuck",
        category: "Calisthenics",
        equipment: "Bar",
        difficulty: "Advanced",
        image: "",
        series: "4 séries de máximo tempo"
    },
    {
        id: "cali_pistol",
        name: "Pistol Squat",
        category: "Calisthenics",
        equipment: "Bodyweight",
        difficulty: "Advanced",
        image: "",
        series: "3 séries de 5 a 8 cada perna"
    },
    {
        id: "cali_l_sit",
        name: "L-Sit",
        category: "Calisthenics",
        equipment: "Floor/Parallettes",
        difficulty: "Advanced",
        image: "",
        series: "3 séries de máximo tempo"
    },
    {
        id: "cali_chest_to_bar",
        name: "Barra Fixa Explosiva (Chest-to-bar)",
        category: "Calisthenics",
        equipment: "Pull-up Bar",
        difficulty: "Advanced",
        image: "",
        series: "3 séries de 5 reps"
    },

    // --- CARDIO & ABS ---
    {
        id: "cardio_burpees",
        name: "Burpees",
        category: "Cardio",
        equipment: "Bodyweight",
        difficulty: "Intermediate",
        image: "",
        series: "3 séries de 15 reps"
    },
    {
        id: "cardio_mountain_climbers",
        name: "Mountain Climbers",
        category: "Cardio",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 40 segundos"
    },
    {
        id: "cardio_corrida_estacionaria",
        name: "Corrida Estacionária",
        category: "Cardio",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 1 minuto"
    },
    {
        id: "abs_remador",
        name: "Abdominal Remador",
        category: "Core",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "4 séries de 20 reps"
    },
    {
        id: "abs_bicicleta",
        name: "Abdominal Bicicleta",
        category: "Core",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 30 repetições"
    },
    {
        id: "cardio_sprawl",
        name: "Sprawl (Meio Burpee)",
        category: "Cardio",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        image: "",
        series: "3 séries de 15 reps"
    }
];

// --- APP LOGIC ---

// State
let routines = JSON.parse(localStorage.getItem('titanRoutines')) || [
    { id: 1, name: "Treino A - Peito & Tríceps", exercises: [] },
    { id: 2, name: "Treino B - Costas & Bíceps", exercises: [] }
];
let currentRoutineId = null;

// Elements - Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Elements - Routines
const routinesDashboard = document.getElementById('routinesDashboard');
const routinesGrid = document.getElementById('routinesGrid');
const routineDetail = document.getElementById('routineDetail');
const routineTitleEl = document.getElementById('routineTitle');
const routineCountEl = document.getElementById('routineCount');
const routineTableBody = document.getElementById('routineTableBody');

// Elements - Modals
const createRoutineModal = document.getElementById('createRoutineModal');
const newRoutineNameInput = document.getElementById('newRoutineName');

const exerciseSelectorModal = document.getElementById('exerciseSelectorModal');
const selectorSearch = document.getElementById('selectorSearch');
const selectorList = document.getElementById('selectorList');

// Elements - Diet
const dietForm = document.getElementById('dietForm');
const foodTableBody = document.getElementById('foodTableBody');
const totalKcalEl = document.getElementById('totalKcal');
const totalProtEl = document.getElementById('totalProtein');
const totalCarbsEl = document.getElementById('totalCarbs');
const totalFatEl = document.getElementById('totalFat');
const foodLog = []; // Simple runtime log for now

// Elements - BMI
const calcBmiBtn = document.getElementById('calcBmiBtn');
const bmiResult = document.getElementById('bmiResult');
const bmiScoreEl = document.getElementById('bmiScore');
const bmiStatusEl = document.getElementById('bmiStatus');

// --- TIMER STATE ---
let timerInterval = null;
let timeLeft = 0;
let totalTime = 0;

// Elements - Timer
const restTimerBar = document.getElementById('restTimerBar');
const timerDisplay = document.getElementById('timerDisplay');
const timerProgress = document.getElementById('timerProgress');

// --- TIMER LOGIC ---
window.startTimer = function (seconds) {
    if (timerInterval) clearInterval(timerInterval);

    timeLeft = seconds;
    totalTime = seconds;

    updateTimerUI();
    if (restTimerBar) restTimerBar.classList.remove('hidden');

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            timerFinished();
        }
    }, 1000);
};

function updateTimerUI() {
    if (timeLeft < 0) timeLeft = 0;

    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    if (timerDisplay) timerDisplay.innerText = `${m}:${s}`;

    if (timerProgress && totalTime > 0) {
        const percentage = (timeLeft / totalTime) * 100;
        timerProgress.style.width = `${percentage}%`;
    }
}

window.addTime = function (seconds) {
    timeLeft += seconds;
    if (timeLeft < 0) timeLeft = 0;
    if (seconds > 0) totalTime += seconds;
    updateTimerUI();
};

window.stopTimer = function () {
    clearInterval(timerInterval);
    if (restTimerBar) restTimerBar.classList.add('hidden');
};

function timerFinished() {
    clearInterval(timerInterval);
    if (timerDisplay) timerDisplay.innerText = "00:00";
    if (timerProgress) timerProgress.style.width = "0%";

    if (navigator.vibrate) navigator.vibrate([500, 200, 500]);

    if (timerDisplay) {
        timerDisplay.style.color = "#00ff88";
        setTimeout(() => {
            stopTimer();
            timerDisplay.style.color = "#fff";
        }, 3000);
    } else {
        stopTimer();
    }
}

// --- INITIALIZATION ---
function init() {
    renderRoutines();
    renderFoodLog();
    renderRoutines();
    renderFoodLog();
    setupEventListeners();
    loadLastWeight(); // NEW: Load history
}

function saveRoutines() {
    localStorage.setItem('titanRoutines', JSON.stringify(routines));
}

function setupEventListeners() {
    // Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) content.classList.add('active');
            });
        });
    });

    // Diet
    dietForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('foodName').value;
        const kcal = parseInt(document.getElementById('foodKcal').value) || 0;
        const protein = parseInt(document.getElementById('foodProtein').value) || 0;
        const carbs = parseInt(document.getElementById('foodCarbs').value) || 0;
        const fat = parseInt(document.getElementById('foodFat').value) || 0;

        if (name && kcal) {
            const foodItem = { id: Date.now(), name, kcal, protein, carbs, fat };
            foodLog.push(foodItem);
            renderFoodLog();
            dietForm.reset();
        }
    });

    // BMI
    calcBmiBtn.addEventListener('click', calculateBMI);

    // Exercise Selector Search
    selectorSearch.addEventListener('input', (e) => {
        renderExerciseList(e.target.value.toLowerCase());
    });
}

function renderFoodLog() {
    foodTableBody.innerHTML = '';
    let totals = { kcal: 0, prot: 0, carbs: 0, fat: 0 };

    foodLog.forEach(item => {
        totals.kcal += item.kcal;
        totals.prot += item.protein;
        totals.carbs += item.carbs;
        totals.fat += item.fat;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong style="color:white;">${item.name}</strong></td>
            <td>${item.kcal}</td>
            <td>${item.protein}g</td>
            <td>${item.carbs}g</td>
            <td>${item.fat}g</td>
            <td><button class="delete-btn" onclick="deleteFood(${item.id})">X</button></td>
        `;
        foodTableBody.appendChild(row);
    });

    // Update Totals
    totalKcalEl.innerText = totals.kcal;
    totalProtEl.innerText = totals.prot;
    totalCarbsEl.innerText = totals.carbs;
    totalFatEl.innerText = totals.fat;
}

window.deleteFood = function (id) {
    const idx = foodLog.findIndex(f => f.id === id);
    if (idx !== -1) {
        foodLog.splice(idx, 1);
        renderFoodLog();
    }
};

// --- ROUTINES DASHBOARD ---
function renderRoutines() {
    routinesGrid.innerHTML = '';

    if (routines.length === 0) {
        routinesGrid.innerHTML = `
            <div class="routine-card" style="border: 2px dashed #444; background: transparent; display:flex; align-items:center; justify-content:center; opacity:0.6;" onclick="openCreateRoutineModal()">
                <div style="text-align:center;">
                    <span style="font-size:3rem; display:block; margin-bottom:1rem;">⚡</span>
                    <h3 style="margin:0; font-size:1.2rem; color:#888;">Nenhum treino ainda</h3>
                    <p style="margin-top:0.5rem; color:#666;">Clique para começar sua jornada.</p>
                </div>
            </div>
        `;
        return;
    }

    routines.forEach(routine => {
        constcard = document.createElement('div');
        const card = document.createElement('div');
        card.className = 'routine-card';
        card.innerHTML = `
            <button class="delete-routine-btn" onclick="deleteRoutine(event, ${routine.id})">🗑️</button>
            <div onclick="viewRoutine(${routine.id})" style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
                <h3>${routine.name.replace(' ,', ',')}</h3>
                <div class="routine-meta">${routine.exercises.length} Exercícios</div>
            </div>
        `;
        routinesGrid.appendChild(card);
    });
}

window.viewRoutine = function (id) {
    const routine = routines.find(r => r.id === id);
    if (!routine) return;

    currentRoutineId = id;
    routinesDashboard.classList.add('hidden');
    routineDetail.classList.remove('hidden');

    routineTitleEl.innerText = routine.name;
    renderRoutineExercises(routine);
};

window.closeRoutineDetail = function () {
    currentRoutineId = null;
    routineDetail.classList.add('hidden');
    routinesDashboard.classList.remove('hidden');
    renderRoutines(); // Refresh counts
};

function renderRoutineExercises(routine) {
    routineTableBody.innerHTML = '';
    routineCountEl.innerText = `${routine.exercises.length} Exercícios`;

    if (routine.exercises.length === 0) {
        routineTableBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:2rem; color:#555;">Toque em "+ Adicionar Exercício" para começar.</td></tr>';
        return;
    }

    routine.exercises.forEach((ex, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <input type="checkbox" 
                        ${ex.completed ? 'checked' : ''} 
                        onchange="toggleExerciseCheck(${idx}, this.checked)"
                        style="width:20px; height:20px; accent-color:var(--accent); cursor:pointer;">
                    <strong>${ex.name}</strong>
                </div>
            </td>
            <td>${ex.series || '3x10'}</td>
            <td>
                <button class="action-btn" onclick="startTimer(60)" style="padding:0.4rem 0.8rem; font-size:0.9rem; border-radius:12px; width:auto; margin:0;">⏱️ 60s</button>
            </td>
            <td><button class="delete-btn" title="Remover" onclick="removeFromRoutine(${idx})">🗑️</button></td>
        `;
        routineTableBody.appendChild(row);
    });
}

window.removeFromRoutine = function (idx) {
    if (!currentRoutineId) return;
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) {
        routine.exercises.splice(idx, 1);
        saveRoutines();
        renderRoutineExercises(routine);
    }
};

window.deleteRoutine = function (e, id) {
    e.stopPropagation();
    if (confirm("Excluir este treino permanentemente?")) {
        routines = routines.filter(r => r.id !== id);
        saveRoutines();
        renderRoutines();
    }
};

// --- MODAL: CREATE ROUTINE ---
window.openCreateRoutineModal = function () {
    createRoutineModal.classList.remove('hidden');
    newRoutineNameInput.focus();
};

window.closeCreateRoutineModal = function () {
    createRoutineModal.classList.add('hidden');
};

window.confirmCreateRoutine = function () {
    const name = newRoutineNameInput.value.trim();
    if (name) {
        routines.push({ id: Date.now(), name: name, exercises: [] });
        saveRoutines();
        renderRoutines();
        closeCreateRoutineModal();
        newRoutineNameInput.value = '';
    }
};

// --- MODAL: EXERCISE SELECTOR ---
window.openExerciseSelector = function () {
    exerciseSelectorModal.classList.remove('hidden');
    selectorSearch.value = '';
    renderExerciseList('');
    selectorSearch.focus();
};

window.closeExerciseSelector = function () {
    exerciseSelectorModal.classList.add('hidden');
};

function renderExerciseList(filterText) {
    selectorList.innerHTML = '';
    const matches = exercises.filter(ex =>
        ex.name.toLowerCase().includes(filterText) ||
        ex.category.toLowerCase().includes(filterText) ||
        ex.equipment.toLowerCase().includes(filterText)
    );

    matches.forEach(ex => {
        const item = document.createElement('div');
        item.style.padding = '1rem';
        item.style.borderBottom = '1px solid #333';
        item.style.cursor = 'pointer';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';

        item.innerHTML = `
            <div>
                <div style="font-weight:bold; color:white;">${ex.name}</div>
                <div style="font-size:0.8rem; color:var(--accent);">${ex.category} • ${ex.equipment}</div>
            </div>
            <button style="background:none; border:1px solid #444; color:#fff; padding:0.2rem 0.8rem; border-radius:4px;">+</button>
        `;

        item.onclick = () => {
            addExerciseToCurrentRoutine(ex);
        };

        selectorList.appendChild(item);
    });
}

function addExerciseToCurrentRoutine(exercise) {
    if (!currentRoutineId) return;
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) {
        routine.exercises.push(exercise);
        saveRoutines();
        renderRoutineExercises(routine);
        closeExerciseSelector();
    }
}

// --- BMI Logic ---
function calculateBMI() {
    const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
    const w = parseFloat(document.getElementById('bmiWeight').value);
    if (h && w) {
        const bmi = parseFloat((w / (h * h)).toFixed(1));
        bmiScoreEl.innerText = bmi;

        let statusText = '';
        let statusColor = '#fff';

        if (bmi < 18.5) {
            statusText = 'ABAIXO DO PESO';
            statusColor = '#ffcc00'; // Yellow
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            statusText = 'NORMAL';
            statusColor = '#00ff88'; // Green
        } else if (bmi >= 25 && bmi <= 29.9) {
            statusText = 'SOBREPESO';
            statusColor = '#ff8800'; // Orange
        } else {
            statusText = 'OBESIDADE';
            statusColor = '#ff3333'; // Red
        }

        if (bmiStatusEl) {
            bmiStatusEl.innerText = statusText;
            bmiStatusEl.style.color = statusColor;
        }

        if (bmiStatusEl) {
            bmiStatusEl.innerText = statusText;
            bmiStatusEl.style.color = statusColor;
        }

        bmiResult.classList.remove('hidden');

        // SAVE HISTORY
        localStorage.setItem('titanLastWeight', w);
        loadLastWeight(); // Update UI
    }
}

// --- MACROS CALCULATOR (NEW) ---
window.calculateMacros = function () {
    const w = parseFloat(document.getElementById('macroWeight').value);
    if (!w) return;

    // Ectomorph Bulk Formula
    const p = Math.round(w * 2.0);
    const c = Math.round(w * 4.0); // High carb for ectomorphs
    const f = Math.round(w * 1.0);

    document.getElementById('targetProt').innerText = p;
    document.getElementById('targetCarbs').innerText = c;
    document.getElementById('targetFat').innerText = f;
    document.getElementById('macroResult').classList.remove('hidden');
};

// --- CHECKLIST LOGIC (NEW) ---
window.toggleExerciseCheck = function (idx, isChecked) {
    if (!currentRoutineId) return;
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) {
        if (!routine.exercises[idx].completed) routine.exercises[idx].completed = false; // Init if undefined
        routine.exercises[idx].completed = isChecked;
        saveRoutines(); // Persist state
    }
};

// --- WEIGHT HISTORY (NEW) ---
function loadLastWeight() {
    const last = localStorage.getItem('titanLastWeight');
    if (last) {
        const msg = document.getElementById('lastWeightMsg');
        if (msg) msg.innerText = `Último registro: ${last} kg`;
    }
}

document.addEventListener('DOMContentLoaded', init);
