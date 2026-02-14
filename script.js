/* ============================================
   VALENTINE'S WEBSITE — INTERACTIVE MAGIC ✨
   Config-driven: All content from config.js
   ============================================ */

// ===== STATE =====
let currentPage = 1;
const totalPages = 6;
let noClickCount = 0;
let isTransitioning = false;
let currentLang = 'primary'; // 'primary' or 'secondary'

// ===== HELPERS =====
function t(obj) {
    // Translate helper: returns the current language version of a bilingual object
    if (!obj) return '';
    return obj[currentLang] || obj.primary || '';
}

function setHTML(id, content) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = content;
}

function setText(id, content) {
    const el = document.getElementById(id);
    if (el) el.textContent = content;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG === 'undefined') {
        console.error('❌ config.js not loaded! Make sure config.js is in the same folder.');
        return;
    }

    initLanguageToggle();
    renderAllContent();
    initBackground();
    initStars();
    initAnimateOnScroll();
    initDaysCounter();
    triggerHeroAnimations();
    initCursorTrail();
    initMusicToggle();
});

// =============================================
// CONTENT RENDERING (from CONFIG)
// =============================================
function renderAllContent() {
    renderLanguageButtons();
    renderHero();
    renderTimeline();
    renderReasons();
    renderQuestion();
    renderCelebration();
    renderLoveLetter();
    renderNavButtons();
}

function renderLanguageButtons() {
    setText('langBtnPrimary', CONFIG.primaryLangLabel);
    setText('langBtnSecondary', CONFIG.secondaryLangLabel);
}

// --- Page 1: Hero ---
function renderHero() {
    const h = CONFIG.hero;
    setText('heroGreeting', t(h.greeting));
    setText('heroPetName', t(h.petName));
    setText('heroSubtitle', t(h.subtitle));
    setHTML('heroDescription', t(h.description));

    // Distance badge — auto-generate from locations
    const badgeText = `${CONFIG.yourLocation}, ${CONFIG.yourCountry} ${CONFIG.yourCountryFlag} to ${CONFIG.partnerCountry} ${CONFIG.partnerCountryFlag}`;
    const badgeTextSecondary = `Dari ${CONFIG.yourLocation}, ${CONFIG.yourCountry} ${CONFIG.yourCountryFlag} ke ${CONFIG.partnerCountry} ${CONFIG.partnerCountryFlag}`;
    if (currentLang === 'primary') {
        setHTML('distanceBadgeText', h.distanceBadge.primary || `From ${badgeText}`);
    } else {
        setHTML('distanceBadgeText', h.distanceBadge.secondary || badgeTextSecondary);
    }
    if (!h.distanceBadge.primary) {
        setHTML('distanceBadgeText', currentLang === 'primary' ? `From ${badgeText}` : badgeTextSecondary);
    }

    setText('distanceQuote', t(h.distanceQuote));
    setText('heroCtaButton', t(h.ctaButton));
}

// --- Page 2: Timeline ---
function renderTimeline() {
    const tl = CONFIG.timeline;
    setText('timelineSectionTag', t(tl.sectionTag));
    setHTML('timelineSectionTitle', t(tl.sectionTitle) + ' <span class="title-emoji">💫</span>');
    setText('timelineSectionSubtitle', t(tl.sectionSubtitle));

    const container = document.getElementById('memoryTimeline');
    if (!container) return;

    // Keep the timeline line, remove old cards
    const line = container.querySelector('.timeline-line');
    container.innerHTML = '';
    if (line) container.appendChild(line);

    tl.events.forEach((event, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card reveal-card';
        card.setAttribute('data-memory', i + 1);
        card.innerHTML = `
            <div class="card-glow"></div>
            <div class="memory-icon"><i class="${event.icon}"></i></div>
            <div class="memory-content">
                <span class="memory-date">${t(event.date)}</span>
                <h3>${t(event.title)}</h3>
                <p>${t(event.text)}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Page 3: Reasons ---
function renderReasons() {
    const r = CONFIG.reasons;
    setText('reasonsSectionTag', t(r.sectionTag));
    setHTML('reasonsSectionTitle', t(r.sectionTitle) + ' <span class="title-emoji">🌹</span>');
    setText('reasonsSectionSubtitle', t(r.sectionSubtitle));
    setText('counterLabel', t(r.counterLabel));
    setText('counterSub', t(r.counterSub));

    const grid = document.getElementById('reasonsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    r.list.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card floating';
        card.style.setProperty('--float-delay', `${i * 0.5}s`);
        card.innerHTML = `
            <div class="reason-number">${String(i + 1).padStart(2, '0')}</div>
            <div class="reason-icon">${reason.emoji}</div>
            <h4>${t(reason.title)}</h4>
            <p>${t(reason.text)}</p>
        `;
        grid.appendChild(card);
    });
}

// --- Page 4: The Big Question ---
function renderQuestion() {
    const q = CONFIG.question;

    // Pretext lines
    const pretextEl = document.getElementById('questionPretext');
    if (pretextEl) {
        pretextEl.innerHTML = q.pretext.map((line, i) =>
            `<span class="reveal-text" data-delay="${i * 300}">${t(line)}</span>`
        ).join('\n');
    }

    // Big question words
    const questionEl = document.getElementById('bigQuestion');
    if (questionEl) {
        const words = t(q.questionWords);
        const hlIndex = q.highlightIndex[currentLang] || q.highlightIndex.primary;
        questionEl.innerHTML = words.map((word, i) =>
            `<span class="word-reveal${i === hlIndex ? ' highlight' : ''}">${word}</span>`
        ).join('\n');
    }

    // Location line
    const loc = `${CONFIG.yourLocation} 🤍 ${CONFIG.partnerCountry}`;
    setText('questionLocation', q.locationLine || loc);
    setText('questionConnectedBy', t(q.connectedBy));
    setText('questionPromise', t(q.promise));

    // Buttons
    setText('yesButtonMain', t(q.yesButton));
    setText('yesButtonSub', t(q.yesSub));
    setText('noButtonText', t(q.noButton));
}

// --- Page 5: Celebration ---
function renderCelebration() {
    const c = CONFIG.celebration;
    setText('celebrationTitle', t(c.title));
    setText('celebrationSubtitle', t(c.subtitle));

    // Auto-generate message from locations if not set
    let msg = t(c.message);
    if (!msg) {
        if (currentLang === 'primary') {
            msg = `You just made someone from ${CONFIG.yourLocation} the happiest person alive!<br>My heart is doing cartwheels right now! 🌊`;
        } else {
            msg = `Kamu baru saja membuat seseorang dari ${CONFIG.yourLocation} menjadi orang paling bahagia di dunia!<br>Hatiku sedang menari sekarang! 🌊`;
        }
    }
    setHTML('celebrationMessage', msg);

    setHTML('futureDreamsTitle', t(c.futureTitle) + ' <span>🌟</span>');

    // Dream cards
    const grid = document.getElementById('dreamsGrid');
    if (grid) {
        grid.innerHTML = '';
        c.dreams.forEach(dream => {
            const card = document.createElement('div');
            card.className = 'dream-card';
            card.innerHTML = `
                <div class="dream-icon">${dream.emoji}</div>
                <h4>${t(dream.title)}</h4>
                <p>${t(dream.text)}</p>
            `;
            grid.appendChild(card);
        });
    }

    setText('letterButton', t(c.letterButton));
    setText('replayButton', t(c.replayButton));
}

// --- Page 6: Love Letter ---
function renderLoveLetter() {
    const ll = CONFIG.loveLetter;
    setText('letterSectionTag', t(ll.sectionTag));
    setHTML('letterSectionTitle', t(ll.sectionTitle) + ' <span class="title-emoji">💌</span>');

    const letterEl = document.getElementById('letterContent');
    if (letterEl) {
        const paragraphs = t(ll.letterParagraphs);
        let html = '';

        paragraphs.forEach((para, i) => {
            if (i === 0) {
                html += `<p class="greeting">${para}</p>`;
            } else {
                html += `<p>${para}</p>`;
            }
        });

        // Signature
        const signName = t(ll.signatureName) || `❤️ Your Valentine from ${CONFIG.yourLocation} ❤️`;
        html += `
            <div class="letter-signature">
                <p>${t(ll.signoff)}</p>
                <p class="signature-name">${signName}</p>
                <p class="signature-date">${t(ll.signatureDate)}</p>
            </div>
        `;

        letterEl.innerHTML = html;
    }

    setText('finalMessage', t(ll.finalMessage));
}

// --- Navigation button labels ---
function renderNavButtons() {
    const backText = currentLang === 'primary' ? 'Back' : 'Kembali';
    setText('timelineBackBtn', backText);
    setText('reasonsBackBtn', backText);
    setText('timelineNextBtn', t(CONFIG.timeline.nextButton));
    setText('reasonsNextBtn', t(CONFIG.reasons.nextButton));
    setText('letterBackBtn', t(CONFIG.loveLetter.backButton));
    setText('letterRestartBtn', t(CONFIG.loveLetter.restartButton));
}

// =============================================
// LANGUAGE TOGGLE
// =============================================
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            currentLang = lang;

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Re-render all content in the new language
            renderAllContent();

            // Re-trigger word reveals on question page if visible
            if (currentPage === 4) {
                const words = document.querySelectorAll('#page4 .word-reveal');
                words.forEach(w => {
                    w.classList.remove('visible');
                    setTimeout(() => w.classList.add('visible'), 200);
                });
            }
        });
    });
}

// ===== MUSIC TOGGLE =====
function initMusicToggle() {
    const btn = document.getElementById('musicToggle');
    if (btn) {
        btn.addEventListener('click', () => {
            if (typeof toggleMusic === 'function') {
                toggleMusic();
            }
        });
    }
}

// ===== BACKGROUND EFFECTS =====
function initBackground() {
    createFloatingHearts();
    createParticles();
}

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;

    const hearts = ['💖', '💕', '💗', '💝', '💓', '💘', '🌸', '✨', '💫', '🤍'];
    const count = 25;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${8 + Math.random() * 12}s`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
        heart.style.filter = `blur(${Math.random() * 2}px)`;
        container.appendChild(heart);
    }
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${2 + Math.random() * 4}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fbbf24', '#ffffff'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;

        container.appendChild(particle);
    }
}

function initStars() {
    const container = document.getElementById('stars');
    if (!container) return;

    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${1.5 + Math.random() * 3}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(star);
    }
}

// ===== CURSOR TRAIL =====
function initCursorTrail() {
    if (window.matchMedia('(hover: hover)').matches) {
        const trail = document.getElementById('cursorTrail');
        if (!trail) return;

        document.addEventListener('mousemove', (e) => {
            const dot = document.createElement('div');
            dot.className = 'trail-dot';
            dot.style.left = `${e.pageX - 4}px`;
            dot.style.top = `${e.pageY - 4}px`;
            trail.appendChild(dot);

            setTimeout(() => {
                dot.style.opacity = '0';
                dot.style.transform = 'scale(0.2)';
            }, 50);

            setTimeout(() => dot.remove(), 500);
        });
    }
}

// ===== HERO ANIMATIONS =====
function triggerHeroAnimations() {
    const page1 = document.getElementById('page1');
    if (!page1) return;

    const elements = page1.querySelectorAll('.animate-in, .title-line');

    elements.forEach(el => {
        const delay = parseInt(el.dataset.delay) || 0;
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 + delay);
    });
}

// ===== DAYS COUNTER =====
function initDaysCounter() {
    const counter = document.getElementById('daysCounter');
    if (!counter) return;

    const startDate = new Date(CONFIG.relationshipStartDate);
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    counter.setAttribute('data-target', diffDays);
}

function animateCounter(targetEl) {
    const target = parseInt(targetEl.getAttribute('data-target')) || 365;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        targetEl.textContent = Math.floor(current);
    }, duration / steps);
}

// ===== PAGE NAVIGATION =====
function nextPage() {
    if (isTransitioning || currentPage >= totalPages) return;
    goToPage(currentPage + 1);
}

function prevPage() {
    if (isTransitioning || currentPage <= 1) return;
    goToPage(currentPage - 1);
}

function goToPage(page) {
    if (page === currentPage || isTransitioning) return;
    isTransitioning = true;

    const currentSection = document.getElementById(`page${currentPage}`);
    const nextSection = document.getElementById(`page${page}`);

    if (!currentSection || !nextSection) {
        isTransitioning = false;
        return;
    }

    currentSection.classList.add('leaving');

    setTimeout(() => {
        currentSection.classList.remove('active', 'leaving');
        currentSection.style.display = 'none';

        nextSection.style.display = 'block';
        nextSection.classList.add('active', 'entering');

        currentPage = page;
        updateProgressBar();

        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            nextSection.classList.remove('entering');
            triggerPageAnimations(page);
            isTransitioning = false;
        }, 800);

    }, 500);
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const progress = ((currentPage - 1) / (totalPages - 1)) * 100;
        progressFill.style.width = `${progress}%`;
    }

    document.querySelectorAll('.progress-steps .step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 === currentPage) {
            step.classList.add('active');
        } else if (index + 1 < currentPage) {
            step.classList.add('completed');
        }
    });
}

// ===== PAGE-SPECIFIC ANIMATIONS =====
function triggerPageAnimations(page) {
    switch (page) {
        case 2:
            animateMemoryCards();
            break;
        case 3:
            animateReasons();
            const counter = document.getElementById('daysCounter');
            if (counter) animateCounter(counter);
            break;
        case 4:
            animateQuestion();
            startRosePetals();
            break;
        case 5:
            triggerCelebration();
            break;
        case 6:
            animateLetter();
            break;
    }
}

function animateMemoryCards() {
    const cards = document.querySelectorAll('#page2 .memory-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 300);
    });
}

function animateReasons() {
    const cards = document.querySelectorAll('.reason-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

function startRosePetals() {
    const container = document.getElementById('rosePetals');
    if (!container) return;

    const petals = ['🌸', '🏵️', '💮', '🌺'];

    function createPetal() {
        const petal = document.createElement('span');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${5 + Math.random() * 5}s`;
        petal.style.animationDelay = `${Math.random() * 2}s`;
        petal.style.fontSize = `${1 + Math.random() * 1.5}rem`;
        container.appendChild(petal);

        setTimeout(() => petal.remove(), 12000);
    }

    for (let i = 0; i < 15; i++) {
        setTimeout(() => createPetal(), i * 300);
    }

    const petalInterval = setInterval(() => {
        if (currentPage !== 4) {
            clearInterval(petalInterval);
            return;
        }
        createPetal();
    }, 800);
}

function animateQuestion() {
    const reveals = document.querySelectorAll('#page4 .reveal-text');
    reveals.forEach((text, index) => {
        const delay = parseInt(text.dataset.delay) || 0;
        setTimeout(() => {
            text.classList.add('visible');
        }, delay + 300);
    });

    const words = document.querySelectorAll('#page4 .big-question .word-reveal');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, 1200 + index * 200);
    });
}

// ===== YES/NO BUTTON HANDLERS =====
function yesAnswer() {
    createHeartBurst();
    setTimeout(() => {
        goToPage(5);
    }, 800);
}

function handleNoClick() {
    noClickCount++;
    const button = document.getElementById('noButton');
    const persuasion = document.getElementById('lovePersuasion');

    const messages = CONFIG.question.noMessages[currentLang] || CONFIG.question.noMessages.primary;

    if (persuasion) {
        persuasion.innerHTML = `<div class="persuasion-message">${messages[Math.min(noClickCount - 1, messages.length - 1)]}</div>`;
    }

    if (button) {
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 100;
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        button.style.transition = 'transform 0.3s ease';

        const scale = Math.max(0.5, 1 - noClickCount * 0.1);
        button.style.transform += ` scale(${scale})`;

        if (noClickCount >= 5) {
            const textEl = button.querySelector('.button-text');
            if (textEl) {
                textEl.innerHTML = currentLang === 'secondary'
                    ? "Kamu tidak bisa klik aku! 😤"
                    : "You can't click me! 😤";
            }
        }
        if (noClickCount >= 8) {
            const textEl = button.querySelector('.button-text');
            if (textEl) {
                textEl.innerHTML = currentLang === 'secondary'
                    ? "Bilang YA saja! 💖"
                    : "Just say YES! 💖";
            }
        }
        if (noClickCount >= 10) {
            button.style.opacity = '0.3';
        }
    }

    const yesButton = document.querySelector('.yes-button-mega');
    if (yesButton) {
        const grow = 1 + noClickCount * 0.03;
        yesButton.style.transform = `scale(${grow})`;
    }
}

function createHeartBurst() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.textContent = ['💖', '💕', '💗', '💝', '💓', '✨', '🌟'][Math.floor(Math.random() * 7)];
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = `${1 + Math.random() * 2}rem`;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        document.body.appendChild(heart);

        setTimeout(() => {
            const angle = (Math.PI * 2 * i) / 30;
            const distance = 100 + Math.random() * 200;
            heart.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => heart.remove(), 1200);
    }
}

// ===== CELEBRATION =====
function triggerCelebration() {
    launchConfetti();
    setTimeout(() => launchConfetti(), 500);
    setTimeout(() => launchConfetti(), 1200);
    setTimeout(() => launchConfetti(), 2000);
}

function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fbbf24', '#f59e0b', '#ec4899', '#a855f7', '#ffffff', '#ff6b6b'];
    const shapes = ['circle', 'square', 'heart'];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: canvas.width * Math.random(),
            y: canvas.height * Math.random() - canvas.height,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 4 + 2,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            gravity: 0.1 + Math.random() * 0.1,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.random() * 0.1,
            opacity: 1,
        });
    }

    function drawHeart(ctx, x, y, size) {
        ctx.beginPath();
        const half = size / 2;
        ctx.moveTo(x, y + half / 4);
        ctx.quadraticCurveTo(x, y, x + half / 2, y);
        ctx.quadraticCurveTo(x + half, y, x + half, y + half / 4);
        ctx.quadraticCurveTo(x + half, y + half / 2, x, y + half);
        ctx.quadraticCurveTo(x - half / 2, y + half / 2, x - half / 2, y + half / 4);
        ctx.quadraticCurveTo(x - half / 2, y, x, y);
        ctx.fill();
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let alive = false;
        particles.forEach(p => {
            if (p.opacity <= 0) return;
            alive = true;

            p.vy += p.gravity;
            p.x += p.vx + Math.sin(p.wobble) * 0.5;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            p.wobble += p.wobbleSpeed;

            if (p.y > canvas.height + 20) {
                p.opacity -= 0.02;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;

            if (p.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.shape === 'square') {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            } else {
                drawHeart(ctx, 0, 0, p.size);
            }

            ctx.restore();
        });

        frame++;
        if (alive && frame < 300) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// ===== LOVE LETTER =====
function showLoveLetter() {
    goToPage(6);
}

function animateLetter() {
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.style.opacity = '0';
        envelope.style.transform = 'translateY(30px) scale(0.95)';
        envelope.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';

        setTimeout(() => {
            envelope.style.opacity = '1';
            envelope.style.transform = 'translateY(0) scale(1)';
        }, 300);
    }
}

// ===== RESTART =====
function restartJourney() {
    noClickCount = 0;

    const noButton = document.getElementById('noButton');
    if (noButton) {
        noButton.style.transform = '';
        noButton.style.opacity = '';
        renderQuestion(); // Reset button text from config
    }

    const yesButton = document.querySelector('.yes-button-mega');
    if (yesButton) yesButton.style.transform = '';

    const persuasion = document.getElementById('lovePersuasion');
    if (persuasion) persuasion.innerHTML = '';

    document.querySelectorAll('.memory-card').forEach(card => {
        card.classList.remove('visible');
    });

    document.querySelectorAll('.word-reveal').forEach(w => w.classList.remove('visible'));
    document.querySelectorAll('.reveal-text').forEach(t => t.classList.remove('visible'));

    goToPage(1);
    setTimeout(() => triggerHeroAnimations(), 1000);
}

// ===== ANIMATE ON SCROLL =====
function initAnimateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== PROGRESS STEP CLICK =====
document.querySelectorAll('.progress-steps .step').forEach(step => {
    step.addEventListener('click', () => {
        const page = parseInt(step.dataset.step);
        if (page && page <= currentPage) {
            goToPage(page);
        }
    });
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevPage();
    }
});

// ===== WINDOW RESIZE =====
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// ===== TOUCH / SWIPE SUPPORT =====
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextPage();
        } else {
            prevPage();
        }
    }
}, { passive: true });

// ===== PRELOAD PAGES =====
document.querySelectorAll('.page-section').forEach((section, index) => {
    if (index > 0) {
        section.style.display = 'none';
    }
});

console.log('💖 Made with love — Happy Valentine\'s Day! 💖');
console.log('📝 Customize this site by editing config.js!');