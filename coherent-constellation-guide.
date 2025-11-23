# Coherent Constellation Guide
The constellation diagram is one of the most powerful tools for analyzing  
coherent optical transmission. It visually represents symbols in the complex  
plane and reveals impairments such as noise, dispersion, phase noise, and  
nonlinear effects.

This guide explains how to read constellations and diagnose common transmission issues.

---

## 📘 1. What Is a Constellation Diagram?
A constellation diagram plots received symbols on an **I–Q plane**:

- **I** = In-phase component  
- **Q** = Quadrature component  

Each point represents a received symbol.  
The clarity, spread, shape, and clustering of the points indicate system health.

I-axis (Real) │ │     •    • │ │     •    • └────────────── Q-axis (Imaginary)

---

## 📘 2. Ideal Constellations (No Impairments)

### BPSK
Two points → maximum reach

•         •

### QPSK (commonly used in submarine systems)
Four symmetric points

•    • •    •

### 8QAM

•  •  • • •  •  •

### 16QAM

•  •  •  • •  •  •  • •  •  •  • •  •  •  •

Higher-order modulations add more points → higher data rate, lower reach.

---

## 📘 3. What a Good Constellation Looks Like
A healthy coherent channel has:

- Tight clusters  
- Clear decision boundaries  
- No rotation  
- Symmetrical points  
- Minimal noise spreading  

Characteristics:

QPSK example:

o      o

o      o

---

## 📘 4. Impairment Signatures (How to Read Problems)

### 🔸 A) **OSNR Degradation (ASE Noise)**
Symptoms:
- Points become fuzzy  
- Circles spread outward  
- Boundaries less defined  

Cause:
- EDFA ASE noise accumulation  
- Long subsea repeater chains  
- Low launch power

°   °
·°° °°·
°   °

Interpretation:
- Increase OSNR margin  
- Check span loss / pump performance  
- Consider lowering modulation order

---

### 🔸 B) **Phase Noise (LO laser or nonlinear impact)**
Symptoms:
- Constellation “rotates” slowly  
- Points form circular smears

°

°   ° °

Cause:
- LO linewidth too wide  
- Nonlinear phase rotation  
- Temperature drift in subsea spans

---

### 🔸 C) **Chromatic Dispersion (CD)**
Symptoms:
- Points elongate along one axis  
- Often oval-shaped clusters

•••     ••• •••   •••

Cause:
- Residual CD not compensated by DSP  
- Filtering effect in repeaters / ROADMs

---

### 🔸 D) **PMD (Polarization Mode Dispersion)**
Symptoms:
- Two “ghost clusters”  
- Split symbols  
- Unequal spreading on X/Y pol

•  •    •  • ••      ••

Cause:
- PMD accumulated over long fiber  
- Rapid polarization changes

---

### 🔸 E) **Nonlinear Effects (SPM / XPM / FWM / Raman)**
Symptoms:
- Radial spreading  
- Asymmetrical deformation  
- “Smeared” or twisted clusters

o

o · o o

Common subsea causes:
- High launch power  
- Tight channel spacing  
- Strong WDM loading  
- Raman interaction with adjacent carriers

---

### 🔸 F) **IQ Imbalance / Modulator Issues**
Symptoms:
- Constellation becomes skewed  
- Points shift off center  

Cause:
- Automatic calibration failure  
- IQ modulator bias drift  
- Laser degradation

---

## 📘 5. Polarization Constellations (DP-QPSK / DP-16QAM)
Coherent systems use **dual polarization**, so each channel has **two constellations**:

- X-pol  
- Y-pol  

Both should appear symmetric.  
A mismatch indicates PMD, polarization rotation, or XPol noise.

---

## 📘 6. Practical Examples from Real Subsea Systems

### Example 1: Clean QPSK (APG long-haul)
- Tight clustering  
- Light noise  
- Stable phase lock  

Expected OSNR: 14–17 dB

---

### Example 2: Degraded QPSK due to ASE accumulation
- Slight halo around clusters  
- Constallation still distinguishable  
- Light spreading  

Likely causes:
- High span count  
- Pump aging  
- High cable loss

---

### Example 3: Severe Nonlinear Distortion (High power case)
- Radial spreading  
- Asymmetric  
- Constellation looks “exploded”

Occurs when:
- Launch power too high  
- WDM loading too dense  
- Long repeater chain

---

### Example 4: Phase noise instability
- Rotation  
- Circular clusters  

Often caused by:
- LO laser drift  
- Poor thermal stability  
- Severe nonlinear interactions

---

## 📘 7. Quick Diagnosis Table

| Constellation Pattern | Likely Cause | Layer |
|----------------------|--------------|-------|
| Fuzzy, expanded | Low OSNR | Optical |
| Rotating center | Phase noise | DSP/Optical |
| Elliptical | CD residual | Optical |
| Split clusters | PMD | Fiber |
| Radial explosion | Nonlinearities | Power/Optical |
| Shifted center | IQ imbalance | Transponder |

---

## 📘 8. Why Constellation Monitoring Matters in Submarine Systems
Submarine coherent systems rely heavily on constellation monitoring because:

- Repeaters introduce ASE noise  
- Long spans increase CD and PMD  
- Nonlinear effects accumulate over thousands of km  
- SLM/PFE events can change optical performance  
- Helps prevent uncorrectable FEC events  
- Critical for capacity upgrades (100G → 200G)

---

## 📘 9. Summary
Constellations provide a real-time “visual fingerprint” of channel health.  
By analyzing shape, rotation, spreading, and noise, engineers can quickly identify:

- OSNR issues  
- Dispersion problems  
- Nonlinearities  
- Phase noise  
- Hardware faults  
- Polarization instability  

In submarine networks, constellation monitoring is essential for maintaining  
long-haul stability, predicting failures, and enabling future upgrades.

---

File: coherent-constellation-guide.md
Category: Optical Transmission Systems
