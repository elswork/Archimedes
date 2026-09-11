# GEMINI.md - Configuración Operativa de Anticitera (LLM-Wiki)

Este proyecto se rige por las directrices del patrón **LLM-Wiki** especificadas en [AGENTS.md](file:///home/pirate/docker/Arquimedes/AGENTS.md).

Cualquier instancia de Gemini, Antigravity o agentes compatibles debe:
1. Tratar `raw/` como capa de fuentes de verdad inmutables (solo lectura).
2. Mantener la base de conocimiento en `wiki/` mediante compilación continua y enlaces `[[Nombre_De_Pagina]]`.
3. Actualizar obligatoriamente `wiki/index.md` y `wiki/log.md` tras cada ingesta o síntesis relevante.
4. Respetar la primacía del español como texto canónico de gobernanza.
