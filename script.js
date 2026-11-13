let currentCourseIndex = 0;
let completedTopics = JSON.parse(localStorage.getItem("kwasu_completed") || "[]");
let missedQuestions = JSON.parse(localStorage.getItem("kwasu_missed") || "[]");
let cbtTimerInterval = null;

// INITIALIZE APP
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCourseTabs();
  loadCourse(0);
  setupModeSwitchers();
  updateMissedBadge();

  document.getElementById("searchInput").addEventListener("input", (e) => renderTopics(e.target.value));
  document.getElementById("startShuffleBtn").addEventListener("click", startTopicShuffle);
  document.getElementById("startCbtBtn").addEventListener("click", startCbtExam);
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("readerModal").classList.add("hidden");
  });
});

// DARK MODE TOGGLE
function initTheme() {
  const btn = document.getElementById("themeToggle");
  if (localStorage.getItem("kwasu_theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️ Light Mode";
  }
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("kwasu_theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}

// COURSE TABS & LOADING
function renderCourseTabs() {
  const tabs = document.getElementById("courseTabs");
  tabs.innerHTML = COURSES_DB.map((c, idx) => `
    <button class="course-tab ${idx === currentCourseIndex ? "active" : ""}" onclick="loadCourse(${idx})">
      ${c.code}
    </button>
  `).join("");
}

function loadCourse(index) {
  currentCourseIndex = index;
  renderCourseTabs();
  const course = COURSES_DB[index];
  document.getElementById("courseTitle").textContent = `${course.code}: ${course.title}`;
  document.getElementById("courseDesc").textContent = course.description;
  document.getElementById("searchInput").value = "";
  document.getElementById("quizArea").innerHTML = "";
  
  updateProgress();
  renderTopics();
  renderShufflerCheckboxes();
}

function updateProgress() {
  const topics = COURSES_DB[currentCourseIndex].topics;
  if (!topics.length) {
    document.getElementById("progressText").textContent = "No topics added yet";
    document.getElementById("progressFill").style.width = "0%";
    return;
  }
  const done = topics.filter(t => completedTopics.includes(t.id)).length;
  const pct = Math.round((done / topics.length) * 100);
  document.getElementById("progressText").textContent = `${done}/${topics.length} Topics (${pct}%)`;
  document.getElementById("progressFill").style.width = `${pct}%`;
}

// VIEW 1: READER & PDFs
function renderTopics(filter = "") {
  const list = document.getElementById("topicsList");
  const topics = COURSES_DB[currentCourseIndex].topics;
  const q = filter.toLowerCase();

  const filtered = topics.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.week.toLowerCase().includes(q) ||
    t.summary.some(s => s.toLowerCase().includes(q))
  );

  if (!filtered.length) {
    list.innerHTML = `<div class="card muted">No topics or PDFs added for this course yet. Send your PDF to add them!</div>`;
    return;
  }

  list.innerHTML = filtered.map(t => {
    const isDone = completedTopics.includes(t.id);
    return `
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge">${t.week}</span>
          <label style="cursor:pointer; font-size:0.9rem;">
            <input type="checkbox" ${isDone ? "checked" : ""} onchange="toggleTopicComplete('${t.id}')"> Mark Read
          </label>
        </div>
        <h3 style="margin-top:0.5rem;">${t.title}</h3>
        <p class="muted">${t.questions.length} Practice Questions Ready</p>
        <div class="topic-actions">
          <button class="btn-primary" onclick="openReader('${t.id}', 'summary')">📝 Quick Summary</button>
          <button class="btn-outline" onclick="openReader('${t.id}', 'pdf')">📄 Open PDF</button>
        </div>
      </div>
    `;
  }).join("");
}

function toggleTopicComplete(topicId) {
  if (completedTopics.includes(topicId)) {
    completedTopics = completedTopics.filter(id => id !== topicId);
  } else {
    completedTopics.push(topicId);
  }
  localStorage.setItem("kwasu_completed", JSON.stringify(completedTopics));
  updateProgress();
}

function openReader(topicId, type) {
  const topic = COURSES_DB[currentCourseIndex].topics.find(t => t.id === topicId);
  document.getElementById("modalTitle").textContent = `${topic.week}: ${topic.title}`;
  const body = document.getElementById("modalBody");

  if (type === "summary") {
    body.innerHTML = `
      <h4>Key Exam Points (TL;DR)</h4>
      <ul style="margin: 1rem 0 0 1.2rem; display:grid; gap:0.6rem;">
        ${topic.summary.map(point => `<li>${point}</li>`).join("")}
      </ul>
    `;
  } else {
    body.innerHTML = `
      <p class="muted">If the PDF doesn't preview on mobile, <a href="${topic.pdfPath}" target="_blank">tap here to open/download directly</a>.</p>
      <iframe class="pdf-frame" src="${topic.pdfPath}"></iframe>
    `;
  }
  document.getElementById("readerModal").classList.remove("hidden");
}

// MODE SWITCHER
function setupModeSwitchers() {
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`${btn.dataset.mode}View`).classList.add("active");
      if (btn.dataset.mode === "missed") renderMissedQuestions();
    });
  });
}

// HELPER: SHUFFLE ARRAY
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// VIEW 2: TOPIC SHUFFLER
function renderShufflerCheckboxes() {
  const box = document.getElementById("topicCheckboxes");
  const topics = COURSES_DB[currentCourseIndex].topics;
  if (!topics.length) {
    box.innerHTML = `<p class="muted">No topics available yet.</p>`;
    return;
  }
  box.innerHTML = topics.map(t => `
    <label><input type="checkbox" class="topic-chk" value="${t.id}" checked> ${t.week}: ${t.title} (${t.questions.length} Qs)</label>
  `).join("");
}

function startTopicShuffle() {
  const selectedIds = Array.from(document.querySelectorAll(".topic-chk:checked")).map(cb => cb.value);
  const limit = parseInt(document.getElementById("shuffleLimit").value, 10);
  const topics = COURSES_DB[currentCourseIndex].topics.filter(t => selectedIds.includes(t.id));

  let pool = [];
  topics.forEach(t => t.questions.forEach(q => pool.push({ ...q, topicTitle: `${t.week}: ${t.title}` })));

  if (!pool.length) {
    alert("Select at least one topic with questions!");
    return;
  }

  const chosen = shuffleArray(pool).slice(0, limit);
  const area = document.getElementById("quizArea");
  area.innerHTML = chosen.map((item, idx) => `
    <div class="card" id="qcard-${idx}">
      <span class="muted">${item.topicTitle}</span>
      <h4 style="margin:0.4rem 0;">${idx + 1}. ${item.q}</h4>
      ${item.options.map((opt, oIdx) => `
        <button class="option-btn" onclick="checkPracticeAnswer(${idx}, ${oIdx}, ${item.answer})">${opt}</button>
      `).join("")}
      <p id="exp-${idx}" class="muted hidden" style="margin-top:0.6rem;">💡 ${item.explanation}</p>
    </div>
  `).join("");
  window.currentPracticeSet = chosen;
}

function checkPracticeAnswer(qIdx, chosenIdx, correctIdx) {
  const card = document.getElementById(`qcard-${qIdx}`);
  const buttons = card.querySelectorAll(".option-btn");
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === correctIdx) b.classList.add("correct");
    if (i === chosenIdx && chosenIdx !== correctIdx) b.classList.add("wrong");
  });
  document.getElementById(`exp-${qIdx}`).classList.remove("hidden");

  if (chosenIdx !== correctIdx) {
    saveMissedQuestion(window.currentPracticeSet[qIdx]);
  }
}

// VIEW 3: 100-QUESTION CBT EXAM
function startCbtExam() {
  const course = COURSES_DB[currentCourseIndex];
  let pool = [];
  course.topics.forEach(t => t.questions.forEach(q => pool.push({ ...q, topicTitle: t.title })));

  if (!pool.length) {
    alert("No questions available in this course yet!");
    return;
  }

  const examQs = shuffleArray(pool).slice(0, 100);
  const answers = new Array(examQs.length).fill(null);
  let secondsLeft = 45 * 60;

  document.getElementById("cbtIntro").classList.add("hidden");
  const arena = document.getElementById("cbtArena");
  arena.classList.remove("hidden");

  clearInterval(cbtTimerInterval);
  cbtTimerInterval = setInterval(() => {
    secondsLeft--;
    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const secs = String(secondsLeft % 60).padStart(2, "0");
    const timerEl = document.getElementById("cbtTimer");
    if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    if (secondsLeft <= 0) submitCbt(examQs, answers);
  }, 1000);

  arena.innerHTML = `
    <div class="card" style="display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; z-index:10;">
      <strong>${course.code} CBT Exam (${examQs.length} Questions)</strong>
      <span id="cbtTimer" class="badge" style="font-size:1rem;">45:00</span>
      <button class="btn-primary" id="submitCbtBtn">Submit Exam</button>
    </div>
    ${examQs.map((item, idx) => `
      <div class="card">
        <h4>${idx + 1}. ${item.q}</h4>
        ${item.options.map((opt, oIdx) => `
          <button class="option-btn" id="cbt-${idx}-${oIdx}" onclick="selectCbtOpt(${idx}, ${oIdx})">${opt}</button>
        `).join("")}
      </div>
    `).join("")}
  `;

  window.selectCbtOpt = (qIdx, oIdx) => {
    answers[qIdx] = oIdx;
    examQs[qIdx].options.forEach((_, i) => {
      document.getElementById(`cbt-${qIdx}-${i}`).classList.toggle("selected", i === oIdx);
    });
  };

  document.getElementById("submitCbtBtn").onclick = () => submitCbt(examQs, answers);
}

function submitCbt(examQs, answers) {
  clearInterval(cbtTimerInterval);
  let score = 0;
  examQs.forEach((q, idx) => {
    if (answers[idx] === q.answer) score++;
    else saveMissedQuestion(q);
  });

  const pct = Math.round((score / examQs.length) * 100);
  document.getElementById("cbtArena").innerHTML = `
    <div class="card center">
      <h2>CBT Result: ${score} / ${examQs.length} (${pct}%)</h2>
      <p class="muted" style="margin:0.5rem 0 1rem;">Any missed questions have been saved to your "Missed" tab for revision.</p>
      <button class="btn-primary" onclick="location.reload()">Done</button>
    </div>
  `;
}

// VIEW 4: MISSED QUESTIONS TRACKER
function saveMissedQuestion(qObj) {
  if (!missedQuestions.some(m => m.q === qObj.q)) {
    missedQuestions.push(qObj);
    localStorage.setItem("kwasu_missed", JSON.stringify(missedQuestions));
    updateMissedBadge();
  }
}

function updateMissedBadge() {
  document.getElementById("missedCount").textContent = missedQuestions.length;
}

function renderMissedQuestions() {
  const box = document.getElementById("missedList");
  if (!missedQuestions.length) {
    box.innerHTML = `<div class="card muted">No missed questions saved yet. Keep practicing!</div>`;
    return;
  }
  box.innerHTML = `
    <div style="margin-bottom:1rem; text-align:right;">
      <button class="btn-outline" onclick="clearMissed()">Clear All</button>
    </div>
    ${missedQuestions.map((item, idx) => `
      <div class="card">
        <h4>${idx + 1}. ${item.q}</h4>
        <p style="color:var(--success); margin-top:0.4rem;"><strong>Correct Answer:</strong> ${item.options[item.answer]}</p>
        <p class="muted">💡 ${item.explanation}</p>
      </div>
    `).join("")}
  `;
}

function clearMissed() {
  missedQuestions = [];
  localStorage.setItem("kwasu_missed", "[]");
  updateMissedBadge();
  renderMissedQuestions();
}