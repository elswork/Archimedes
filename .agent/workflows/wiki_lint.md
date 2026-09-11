---
description: Protocolo de auditoría de salud y consistencia de la Wiki de Anticitera.
---

Este workflow revisa la coherencia y salud de la base de conocimiento en `/home/pirate/docker/Arquimedes/wiki/`.

1. **Escaneo de Enlaces y Huérfanos**:
   - Analizar todas las páginas de `wiki/` extrayendo las referencias `[[...]]`.
   - Comprobar si existen enlaces a ficheros no creados.
   - Comprobar si existen ficheros sin enlaces entrantes desde otras páginas o desde `index.md`.

2. **Detección de Inconsistencias**:
   - Comparar afirmaciones estratégicas o jurídicas entre documentos (ej. requisitos de capital, plazos de registro).
   - Reportar cualquier discrepancia al COO.

3. **Propuesta de Nuevas Investigaciones**:
   - Listar conceptos recurrentes que aún no cuentan con página propia para ser investigados mediante `deep_researcher`.

4. **Registro de la Auditoría**:
   - Registrar la ejecución en `wiki/log.md`:
     `## [YYYY-MM-DD] lint | Auditoría de salud -> <hallazgos principales>`
