# ⚡ PFE Power Theory – From Basic to Deep (Ultimate Edition)

ไฟล์นี้รวมทุกแนวคิดเกี่ยวกับระบบจ่ายไฟใต้น้ำ (Submarine Power Feeding)  
ตั้งแต่พื้นฐาน → วิธีคิด SEF/BEF → Sea Earth → การไหลของกระแสจริง  
→ วงจรสมมติ (Equivalent Circuit) → Fault Behavior

เป็นไฟล์ที่ครอบคลุมที่สุดสำหรับวิศวกร CLS/Subsea

---

# 1) PFE คืออะไร (Basic Overview)

PFE = Power Feeding Equipment  
งานของมันคือ “ส่งกระแสคงที่ (constant current)” ให้ repeater ใต้น้ำทุกตัว

- กระแสใช้งานทั่วไป: **0.8–1.5 A**
- แรงดัน: **±1.5 kV ถึง ±10 kV**
- ส่งไฟไปตาม **Copper Conductor** ภายในสาย
- ทุก repeater ใช้ไฟจากกระแสนี้ในการขับ **pump laser / control module**

PFE (+) → copper conductor → repeaters → (return path) → PFE (–)

---

# 2) โหมดการจ่ายไฟ (Feeding Modes)

## ✔ SEF – Single-End Feed  
จ่ายไฟจากฝั่งเดียว → กระแสกลับทางทะเล

PFE (+) → cable → repeater chain → Sea Return → Sea Earth → PFE (–)

คุณสมบัติ:
- มี **Sea Earth Current**  
- ใช้ตอนอีกฝั่งเสียหรือปิดบำรุงรักษา
- ใช้สายสั้น/ระบบในประเทศ

---

## ✔ BEF – Both-End Feed (Double-End Feed)

จ่ายไฟ “สองฝั่ง” เข้าหากันกลางสาย

PFE A (+) →───►── cable ──◄───← PFE B (–)

คุณสมบัติ:
- ลดแรงดันรวมต่อฝั่ง ~50%
- กระแสไม่วิ่งลงทะเล → **Sea Earth Current = 0**
- ใช้คู่กับสายยาว/ระบบ International เช่น APG

---

# 3) Station Earth vs Sea Earth

| ชนิด | หน้าที่ | ใช้ที่ไหน |
|------|----------|-------------|
| **Sea Earth** | คืนกระแส DC (return path) / ตรวจ fault | น้ำทะเล (shore) |
| **Station Earth** | กราวด์ป้องกันฟ้าผ่า/อุปกรณ์ CLS | ตึก CLS |
| **Earth-Free** | ตัด earth ทั้งหมดออกเพื่อทดสอบ | PFE test mode |

Sea Earth ไม่ใช่ “กราวด์” แต่เป็น **ส่วนหนึ่งของวงจรไฟฟ้า**

---

# 4) การไหลของกระแส (Power Loop Theory)

## วงจรพื้นฐานของระบบใต้น้ำ
ให้คิดว่าเป็นวงจร DC ธรรมดาแต่มีความยาวหลายพันกิโล

ประกอบด้วย:

- **R_cable** = ความต้านทานของ conductor
- **R_load** = Repeater Chain
- **R_seaLoop** = Sea Earth + water resistance

สมการ:

V_pfe = I × (R_cable + R_load + R_seaLoop) + Margin

กระแสต้อง “วิ่งเป็น loop เสมอ” ไม่ว่าจะเป็น SEF หรือ BEF

---

# 5) Equivalent Circuit (วงจรสมมติของสายทะเล)

เราสามารถเขียนเป็นวงจรแบบนี้:

PFE (+HV) │ R_cable (distributed along fiber) │ [ R_load = repeater + BU ] │ ├── R_leak (เฉพาะเวลารั่ว) │ (return path) │ Sea Earth → PFE (–HV)

**R_leak** คือจุดรั่วลงทะเล สร้าง Sea Earth Current

---

# 6) Sea Earth Current – ไหลอย่างไรเมื่อมี Fault

เมื่อ conductor รั่วถึงทะเล:

ส่วนหนึ่งของ I_feed ไหลลงทะเลที่จุดรั่ว → กลับฝั่งที่ “ระยะสั้นที่สุด”

### ✔ ถ้ารั่วใกล้ CLS A  
SE current กลับ A (เพราะระยะสั้นกว่า)

### ✔ ถ้ารั่วใกล้ CLS B  
SE current กลับ B

### ✔ ถ้ารั่วกลางสาย  
SE current จะไหลไปฝั่งที่ R ต่ำกว่า = ฝั่งใกล้กว่า

---

# 7) Fault Behavior แบบลึกที่สุด (Deep Dive)

## 7.1 IR Test = ตัวชี้วัดฉนวน  
IR ต่ำ → สายเริ่มสูญเสีย → conductor begin to leak

## 7.2 Voltage-to-Earth  
ใช้วัดว่า fault อยู่ใกล้ฝั่งไหน  
ฝั่งที่แรงดันตกมากกว่า → ใกล้ fault

## 7.3 Earth Current  
ค่าที่โหดที่สุดในการตีความ:

- **SEF** → มี earth current เสมอ  
- **BEF** → ต้องเป็น 0 ถ้ารั่ว → จะไม่เป็น 0

## 7.4 Fault กลางสาย  
กรณีนี้มีความลึก:

- แม้รั่วกลางสาย แต่ 90% ของ I_SE จะไหลกลับฝั่งที่สั้นกว่า  
→ ทำให้รู้ว่า fault อยู่ “ใกล้ฝั่งไหน”

---

# 8) เหตุผลที่ UI PFE ไม่ตรงกับวงจรจริง

UI แสดงง่าย ๆ แบบ:

A ———— BU ———— B

แต่ความจริงมี:

- R distributed  
- R_leak  
- Sea water loop  
- Earth impedance  
- Control loads  
- Voltage reference

เพราะงั้นเวลาตีความ fault → ต้องใช้ **logic พื้นฐานไฟฟ้า + knowledge subsea**

---

# 9) สรุปภาพรวม PFE ทั้งหมด

1. PFE ส่งกระแสคงที่ให้ repeater  
2. SEF = return ผ่านทะเล  
3. BEF = return ผ่าน conductor ทั้งสองฝั่ง  
4. Sea Earth ไม่ใช่กราวด์ แต่คือ return path  
5. Fault = conductor leak → I_SE เพิ่ม → IR ลด  
6. รั่วใกล้ฝั่งไหน → SE current ไหลกลับฝั่งนั้น  
7. BEF ไม่มี I_SE เว้นแต่เกิด fault  
8. Equivalent circuit ใช้ในการคำนวณตำแหน่งรั่ว  
9. นี่คือหัวใจระบบ power ใต้น้ำทั้งหมด

---
