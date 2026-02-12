// TITAN TRAINER V10 - DARK PREMIUM UPGRADE
// Includes: Focus Mode, Progress Bar, Modern UI Logic

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log("Service Worker registrado."))
        .catch(err => console.log("Erro Service Worker:", err));
}

// --- DATA SECTOR ---
const exercises = [
    // --- TREINO A: PEITO, OMBRO E TRÍCEPS ---
    { id: "gym_supino_reto", name: "Supino Reto (Barra ou Halter)", category: "Chest", equipment: "Barbell/Dumbbell", difficulty: "Intermediate", image: "", series: "4 séries de 8 a 12 reps" },
    { id: "gym_supino_inclinado", name: "Supino Inclinado (Halter ou Máquina)", category: "Chest", equipment: "Machine/Dumbbell", difficulty: "Intermediate", image: "", series: "3 séries de 10 a 12 reps" },
    { id: "gym_crucifixo_cross", name: "Crucifixo no Cross (Polia Média)", category: "Chest", equipment: "Cable", difficulty: "Intermediate", image: "", series: "3 séries de 12 a 15 reps" },
    { id: "gym_desenvolvimento_militar", name: "Desenvolvimento Militar", category: "Shoulders", equipment: "Barbell", difficulty: "Intermediate", image: "", series: "4 séries de 10 reps" },
    { id: "gym_elevacao_lateral", name: "Elevação Lateral", category: "Shoulders", equipment: "Dumbbell", difficulty: "Beginner", image: "", series: "4 séries de 12 a 15 reps (foco na técnica)" },
    { id: "gym_triceps_corda", name: "Tríceps Corda", category: "Arms", equipment: "Cable", difficulty: "Beginner", image: "", series: "4 séries de 12 reps (foco na contração)" },
    { id: "gym_triceps_testa", name: "Tríceps Testa (Barra W)", category: "Arms", equipment: "EZ Bar", difficulty: "Intermediate", image: "", series: "3 séries de 10 a 12 reps" },

    // --- TREINO B: COSTAS, TRAPÉZIO E BÍCEPS ---
    { id: "gym_puxada_alta", name: "Puxada Alta (Pegada Aberta)", category: "Back", equipment: "Cable", difficulty: "Beginner", image: "", series: "4 séries de 10 a 12 reps" },
    { id: "gym_remada_curvada", name: "Remada Curvada (Barra Livre)", category: "Back", equipment: "Barbell", difficulty: "Advanced", image: "", series: "4 séries de 8 a 10 reps (carga alta)" },
    { id: "gym_remada_baixa", name: "Remada Baixa (Triângulo)", category: "Back", equipment: "Cable", difficulty: "Beginner", image: "", series: "3 séries de 12 reps" },
    { id: "gym_pulldown", name: "Pulldown (Polia Alta)", category: "Back", equipment: "Cable", difficulty: "Beginner", image: "", series: "3 séries de 15 reps (finalizador)" },
    { id: "gym_encolhimento", name: "Encolhimento com Halteres", category: "Shoulders", equipment: "Dumbbell", difficulty: "Beginner", image: "", series: "4 séries de 15 reps" },
    { id: "gym_rosca_direta", name: "Rosca Direta", category: "Arms", equipment: "Barbell/Dumbbell", difficulty: "Beginner", image: "", series: "4 séries de 10 reps" },
    { id: "gym_rosca_martelo", name: "Rosca Martelo", category: "Arms", equipment: "Dumbbell", difficulty: "Beginner", image: "", series: "3 séries de 12 reps" },

    // --- TREINO C: PERNAS COMPLETAS ---
    { id: "gym_agachamento", name: "Agachamento Livre", category: "Legs", equipment: "Barbell", difficulty: "Advanced", image: "", series: "4 séries de 8 a 10 reps" },
    { id: "gym_leg_press", name: "Leg Press 45º", category: "Legs", equipment: "Machine", difficulty: "Intermediate", image: "", series: "4 séries de 12 reps (amplitude máxima)" },
    { id: "gym_extensora", name: "Cadeira Extensora", category: "Legs", equipment: "Machine", difficulty: "Beginner", image: "", series: "3 séries de 15 reps (pode usar drop-set)" },
    { id: "gym_flexora", name: "Mesa Flexora", category: "Legs", equipment: "Machine", difficulty: "Beginner", image: "", series: "4 séries de 12 reps" },
    { id: "gym_stiff", name: "Stiff", category: "Legs", equipment: "Barbell", difficulty: "Intermediate", image: "", series: "3 séries de 10 a 12 reps" },
    { id: "gym_panturrilha", name: "Panturrilha em Pé ou Sentado", category: "Legs", equipment: "Machine", difficulty: "Beginner", image: "", series: "5 séries de 15 a 20 reps" },

    // --- TREINO D: OMBROS COMPLETO ---
    { id: "gym_desenv_halteres", name: "Desenvolvimento com Halteres", category: "Shoulders", equipment: "Dumbbell", difficulty: "Intermediate", image: "", series: "4 séries de 10 reps" },
    { id: "gym_elev_lat_high", name: "Elevação Lateral (Volume)", category: "Shoulders", equipment: "Dumbbell", difficulty: "Beginner", image: "", series: "4 séries de 15 reps" },
    { id: "gym_elev_frontal", name: "Elevação Frontal (Corda na Polia)", category: "Shoulders", equipment: "Cable", difficulty: "Beginner", image: "", series: "3 séries de 12 reps" },
    { id: "gym_crucifixo_inverso", name: "Crucifixo Inverso", category: "Shoulders", equipment: "Machine/Dumbbell", difficulty: "Beginner", image: "", series: "4 séries de 12 reps (foco posterior)" },
    { id: "gym_remada_alta", name: "Remada Alta (Pegada Aberta)", category: "Shoulders", equipment: "Barbell", difficulty: "Intermediate", image: "", series: "3 séries de 12 reps" },

    // --- TREINO E: BRAÇOS ---
    { id: "gym_triceps_biset", name: "Bi-set: Tríceps Testa + Supino Fechado", category: "Arms", equipment: "Barbell", difficulty: "Advanced", image: "", series: "3 séries de 10+10 reps" },
    { id: "gym_triceps_frances", name: "Tríceps Francês Unilateral", category: "Arms", equipment: "Dumbbell", difficulty: "Intermediate", image: "", series: "3 séries de 12 reps" },
    { id: "gym_triceps_pulley", name: "Tríceps Pulley (Barra Reta)", category: "Arms", equipment: "Cable", difficulty: "Beginner", image: "", series: "3 séries de 15 reps" },
    { id: "gym_rosca_scott", name: "Rosca Scott (Máquina)", category: "Arms", equipment: "Machine", difficulty: "Beginner", image: "", series: "3 séries de 10 reps" },
    { id: "gym_rosca_alt_rotacao", name: "Rosca Alternada com Rotação", category: "Arms", equipment: "Dumbbell", difficulty: "Beginner", image: "", series: "3 séries de 10 reps" },
    { id: "gym_rosca_inversa", name: "Rosca Inversa", category: "Arms", equipment: "Barbell", difficulty: "Beginner", image: "", series: "4 séries de 12 reps" },

    // --- TREINO F: GLÚTEOS E POSTERIOR ---
    { id: "gym_elev_pelvica", name: "Elevação Pélvica", category: "Legs", equipment: "Barbell", difficulty: "Intermediate", image: "", series: "4 séries de 10 reps (carga máxima)" },
    { id: "gym_agachamento_sumo", name: "Agachamento Sumô", category: "Legs", equipment: "Barbell/Dumbbell", difficulty: "Intermediate", image: "", series: "3 séries de 12 reps" },
    { id: "gym_abdutora", name: "Cadeira Abdutora", category: "Legs", equipment: "Machine", difficulty: "Beginner", image: "", series: "4 séries de 15 reps" },
    { id: "gym_gluteo_caneleira", name: "Glúteo Caneleira", category: "Legs", equipment: "Cable/Bodyweight", difficulty: "Beginner", image: "", series: "3 séries de 15 reps" },
    { id: "gym_afundo", name: "Afundo (Passada)", category: "Legs", equipment: "Dumbbell", difficulty: "Intermediate", image: "", series: "3 séries de 12 passos cada perna" },

    // --- CALISTENIA / CARDIO ---
    { id: "cali_flexao", name: "Flexão de Braço (Push-up)", category: "Calisthenics", equipment: "Bodyweight", difficulty: "Beginner", image: "", series: "3 séries de 8 a 12 reps" },
    { id: "cali_barra_fixa", name: "Barra Fixa (Pull-up)", category: "Calisthenics", equipment: "Pull-up Bar", difficulty: "Intermediate", image: "", series: "4 séries de 6 a 10 reps" },
    { id: "cardio_burpees", name: "Burpees", category: "Cardio", equipment: "Bodyweight", difficulty: "Intermediate", image: "", series: "3 séries de 15 reps" },
    { id: "abs_remador", name: "Abdominal Remador", category: "Core", equipment: "Bodyweight", difficulty: "Beginner", image: "", series: "4 séries de 20 reps" },
    { id: "cali_prancha", name: "Prancha Abdominal", category: "Core", equipment: "Bodyweight", difficulty: "Beginner", image: "", series: "3 séries de 60s" },
    { id: "ex_hanging_leg_raise", name: "Elevação de Pernas", category: "Core", equipment: "Pull-up Bar", difficulty: "Intermediate", image: "", series: "3 séries de 12 a 15 reps" },
    { id: "abs_carga", name: "Abdominal com Carga", category: "Core", equipment: "Weight Plate", difficulty: "Intermediate", image: "", series: "3 séries de 15 reps" }
];

// --- STATE MANAGEMENT ---
let routines = loadData('titanRoutines') || [];
let currentRoutineId = null;
let foodDb = [];
let weightHistory = loadData('titanWeightHistory') || [];
let volumeHistory = loadData('titanVolumeHistory') || [];

// Feature State
let isFocusMode = false;

// --- PERSISTENCE UTILS ---
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// --- DOM ---
const routinesGrid = document.getElementById('routinesGrid');
const routineDetail = document.getElementById('routineDetail');
const progressBar = document.getElementById('routineProgressBar');
const progressText = document.getElementById('progressText');

let chartWeightInstance = null;
let chartVolumeInstance = null;

// --- INIT ---
async function init() {
    await loadFoodDatabase();
    renderRoutines();
    renderFoodLog();
    setupTabs();
    setupBMI(); // Added BMI setup
    loadLastWeight();
    renderProgressCharts();
}

async function loadFoodDatabase() {
    try {
        const response = await fetch('./alimentos.json');
        foodDb = await response.json();
    } catch (e) { console.log('No local food DB'); }
}

function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) {
                target.classList.add('active');
                if (btn.dataset.tab === 'progressTab') renderProgressCharts();
            }
        });
    });
}

// --- CORE: ROUTINES ---
function renderRoutines() {
    routinesGrid.innerHTML = '';

    // "Create New" Card
    const createCard = document.createElement('div');
    createCard.className = 'routine-card';
    createCard.style.border = '2px dashed #333';
    createCard.style.justifyContent = 'center';
    createCard.style.alignItems = 'center';
    createCard.innerHTML = `<span style="font-size:2rem; color:var(--accent);">+</span><span style="font-size:0.9rem; color:#666; margin-top:5px;">CRIAR NOVO</span>`;
    createCard.onclick = window.openCreateRoutineModal;
    routinesGrid.appendChild(createCard);

    // "AI Gen" Card
    const aiCard = document.createElement('div');
    aiCard.className = 'routine-card';
    aiCard.style.border = '1px solid var(--accent-dark)';
    aiCard.style.background = 'rgba(0,255,136,0.05)';
    aiCard.innerHTML = `
        <div style="font-size:2rem;">🤖</div>
        <div>
            <h3 style="color:var(--accent); font-size:1.1rem;">Titan AI</h3>
            <p style="font-size:0.8rem; color:#888;">Gerar ficha automática</p>
        </div>
    `;
    aiCard.onclick = window.generateTitanAIWorkout;
    routinesGrid.appendChild(aiCard);

    // List Routines
    routines.forEach(routine => {
        const card = document.createElement('div');
        card.className = 'routine-card';

        // Calculate progress for mini bar
        const total = routine.exercises.length;
        const done = routine.exercises ? routine.exercises.filter(e => e.completed).length : 0;
        const pct = total === 0 ? 0 : (done / total) * 100;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between;">
                <h3 style="margin:0;">${routine.name}</h3>
                <button onclick="deleteRoutine(event, ${routine.id})" style="background:none; border:none; color:#555;">x</button>
            </div>
            <div>
                 <div class="routine-meta" style="margin-bottom:5px;">${done}/${total} Exercícios</div>
                 <div class="routine-mini-progress">
                    <div class="routine-mini-fill" style="width: ${pct}%"></div>
                 </div>
            </div>
        `;
        card.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') viewRoutine(routine.id);
        };
        routinesGrid.appendChild(card);
    });
}

window.viewRoutine = function (id) {
    const routine = routines.find(r => r.id === id);
    if (!routine) return;
    currentRoutineId = id;

    document.getElementById('routinesContent').classList.add('hidden');
    routineDetail.classList.remove('hidden');
    document.getElementById('routineTitle').innerText = routine.name;

    // Reset Focus Mode when opening new routine
    isFocusMode = false;
    updateFocusUI();

    renderRoutineExercises(routine);
};

window.closeRoutineDetail = function () {
    currentRoutineId = null;
    routineDetail.classList.add('hidden');
    document.getElementById('routinesContent').classList.remove('hidden');
    renderRoutines(); // Refresh mini bars
};

// Helper to get translated name
function getTranslatedExerciseName(ex) {
    if (!ex || !ex.id) return ex ? ex.name : '';
    const lang = localStorage.getItem('titanLanguage') || 'pt';
    // Access global translations from i18n.js
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][ex.id]) {
        return translations[lang][ex.id];
    }
    return ex.name;
}

// --- RENDER EXERCISES LIST ---
function renderRoutineExercises(routine) {
    const body = document.getElementById('routineTableBody');
    body.innerHTML = '';

    // Stats Update
    const total = routine.exercises.length;
    const done = routine.exercises.filter(e => e.completed).length;
    const percentage = total === 0 ? 0 : Math.round((done / total) * 100);

    document.getElementById('routineCount').innerText = `${done}/${total} Feitos`;
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.innerText = `${percentage}%`;

    // Find first incomplete for focus mode
    let firstIncompleteIndex = routine.exercises.findIndex(e => !e.completed);
    if (firstIncompleteIndex === -1 && total > 0) firstIncompleteIndex = total - 1; // All done

    routine.exercises.forEach((ex, idx) => {
        const row = document.createElement('tr');
        row.className = 'exercise-row';

        // Focus Mode Logic
        if (isFocusMode) {
            if (idx === firstIncompleteIndex) {
                row.classList.add('focused');
            } else {
                row.classList.add('blurred');
            }
        }

        // Green styling if done
        const rowStyle = ex.completed ? 'opacity: 0.6; text-decoration: line-through;' : '';
        const checkColor = ex.completed ? 'var(--accent)' : '#444';

        // Get name (translated if available)
        const displayName = getTranslatedExerciseName(ex);

        row.innerHTML = `
            <td style="${rowStyle}">
                <div style="font-weight:bold; color:white; font-size:1rem;">${displayName}</div>
                <div style="color:var(--text-secondary); font-size:0.8rem;">${ex.series}</div>
                <div style="margin-top:5px;">
                     <button class="action-btn" onclick="startTimer(60)" style="padding:0.3rem 0.8rem; font-size:0.7rem; min-height:30px; height:auto; width:auto;">⏱ 60s</button>
                     <button onclick="removeFromRoutine(${idx})" style="background:none; border:none; color:#444; margin-left:10px;">🗑</button>
                </div>
            </td>
            <td>
                <!-- Series/Reps Input (Just visual for now or simple tracker) -->
                <span style="color:var(--accent); font-weight:bold; font-size:1.2rem;">${ex.series.split(' ')[0]}</span>
            </td>
            <td style="text-align:center;">
                <button onclick="toggleExerciseCheck(${idx})" style="background:${ex.completed ? 'var(--accent)' : 'transparent'}; border:2px solid ${checkColor}; width:32px; height:32px; border-radius:50%; color:#000; font-weight:bold; transition:all 0.3s;">
                    ${ex.completed ? '✔' : ''}
                </button>
            </td>
        `;
        body.appendChild(row);
    });
}

// Listen for language changes to re-render
document.addEventListener('languageChanged', () => {
    // Re-render dashboards
    renderRoutines();

    // If inside a routine, re-render it
    if (currentRoutineId) {
        const routine = routines.find(r => r.id === currentRoutineId);
        if (routine) {
            document.getElementById('routineTitle').innerText = routine.name;
            renderRoutineExercises(routine);
        }
    }

    // If selector is open
    const modal = document.getElementById('exerciseSelectorModal');
    if (modal && !modal.classList.contains('hidden')) {
        renderExerciseList(document.getElementById('selectorSearch').value);
    }

    updateFocusUI();
});

// --- LOGIC: FOCUS & CHECK ---
window.toggleFocusMode = function () {
    isFocusMode = !isFocusMode;
    updateFocusUI();
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) renderRoutineExercises(routine);
};

function updateFocusUI() {
    const btn = document.getElementById('focusToggleBtn');
    if (!btn) return;

    const lang = localStorage.getItem('titanLanguage') || 'pt';
    const focusText = lang === 'en' ? 'Focus Mode' : (lang === 'es' ? 'Modo Foco' : (lang === 'jp' ? 'フォーカス' : 'Modo Foco'));
    const activeText = lang === 'en' ? 'Focus Active' : (lang === 'es' ? 'Foco Activo' : (lang === 'jp' ? 'アクティブ' : 'Foco Ativo'));

    if (isFocusMode) {
        document.body.classList.add('focus-active');
        btn.style.background = 'var(--accent)';
        btn.style.color = '#000';
        btn.innerText = '🎯 ' + activeText;
    } else {
        document.body.classList.remove('focus-active');
        btn.style.background = 'rgba(0,255,136,0.1)';
        btn.style.color = 'var(--accent)';
        btn.innerText = '🎯 ' + focusText;
    }
}

window.toggleExerciseCheck = function (idx) {
    if (!currentRoutineId) return;
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) {
        routine.exercises[idx].completed = !routine.exercises[idx].completed;

        // If unchecking, ensure focus returns to this item if in focus mode
        saveData('titanRoutines', routines);
        renderRoutineExercises(routine);
    }
};

window.removeFromRoutine = function (idx) {
    if (!confirm("Remover exercício?")) return;
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) {
        routine.exercises.splice(idx, 1);
        saveData('titanRoutines', routines);
        renderRoutineExercises(routine);
    }
};

// --- HELPERS (AI, Modal, Timer, Food) ---

window.generateTitanAIWorkout = function () {
    // 1. Detect Language
    const currentLanguage = localStorage.getItem('titanLanguage') || 'pt';

    // Helper to get translated name
    const getName = (id) => {
        // Assuming 'translations' is available globally from i18n.js
        if (typeof translations !== 'undefined' && translations[currentLanguage] && translations[currentLanguage][id]) {
            return translations[currentLanguage][id];
        }
        // Fallback: search in exercises array or return ID
        const ex = exercises.find(e => e.id === id);
        return ex ? ex.name : id;
    };

    // Helper to construct exercise object with specific series
    const makeEx = (id, startSeries) => {
        const baseEx = exercises.find(e => e.id === id);
        if (!baseEx) return null;

        return {
            ...baseEx,
            name: getName(id), // Inject translated name
            series: startSeries, // Inject specific series
            completed: false
        };
    };

    // 2. Define Structure (Push / Pull / Legs)
    const pushDay = {
        id: Date.now(),
        name: "Day 1: Push (Peito/Ombro/Tríceps)",
        exercises: [
            makeEx('gym_supino_inclinado', '4x6-8'),
            makeEx('gym_supino_reto', '4x6-8'),
            makeEx('gym_crucifixo_cross', '3x10-12'),
            makeEx('gym_desenv_halteres', '4x8-10'), // Desenvolvimento Halter
            makeEx('gym_elevacao_lateral', '4x12-15'),
            makeEx('gym_triceps_testa', '4x8-12')
        ].filter(e => e !== null)
    };

    const pullDay = {
        id: Date.now() + 1,
        name: "Day 2: Pull (Costas/Bíceps/Trapézio)",
        exercises: [
            makeEx('cali_barra_fixa', '4xFalha'), // Barra Fixa
            makeEx('gym_remada_curvada', '4x6-8'),
            makeEx('gym_puxada_alta', '3x8-12'), // Puxada Frente
            makeEx('gym_encolhimento', '4x10-12'),
            makeEx('gym_rosca_direta', '3x8-10'),
            makeEx('gym_rosca_martelo', '3x10-12')
        ].filter(e => e !== null)
    };

    const legsDay = {
        id: Date.now() + 2,
        name: "Day 3: Legs/Core",
        exercises: [
            makeEx('gym_agachamento', '4x6-8'),
            makeEx('gym_leg_press', '4x8-12'),
            makeEx('gym_stiff', '4x8-10'),
            makeEx('gym_panturrilha', '4x12-15'),
            makeEx('cali_prancha', '3x60s'),
            makeEx('ex_hanging_leg_raise', '3x12-15'), // Elevação Pernas
            makeEx('abs_carga', '3x15') // Abdominal Carga
        ].filter(e => e !== null)
    };

    routines.push(pushDay, pullDay, legsDay);
    saveData('titanRoutines', routines);
    renderRoutines();
    alert("Treino Titan AI (Push/Pull/Legs) gerado com sucesso! 🚀");
};


window.openCreateRoutineModal = function () {
    document.getElementById('createRoutineModal').classList.remove('hidden');
    document.getElementById('newRoutineName').focus();
};
window.closeCreateRoutineModal = function () {
    document.getElementById('createRoutineModal').classList.add('hidden');
};

window.confirmCreateRoutine = function () {
    const name = document.getElementById('newRoutineName').value;
    if (name) {
        routines.push({ id: Date.now(), name: name, exercises: [] });
        saveData('titanRoutines', routines);
        renderRoutines();
        window.closeCreateRoutineModal();
        document.getElementById('newRoutineName').value = '';
    }
};

window.deleteRoutine = function (e, id) {
    e.stopPropagation(); // prevent card click
    if (!confirm("Deletar treino?")) return;
    routines = routines.filter(r => r.id !== id);
    saveData('titanRoutines', routines);
    renderRoutines();
};

window.openExerciseSelector = function () {
    document.getElementById('exerciseSelectorModal').classList.remove('hidden');
    renderExerciseList('');
    document.getElementById('selectorSearch').focus();
};
window.closeExerciseSelector = function () {
    document.getElementById('exerciseSelectorModal').classList.add('hidden');
};

function renderExerciseList(filter) {
    const list = document.getElementById('selectorList');
    list.innerHTML = '';

    // Create a mapped array with translated names for searching/display
    const mappedExercises = exercises.map(e => ({
        ...e,
        displayName: getTranslatedExerciseName(e)
    }));

    const filtered = mappedExercises.filter(e =>
        e.displayName.toLowerCase().includes(filter.toLowerCase()) ||
        e.category.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(ex => {
        const div = document.createElement('div');
        div.style.padding = '10px';
        div.style.borderBottom = '1px solid #333';
        div.style.color = '#fff';
        div.style.cursor = 'pointer';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';

        div.innerHTML = `
            <div>
                <div style="font-weight:bold;">${ex.displayName}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">${ex.category}</div>
            </div>
            <button style="border:1px solid #555; background:none; color:#fff; padding:0.2rem 0.5rem; border-radius:4px;">+</button>
        `;

        div.onclick = () => {
            const r = routines.find(rt => rt.id === currentRoutineId);
            if (r) {
                // Ensure unique instance. Note: we push the original 'ex' props (without displayName if not needed), 
                // but we should ensure 'id' is there for future translations.
                // The 'ex' here is the mapped one, mapped from 'exercises' which has IDs.
                r.exercises.push({
                    id: ex.id,
                    name: ex.name, // fallback name in Portuguese
                    category: ex.category,
                    equipment: ex.equipment,
                    series: ex.series,
                    completed: false
                });

                saveData('titanRoutines', routines);
                renderRoutineExercises(r);
                window.closeExerciseSelector();
            }
        };
        list.appendChild(div);
    });
}
document.getElementById('selectorSearch').addEventListener('input', (e) => renderExerciseList(e.target.value));

// --- REST TIMER ---
let timerInterval = null;
let timeLeft = 0;
let totalTime = 0;

window.startTimer = function (sec) {
    timeLeft = sec;
    totalTime = sec;
    document.getElementById('restTimerBar').classList.remove('hidden');
    clearInterval(timerInterval);
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
            setTimeout(() => window.stopTimer(), 3000);
        }
    }, 1000);
};

window.stopTimer = function () {
    clearInterval(timerInterval);
    document.getElementById('restTimerBar').classList.add('hidden');
};

function updateTimer() {
    if (timeLeft < 0) timeLeft = 0;
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `${m}:${s}`;

    const bar = document.getElementById('timerProgress');
    if (totalTime > 0) {
        bar.style.width = ((timeLeft / totalTime) * 100) + '%';
    }
}

window.addTime = function (s) {
    timeLeft += s;
    if (s > 0) totalTime += s; // extend range
    updateTimer();
};

// --- FOOD ---
// --- FOOD ---
// Load saved food log or empty array
let foodLog = loadData('titanFoodLog') || [];

window.renderFoodLog = function () {
    const tbody = document.getElementById('foodTableBody');
    tbody.innerHTML = '';
    let totK = 0, totP = 0, totC = 0, totF = 0;

    foodLog.forEach((f, idx) => {
        totK += f.kcal;
        totP += f.protein || 0;
        totC += f.carbs || 0;
        totF += f.fat || 0;

        const r = document.createElement('tr');
        // Styled row for Dark Premium consistency
        r.innerHTML = `
            <td style="padding: 12px; border-bottom: 1px solid #222;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="font-weight:bold; color:white; font-size:1rem; margin-bottom:4px;">${f.name}</div>
                    <button onclick="removeFood(${idx})" style="background:none; border:none; color:#555; font-size:1.2rem;">&times;</button>
                </div>
                <div style="display: flex; gap: 15px; font-size: 0.8rem; color: #aaa;">
                   <span><b style="color: var(--accent);">${f.kcal}</b> kcal</span>
                   <span><b style="color: white;">${f.protein || 0}g</b> P</span>
                   <span><b style="color: white;">${f.carbs || 0}g</b> C</span>
                   <span><b style="color: white;">${f.fat || 0}g</b> G</span>
                </div>
            </td>
        `;
        tbody.appendChild(r);
    });

    // Update displayed totals
    if (document.getElementById('totalKcal')) document.getElementById('totalKcal').innerText = totK;
    if (document.getElementById('totalProtein')) document.getElementById('totalProtein').innerText = totP;
    if (document.getElementById('totalCarbs')) document.getElementById('totalCarbs').innerText = totC;
    if (document.getElementById('totalFat')) document.getElementById('totalFat').innerText = totF;
};

// Add Food Handler
document.getElementById('btn-add-food').onclick = function () {
    const n = document.getElementById('food-name').value;
    const k = parseFloat(document.getElementById('food-kcal').value) || 0;
    const p = parseFloat(document.getElementById('food-protein').value) || 0;
    const c = parseFloat(document.getElementById('food-carbs').value) || 0;
    const f = parseFloat(document.getElementById('food-fat').value) || 0;

    if (n) {
        foodLog.push({
            id: Date.now(),
            name: n,
            kcal: k,
            protein: p,
            carbs: c,
            fat: f
        });
        saveData('titanFoodLog', foodLog);
        renderFoodLog();

        // Clear inputs
        document.getElementById('food-name').value = '';
        document.getElementById('food-kcal').value = '';
        document.getElementById('food-protein').value = '';
        document.getElementById('food-carbs').value = '';
        document.getElementById('food-fat').value = '';
    }
};

window.removeFood = function (idx) {
    if (!confirm("Remover alimento?")) return;
    foodLog.splice(idx, 1);
    saveData('titanFoodLog', foodLog);
    renderFoodLog();
};

// --- CHARTS (DUMMY/PLACEHOLDER INIT) ---
function renderProgressCharts() {
    // Only init if canvas exists
    const ctxWeight = document.getElementById('chartWeight')?.getContext('2d');
    const ctxVolume = document.getElementById('chartVolume')?.getContext('2d');

    if (ctxWeight && !chartWeightInstance) {
        // Simple config
        chartWeightInstance = new Chart(ctxWeight, {
            type: 'line',
            data: {
                labels: weightHistory.map(e => e.date),
                datasets: [{ label: 'Peso', data: weightHistory.map(e => e.weight), borderColor: '#00FF88', backgroundColor: 'rgba(0,255,136,0.1)', tension: 0.4 }]
            },
            options: { responsive: true, plugins: { legend: { labels: { color: '#fff' } } }, scales: { x: { ticks: { color: '#666' } }, y: { ticks: { color: '#666' } } } }
        });
    }
    // Repeat for Volume...
}
// --- BMI CALCULATOR ---
function setupBMI() {
    const btn = document.getElementById('calcBmiBtn');
    if (btn) {
        btn.onclick = calculateBMI;
    }
}

function calculateBMI() {
    const hInput = document.getElementById('bmiHeight');
    const wInput = document.getElementById('bmiWeight');
    const resultBox = document.getElementById('bmiResult');
    const scoreText = document.getElementById('bmiScore');
    const statusText = document.getElementById('bmiStatus');

    if (!hInput || !wInput) return;

    const h = parseFloat(hInput.value); // cm
    const w = parseFloat(wInput.value); // kg

    if (!h || !w || h <= 0 || w <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // BMI = kg / (m * m)
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    // Ranges from User Request:
    // < 20: Abaixo do peso
    // 20 - 25: Normal
    // 25 - 30: Sobrepeso
    // > 30: Obesidade

    let status = '';
    let color = '';

    if (bmi < 20) {
        status = 'ABAIXO DO PESO';
        color = '#ffcc00'; // Yellow
    } else if (bmi >= 20 && bmi < 25) {
        status = 'NORMAL';
        color = '#00FF88'; // Green
    } else if (bmi >= 25 && bmi < 30) {
        status = 'SOBREPESO';
        color = '#ff9900'; // Orange
    } else {
        status = 'OBESIDADE';
        color = '#ff3333'; // Red
    }

    resultBox.classList.remove('hidden');
    scoreText.innerText = bmi.toFixed(1);
    statusText.innerText = status;
    statusText.style.color = color;
    resultBox.style.borderColor = color;

    // Save weight to history if different
    saveWeightToHistory(w);
}

function saveWeightToHistory(weight) {
    const today = new Date().toLocaleDateString();
    const lastEntry = weightHistory[weightHistory.length - 1];

    if (!lastEntry || lastEntry.date !== today) {
        weightHistory.push({ date: today, weight: weight });
        if (weightHistory.length > 30) weightHistory.shift(); // Keep last 30 entries
        saveData('titanWeightHistory', weightHistory);
        renderProgressCharts();
    } else if (lastEntry.weight !== weight) {
        // Update today's entry
        lastEntry.weight = weight;
        saveData('titanWeightHistory', weightHistory);
        renderProgressCharts();
    }
}

function loadLastWeight() {
    if (weightHistory.length > 0) {
        const last = weightHistory[weightHistory.length - 1];
        if (document.getElementById('bmiWeight')) document.getElementById('bmiWeight').value = last.weight;
    }
}

// --- EXPORT/IMPORT ---
window.exportBackup = function () {
    const data = { routines, weightHistory, volumeHistory, foodLog };
    const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const a = document.createElement('a');
    a.href = str; a.download = 'titan_backup.json';
    a.click();
};
window.importBackup = function (e) {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = function (evt) {
        try {
            const d = JSON.parse(evt.target.result);
            if (d.routines) { routines = d.routines; saveData('titanRoutines', routines); }
            if (d.weightHistory) { weightHistory = d.weightHistory; saveData('titanWeightHistory', weightHistory); }
            if (d.volumeHistory) { volumeHistory = d.volumeHistory; saveData('titanVolumeHistory', volumeHistory); }
            if (d.foodLog) { foodLog = d.foodLog; saveData('titanFoodLog', foodLog); }

            alert("Restaurado!"); location.reload();
        } catch (err) { alert("Erro JSON"); }
    };
    r.readAsText(f);
};

// Start
document.addEventListener('DOMContentLoaded', init);
