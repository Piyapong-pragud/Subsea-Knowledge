# 🔵 Optical Performance & Monitoring  
OSNR / Q-Factor / BER / Constellation / DSP สำหรับระบบใต้น้ำ

---

# 1) OSNR (Optical Signal to Noise Ratio)

OSNR คือค่าหลักในการบอกคุณภาพสัญญาณใต้น้ำ

### Typical Subsea Values
| ระบบ | OSNR Target |
|------|-------------|
| 10G NRZ | 18–23 dB |
| 100G QPSK | 14–17 dB |
| 200G 8QAM | 17–18 dB |

---

# 2) Q-Factor

Q = คุณภาพสัญญาณรวมหลัง DSP  
ค่าที่ต่ำแปลว่าใกล้หลุด FEC

### ช่วงใช้งาน
- Q > 6 dB → ปลอดภัย  
- Q 4–6 dB → เสี่ยง  
- Q < 4 dB → ใกล้ down  

---

# 3) BER (Bit Error Rate)

### ประเภท
- Pre-FEC BER → ค่าเผื่อก่อนแก้ error  
- Post-FEC BER → ต้องเป็น Zero สำหรับ subsea

### Target
- Pre-FEC BER 1e-3 ถึง 1e-2 (สำหรับ QPSK)  
- 10G NRZ target: < 1e-4  

---

# 4) Constellation Diagram

ใช้ดูความนิ่งของจุดโมดูเลชัน

| Modulation | จุดใน Constellation |
|------------|---------------------|
| QPSK | 4 จุด |
| 8QAM | 8 จุด |
| 16QAM | 16 จุด |

จุดสั่น → OSNR ต่ำ, pump aging, nonlinear

---

# 5) DSP (Digital Signal Processing)

DSP มีหน้าที่:
- CD Compensation  
- PMD Compensation  
- Carrier Recovery  
- Phase Estimation  
- Equalization  
- Nonlinear Mitigation  

---

# 6) Optical Tilt & Spectrum Flatness

### ตัววัด:
- Per-channel power  
- Variation < 1 dB (ดีมาก)  
- > 2 dB = ต้อง equalize  

---

# 7) Monitoring Dashboard (ค่าที่ควรดู)

- Launch Power  
- Per-channel Power  
- Span Loss Drift  
- Pump Current  
- OSNR  
- Q-Factor  
- BER  
- Constellation stability  

---

# สรุป
Optical Performance คือหัวใจของการตรวจสุขภาพระบบใต้น้ำ  
ต้องดู OSNR/Q/BER + Pump + EDFA chain เพื่อประเมินว่า link ยังดีหรือเสื่อมลง

---
