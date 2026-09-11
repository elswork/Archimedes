# Esquema de la Wiki de Anticitera (LLM-Wiki Schema)

Este documento define las reglas de formato, estructura y procedimientos de mantenimiento para la Wiki del Proyecto Anticitera, siguiendo el patrón de gestión de conocimiento continuo propuesto por Andrej Karpathy.

---

## 1. Principios de Diseño

1. **Persistencia y Compilación Continua:** El conocimiento no se consulta desde cero en cada interacción; se compila en páginas atómicas e interconectadas en Markdown que se mantienen al día.
2. **Fuentes Inmutables (`raw`):** Los documentos primarios (PDFs, directivas UE, leyes, transcripciones, notas) nunca son modificados por el agente. Son la fuente de la verdad inmutable.
3. **Mantenimiento Autónomo por el LLM:** El humano aporta fuentes, plantea preguntas de investigación y orienta prioridades. El LLM es el responsable de redactar, enlazar, actualizar referencias cruzadas y mantener la coherencia.
4. **Soberanía y Compatibilidad con Obsidian:** Todas las páginas son archivos Markdown estándar con enlaces del tipo `\[\[Nombre_De_Pagina\]\]` compatibles con la vista de grafo de Obsidian y versionables en Git.
5. **Primacía del Español:** De acuerdo con la gobernanza de Anticitera, el español es la lengua canónica de la base de conocimiento.

---

## 2. Convenciones de Nombres y Metadatos (YAML Frontmatter)

### Nombres de Archivo
* Formato: Snake_case descriptivo con mayúsculas iniciales para entidades o conceptos clave (ej. `ISO_42001_SGIA.md`, `Entidad_Legal_Asociacion.md`).
* Evitar caracteres especiales, tildes o espacios en el nombre del fichero para garantizar compatibilidad con enlaces multiplataforma en Linux/Obsidian.

### Cabecera YAML
Cada nota debe comenzar obligatoriamente con el siguiente bloque YAML:

```yaml
---
title: "Título Descriptivo"
type: entity | concept | source_summary | synthesis
tags:
  - categoria1
  - categoria2
sources:
  - "ruta/al/documento_fuente.md"
last_updated: "YYYY-MM-DD"
---
```

**Tipos de páginas (`type`):**
* `entity`: Una organización, estándar, sistema, persona o figura legal (ej. `ISO_42001_SGIA`, `Asociacion_Anticitera`, `Athena`).
* `concept`: Un marco teórico, metodología o principio operativo (ej. `Gobernanza_Alianza_IA`, `Modelo_Financiacion`).
* `source_summary`: Resumen detallado y estructurado de una fuente primaria ingerida.
* `synthesis`: Análisis transversal que conecta múltiples entidades y conceptos tras una investigación o consulta compleja.

---

## 3. Protocolos Operativos

### Protocolo A: Ingesta (`ingest`)
Cuando se ingresa una nueva fuente:
1. **Lectura Completa:** El agente analiza el documento fuente sin modificarlo.
2. **Identificación de Impacto:** Determina qué entidades, conceptos o marcos se ven afectados o deben crearse.
3. **Actualización / Creación de Páginas:**
   * Crea o actualiza las páginas de entidades y conceptos afectados.
   * Añade enlaces bidireccionales con la sintaxis `\[\[Nombre_De_Pagina\]\]`.
   * Registra contradicciones o discrepancias entre la nueva fuente y las existentes.
4. **Actualización del Catálogo (`index.md`):** Registra las páginas nuevas o modificadas en la sección correspondiente.
5. **Entrada en el Registro (`log.md`):** Añade una línea al final del archivo con el formato:
   `## [YYYY-MM-DD] ingest | <Nombre de la Fuente> -> páginas afectadas: [Pagina1], [Pagina2]`

### Protocolo B: Consulta y Consolidación (`query`)
1. **Navegación:** El agente primero consulta `index.md` y luego lee las páginas relevantes.
2. **Respuesta Sintética:** Genera la respuesta citando las páginas de la wiki utilizadas.
3. **Consolidación:** Si la respuesta produce un análisis estratégico nuevo y valioso, se guarda como una nueva página de tipo `synthesis` en `wiki/` y se enlaza al índice.

### Protocolo C: Auditoría de Salud (`lint`)
De forma periódica, el agente examina la wiki en busca de:
1. **Páginas Huérfanas:** Páginas que no tienen enlaces entrantes desde ninguna otra página o desde `index.md`.
2. **Enlaces Rotos:** Referencias `\[\[...\]\]` a páginas inexistentes.
3. **Claims Obsoletos:** Afirmaciones superadas por documentos posteriores.
4. **Vacíos de Información:** Conceptos mencionados repetidamente que ameritan una página propia o una investigación con `deep_researcher`.
