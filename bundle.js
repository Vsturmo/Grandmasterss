
const root = document.getElementById("root");

const data = [
  {
    adc: "Jhin",
    enemy: "Lux + Caitlyn",
    threat: "🔴 Hoch",
    tip: "Bait Lux Q, wait for E zone to expire",
    window: "Post-Q",
    item: "Umbral Glaive"
  },
  {
    adc: "Jhin",
    enemy: "Karma + Ezreal",
    threat: "🟠 Mittel",
    tip: "Wait for speed burst, punish when down",
    window: "After shield/Q",
    item: "Serpent's Fang"
  }
];

function render() {
  root.innerHTML = `
    <div style='padding: 2rem; max-width: 720px; margin: auto;'>
      <h1 style='font-size: 2rem;'>🌊 Road to Grandmaster</h1>
      <h2 style='margin-bottom: 1rem;'>Jhin + Pyke Matchups</h2>
      ${data.map(matchup => `
        <div class='card'>
          <h3>${matchup.adc} + Pyke vs ${matchup.enemy}</h3>
          <p><b>Threat:</b> ${matchup.threat}</p>
          <p><b>Smart Tip:</b> ${matchup.tip}</p>
          <p><b>Hook Window:</b> ${matchup.window}</p>
          <p><b>Item:</b> ${matchup.item}</p>
        </div>
      `).join('')}
    </div>
  `;
}

render();
