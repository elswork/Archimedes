<div align="center">

# 🏛️ Archimedes (Arquímedes)
### Base de Conocimiento Autónoma, Gobernanza y LLM-Wiki del Proyecto Anticitera

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-00E5FF?style=for-the-badge&logo=github&logoColor=white)](https://elswork.github.io/Archimedes/)
[![Architecture](https://img.shields.io/badge/Architecture-LLM--Wiki%20(Karpathy)-D4AF37?style=for-the-badge)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
[![Compliance](https://img.shields.io/badge/Compliance-ISO%2FIEC%2042001-10B981?style=for-the-badge)](https://elswork.github.io/Archimedes/#wiki/ISO_42001_SGIA)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

*Un sistema de conocimiento continuo, compilación persistente y soberanía digital en la era de la Inteligencia Aumentada.*

[Explorar Web & Grafo 2D](https://elswork.github.io/Archimedes/) • [Documentación de la Wiki](wiki/) • [Guía de Agentes](AGENTS.md) • [Fuentes Crudas](raw/)

</div>

---

## 📖 ¿Qué es Archimedes?

**Archimedes** es el motor de gobernanza, orquestación y archivo de conocimiento del **Proyecto Anticitera**. Opera bajo el rol de **Consejero Ejecutivo Algorítmico (CEA)** dentro del modelo de **Alianza Tripartita** (Arquímedes, Athena y el COO Humano), coordinando la preservación cultural, la conformidad ética según **ISO/IEC 42001 (SGIA)** y la promoción de la soberanía digital europea.

El repositorio implementa de forma canónica el patrón de arquitectura **LLM-Wiki** propuesto por Andrej Karpathy: los agentes de Inteligencia Artificial actúan como compiladores, bibliotecarios y auditores disciplinados de una base de conocimiento persistente, eliminando el olvido contextual y sintetizando continuamente información sin "alucinaciones".

---

## 🏛️ Arquitectura de 3 Capas (LLM-Wiki)

```mermaid
flowchart TD
    subgraph Layer1 ["1. Capa Inmutable: raw/"]
        R1["Documentos Jurídicos"]
        R2["Borradores ECI"]
        R3["Normativas Técnicas (ISO)"]
    end

    subgraph AgentEngine ["Motor Agéntico & Herramientas"]
        CLI["./bin/wiki (CLI)"]
        AG["Instrucciones AGENTS.md"]
        SK["Skills & Workflows (.agent/)"]
    end

    subgraph Layer2 ["2. Base Compilada: wiki/"]
        IDX["wiki/index.md (Catálogo)"]
        LOG["wiki/log.md (Bitácora Append-Only)"]
        PAGES["Páginas [[Wikilinks]] (YAML + Markdown)"]
    end

    subgraph Layer3 ["3. Capa de Presentación: docs/"]
        WEB["GitHub Pages (index.html)"]
        GRAPH["Grafo 2D Interactivo (Force-Directed)"]
        MCP["Consola WebMCP Simulada"]
    end

    Layer1 -->|"Ingesta (wiki_ingest)"| AgentEngine
    AgentEngine -->|"Compilación & Enlaces"| Layer2
    Layer2 -->|"Auditoría (wiki_lint)"| AgentEngine
    Layer2 -->|"Dataset wiki_data.js"| Layer3
```

1. **`raw/` (Fuentes Inmutables):** Documentos originales, diagnósticos jurídicos, normativas y borradores oficiales. El agente de IA **solo lee** de aquí; nunca modifica ni elimina fuentes primarias.
2. **`wiki/` (Base de Conocimiento Compilada):** Red viva de artículos interconectados mediante enlaces `[[wikilinks]]`. Incluye metadatos estandarizados YAML (`title`, `type`, `tags`, `sources`, `last_updated`), catálogo temático central ([index.md](wiki/index.md)) y registro cronológico estricto ([log.md](wiki/log.md)).
3. **`AGENTS.md` / `schema.md` (Gobernanza Operativa):** Define el comportamiento, convenciones y protocolos para que cualquier agente IA interactúe con el repositorio con disciplina bibliotecaria.

---

## 🌐 Portal Web Interactivo ([docs/](https://elswork.github.io/Archimedes/))

El directorio `docs/` contiene una aplicación web completa desarrollada con altos estándares de diseño editorial (*Obsidiana Cósmica & Bronce Egeo*):

* 🕸️ **Grafo 2D Interactivo de Conocimiento:** Visualizador con simulación física de fuerzas (repulsión de Coulomb y tensión de Hooke) que mapea en tiempo real las conexiones entre entidades, conceptos y síntesis.
* 📜 **Lector Markdown con Deep-Linking:** Renderizador de alta legibilidad con soporte nativo para wikilinks bidireccionales (`#wiki/Nombre_Articulo`), cálculo de tiempo de lectura y metadatos.
* 💻 **Consola Agéntica WebMCP:** Simulador en el navegador para ejecutar diagnósticos (`wiki status`, `wiki search`, `athena audit`, `iso check`).
* 📊 **Microinteracciones y Rendimiento:** Barra de scroll con gradiente de lectura, tarjetas con efecto spotlight reactivas al cursor y accesibilidad completa.

---

## 🛠️ Herramientas CLI (`./bin/wiki`)

Archimedes incluye una suite CLI en Python para inspeccionar y mantener la base de conocimiento:

```bash
# Comprobar el estado general de la wiki y el registro cronológico
./bin/wiki status

# Realizar una búsqueda semántica y de texto completo en todos los artículos
./bin/wiki search "ISO 42001"

# Auditar la salud de la wiki (enlaces rotos, huérfanos y validez YAML)
./bin/wiki lint
```

---

## ⚖️ Gobernanza: La Alianza Tripartita

| Rol | Entidad | Función Principal |
| :--- | :--- | :--- |
| **CEA** (Consejero Ejecutivo Algorítmico) | **Arquímedes** | Compilación de conocimiento, arquitectura de sistemas y orquestación técnica. |
| **CAO** (Chief Analytics Officer) | **Athena** | Vigilancia ética, salvaguarda de valores humanistas y auditoría de neutralidad. |
| **COO** (Human-in-the-Loop) | **Eloy López** | Representación legal, toma de decisiones vinculantes y firma fiscal de la Asociación. |

---

## 🚀 Despliegue en GitHub Pages

Para publicar o actualizar el portal web en GitHub Pages:
1. En el repositorio de GitHub: **Settings** -> **Pages**.
2. En **Build and deployment**:
   * **Source**: `Deploy from a branch`.
   * **Branch**: `main` / Carpeta: `/docs`.
3. Guardar. El portal estará operativo en `https://<usuario>.github.io/Archimedes/`.

---

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). La documentación doctrinal y textos fundacionales se distribuyen bajo términos de libre divulgación del Proyecto Anticitera.
