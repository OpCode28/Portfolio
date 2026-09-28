/**
 * OM PRAKASH SAMAL — PORTFOLIO INTERACTIONS & CONTROLLERS
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
});

/* ==================== NAVBAR CONTROLLER ==================== */
function initNavbar() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled-nav');
    } else {
      nav.classList.remove('scrolled-nav');
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* ==================== ACCORDION / EXPANDABLE SERVICE CARDS ==================== */
function toggleService(cardElement) {
  const details = cardElement.querySelector('.service-details');
  const isOpen = cardElement.classList.contains('open');

  // Close other open service cards for clean single-view accordion
  document.querySelectorAll('.service-card').forEach(c => {
    c.classList.remove('open');
    const d = c.querySelector('.service-details');
    if (d) d.classList.add('hidden');
  });

  if (!isOpen && details) {
    cardElement.classList.add('open');
    details.classList.remove('hidden');
  }
}

/* ==================== RESUME MODAL VIEWER ==================== */
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function printOrDownloadResume() {
  window.print();
}

/* ==================== PROJECT SIMULATION / SPECS MODAL ==================== */
const projectData = {
  souryanova: {
    title: 'SouryaNova &mdash; AI Solar Optimization',
    subtitle: 'Dual-Axis Photovoltaic Optimization &amp; Predictive Degradation Pipeline',
    content: `
      <div class="space-y-4">
        <div class="p-4 bg-cream-100 rounded-2xl border border-cream-border">
          <h4 class="font-bold text-espresso-950 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-microchip text-amberAccent"></i>
            <span>Closed-Loop Telemetry &amp; Servo Control</span>
          </h4>
          <p class="text-xs text-ink-600 leading-relaxed">
            Ingests 4 quadrant light differential resistors (LDRs) and ambient temperature sensors on the ESP32. If solar elevation shifts &gt; 5&deg;, dual-axis servomotors automatically reposition the panel.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 text-base font-bold">10 Hz</div>
            <div class="text-[10px] text-ink-400">MQTT Rate</div>
          </div>
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-amberAccent-warm text-base font-bold">98.4%</div>
            <div class="text-[10px] text-ink-400">Yield Pred. R&sup2;</div>
          </div>
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 text-base font-bold">&plusmn;2.5&deg;</div>
            <div class="text-[10px] text-ink-400">Tracking Acc.</div>
          </div>
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 text-base font-bold">&lt; 40ms</div>
            <div class="text-[10px] text-ink-400">Cloud Sync</div>
          </div>
        </div>
      </div>
    `
  },
  csi: {
    title: 'EAGLE &Delta; &mdash; WiFi CSI Contactless Sensing',
    subtitle: 'Defense-Grade Indoor Presence &amp; Motion Detection (DRDO PXE Supported)',
    content: `
      <div class="space-y-4">
        <div class="p-4 bg-cream-100 rounded-2xl border border-cream-border">
          <h4 class="font-bold text-espresso-950 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-wave-square text-amberAccent"></i>
            <span>52 OFDM Subcarrier Extraction</span>
          </h4>
          <p class="text-xs text-ink-600 leading-relaxed">
            Operates on standard 2.4GHz 802.11n Wi-Fi signals. ESP32 hooks into MAC Promiscuous mode to collect 52 subcarrier channel matrices without any optical cameras, preserving 100% privacy.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 font-bold mb-1">Signal Processing Stack:</div>
            <ul class="list-disc list-inside space-y-1 text-ink-600 text-[11px]">
              <li>Hampel Static Component Filter</li>
              <li>Butterworth Bandpass (0.2Hz &ndash; 5Hz motion band)</li>
              <li>Local SQLite Air-Gapped Database</li>
            </ul>
          </div>
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 font-bold mb-1">Verification Note:</div>
            <p class="text-[11px] text-ink-600">
              Motion &amp; presence verified in lab. Non-invasive vitals (breathing rate) are ongoing future research.
            </p>
          </div>
        </div>
      </div>
    `
  },
  maati: {
    title: 'MAATI &mdash; Smart Farming Assistant',
    subtitle: 'AI-Powered Precision Agriculture &amp; Smart Irrigation',
    content: `
      <div class="space-y-4">
        
        <!-- Main Description Card -->
        <div class="p-4 sm:p-5 bg-cream-100 rounded-2xl border border-cream-border">
          <h4 class="font-bold text-espresso-950 text-sm mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-emerald-700"></i>
            <span>AI-Powered Precision Agriculture &amp; Smart Irrigation</span>
          </h4>
          <p class="text-xs text-ink-600 leading-relaxed">
            Developed a hardware-based smart farming system that combines ESP32 sensors, ESP32-CAM, AI-powered crop disease detection and automated irrigation to support data-driven farming decisions.
          </p>
        </div>

        <!-- 2-Column Highlights & Outcome -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 text-xs">
          
          <!-- Technical Highlights -->
          <div class="md:col-span-7 p-4 bg-cream-50 rounded-2xl border border-cream-border flex flex-col justify-between">
            <div class="text-espresso-950 font-bold mb-2 flex items-center gap-2 font-mono uppercase text-[11px] tracking-wide">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Technical Highlights</span>
            </div>
            <ul class="space-y-1.5 text-ink-700 text-[11px] font-mono leading-relaxed">
              <li class="flex items-start gap-1.5">
                <span class="text-emerald-700 font-bold">&bull;</span>
                <span><strong>25+ crop disease classes</strong> detected with 97.3% accuracy</span>
              </li>
              <li class="flex items-start gap-1.5">
                <span class="text-emerald-700 font-bold">&bull;</span>
                <span><strong>Real-time sensing:</strong> soil moisture, temp, humidity, rain &amp; light</span>
              </li>
              <li class="flex items-start gap-1.5">
                <span class="text-emerald-700 font-bold">&bull;</span>
                <span><strong>ESP32-CAM</strong> based crop/leaf image analysis</span>
              </li>
              <li class="flex items-start gap-1.5">
                <span class="text-emerald-700 font-bold">&bull;</span>
                <span><strong>Automated irrigation:</strong> relay-controlled water pump</span>
              </li>
              <li class="flex items-start gap-1.5">
                <span class="text-emerald-700 font-bold">&bull;</span>
                <span><strong>Hardware-to-software</strong> closed-loop irrigation workflow</span>
              </li>
              <li class="flex items-start gap-1.5">
                <span class="text-emerald-700 font-bold">&bull;</span>
                <span><strong>Cloud &amp; Edge:</strong> Supabase integration with offline-capable architecture</span>
              </li>
            </ul>
          </div>

          <!-- Outcome Card -->
          <div class="md:col-span-5 p-4 bg-cream-50 rounded-2xl border border-cream-border flex flex-col justify-between">
            <div>
              <div class="text-espresso-950 font-bold mb-2 flex items-center gap-2 font-mono uppercase text-[11px] tracking-wide">
                <span class="w-2 h-2 rounded-full bg-amberAccent"></span>
                <span>Outcome</span>
              </div>
              <p class="text-[11px] text-ink-600 leading-relaxed">
                Built a complete working prototype that connects field sensing, AI-based crop analysis and physical irrigation control into a single smart farming system.
              </p>
            </div>
            
            <div class="mt-3 pt-3 border-t border-cream-border/70 flex items-center justify-between text-[10px] font-mono text-ink-500">
              <span>Status: <strong class="text-emerald-700">Prototype Tested</strong></span>
              <span>Sync: <strong class="text-espresso-950">Edge + Cloud</strong></span>
            </div>
          </div>

        </div>

        <!-- Compact Visual Flow Diagram -->
        <div class="p-3 bg-espresso-900 text-cream-50 rounded-xl font-mono text-[10px] sm:text-[11px] flex flex-wrap items-center justify-between gap-1.5 text-center shadow-sm">
          <span class="text-amberAccent font-bold">SENSORS</span>
          <span class="text-cream-200/50">&rarr;</span>
          <span class="text-cream-100">ESP32</span>
          <span class="text-cream-200/50">&rarr;</span>
          <span class="text-purple-300 font-bold">AI ANALYSIS</span>
          <span class="text-cream-200/50">&rarr;</span>
          <span class="text-cream-100">DECISION</span>
          <span class="text-cream-200/50">&rarr;</span>
          <span class="text-blue-300 font-bold">RELAY</span>
          <span class="text-cream-200/50">&rarr;</span>
          <span class="text-emerald-400 font-bold">PUMP</span>
        </div>

      </div>
    `
  },
  meditech: {
    title: 'MediTech &mdash; Hospital Resource Platform',
    subtitle: 'Published in "The Idea Book" &bull; ISTE Idea Competition (JIS University)',
    content: `
      <div class="space-y-4">
        <div class="p-4 bg-cream-100 rounded-2xl border border-cream-border">
          <h4 class="font-bold text-espresso-950 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-hospital text-amberAccent"></i>
            <span>Centralized Hospital Resource Synchronization</span>
          </h4>
          <p class="text-xs text-ink-600 leading-relaxed">
            Designed a centralized multi-hospital management platform facilitating real-time tracking of ICU beds, blood bank inventories, and specialist physician availability across decentralized health centers.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 font-bold mb-1">Relational SQL Schema:</div>
            <ul class="list-disc list-inside space-y-1 text-ink-600 text-[11px]">
              <li>Optimized SQL transactions for bed locking</li>
              <li>Real-time blood reserve matching queries</li>
              <li>Department-level on-call specialist rosters</li>
            </ul>
          </div>
          <div class="p-3 bg-cream-50 rounded-xl border border-cream-border">
            <div class="text-espresso-950 font-bold mb-1">Publication &amp; Honor:</div>
            <p class="text-[11px] text-ink-600">
              Ranked among the Top 10 teams and published in <em>The Idea Book</em> under the ISTE Idea Competition organized by JIS University.
            </p>
          </div>
        </div>
      </div>
    `
  }
};

function openSimulationModal(projectId) {
  const modal = document.getElementById('sim-modal');
  const title = document.getElementById('sim-title');
  const subtitle = document.getElementById('sim-subtitle');
  const body = document.getElementById('sim-body');

  const data = projectData[projectId];
  if (!data || !modal) return;

  title.innerHTML = data.title;
  subtitle.innerHTML = data.subtitle;
  body.innerHTML = data.content;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSimulationModal() {
  const modal = document.getElementById('sim-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Close modals on clicking overlay backdrop
window.addEventListener('click', (e) => {
  const resumeModal = document.getElementById('resume-modal');
  const simModal = document.getElementById('sim-modal');
  if (e.target === resumeModal) closeResumeModal();
  if (e.target === simModal) closeSimulationModal();
});

// Close modals on ESC key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResumeModal();
    closeSimulationModal();
  }
});

/* ==================== TOAST NOTIFICATIONS ==================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-msg flex items-center gap-2 border shadow-lg ${
    type === 'success'
      ? 'bg-espresso-900 text-cream-50 border-amberAccent/50'
      : 'bg-red-950 text-red-200 border-red-500/50'
  }`;

  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-amberAccent' : 'fa-circle-exclamation text-red-400'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==================== CONTACT FORM HANDLER ==================== */
function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const feedback = document.getElementById('form-feedback');

  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-check text-amberAccent"></i> Message Sent';

    feedback.className = 'p-4 rounded-2xl text-xs font-mono text-center bg-espresso-900 text-cream-50 border border-espresso-border block mt-3';
    feedback.innerHTML = `
      <div><strong>Thank you, ${name}!</strong> Your message was formatted.</div>
      <div class="mt-1 text-[11px] text-cream-200/80">You can also reach out directly via email at <a href="mailto:omprakashsamal28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" class="text-amberAccent underline font-bold">omprakashsamal28@gmail.com</a>.</div>
    `;

    showToast('Message formatted successfully!', 'success');
    form.reset();
  }, 800);
}
