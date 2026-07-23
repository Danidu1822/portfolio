// ===================================================================
// Chatbot widget — recreated from scratch.
// The original Chatbot.tsx component wasn't provided, so this is a
// simple client-side, rule-based FAQ bot that answers from data.js.
// No external API calls; swap in a real backend/LLM call if desired.
// ===================================================================

(function () {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const closeBtn = document.getElementById("chatbot-close");
  const panel = document.getElementById("chatbot-panel");
  const messages = document.getElementById("chatbot-messages");
  const suggestions = document.getElementById("chatbot-suggestions");
  const form = document.getElementById("chatbot-input-form");
  const input = document.getElementById("chatbot-input");

  const SUGGESTIONS = ["Skills?", "Projects?", "Contact info?", "Education?"];

  const RULES = [
    {
      test: /skill|tech|stack|language/i,
      answer: () => {
        const top = TECH_SKILLS.slice(0, 8).map((s) => s.name).join(", ");
        return `Danidu's core technical skills include ${top}, and more. He's also strong on soft skills like ${SOFT_SKILLS.map((s) => s.name).join(", ")}.`;
      },
    },
    {
      test: /project/i,
      answer: () => PROJECTS.map((p) => `• ${p.title} (${p.status}) — ${p.desc}`).join("\n"),
    },
    {
      test: /contact|email|phone|reach|hire/i,
      answer: () => `You can reach Danidu at ${CONTACT.email} or ${CONTACT.phone}. He's based in ${CONTACT.location}. GitHub: ${CONTACT.github} · LinkedIn: ${CONTACT.linkedin}`,
    },
    {
      test: /educat|study|degree|university|school/i,
      answer: () => EDUCATION.map((e) => `• ${e.year}: ${e.title} — ${e.place}`).join("\n"),
    },
    {
      test: /experience|work|job/i,
      answer: () => EXPERIENCE.map((x) => `• ${x.role} at ${x.org} (${x.period})`).join("\n"),
    },
    {
      test: /certificat/i,
      answer: () => COURSEWORK.map((c) => `• ${c.name} — ${c.issuer}`).join("\n"),
    },
    {
      test: /hi|hello|hey/i,
      answer: () => "Hi! I'm a simple FAQ bot for Danidu's portfolio. Ask me about his skills, projects, education, or how to get in touch.",
    },
  ];

  function addMessage(text, from) {
    const div = document.createElement("div");
    div.className = `chatbot-msg ${from}`;
    div.style.whiteSpace = "pre-line";
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function respond(query) {
    const rule = RULES.find((r) => r.test.test(query));
    const answer = rule ? rule.answer() : "I can answer questions about Danidu's skills, projects, education, experience, coursework, or contact details — try asking about one of those!";
    setTimeout(() => addMessage(answer, "bot"), 350);
  }

  function renderSuggestions() {
    suggestions.innerHTML = "";
    SUGGESTIONS.forEach((s) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = s;
      btn.addEventListener("click", () => {
        addMessage(s, "user");
        respond(s);
      });
      suggestions.appendChild(btn);
    });
  }

  let initialized = false;
  function openPanel() {
    panel.classList.add("open");
    if (!initialized) {
      addMessage("Hi! Ask me anything about Danidu's skills, projects, education, or contact info.", "bot");
      renderSuggestions();
      initialized = true;
    }
  }

  toggleBtn.addEventListener("click", () => {
    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
    } else {
      openPanel();
    }
  });
  closeBtn.addEventListener("click", () => panel.classList.remove("open"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    addMessage(val, "user");
    respond(val);
    input.value = "";
  });
})();
