const pages = [
  { title: "Phase 1 – Foundation", url: "phase1.md" },
  { title: "Phase 2 – Intermediate", url: "phase2.md" },
  { title: "Phase 3 – Advanced", url: "phase3.md" },
  { title: "Subsea Power System", url: "subsea-power-system.md" },
  { title: "PFE Feeding Modes", url: "earth-systems.md" },
  { title: "PFE Fault & SLM Diagnostics", url: "pfe-power-grounding.md" },
  { title: "Transponder & DWDM", url: "transmission.md" },
  { title: "Optical Performance", url: "optical-performance.md" },
  { title: "Nonlinear Effects", url: "nonlinear-effects.md" },
  { title: "Vendor SLTE Guide", url: "vendor-slte-guide.md" },
  { title: "Wet Plant Engineering", url: "wet-plant-engineering.md" },
  { title: "Fault Casebook", url: "fault-casebook.md" },
  { title: "Marine Operations", url: "marine-operations.md" },
  { title: "Traffic Engineering", url: "traffic-engineering.md" },
  { title: "Glossary", url: "glossary.md" }
];

function performSearch() {
  const keyword = document.getElementById("searchBox").value.toLowerCase();
  const results = pages.filter(p => p.title.toLowerCase().includes(keyword));

  const resultList = document.getElementById("results");
  resultList.innerHTML = "";

  results.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${r.url}">${r.title}</a>`;
    resultList.appendChild(li);
  });
}

// ปุ่ม Search
document.getElementById("searchButton").addEventListener("click", performSearch);

// รองรับปุ่ม Enter
document.getElementById("searchBox").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    performSearch();
  }
});
