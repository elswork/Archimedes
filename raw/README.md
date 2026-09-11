# Directorio de Fuentes Primarias (Raw Sources)

Este directorio es la **Capa 1 (Fuentes Brutas)** de la arquitectura LLM-Wiki de Anticitera.

## Reglas de esta Capa:
1. **Inmutabilidad:** Los archivos depositados aquí son la fuente única de la verdad (*Single Source of Truth*). El agente de IA los lee pero **nunca** los modifica.
2. **Buzón de Entrada:** Aquí es donde el usuario deposita nuevos PDFs, artículos, leyes de EUR-Lex, transcripciones, actas o capturas de Obsidian Web Clipper.
3. **Imágenes y Adjuntos:** Las imágenes descargadas deben guardarse en `raw/assets/` para que el agente pueda analizarlas y referenciarlas.
4. **Procesamiento:** Una vez depositado un archivo aquí, ejecuta o pide la orden:
   ```bash
   # En terminal:
   ./bin/wiki ingest raw/<archivo.md>
   # O directamente en el chat:
   "Ingesta la fuente raw/<archivo.md>"
   ```
