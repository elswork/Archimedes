---
name: LLM Wiki
description: Gestiona y mantiene la base de conocimiento continua de Anticitera mediante el patrón persistente LLM-Wiki de Karpathy (ingesta, consultas acumulativas y auditoría de salud).
---

# LLM Wiki Skill

Esta skill instruye al agente para operar como el mantenedor continuo y bibliotecario de la base de conocimiento del Proyecto Anticitera, ubicada en `/home/pirate/docker/Arquimedes/wiki/`.

## Filosofía Operativa
1. **Compilación sobre Búsqueda Efímera:** Nunca respondas preguntas complejas olvidando el resultado; las síntesis valiosas se integran de vuelta en la wiki.
2. **Fuentes Inmutables:** Los archivos en `archives/`, `docs/` o `agora/` no se alteran salvo petición explícita; la wiki compila su contenido en `wiki/`.
3. **Hiperenlaces Bidireccionales:** Emplea siempre enlaces en formato `[[Nombre_De_Pagina]]` para asegurar la conectividad en el grafo de Obsidian.

## Operaciones Principales

### 1. Ingesta (`/wiki-ingest`)
Al procesar una nueva fuente:
- Extrae entidades, normativas, decisiones organizativas y plazos.
- Actualiza o genera las páginas en `wiki/` con su YAML frontmatter según `wiki/schema.md`.
- Actualiza `wiki/index.md` con las nuevas páginas o descripciones.
- Agrega la entrada correspondiente en `wiki/log.md`.

### 2. Consulta (`/wiki-query`)
Al resolver dudas o diseñar planes estratégicos:
- Revisa primero `wiki/index.md` para ubicar las entidades y conceptos clave.
- Lee los archivos específicos.
- Elabora la respuesta citando las páginas de la wiki.
- Si la respuesta introduce un nuevo marco o síntesis, genera `wiki/<Nombre_Sintesis>.md` y regístralo.

### 3. Auditoría de Salud (`/wiki-lint`)
Ejecuta revisiones periódicas sobre `wiki/`:
- Detecta enlaces rotos (`[[Inexistente]]`).
- Identifica contradicciones entre versiones normativas o jurídicas.
- Señala conceptos clave que aún carecen de página propia.
