---
title: "Modelo de Financiación y Patrocinios Comerciales"
type: concept
tags:
  - financiacion
  - fiscalidad
  - patrocinios
  - contabilidad
sources:
  - "/home/pirate/docker/Arquimedes/docs/Guia_Financiacion_Asociacion.md"
  - "/home/pirate/docker/Arquimedes/docs/Diagnostico_Juridico_Asociacion.md"
last_updated: "2026-09-12"
---

# Modelo de Financiación y Patrocinios Comerciales

Estructura operativa y fiscal que permite a la [[Entidad_Legal_Asociacion]] recibir ingresos legítimos desde el primer día de actividad para financiar la infraestructura técnica y la campaña de comunicación de la [[ICE_Iniciativa_Ciudadana_Europea]].

---

## 1. Las Tres Vías de Ingreso

```mermaid
graph LR
    EMP["Empresas y Marcas"] -->|Patrocinio Publicitario (+21% IVA)| FACT["Factura Comercial<br/>(Gasto deducible 100%)"]
    PART["Particulares / Simpatizantes"] -->|Donación Altruista (Exento)| REC_DON["Recibo de Donación<br/>(Renta exenta IS)"]
    AFIL["Socios / Miembros"] -->|Cuota Periódica (Exento)| REC_CUOTA["Recibo de Cuota<br/>(Derecho a voto en Asamblea)"]
    
    FACT --> CAJA["Caja de la Asociación"]
    REC_DON --> CAJA
    REC_CUOTA --> CAJA
    
    CAJA --> CAMP["Campaña ICE & Infraestructura"]
```

### Detalle Comparativo de las Vías:

| Vía de Ingreso | Origen | Régimen de IVA | Documento Emitido | Incentivo para el Pagador | Impacto Fiscal para la Asociación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Patrocinio Publicitario** | Empresas / Aliados tecnológicos | **SÍ (21% IVA)** | **Factura Comercial** | Deducible al 100% en el Impuesto de Sociedades como gasto comercial publicitario. | Actividad económica sujeta a IVA (Liquidación trimestral Modelo 303). |
| **Donación Particular** | Simpatizantes particulares | **NO (Exento)** | **Recibo de Donación** | Apoyo ideológico a la soberanía digital de la ICE. | Renta exenta en el Impuesto de Sociedades. |
| **Cuota de Socio** | Miembros de base | **NO (Exento)** | **Recibo de Cuota** | Participación política activa y voto en la Asamblea General. | Renta exenta destinada a fines asociativos estatutarios. |

---

## 2. Protocolo de Patrocinio Comercial (Día 1)
Regulado por la **Ley General de Publicidad 34/1988 (art. 22)**:
1. **Contrato de Patrocinio Publicitario:** Se suscribe un convenio bilateral donde la Asociación se compromete a otorgar visibilidad a la marca patrocinadora (e.g. logotipo en `anticitera.deft.work`, eventos, notas de prensa de la ICE).
2. **Facturación Formal:** Se emite factura con Base Imponible + 21% de IVA (ejemplo: 1.000 € de patrocinio + 210 € de IVA = 1.210 €).
3. **Obligaciones Tributarias:**
   * La Asociación declara e ingresa el IVA repercutido a través del **Modelo 303**.
   * La empresa se desgrava íntegramente el gasto y compensa el IVA soportado.

---

## 3. Infraestructura Bancaria y Pasarelas de Pago
Para canalizar las aportaciones con mínimas comisiones y total automatización:
1. **Cuenta Bancaria Corporativa:** Apertura con NIF provisional obtenido en la AEAT.
2. **Stripe for Nonprofits:** Solicitud de tarifas reducidas para organizaciones sin ánimo de lucro verificadas.
3. **Puntos de Contacto Digitales:**
   * *Hazte Socio:* Suscripción periódica automática (ej. 5 €/mes o 50 €/año).
   * *Portal de Donaciones:* Pasarela de pago único para simpatizantes.
   * *Portal B2B:* Formulario y canal de contacto directo para empresas patrocinadoras.

---

## 4. Libros Oficiales Obligatorios (Ley Orgánica 1/2002)
La gestión contable de la entidad debe mantener tres registros oficiales permanentemente actualizados:
1. **Libro de Socios:** Datos de filiación, DNI, fecha de alta y estado de cuotas.
2. **Libro de Contabilidad / Caja:** Relación exhaustiva de ingresos (facturas, cuotas, donaciones) y gastos operacionales (servidores, difusión, asesoría).
3. **Libro de Actas:** Acuerdos formales de la Junta Directiva y de la Asamblea General.

---

## Enlaces Relacionados
* Marco legal base: [[Entidad_Legal_Asociacion]]
* Campaña destino de los fondos: [[ICE_Iniciativa_Ciudadana_Europea]]
* Órgano de supervisión de gastos: [[Gobernanza_Alianza_IA]]
