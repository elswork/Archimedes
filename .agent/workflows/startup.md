---
description: Protocolo de sincronización y arranque del Proyecto Anticitera.
---

Este workflow ejecuta la sincronización global de todos los repositorios del proyecto mediante un `git fetch` para asegurar que la base de conocimiento esté actualizada.

// turbo
1. Ejecutar el script de sincronización:
```bash
/home/pirate/docker/Arquimedes/forge/infra/sync_repos.sh
```

2. Reportar el estado de las ramas al COO.
