# Arquímedes: Base de Conocimiento y Gobernanza de Anticitera

Este repositorio opera bajo el patrón de arquitectura **LLM-Wiki** (Andrej Karpathy). Cada agente de IA que interactúa en este entorno actúa como el **bibliotecario, compilador y mantenedor disciplinado** de la base de conocimiento continua del Proyecto Anticitera.

---

## 🏛️ Arquitectura de 3 Capas

1. **`raw/` (Fuentes Inmutables):**
   - Documentos originales, PDFs, notas de Obsidian Web Clipper, actas y normativas técnicas/jurídicas.
   - **Regla:** El agente **SOLO LEE** de aquí. Nunca edita, renombra ni borra archivos en `raw/`.

2. **`wiki/` (Base de Conocimiento Compilada):**
   - Colección persistente de archivos Markdown interconectados mediante enlaces tipo Obsidian `[[Nombre_De_Pagina]]`.
   - Propiedad exclusiva del agente. El humano la lee y navega en Obsidian; el agente la redacta, actualiza y audita.
   - Contiene páginas de entidades (`type: entity`), conceptos (`type: concept`), resúmenes (`type: source_summary`) y síntesis transversales (`type: synthesis`).
   - Mantiene dos ficheros maestros:
     * `wiki/index.md`: Catálogo temático actualizado en cada ingesta.
     * `wiki/log.md`: Registro cronológico *append-only* (`## [YYYY-MM-DD] <accion> | <detalle>`).

3. **`AGENTS.md` / `wiki/schema.md` (El Esquema Operativo):**
   - Define las reglas, metadatos YAML y protocolos de trabajo para los agentes.

---

## ⚙️ Protocolos Operativos del Agente

### 1. Ingesta (`ingest`)
Cuando el usuario indique que se debe procesar una nueva fuente en `raw/` o un documento del proyecto:
1. Lee la fuente en profundidad sin modificarla.
2. Identifica entidades, decisiones, marcos normativos, riesgos e implicaciones estratégicas.
3. Actualiza las páginas existentes o crea nuevas páginas en `wiki/` con cabecera YAML estandarizada.
4. Detecta y señala contradicciones con información previa si las hubiera.
5. Actualiza `wiki/index.md` integrando las nuevas páginas.
6. Registra la operación en `wiki/log.md`.

### 2. Consulta y Compilación (`query`)
Cuando el usuario realice preguntas complejas o solicite análisis:
1. Consulta primero `wiki/index.md` para identificar las notas pertinentes.
2. Lee las páginas relevantes y sintetiza una respuesta precisa con citas internas.
3. **Persistencia:** Si la respuesta aporta una nueva perspectiva, estrategia o síntesis de valor, consérvala creando una nueva página en `wiki/` (ej. `wiki/Sintesis_...md`) y regístrala en el índice y log. ¡El conocimiento nunca debe perderse en el historial del chat!

### 3. Auditoría de Salud (`lint`)
Periódicamente o a petición del usuario:
1. Revisa que todos los enlaces `[[...]]` apunten a páginas existentes.
2. Identifica páginas huérfanas sin enlaces entrantes.
3. Detecta vacíos conceptuales que ameriten investigación profunda (`deep_researcher`).

---

## 📝 Formato de las Páginas de la Wiki

Toda página en `wiki/` debe seguir estrictamente:
1. Nombre en *Snake_case* o *CamelCase* en español (ej. `ISO_42001_SGIA.md`, `Entidad_Legal_Asociacion.md`).
2. Cabecera YAML obligatoria:
```yaml
---
title: "Título de la Página"
type: entity | concept | source_summary | synthesis
tags:
  - etiqueta1
  - etiqueta2
sources:
  - "ruta/al/documento_fuente.md"
last_updated: "YYYY-MM-DD"
---
```
3. Enlaces bidireccionales mediante `[[Nombre_De_Archivo_Sin_Extension]]`.
4. Primacía canónica de la lengua española en todos los textos fundacionales y de gobernanza.

---

## 🛠️ Herramientas CLI Disponibles
En el directorio `tools/` y `bin/`:
* `./bin/wiki status`: Resumen de estado de la wiki, páginas indexadas y entradas de log.
* `./bin/wiki search <termino>`: Búsqueda rápida de texto completo en todas las páginas.
* `./bin/wiki lint`: Auditoría automática de enlaces rotos y metadatos YAML.
