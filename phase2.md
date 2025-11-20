# Phase 2 – Intermediate
🟧 Phase 2 – Intermediate (ระดับปฏิบัติการ/วิศวกรภาคสนาม)
เข้าใจเรื่องลึกขึ้น ใช้งานจริงใน CLS ได้เลย

A) PFE เชิงลึก (Advance Power Feeding)
1) การคำนวณแรงดันและกระแส
สูตรหลักของสายใต้น้ำ:
V = I × R_total + margin
I = กระแสคงที่ (0.8–1.5 A)
 R_total = ความต้านทานสาย (Ω/km × ระยะทาง)
 Margin = เพื่อชดเชย aging / temperature
ตัวอย่าง APG:
Current 1.0 A


Resistance ~1.5 Ω/km


ระยะ 300 km → R ≈ 450 Ω


Voltage ≈ 450 V + margin 100–200 V


แต่ใช้ขั้ว ±1.5–±2 kV เพราะรวม repeater chain ยาวถึงพันกิโล

2) Fault Handling ขั้นสูง
Ground Fault
ตัวนำแตะน้ำทะเล


Voltage leak → Earth current


ต้องตรวจ IR (insulation resistance) จาก PFE


แยกข้างเสียด้วย sectionalizing tests


Current Imbalance
กระแสไม่เท่ากันสองข้างของ feed


บอกได้ถึงปัญหาใน BU หรือ repeater chain


ใช้ PFE telemetry ติดตามค่า real-time



B) Optical Transmission (DWDM + OSNR)
1) DWDM Channel Management
จัดการ
ช่องสัญญาณ (50/37.5 GHz spacing)


Channel plan


Launch power


Per-channel attenuation


Flex-grid (ถ้าเป็นระบบใหม่)


ตัวอย่าง APG
ใช้ coherent 100G/200G


37.5 GHz spacing


OSNR target 14–17 dB


CSN
บางช่วงยังเป็น 10G NRZ


ใช้ 50 GHz spacing



2) Gain Equalization & ASE Noise
เป้าหมายคือ Flat Spectrum
EDFA ใต้น้ำมี Gain Tilt


BU/ROADM/NFV เพิ่ม Loss


ต้องใช้ GFF หรือ WSS ปรับสมดุล


ASE Noise
มาจาก EDFA ทุกตัว


ยิ่ง span มาก → OSNR ตก


ต้องคำนวณ chain budget



C) Fault Localization (หาตำแหน่งขัดข้อง)
1) OTDR Trace แบบละเอียด
ต้องอ่าน:
Event loss


Splice loss


Fiber attenuation


Reflections


Dead zone


Distance to fault


OTDR สำหรับสายใต้น้ำใช้ Long-range (40–50 dB dynamic)
2) SLM (Submarine Line Monitoring)
ระบบ monitoring พิเศษ
ใช้ supervisory wavelength


อ่านสถานะ repeater, pump, BU


ใช้ตรวจ aging / drift / margin
