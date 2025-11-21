# Phase 1 – Foundation
🟧 Phase 1 – Foundation (พื้นฐาน Subsea)
เหมาะสำหรับ: คนใหม่, ฝึกงาน, ต่อยอดความเข้าใจระบบใหญ่

1) ภาพรวมระบบ Subsea (System Overview)
คือการเข้าใจ “ภาพใหญ่ทั้งหมด” ของระบบเคเบิลใต้น้ำ ตั้งแต่จุดเริ่มต้นจนจุดปลาย
ประกอบด้วย 3 ส่วนใหญ่:
1. Wet Plant (อุปกรณ์ใต้น้ำ)
Fiber optic cable


Repeaters (EDFA ใต้น้ำ)


Branching Units (BU)


Underwater ROADM/WSS (ถ้าระบบใหม่ เช่น APG บางจุดมี)


หน้าที่: ส่งสัญญาณแสงระยะไกล 1,000–10,000 km
2. Dry Plant (อุปกรณ์บนฝั่ง/CLS)
SLTE (Transponders/Line Cards → Coherent 100G/200G)


PFE (Power Feeding Equipment ±1.5–10 kV DC)


Monitoring (OSNR, Q, PM, OTDR, SLM)


หน้าที่: ส่งสัญญาณเข้า-ออก wet plant + ให้ไฟกับ repeater chain
3. Landing Station (CLS)
จุดควบคุมทั้งหมด
ระบบไฟฟ้า


ระบบคลื่นแสง


ระบบ Backhaul


ระบบ Monitoring


ที่เชื่อมต่อ APG/CSN/ระหว่างประเทศ



2) โครงสร้างสายเคเบิล, Repeaters, Landing Station
โครงสร้างสายใต้น้ำ (Submarine Cable Structure)
มี 4 แบบหลัก
Lightweight (กลางทะเลลึก)


Lightweight Protected


Single Armored


Double Armored (โซน near-shore)


ประกอบด้วย
Optical fibers


Copper conductor (นำไฟ PFE)


Steel armors


Insulation


Waterproof barrier


Repeaters
คือ EDFA ใต้น้ำ
มี pump 980 nm หรือ 1480 nm


ใช้ constant current feeding


อายุงาน 25–30 ปี


Gain 10–20 dB ต่อ span


Landing Station (CLS)
มี redundant power


Air-conditioning


Fire suppression


NOC monitoring


Backhaul ไป Core network



3) มาตรฐาน ITU-T, ICPC
ITU-T G.97x Series (สายใต้น้ำ)
G.973 Repeaterless


G.974 Cable structure


G.975/975.1 FEC


G.976 Unrepeatered DWDM


G.977 Repeatered submarine system


G.978 Amplifier spec (รวมเข้า G.977)


ICPC (International Cable Protection Committee)
ดูแลด้าน
ความปลอดภัยของสาย


Zone วางสาย


การหลีกเลี่ยงการลากอวน ทิ้งสมอ



<img src="images/Overview_subsea.jpg" width="500" height="auto">
