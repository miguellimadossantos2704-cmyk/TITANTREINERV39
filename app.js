// TITAN TRAINER V40 - MAIN LOGIC
// Includes: Charts, AI Trainer, Food Search, Dark Mode Refinements

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log("Service Worker registrado com sucesso!"))
        .catch(err => console.log("Erro ao registrar Service Worker:", err));
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
let routines = loadData('titanRoutines') || [
    { id: 1, name: "Treino A - Peito & Tríceps", exercises: [] },
    { id: 2, name: "Treino B - Costas & Bíceps", exercises: [] }
];
let currentRoutineId = null;
let foodDb = []; // Will be loaded from json

// History for Charts
let weightHistory = loadData('titanWeightHistory') || []; // { date: 'YYYY-MM-DD', weight: 70 }
let volumeHistory = loadData('titanVolumeHistory') || []; // { date: 'YYYY-MM-DD', volume: 12000 }

// --- PERSISTENCE UTILS ---
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// --- DOM ELEMENTS ---
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const routinesGrid = document.getElementById('routinesGrid');
const routineDetail = document.getElementById('routineDetail');
const foodTableBody = document.getElementById('foodTableBody');
const foodSearchInput = document.getElementById('foodSearchInput');
const foodSearchResults = document.getElementById('foodSearchResults');
const totalKcalEl = document.getElementById('totalKcal');
const totalProtEl = document.getElementById('totalProtein');
const totalCarbsEl = document.getElementById('totalCarbs');
const totalFatEl = document.getElementById('totalFat');
const foodLog = []; // Runtime log

let chartWeightInstance = null;
let chartVolumeInstance = null;

// --- INITIALIZATION ---
async function init() {
    await loadFoodDatabase();
    renderRoutines();
    renderFoodLog();
    setupEventListeners();
    loadLastWeight();
    renderProgressCharts(); // New
}

async function loadFoodDatabase() {
    try {
        const response = await fetch('./alimentos.json');
        foodDb = await response.json();
        console.log("Alimentos carregados:", foodDb.length);
    } catch (error) {
        console.error("Erro ao carregar alimentos.json", error);
        // Fallback or alert
        alert("Erro ao carregar banco de alimentos. Verifique sua conexão.");
    }
}

// --- EVENT LISTENERS ---
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

            // Render charts if entering progress tab
            if (tabId === 'progressTab') {
                renderProgressCharts();
            }
        });
    });

    // Diet Search - Removed legacy listener
    // if (foodSearchInput) {
    //     foodSearchInput.addEventListener('input', (e) => handleFoodSearch(e.target.value));
    // }

    // BMI
    document.getElementById('calcBmiBtn')?.addEventListener('click', calculateBMI);

    // Exercise Selector
    document.getElementById('selectorSearch')?.addEventListener('input', (e) => {
        renderExerciseList(e.target.value.toLowerCase());
    });
}

// --- PROGRESS & CHARTS (NEW) ---
// --- PROGRESS & CHARTS (NEW) ---
function renderProgressCharts() {
    const ctxWeight = document.getElementById('chartWeight')?.getContext('2d');
    const ctxVolume = document.getElementById('chartVolume')?.getContext('2d');

    if (!ctxWeight || !ctxVolume) return;

    // Destroy old instances if they exist to avoid overlaps
    if (chartWeightInstance) chartWeightInstance.destroy();
    if (chartVolumeInstance) chartVolumeInstance.destroy();

    // Chart.js Config for Dark Mode
    const chartColor = '#D4AF37'; // Gold
    const chartBg = 'rgba(212, 175, 55, 0.2)';

    // Labels from i18n (Safe check if t() exists, else fallback)
    const labelWeight = typeof t === 'function' ? t('weight-label') : 'Peso Corporal (kg)';
    const labelVolume = typeof t === 'function' ? t('volume-label') : 'Volume Total (Séries x Reps)';

    // Weight Chart
    chartWeightInstance = new Chart(ctxWeight, {
        type: 'line',
        data: {
            labels: weightHistory.map(entry => entry.date),
            datasets: [{
                label: labelWeight,
                data: weightHistory.map(entry => entry.weight),
                borderColor: chartColor,
                backgroundColor: chartBg,
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { labels: { color: '#fff' } }
            },
            scales: {
                y: { ticks: { color: '#aaa' }, grid: { color: '#333' } },
                x: { ticks: { color: '#aaa' }, grid: { color: '#333' } }
            }
        }
    });

    // Volume Chart
    chartVolumeInstance = new Chart(ctxVolume, {
        type: 'bar',
        data: {
            labels: volumeHistory.map(entry => entry.date),
            datasets: [{
                label: labelVolume,
                data: volumeHistory.map(entry => entry.volume),
                backgroundColor: chartColor,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { labels: { color: '#fff' } }
            },
            scales: {
                y: { ticks: { color: '#aaa' }, grid: { color: '#333' } },
                x: { ticks: { color: '#aaa' }, grid: { color: '#333' } }
            }
        }
    });
}

// Listen for language changes to update charts
document.addEventListener('languageChanged', () => {
    // Re-render charts only if the tab is active or just to be safe
    renderProgressCharts();
});

function updateWeightHistory(weight) {
    const today = new Date().toLocaleDateString('pt-BR');
    // Remove entry if already exists for today
    weightHistory = weightHistory.filter(e => e.date !== today);
    weightHistory.push({ date: today, weight: parseFloat(weight) });

    // Keep only last 30 entries
    if (weightHistory.length > 30) weightHistory.shift();

    saveData('titanWeightHistory', weightHistory);
    renderProgressCharts();
}

// --- AI TRAINER (NEW) ---
// --- AI TRAINER (NEW) ---
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
            series: startSeries // Inject specific series
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

    // 3. Clear existing routines or append? User said "automaticamente gera uma estrutura de 3 dias". 
    // Usually implies replacing or adding. I will Add to existing.
    // If user wants to replace, they can delete old ones.
    routines.push(pushDay, pullDay, legsDay);

    // 4. Persistence & Render
    saveData('titanRoutines', routines);
    renderRoutines();

    alert("Treino Titan AI (Push/Pull/Legs) gerado com sucesso! 🚀");
};

// Legacy alias just in case
window.generateByAI = window.generateTitanAIWorkout;

function getEx(id) {
    return exercises.find(e => e.id === id) || exercises[0];
}

// --- DIET SYSTEM (MANUAL + AUTO-FILL) ---
document.getElementById('btn-add-food').addEventListener('click', () => {
    const name = document.getElementById('food-name').value;
    const kcal = parseFloat(document.getElementById('food-kcal').value) || 0;
    const p = parseFloat(document.getElementById('food-protein').value) || 0;
    const c = parseFloat(document.getElementById('food-carbs').value) || 0;
    const g = parseFloat(document.getElementById('food-fat').value) || 0;

    if (name === "") {
        alert("Dê um nome ao alimento!");
        return;
    }

    const item = {
        id: Date.now(),
        name: name,
        kcal: kcal,
        protein: p,
        carbs: c,
        fat: g,
        grams: 100 // Default or unknown if manual
    };

    foodLog.push(item);
    renderFoodLog();

    // Clear inputs
    document.getElementById('food-name').value = '';
    document.getElementById('food-kcal').value = '';
    document.getElementById('food-protein').value = '';
    document.getElementById('food-carbs').value = '';
    document.getElementById('food-fat').value = '';
});

// Auto-fill logic
document.getElementById('food-name').addEventListener('input', function (e) {
    const val = e.target.value.toLowerCase();
    if (val.length < 2) return;

    // Find approximate match
    const hit = foodDb.find(f => f.name.toLowerCase() === val || f.name.toLowerCase().startsWith(val));

    if (hit) {
        // Auto-fill (allows editing)
        document.getElementById('food-kcal').value = hit.kcal;
        document.getElementById('food-protein').value = hit.protein;
        document.getElementById('food-carbs').value = hit.carbs;
        document.getElementById('food-fat').value = hit.fat;
    }
});

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
            <td>
                <strong style="color:white;">${item.name}</strong><br>
                <span style="font-size:0.8rem; color:#666;">${item.grams}g</span>
            </td>
            <td>${item.kcal}</td>
            <td>${item.protein}g</td>
            <td>${item.carbs}g</td>
            <td>${item.fat}g</td>
            <td><button class="delete-btn" onclick="deleteFood(${item.id})">X</button></td>
        `;
        foodTableBody.appendChild(row);
    });

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

// --- ROUTINES UI ---
function renderRoutines() {
    routinesGrid.innerHTML = '';

    if (routines.length === 0) {
        routinesGrid.innerHTML = `
            <div class="routine-card" style="border: 2px dashed #444; background: transparent; display:flex; flex-direction:column; align-items:center; justify-content:center; opacity:0.8;" onclick="window.openCreateRoutineModal()">
                <span style="font-size:3rem; margin-bottom:1rem;">⚡</span>
                <h3 style="margin:0; font-size:1.2rem; color:#888;">Criar Manualmente</h3>
            </div>
            <div class="routine-card" style="border: 2px solid var(--accent); background: rgba(212, 175, 55, 0.1); display:flex; flex-direction:column; align-items:center; justify-content:center;" onclick="window.generateByAI()">
                <span style="font-size:3rem; margin-bottom:1rem;">🤖</span>
                <h3 style="margin:0; font-size:1.2rem; color:var(--accent);">Titan AI Trainer</h3>
                <p style="text-align:center; color:#ddd; font-size:0.9rem;">Gerar ficha automática</p>
            </div>
        `;
        return;
    }

    routines.forEach(routine => {
        const card = document.createElement('div');
        card.className = 'routine-card';
        // Translated "Exercises" count check is complex without the translation function, simplified here
        const exerciseLabel = 'Exercises';

        card.innerHTML = `
            <button class="delete-routine-btn" onclick="deleteRoutine(event, ${routine.id})">🗑️</button>
            <div onclick="viewRoutine(${routine.id})" style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
                <h3>${routine.name}</h3>
                <div class="routine-meta">${routine.exercises.length} ${exerciseLabel}</div>
            </div>
        `;
        routinesGrid.appendChild(card);
    });

    // Always append the "Add New" button at the end if there are routines
    const addCard = document.createElement('div');
    addCard.className = 'routine-card';
    addCard.style.border = '2px dashed #444';
    addCard.style.background = 'transparent';
    addCard.style.justifyContent = 'center';
    addCard.style.alignItems = 'center';
    addCard.innerHTML = `<span style="font-size:3rem; color:#444;">+</span>`;
    addCard.onclick = window.openCreateRoutineModal;
    routinesGrid.appendChild(addCard);
}

window.viewRoutine = function (id) {
    const routine = routines.find(r => r.id === id);
    if (!routine) return;

    currentRoutineId = id;
    document.getElementById('routinesContent').classList.add('hidden');
    routineDetail.classList.remove('hidden');

    document.getElementById('routineTitle').innerText = routine.name;
    renderRoutineExercises(routine);
};

window.closeRoutineDetail = function () {
    currentRoutineId = null;
    routineDetail.classList.add('hidden');
    document.getElementById('routinesContent').classList.remove('hidden');
    renderRoutines();
};

function renderRoutineExercises(routine) {
    // Note: Assuming routineTableBody is globally available or fetched
    const body = document.getElementById('routineTableBody');
    body.innerHTML = '';
    document.getElementById('routineCount').innerText = `${routine.exercises.length} Exercícios`;

    if (routine.exercises.length === 0) {
        body.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:2rem; color:#555;">Toque em "+ Adicionar Exercício" para começar.</td></tr>';
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
        body.appendChild(row);
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

window.toggleExerciseCheck = function (idx, isChecked) {
    if (!currentRoutineId) return;
    const routine = routines.find(r => r.id === currentRoutineId);
    if (routine) {
        if (!routine.exercises[idx]) return;
        routine.exercises[idx].completed = isChecked;
        saveRoutines();

        // Track Volume if checked (Simplified: 1 workout unit)
        if (isChecked) {
            const today = new Date().toLocaleDateString('pt-BR');
            // In a real app we would calculate tonnage, here we just increment volume points
            // or just let the user know. 
        }
    }
};

function saveRoutines() {
    saveData('titanRoutines', routines);
}

// --- MODALS ---
const createRoutineModal = document.getElementById('createRoutineModal');
const newRoutineNameInput = document.getElementById('newRoutineName');
const exerciseSelectorModal = document.getElementById('exerciseSelectorModal');
const selectorSearch = document.getElementById('selectorSearch');
const selectorList = document.getElementById('selectorList');

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
        ex.category.toLowerCase().includes(filterText)
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
        // Deep copy to avoid reference issues
        const newEx = JSON.parse(JSON.stringify(exercise));
        routine.exercises.push(newEx);
        saveRoutines();
        renderRoutineExercises(routine);
        closeExerciseSelector();
    }
}

// --- MACROS & BMI ---
window.calculateMacros = function () {
    const w = parseFloat(document.getElementById('macroWeight').value);

    // Validation
    if (!w || w <= 0) {
        alert("⚠️ Por favor, insira um peso válido (maior que zero).");
        return;
    }

    // Ectomorph Bulk Formula
    const p = Math.round(w * 2.0);
    const c = Math.round(w * 4.0);
    const f = Math.round(w * 1.0);

    document.getElementById('targetProt').innerText = p;
    document.getElementById('targetCarbs').innerText = c;
    document.getElementById('targetFat').innerText = f;
    document.getElementById('macroResult').classList.remove('hidden');
};

function calculateBMI() {
    const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
    const w = parseFloat(document.getElementById('bmiWeight').value);
    const bmiScoreEl = document.getElementById('bmiScore');
    const bmiStatusEl = document.getElementById('bmiStatus');
    const bmiResult = document.getElementById('bmiResult');

    if (h && w) {
        const bmi = parseFloat((w / (h * h)).toFixed(1));
        if (bmiScoreEl) bmiScoreEl.innerText = bmi;

        let statusText = '';
        let statusColor = '#fff';

        if (bmi < 18.5) { statusText = 'ABAIXO DO PESO'; statusColor = '#ffcc00'; }
        else if (bmi >= 18.5 && bmi <= 24.9) { statusText = 'NORMAL'; statusColor = '#00ff88'; }
        else if (bmi >= 25 && bmi <= 29.9) { statusText = 'SOBREPESO'; statusColor = '#ff8800'; }
        else { statusText = 'OBESIDADE'; statusColor = '#ff3333'; }

        if (bmiStatusEl) {
            bmiStatusEl.innerText = statusText;
            bmiStatusEl.style.color = statusColor;
        }

        if (bmiResult) bmiResult.classList.remove('hidden');

        // New Logic: Save history
        updateWeightHistory(w);
    }
}

function loadLastWeight() {
    const last = weightHistory.length > 0 ? weightHistory[weightHistory.length - 1].weight : null;
    if (last) {
        const msg = document.getElementById('lastWeightMsg');
        if (msg) msg.innerText = `Último: ${last} kg`;
    }
}

// --- REST TIMER ---
let timerInterval = null;
let timeLeft = 0;
let totalTime = 0;
const restTimerBar = document.getElementById('restTimerBar');
const timerDisplay = document.getElementById('timerDisplay');
const timerProgress = document.getElementById('timerProgress');

window.startTimer = function (seconds) {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = seconds;
    totalTime = seconds;
    updateTimerUI();
    if (restTimerBar) restTimerBar.classList.remove('hidden');
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) timerFinished();
    }, 1000);
};

function updateTimerUI() {
    if (timeLeft < 0) timeLeft = 0;
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    if (timerDisplay) timerDisplay.innerText = `${m}:${s}`;
    if (timerProgress && totalTime > 0) {
        timerProgress.style.width = `${(timeLeft / totalTime) * 100}%`;
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
    navigator.vibrate?.([500, 200, 500]);
    setTimeout(stopTimer, 3000);
}

// --- BACKUP ---
window.exportBackup = function () {
    const data = { routines, weightHistory, volumeHistory };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "titan_trainer_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

window.importBackup = function (event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (importedData.routines) {
                saveData('titanRoutines', importedData.routines);
                routines = importedData.routines;
            }
            if (importedData.weightHistory) saveData('titanWeightHistory', importedData.weightHistory);

            alert("Backup restaurado com sucesso!");
            location.reload();
        } catch (err) {
            alert("Erro ao ler backup.");
        }
    };
    reader.readAsText(file);
};

// Start
document.addEventListener('DOMContentLoaded', init);
