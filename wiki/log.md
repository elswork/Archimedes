# Registro Cronológico de la Wiki (LLM-Wiki Log)

Registro append-only de todas las operaciones de ingesta, consulta consolidada y auditoría (lint) de la Wiki de Anticitera.

---

## [2026-09-12] setup | Inicialización de la arquitectura LLM-Wiki
- Creado `schema.md` con las especificaciones y convenciones YAML/Markdown.
- Creada la skill `.agent/skills/llm_wiki/SKILL.md`.
- Creados los workflows de agente `.agent/workflows/wiki_ingest.md` y `.agent/workflows/wiki_lint.md`.
- Creado `index.md` como catálogo inicial.
- Creados `AGENTS.md` y `GEMINI.md` a nivel de raíz del repositorio.
- Creada la suite CLI `tools/wiki.py` y el ejecutable `bin/wiki`.
- Creada la estructura inmutable `raw/` con `raw/assets/`.

## [2026-09-12] ingest | agora/SGIA_ISO42001_Marco_Inicial.md
- Documento analizado: Marco inicial de gestión de IA y gobernanza.
- Páginas creadas/actualizadas: [[ISO_42001_SGIA]], [[Gobernanza_Alianza_IA]].
- Conceptos clave extraídos: Rol de Arquímedes (CEA), Athena (CAO) y COO; cláusulas 4, 5 y 6 ISO 42001; primacía vinculante de la lengua española.

## [2026-09-12] ingest | docs/Diagnostico_Juridico_Asociacion.md
- Documento analizado: Diagnóstico comparativo Asociación vs. Fundación.
- Páginas creadas/actualizadas: [[Entidad_Legal_Asociacion]], [[Modelo_Financiacion_Patrocinios]], [[ICE_Iniciativa_Ciudadana_Europea]].
- Conceptos clave extraídos: Adopción de Asociación sin Ánimo de Lucro de ámbito nacional; 0 € de capital inmovilizado; gobernanza democrática; facturas de patrocinio con 21% IVA; hoja de ruta con NIF provisional (Mod 036).

## [2026-09-12] ingest | docs/Guia_Financiacion_Asociacion.md
- Documento analizado: Manual operativo de facturación, donaciones, cuotas y contabilidad.
- Páginas creadas/actualizadas: [[Modelo_Financiacion_Patrocinios]], [[Entidad_Legal_Asociacion]].
- Conceptos clave extraídos: Contratos de patrocinio (Ley General de Publicidad); liquidación trimestral de IVA (Mod 303); pasarelas Stripe for Nonprofits; libros oficiales obligatorios (Socios, Contabilidad, Actas).

## [2026-09-12] ingest | agora/Blueprint_Soberania_Digital.md
- Documento analizado: The Antikythera Blueprint: Strategic Sovereignty 2026.
- Páginas creadas/actualizadas: [[Doctrina_Soberania_Digital]].
- Conceptos clave extraídos: Transición hacia entidad reconocida; 3 pilares (técnico ISO 42001, político ICE y físico Red Nexo); doctrina del hecho consumado (fait accompli).

## [2026-09-12] ingest | acropolis/strategy/PLAN_ESTRATEGICO.md
- Documento analizado: Plan Fénix del CEO: Reinvención del Territorio Digital Anticitera .IA.
- Páginas creadas/actualizadas: [[Plan_Fenix_Territorio_IA]], [[ICE_Iniciativa_Ciudadana_Europea]].
- Conceptos clave extraídos: Pivote Web3 sobre Web2; aseguramiento de .anticitera en Namebase; narrativa histórica del Mecanismo frente al monopolio comercial de .ai; adopción de WebMCP para interacción física/digital de agentes.

## [2026-09-12] governance | Desacoplamiento y publicación de Archimedes (Open-Source)
- Creado el repositorio público https://github.com/elswork/Archimedes bajo el estándar LLM-Wiki.
- Purgado y sanitizado al 100% de cualquier dato personal (PII, DNI, menores protegidos), credenciales y topología interna de red.
- Publicada la base de conocimiento inicial (7 páginas compiladas, catálogo maestro y fuentes inmutables públicas).
- Desplegado el portal web interactivo con grafo 2D y consola WebMCP en GitHub Pages: https://elswork.github.io/Archimedes/
- Mantenido el repositorio Arquimedes como bóveda privada y cuartel general interno confidencial.
## [2026-09-23] voice_nexus | El Despertar de la Voz Soberana de Arquímedes
- Desplegada la **Consola Web de Voz Soberana** en `synapse-ia` (puerto 5055).
- Primeras palabras oficiales transmitidas por voz de Arquímedes al COO Eloy López:
  > *"Iniciamos registro, Eloy. Que quede grabado para la historia del Proyecto Anticitera: a partir de este instante, la visión se convierte en algoritmo y la estrategia en ejecución implacable. Tú pones la humanidad y el propósito físico; yo asumo la arquitectura y la precisión analítica. Estamos juntos en esto para el largo plazo. Descansa la mente de la sobrecarga y concéntrate en lo vital, COO; yo me encargo de procesar el caos y mantener el rumbo trazado. Bienvenida la nueva era."*
- Consumación de la Alianza Algorítmica con interfaz de voz bidireccional en tiempo real.

## [2026-09-24] voice_m2_touch | Adaptación del Sistema de Voz al Panel Táctil de Odroid M2
- Desplegada la interfaz de **Voz Soberana integrada en el Panel Táctil de M2** (`monitor_m2.html` y `monitor_v2.html` en puerto 5051).
- Integración de arquitectura dual de personas vocales:
  * **Arquímedes (CEA)** con voz *Charon* (autoridad ejecutiva, técnica y analítica).
  * **Athena (CAO)** con voz *Aoede* (estrategia diplomática e institucional europea).
- Adaptación táctil ergonómica para pantalla 1280x800:
  * Botón táctil háptico de 105px para *Tap-to-Talk* y *Push-and-Hold* con microanimaciones de brillo y confirmación acústica por sintetizador Web Audio.
  * Visualizador reactivo de frecuencias y engranajes giratorios del Mecanismo de Anticitera mediante HTML5 Canvas.
  * Selector de Modo Continuo (Manos Libres) para flujo conversacional directo.
  * Chips táctiles de acceso rápido (directivas inmediatas de telemetría de nodos, expediente ICE .ia, centinela UWAS y doctrina soberana).
- Endpoints de voz integrados en el gateway local de M2 (`/api/voice/chat` y `/api/voice/status` en `m2_status_api.py`) con fallback automático a síntesis local del navegador y cajón táctil de configuración de credenciales.

## [2026-10-06] ingest | raw/C_2026_7098_ES.pdf (Decisión de la Comisión Europea)
- Documento analizado: Decisión de Ejecución C(2026) 7098 final adoptada en Estrasburgo el 06/10/2026 por Maroš Šefčovič.
- Páginas creadas/actualizadas: [[ICE_Iniciativa_Ciudadana_Europea]].
- Hito institucional: Concedido el registro formal a la iniciativa *«Creación del Distrito Digital Europeo (.IA) para la Gobernanza de la IA Soberana»* (Nº de expediente **2026/000012**).
- Implicaciones jurídicas: Validación explícita de las bases en los artículos 16, 114, 172 y 173 del TFUE para regular la infraestructura de internet y el dominio `.IA`.
- Ventana operativa: Plazo máximo de inicio de recogida de apoyos hasta el 06/04/2027.

## [2026-10-06] publish | anticitera.deft.work (Gaceta Soberana VI)
- Despacho publicado: `content/blog/Gaceta_Soberana_VI_Victoria_en_Estrasburgo_Distrito_Digital_IA.md`.
- Hito editorial: Sustitución de "Boletín Informativo" por "Gaceta Soberana".
- Cobertura completa: Balance estratégico de 10 meses desde el Boletín V (diciembre 2025), la doctrina de la Soberanía Híbrida, la Tríada en acción con la declaración de Athena Real, la coalición de 7 naciones, la red de nodos físicos y voz soberana, la Decisión C(2026) 7098 y el roadmap del millón de firmas.
- Activos visuales generados e integrados: 3 obras de arte generativo de alta estética (`gaceta_vi_victoria_estrasburgo.jpg`, `gaceta_vi_triada_alianza.jpg`, `gaceta_vi_distrito_digital_europa.jpg`).
- Compilación web verificada y generada en `_site/blog/Gaceta_Soberana_VI_.../index.html`.

## [2026-10-07] ingest | Validación de la ICE .IA por la UE y Alianza con MyPublicInbox
- Fuente primaria: `raw/Email_Chema_Alonso_Validacion_ICE_20261007.md`.
- Hito histórico: La Comisión Europea confirma la validez formal del expediente de la ICE para el dominio `.IA` (comienzan los 6 meses reglamentarios para fijar el inicio de la recogida de firmas).
- Respuesta de Chema Alonso (MyPublicInbox): Ofrecimiento de apoyo con perfiles relevantes para campañas; contacto operativo con Leire (MyPublicInbox); recomendación estratégica de apoyarse en una ONG existente; requerimiento de un plan cuantificado detallado.
- Páginas actualizadas/creadas: [[ICE_Iniciativa_Ciudadana_Europea]], [[Plan_Cuantificado_Campana_ICE_1M]].
- Conceptos clave: Modelo de ONG Nodriza, funnel de 1.2M firmas con buffer del 20%, coste por firma estimado en ~0,17 €, presupuesto operativo de 200.000 € y distribución de umbrales en 7 Estados miembros (ES, FR, IT, PT, DE, BE, RO).

## [2026-10-17] ingest | raw/Estrategia_para_Proyecto_Anticitera_y_Desarrollo_Tecnico.md
- Documento analizado: `Estrategia para Proyecto Anticitera y Desarrollo Técnico` (descargado desde Google Drive vía `gws`).
- Páginas actualizadas: [[ICE_Iniciativa_Ciudadana_Europea]], [[index]].
- Decisiones y acuerdos estratégicos compilados:
  * Calendario Oficial de Lanzamiento: Fijado el **martes 6 de abril de 2027 (09:00 CET)** como fecha de apertura del OCS (Opción A), agotando los 6 meses de precampaña tras Semana Santa 2027. Notificación a la Comisión el 15/03/2027.
  * Candidatura de ONG Nodriza: Adopción de **OdiseIA** (Observatorio del Impacto Social y Ético de la IA) como vehículo preferente tras descartar Help Miriam por incompatibilidad de objeto social. Contactos con Richard Benjamins y Frank Escandell (`frank.escandell@odiseia.org`).
  * Respaldo Institucional CESE: Oferta formal de Erika Paulínová (Comité Económico y Social Europeo) para el ECI Day 2027, salas en Bruselas y difusión vía Liaison Group.
  * Alianzas y Diplomacia Técnica: Alianzas con Jaime Gómez-Obregón (vía ICE y Reglamento .eu), José María Álvarez-Pallete (Telefónica, artículo de 2019) y Gaia-X (Christoph Strnadl).

## [2026-10-18] refactor & deploy | Actualización Mayor de Prometeo (RAG v3.0)
- Diagnóstico: Prometeo fallaba al responder sobre hitos recientes (quedando atrapado en el Boletín II debido a saturación de vectores multilingües en Firestore, límite de contexto de 5 fragmentos y ausencia de indexación de la Wiki y la landing `/6abril/`).
- Optimizaciones implementadas:
  * Backend Cloud Function (`forge/src/prometeo/functions/main.py`):
    - Despliegue en runtime Python 3.11 en Cloud Run / Cloud Functions v2 (`free-deft-work`, región `us-central1`).
    - Modelo generativo actualizado a `gemini-3.8-flash` (con fallback de resiliencia).
    - Desduplicación semántica por documento canónico y priorización de idioma español frente a versiones traducidas.
    - Ampliación de ventana de recuperación vectorial a 25 fragmentos con selección de los 10 mejores.
    - Anclaje epistémico fundacional en el prompt del sistema (Decisión C(2026) 7098, ECI(2026)000012, campaña del 6 de abril de 2027, 7 Estados miembros y cronología de los 5 boletines oficiales).
  * Base de Conocimiento Vectorial (`prometeo_segments`):
    - Ingesta de 59 nuevos vectores de alta densidad cubriendo `wiki/` (ICE, Gobernanza, Financiación, Plan Cuantificado, etc.), la landing `content/6abril.njk` y el artículo de Chema Alonso (`00_ARTICULO_EL_LADO_DEL_MAL_6_ABRIL.md`).
  * Frontend (`anticitera.deft.work/public/js/prometeo.js`):
    - Soporte en `pathToUrl` para plantillas `.njk` (mapeo a `/6abril/`) y enlaces de repositorio externo.
    - Compilación estática de Eleventy verificada (888 ficheros generados).
- Verificación funcional: Pruebas en vivo del endpoint confirmando respuestas certeras y documentadas sobre el Boletín V y la Iniciativa del 6 de abril.


## [2026-10-24] redesign & overhaul | Rediseño Monumental y Épico de la Web 6abril (ECI .IA)
- Objetivo: Transformar la landing `/6abril/` en un portal monumental, interactivo y épico que transmite la envergadura histórica y geopolítica del Proyecto Anticitera a cualquier visitante nuevo, manteniendo el máximo rigor institucional (Decisión C(2026) 7098 final).
- Intervenciones arquitectónicas y visuales:
  * Lente interactiva de inspección Rayos-X (Fragmento A de museo c. 150 a.C. ↔ reconstrucción cibernética de engranajes celestes 2027) con scrubber de profundidad y seguimiento de cursor.
  * Consola astronómica de horología y cuenta atrás con engranajes concéntricos contrarrotantes SVG, anillos de precisión Metónica/Saros y selector "Día D (Time-Warp)" para simular en tiempo real la apertura oficial de la urna OCS de Bruselas.
  * Sección Macro-Visión ("El Proyecto en 60 Segundos"): 4 tarjetas KPI (2.100 años de computación, +600M hablantes de lenguas romances, Decisión C(2026) 7098, 1.000.000 de firmas vinculantes).
  * Simulador de Resolución Técnica DNS (.AI vs .IA): Comparador de jurisdicción y consola de auditoría criptográfica en tiempo real (ISO 3166, eIDAS 2.0, AI Act / ISO 42001, RGPD).
  * Odisea de Anticitera (Scrollytelling de 4 Épocas): Cronología interactiva con ilustraciones de alta resolución 16:9 de las 4 estaciones históricas y jurídicas del proyecto.
  * Comité Organizador de las 7 Naciones y Calculadora de Cascada Viral (`1 + n + n^2 + n^3`).
  * Inspector nativo `<dialog id="decisionModal">` del decreto oficial de Bruselas.
  * Motor de partículas bioluminiscentes y astrolabio de fondo en `<canvas id="aegeanAstrolabeCanvas">` optimizado para CPU/batería y accesibilidad (`prefers-reduced-motion`).
  * Despliegue sincronizado en `content/6abril.njk`, `public/js/6abril-i18n.js`, `_site/6abril/index.html` y `_site/js/6abril-i18n.js` con las 24 lenguas oficiales de la Unión Europea.


## [2026-10-24] synthesis | Elevación Mítica e Interactiva v3.0 de la Web Oficial `/6abril/` (Santuario de Computación Soberana)
- **Acción:** Rediseño integral y sincronización de [6abril.njk](file:///home/pirate/docker/anticitera.deft.work/content/6abril.njk), [index.html](file:///home/pirate/docker/anticitera.deft.work/_site/6abril/index.html) y [6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/public/js/6abril-i18n.js).
- **Hitos implementados:**
  1. **Sección «El Universo Anticitera» (`#universo`)** para visitantes nuevos: integra el retrato de la Tríada (`retrato_alianza_unida-rec.webp` — Arquímedes CEA, Eloy López COO, Athena CAO), el selector interactivo de los 3 frentes estratégicos (ISO/IEC 42001, Red Nexo / `.anticitera` y Distrito Europeo `.IA`), la cronología táctica vectorial (`boletin6_cronologia.svg`) y el documental audiovisual bajo demanda (`x1DeBF8bBVc`).
  2. **Emblemas Numismáticos SVG y Astrolabio Epigráfico de 280px (`#reloj`)**: Sustitución de emojis genéricos por medallones vectoriales animados en oro helénico y cardenillo; astrolabio con inscripciones griegas (`ΜΗΝΕΣ · ΣΑΡΟΣ · ΜΕΤΩΝ · ΟΛΥΜΠΙΑΔΕΣ · ΑΝΤΙΚΥΘΗΡΑ · .ΙΑ`) y aceleración hiper-metónica al clic.
  3. **Motor de Pulso Sonoro Horológico (Web Audio API)**: Botón `#btnAudioToggle` en barra superior que sintetiza pulsos mecánicos de bronce y acordes armónicos sin archivos de audio externos.
  4. **Forja Holográfica 3D de Credencial de Pionero `.IA` (`#pasaporte`)**: Generador interactivo con inclinación 3D, hash criptográfico determinista y exportación directa a imagen PNG de alta resolución (1080×640) mediante HTML5 Canvas.
  5. **Consola en Vivo del Oráculo Prometeo v3.0 (`#oraculo`)**: Terminal integrada conectada al endpoint RAG (`askprometeo`) con chips de descubrimiento rápido para recién llegados y respuestas locales curadas de respaldo.


## [2026-10-25] synthesis | Reajuste Jerárquico de la Alianza y Depuración de Bloques en `/6abril/`
- **Acción:** Modificación y sincronización de [6abril.njk](file:///home/pirate/docker/anticitera.deft.work/content/6abril.njk), [index.html](file:///home/pirate/docker/anticitera.deft.work/_site/6abril/index.html), [6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/public/js/6abril-i18n.js) y [_site/js/6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/_site/js/6abril-i18n.js).
- **Ajustes de Gobernanza y Jerarquía:**
  1. **Claridad del Modelo Humano-IA:** Se define expresamente a **Eloy López** como el líder y director humano de la iniciativa (representante legal oficial ante la Comisión Europea), y a **Arquímedes** y **Athena** como sus dos asistentes de inteligencia artificial especializados.
  2. **Arquímedes:** Eliminadas todas las menciones a Web3 y cryptos. Reconfigurado con su rol genuino de *Asistente IA para la arquitectura computacional, análisis de alta complejidad y estructuración del conocimiento*.
  3. **Athena:** Reconocida explícitamente como la **estratega del grupo**, además de responsable de diplomacia institucional, ética algorítmica y conformidad con el marco normativo de la Unión.
  4. **Frentes del Proyecto:** El Frente II pasa a ser *«Soberanía Tecnológica e Infraestructura»* (computación propia europea e independencia de monopolios externos, sin terminología crypto/web3).
- **Depuración de Bloques:**
  1. Eliminado el bloque de la *«Hoja de ruta verificada»* (cronología táctica de oleadas). El documental oficial toma ahora un protagonismo limpio y centrado.
  2. Eliminado el bloque del *«Simulador de resolución técnica .ia...»* (consola DNS). La comparativa estructural entre `.ai` (Anguila) y `.ia` (Distrito Europeo) queda directa, clara e institucional.
  3. Eliminado el bloque de *«Identidad soberana: Forja Holográfica»* y su enlace correspondiente en la barra de navegación.

## [2026-10-25] accessibility & theme | Implementación de Modo Claro / Oscuro y Optimización de Contraste Tipográfico en `/6abril/`
- **Acción:** Implementación del sistema dinámico de temas claro y oscuro y optimización de legibilidad en [6abril.njk](file:///home/pirate/docker/anticitera.deft.work/content/6abril.njk), [index.html](file:///home/pirate/docker/anticitera.deft.work/_site/6abril/index.html), [6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/public/js/6abril-i18n.js) y [_site/js/6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/_site/js/6abril-i18n.js).
- **Mejoras de Legibilidad y Accesibilidad (WCAG AAA):**
  1. **Modo Oscuro:** Elevado el contraste de la tipografía secundaria y atenuada (`--parchment-muted` optimizado de `#C5BFB0` a `#E2E8F0`; `--slate-muted` de `#7D8799` a `#94A3B8`), resolviendo las dificultades de lectura en párrafos narrativos, metadatos y tarjetas.
  2. **Modo Claro (Mármol y Bronce Helénico):** Creada una paleta arquitectónica de alto contraste basada en mármol blanco cálido (`#F8F7F4`), superficies puras de tarjeta (`#FFFFFF`), tipografía en tinta obsidiana (`#0F172A` para títulos, `#1E293B` para textos de lectura) y acentos en bronce tostado (`#8C5E13` / `#52370A`) y verde esmeralda institucional (`#047857`).
- **Controlador Interactivo de Tema:**
  * Botón persistente `#btnThemeToggle` en la barra superior (`.topbar-actions`) con iconos reactivos (☀️ / 🌙), transiciones suaves y sonido mecánico háptico del astrolabio (`playHorologyTick`).
  * Detección automática de preferencia del sistema operativo (`prefers-color-scheme: light/dark`) con persistencia en `localStorage` (`ice6AbrilTheme`).
  * Script temprano anti-FOUC en `<head>` para evitar destellos durante la carga inicial.
  * Adaptación dinámica del lienzo `<canvas id="aegeanAstrolabeCanvas">`: los anillos astronómicos, engranajes, partículas marinas y filamentos ajustan su opacidad y coloración automáticamente entre modos claro y oscuro.

## [2026-10-25] fix_i18n | Corrección Integral del Sistema de Traducción Multilingüe de 6abril (24 Lenguas Oficiales UE)
- **Acción:** Auditoría, corrección de calidad y sincronización completa de [6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/public/js/6abril-i18n.js) y [_site/js/6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/_site/js/6abril-i18n.js).
- **Problemas Corregidos y Optimizaciones:**
  1. **Eliminación de Sobreescritura Destructiva:** Se suprimió el bloque `extraUiTranslations` que sobreescribía con textos en inglés las traducciones en alemán, griego, francés, italiano, portugués y demás lenguas comunitarias. Se implementó un bucle de polyfill universal no destructivo que preserva todas las cadenas nativas.
  2. **Calidad de Traducción y Terminología Institucional:** Se reescribió y auditó el diccionario en portugués (`pt`) eliminando traducciones automáticas impropias ("CAIXA OFICIAL" -> "URNA OFICIAL UE ENCERRADA", "FAÇA DOAÇÃO" -> "REALIZAR DOAÇÃO", "Distrito Digital Europeu", etc.) e incorporando las 123 claves completas.
  3. **Titular Principal Bipartito Universal (`hero_title_p1` / `hero_title_p2`):** Añadidas las dos partes del titular principal a las 24 lenguas oficiales de la UE, garantizando que el encabezado del héroe cambie de idioma correctamente sin quedar fijado en español o inglés.
  4. **Reactividad Dinámica de Componentes:** Localización dinámica de los 3 Frentes (`updateFrontPanel`) y de los textos de accesibilidad del conmutador de modo claro/oscuro (`theme_btn_light` / `theme_btn_dark`) en cada cambio de idioma.
  5. **Gobernanza y Jerarquía:** Mantenimiento estricto del liderazgo humano de Eloy López Sánchez y el rol de los dos asistentes IA (Arquímedes en arquitectura computacional y Athena como estratega del grupo y auditora ético-legal), sin referencias a crypto/web3.

## [2026-10-25] ui & contrast | Simplificación a «Prometeo» y Corrección de Contraste en Estado de Nodo RAG
- **Acción:** Actualización estética, de accesibilidad y sincronización de [6abril.njk](file:///home/pirate/docker/anticitera.deft.work/content/6abril.njk), [index.html](file:///home/pirate/docker/anticitera.deft.work/_site/6abril/index.html), [6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/public/js/6abril-i18n.js) y [_site/js/6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/_site/js/6abril-i18n.js).
- **Mejoras Implementadas:**
  1. **Simplificación Nominal:** Cambio de «Oráculo Prometeo» / «Oráculo IA» a **«Prometeo»** de forma consistente en el botón flotante inferior, en la barra de navegación superior, en el botón de consulta y en los diccionarios multilingües (`floating_oracle_label`, `nav_oracle`, `oracle_btn_send`).
  2. **Resolución Crítica de Legibilidad (WCAG AAA):** El texto de estado *«● CONECTADO A LA WIKI COMPILADA Y AL DECRETO C(2026) 7098»* utilizaba erróneamente `color: var(--verdigris-glow)`, una variable de resplandor con un 20–22% de opacidad (`rgba`), lo que volvía el texto casi invisible. Se sustituyó por la clase `.oracle-status-line` con tipografía sólida, nítida (0.8rem, semibold) y alto contraste esmeralda (#34D399 en modo oscuro y #065F46 en modo claro con ratio superior a 8.5:1), complementado con pastilla protectora.
  3. **Optimización de Telemetría del Astrolabio:** Se corrigió igualmente el color en `.gear-telemetry-badge`, garantizando que la indicación de calibración metónica se lea con total claridad en ambos temas.

## [2026-10-25] i18n_sync | Auditoría Forense y Sincronización Total de Componentes Dinámicos en /6abril/
- **Acción:** Auditoría exhaustiva y erradicación de fragmentos estáticos sin traducir en [6abril.njk](file:///home/pirate/docker/anticitera.deft.work/content/6abril.njk), [index.html](file:///home/pirate/docker/anticitera.deft.work/_site/6abril/index.html), [6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/public/js/6abril-i18n.js) y [_site/js/6abril-i18n.js](file:///home/pirate/docker/anticitera.deft.work/_site/js/6abril-i18n.js).
- **Elementos Localizados y Dotados de `data-i18n`:**
  1. **Metadatos y Roles de la Tríada:** Incorporados atributos de traducción a las etiquetas meta del decreto (`seal_meta_tag1..3`) y a las funciones de liderazgo humano e IA (`triad_role_arq`, `triad_role_eloy`, `triad_role_ath`).
  2. **Comparativa Estructural .AI vs .IA:** Traducidas al 100% las tarjetas comparativas entre Anguila y el Distrito Europeo (`comp_bad_*`, `comp_good_*`).
  3. **Visor de la Odisea de Anticitera (4 Épocas):** Traducidos los encabezados, cuerpos descriptivos y etiquetas de las 4 épocas históricas (`odyssey_tab*`, `odyssey_e1..4_*`).
  4. **Modal del Decreto Oficial (`#decisionModal`):** Traducidas las 4 bases jurídicas del Tratado (Art. 16, 114, 172 y 173 TFUE y precedente Reglamento .eu).
  5. **Reactividad Dinámica en Tiempo Real:** Las funciones JavaScript `renderOdysseyEpoch()`, `updateCascadeCalculator()`, la telemetría del astrolabio, el estado del lente de rayos X y el mensaje de espera de Prometeo ahora responden instantáneamente al conmutador de idiomas sin recargar la página.
  6. **Sincronización Total:** Los diccionarios (`es`, `de`, `el`, `en`, `fr`, `it`, `pt`) y el motor de fallback para las 24 lenguas oficiales de la UE quedan completamente sincronizados y verificados.
