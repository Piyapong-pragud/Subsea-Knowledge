# Glossary
รวมศัพท์ 100 คำสำคัญในโลก Submarine Cable

#️⃣ A – C

ACR (Attenuation to Crosstalk Ratio)
-
ค่าบอกความต่างระหว่างสัญญาณหลักและสัญญาณรบกวน (crosstalk)
ใช้ในระบบ DWDM เพื่อวิเคราะห์คุณภาพช่อง

AIS (Alarm Indication Signal)
-
สัญญาณแจ้งเตือนลิงก์ผิดปกติ เช่น AIS-L, AIS-P

Amplifier Chain
-
ชุด repeater ที่ต่อกันในสายใต้น้ำตั้งแต่ CLS → BU → Repeater

APC (Automatic Power Control)
-
ระบบควบคุมกำลังแสงของ repeater ให้คงที่

Armored Cable
-
สายใยแก้วนำแสงแบบมีเกราะเหล็ก
ใช้ในเขต near-shore / fishing zone

ASE Noise (Amplified Spontaneous Emission)
-
Noise จาก EDFA ใต้น้ำที่สะสมบน chain
ทำให้ OSNR ตกลงเรื่อย ๆ

Back Reflection
-
แสงสะท้อนกลับเข้า Tx หรือ Rx
เกี่ยวข้องกับ ORL

BMH (Beach Manhole)
-
จุดขึ้นฝั่งของสาย ใช้ตรวจ OTDR ก่อนเข้าสู่ทางบก

BU (Branching Unit)
-
อุปกรณ์แยกเส้นทางใต้น้ำ

APG มี BU หลายจุด

CSN ใช้แยกสาขาไปเกาะต่าง ๆ

Capacity Planning
-
การวางแผนอัปเกรดช่อง เช่น 100G → 200G → 400G

CD (Chromatic Dispersion)
-
การกระจายสัญญาณตามความยาวคลื่น
Coherent ใช้ DSP แก้ได้

CDS (Chromatic Dispersion Slope)
-
อัตราการเปลี่ยนแปลงของ CD ตาม wavelength

CLS (Cable Landing Station)
-
สถานี landing มี SLTE, PFE, NOC, AC/DC plant

Coherent Transmission
-
การส่งสัญญาณโดยใช้ QPSK/8QAM/16QAM
คุณภาพดี ระยะไกล OSNR ต่ำก็รอด

Conductivity Fault
-
กรณี conductor มีการนำไฟฟ้าผิดปกติ เช่นน้ำเข้า → Ground fault

#️⃣ D – G

Dispersion Compensation
-
การชดเชย CD (ระบบเก่าใช้ DCM, ระบบใหม่ใช้ DSP)

Equalization (Gain Flatness)
-
ปรับกำลัง channel ให้เรียบ
ใช้อุปกรณ์ GFF/WSS/ROADM

EDFA (Erbium-Doped Fiber Amplifier)
-
Repeater ใต้น้ำ

Gain 14–20 dB

อายุ 25–30 ปี

Fiber Attenuation
-
ค่า loss ของ fiber
ทั่วไป 0.17–0.18 dB/km

Flex-grid
-
ระบบช่องแบบยืดหยุ่น 12.5 GHz slot
รองรับ superchannel

FEC (Forward Error Correction)
-
เพิ่มความทนต่อ BER

APG: SD-FEC

10G: RS(255,239)

GSNR (Generalized SNR)
-
ตัวชี้วัดสัญญาณเมื่อคิด nonlinear ด้วย
QPSK ต้อง ≥ 11 dB

GFF (Gain Flattening Filter)
-
ฟิลเตอร์ปรับ power profile ให้เรียบก่อน/หลัง ROADM

Ground Path Return
-
การคืนกระแสของ PFE ผ่านน้ำทะเล (Single-End Feed)

#️⃣ H – N

High-Voltage Bypass Switch
-
วงจรใน BU/Repeater สำหรับ bypass ส่วนที่เสีย

IR Test (Insulation Resistance)
-
ทดสอบฉนวนว่า conductor leak หรือไม่
ค่า IR ต่ำ → เสี่ยง ground fault

Joint (Undersea Joint)
-
จุด splice ใต้น้ำหลังตัดซ่อม

Line Coherent Detection
-
เทคนิค decode สัญญาณ coherent ด้วย LO laser

MFD (Mode Field Diameter)
-
ขนาดสนามแสงของ fiber
มีผลต่อ splice loss

Marine Repair
-
ขั้นตอนซ่อมสายทะเล
ROV → Cut → Pickup → Joint → Relay → Test

MUX/DEMUX (Passive)
-
อุปกรณ์รวม/แยกช่องแบบ fixed grid

#️⃣ O – P

OADM (Optical Add/Drop Multiplexer)
-
เพิ่ม/ดรอปช่องใน BU หรือ ROADM

OPM (Optical Power Meter)
-
ใช้วัดช่องทีละ wavelength

ORL (Optical Return Loss)
-
การสะท้อนรวมของระบบ
ค่าดีควร < −40 dB

OTDR
-
วัดตำแหน่งเสีย
สายทะเลใช้รุ่น 40–50 dB dynamic

OSNR (Optical SNR)
-
ตัวชี้วัดคุณภาพสัญญาณ

QPSK ≥ 14 dB

10G ≥ 18–23 dB

PFE (Power Feeding Equipment)
-
จ่ายไฟให้ repeater chain

±1.5–10 kV

1.0–1.5 A (APG)

Pilot Tone
-
สัญญาณกำกับ power บางระบบ DWDM ใช้ monitor per channel

Power Budget
-
การคำนวณ gain-loss ของระบบทั้งหมด
สำคัญเวลาเพิ่มช่อง

#️⃣ R – S

Repeater
-
EDFA ใต้น้ำ
60–80 km/ตัว

ROADM
-
สวิตช์ optical แบบ dynamic
ใช้ WSS ในการ routing wavelength

RPL (Route Position List)
-
แผนที่พิกัดเส้นทางสายใต้น้ำทั้งหมด

SDM (Space Division Multiplexing)
-
แนวคิด multi-core/multi-fiber pair เพิ่ม capacity

SLM (Submarine Line Monitoring)
-
ตรวจสถานะ repeater/pump ผ่าน supervisory channel

Span
-
ระหว่าง repeater 2 ตัว
ปกติ 50–80 km

Span Loss
-
loss ต่อ span
ทั่วไป 9–14 dB

Superchannel
-
หลาย carriers รวมเป็น logical channel
เช่น 400G/600G

Surge Protection
-
ระบบป้องกันไฟกระชากของ PFE/CLS

#️⃣ T – W

Tilt Compensation
-
แก้ gain tilt ของ spectrum

Trouble Isolation
-
แยกให้ได้ว่าเสียจาก
Wet / Dry / Terrestrial

Tunable Laser
-
Laser ปรับ wavelength ได้ตาม ITU grid

Voltage Standing Wave (VSW)
-
การสะท้อนใน conductor เมื่อสูญเสียผิดปกติ

Wavelength Drift
-
การลอยของ wavelength จากความร้อน

WDM / DWDM
-
หลายช่องในเส้นเดียว
spacing 50 / 37.5 GHz

WSS (Wavelength Selective Switch)
-
ตัวสวิตช์ใน ROADM
IL 5–7 dB
