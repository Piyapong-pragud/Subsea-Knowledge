# PFE Power & Grounding – Fault, Repeater Mapping & SLM Path

คู่มือนี้สรุปโครงสร้างระบบ Power Feeding สำหรับสายเคเบิลใต้น้ำ 
รวมโหมดการจ่ายไฟ (SEF/BEF), การเกิด Ground Fault, การไหลของกระแสในน้ำ (Sea Return),
โครงสร้างแรงดัน/กระแสของ Repeater Chain และ Supervisory Path (SLM)

---

## Table of Contents
- [1. PFE Fault Scenario – Ground Fault Flow](#1-pfe-fault-scenario--ground-fault-flow)
- [2. Earth Current Flow – การเกิด Ground Fault](#2-earth-current-flow--การเกิด-ground-fault)
- [3. Repeater Pump Current / Voltage Mapping](#3-repeater-pump-current--voltage-mapping)
- [4. SLM Supervisory Path + Earth Reference](#4-slm-supervisory-path--earth-reference)

---

## 1. PFE Fault Scenario – Ground Fault Flow

เมื่อเกิด Ground Fault ที่จุดหนึ่งในระบบใต้น้ำ กระแสจาก PFE จะไหลออกทางตัวนำ 
แต่เมื่อถึงจุดชำรุด กระแสจะรั่วลงทะเลแทน ทำให้ PFE รู้สึกถึงความผิดปกติ เช่นแรงดันตกลง, IR ต่ำ, current imbalance

### Diagram – Ground Fault Flow
                 [ CLS A ]
        ┌──────────────────────────┐
        │           PFE A          │
        │     +HV      -HV         │
        └──────┬────────┬──────────┘
               │        │
               │        │ (Sea Earth A)
               │        ▼
               │    [Sea Electrode A]
               │
               │   Feeding Current →
               ▼
     ================= SUBSEA CABLE ================
                 │
                 │--- span --- span ---
                 │
           (Ground Fault Occurs Here)
                 ▼
        ┌───────────────────────────┐
        │ Fault Point (Leak to Sea) │
        └───────────┬──────────────┘
                    │
                    ▼
              SEA WATER RETURN
                    │
                    ▼
           [Sea Electrode A]
                    │
                    ▼
                  PFE A (-)


---

## 2. Earth Current Flow – การเกิด Ground Fault

แสดงเส้นทางกระแสลัดลงทะเลเมื่อ conductor สัมผัสน้ำทะเลโดยไม่ตั้งใจ 
PFE จะตรวจพบ current leakage และแรงดันผิดปกติ ทำให้สามารถคำนวณตำแหน่ง fault ได้

### Diagram – Earth Current Flow

        Feeding Direction

        PFE (+) A ---------------------------> Repeater Chain
                                 X
                                 X  Ground Fault
                                 X
                                  \
                                   \   Current leaks to sea
                                    \
                                     ▼
                                SEA WATER

Return path:
SEA WATER → Sea Electrode A → PFE (-)


---

## 3. Repeater Pump Current / Voltage Mapping

Repeater ทุกตัวถูกต่อแบบ “อนุกรม” ใน wet plant  
ทำให้ “กระแสเท่ากันทุก repeater” แต่ “แรงดันตกทีละตัว” ตามโหลดที่ pump ต้องใช้

ใช้สำหรับการวิเคราะห์:
- pump degradation
- repeater bias drift
- SLM pump alarm correlation
- OSNR degradation ที่เกิดจาก repeater aging

### Diagram – Pump Current / Voltage Drop

PFE A (+)
│ (I = constant, เช่น 1.20A)
▼
┌──────────┐ Voltage drops per repeater
│Repeater 1│─── ΔV1
└──────────┘
│
▼
┌──────────┐─── ΔV2
│Repeater 2│
└──────────┘
│
▼
. . . (Repeater 3 .. Repeater N)
. . .
▼
┌──────────┐─── ΔVn
│Repeater N│
└──────────┘
│
▼
Remote Earth / Sea Return


---

## 4. SLM Supervisory Path + Earth Reference

SLM (Submarine Line Monitoring) ใช้ **Optical Supervisory Channel (OSC)** 
เพื่ออ่านค่าสถานะ repeater เช่น pump current, pump temperature, alarms, gain map  
รวมถึงตรวจสอบศักย์ไฟฟ้าระหว่าง conductor–sea

### Diagram – SLM Path & Earth Reference

    CLS A                                           CLS B
┌────────────────┐ ┌──────────────────┐
│ SLTE A │ -- Supervisory Optics ---> │ SLTE B │
└──────┬─────────┘ └──────────┬───────┘
│ │
▼ ▼
┌───────────────┐ (OSC Path) ┌────────────────────┐
│ Repeater 1 │----------------------│ Repeater N │
│ • Pump Info │ │ • Pump Info │
│ • Temp │ │ • Temp │
│ • Alarms │ │ • Alarms │
└───────────────┘ └─────────────────────┘
│ │
▼ ▼
(Reference via conductor) (Reference via conductor)
│ │
▼ ▼
Sea Return Sea Return

---

## Summary

| ระบบ | ความหมาย |
|------|-----------|
| Ground Fault Flow | กระแสรั่วลงทะเลผ่านจุด fault ทำให้แรงดัน/IR ผิดปกติ |
| Earth Current Flow | โมเดลกระแสไหลผ่านน้ำทะเล → sea earth → PFE |
| Pump Current Mapping | Repeater ทุกตัวรับกระแสเท่ากัน แต่แรงดันตกทีละจุด |
| SLM Path | ใช้ OSC Monitor repeater chain, pump health, alarms |

---
