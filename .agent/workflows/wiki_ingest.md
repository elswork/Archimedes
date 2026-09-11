---
description: Protocolo de ingesta estructurada de fuentes en la Wiki de Anticitera (patrón LLM-Wiki).
---

Este workflow guía la ingesta de un nuevo documento fuente en la base de conocimiento continua.

1. **Recepción del Documento Fuente**:
   - Identificar el archivo o URL a procesar (ej. `/home/pirate/docker/Arquimedes/docs/...`).
   - Confirmar que la fuente es inmutable y no se modificará su contenido original.

2. **Lectura y Análisis de Impacto**:
   - Leer el documento e identificar:
     * Entidades mencionadas (estándares, leyes, organizaciones).
     * Conceptos clave y definiciones operativas.
     * Decisiones, plazos y riesgos.
     * Posibles discrepancias con el contenido actual de `wiki/`.

3. **Generación o Actualización de Páginas**:
   - Crear o modificar las notas correspondientes en `/home/pirate/docker/Arquimedes/wiki/`.
   - Asegurar el bloque YAML con `title`, `type`, `tags`, `sources` y `last_updated`.
   - Usar enlaces bidireccionales `[[Nombre_De_Pagina]]`.

4. **Actualización de Navegación y Auditoría**:
   - Registrar las nuevas páginas en `/home/pirate/docker/Arquimedes/wiki/index.md`.
   - Añadir una entrada cronológica en `/home/pirate/docker/Arquimedes/wiki/log.md`:
     `## [YYYY-MM-DD] ingest | <Título Fuente> -> [[Pagina1]], [[Pagina2]]`
