#!/usr/bin/env python3
"""
Herramienta CLI para la gestión y auditoría de la Wiki de Anticitera (patrón LLM-Wiki).
"""

import os
import sys
import re
import argparse

WIKI_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "wiki"))

def get_wiki_pages():
    if not os.path.isdir(WIKI_DIR):
        return []
    return [f for f in sorted(os.listdir(WIKI_DIR)) if f.endswith(".md")]

def parse_frontmatter(content):
    if not content.startswith("---"):
        return {}
    parts = content.split("---", 2)
    if len(parts) < 3:
        return {}
    raw_yaml = parts[1]
    data = {}
    for line in raw_yaml.splitlines():
        if ":" in line and not line.strip().startswith("-"):
            k, v = line.split(":", 1)
            data[k.strip()] = v.strip().strip('"').strip("'")
    return data

def cmd_status(args):
    pages = get_wiki_pages()
    print("==================================================")
    print(f"📊 ESTADO DE LA WIKI DE ANTICITERA (LLM-Wiki)")
    print("==================================================")
    print(f"Directorio: {WIKI_DIR}")
    print(f"Total de páginas Markdown: {len(pages)}")

    types_count = {}
    for p in pages:
        if p in ["index.md", "log.md", "schema.md"]:
            continue
        with open(os.path.join(WIKI_DIR, p), "r", encoding="utf-8") as f:
            fm = parse_frontmatter(f.read())
            t = fm.get("type", "sin_tipo")
            types_count[t] = types_count.get(t, 0) + 1

    print("\nCategorías registradas:")
    for t, c in types_count.items():
        print(f"  • {t}: {c} páginas")

    log_path = os.path.join(WIKI_DIR, "log.md")
    if os.path.isfile(log_path):
        with open(log_path, "r", encoding="utf-8") as f:
            log_entries = [l for l in f.readlines() if l.startswith("## [")]
            print(f"\nOperaciones en log.md: {len(log_entries)} entradas")
            if log_entries:
                print(f"Última operación: {log_entries[-1].strip()}")
    print("==================================================")

def cmd_list(args):
    pages = get_wiki_pages()
    print("\n📖 CATÁLOGO DE PÁGINAS WIKI:")
    for p in pages:
        path = os.path.join(WIKI_DIR, p)
        with open(path, "r", encoding="utf-8") as f:
            fm = parse_frontmatter(f.read())
            title = fm.get("title", p)
            ptype = fm.get("type", "sistema")
            print(f"  [{ptype.upper():<12}] [[{p[:-3]}]] — {title}")

def cmd_search(args):
    query = args.query.lower()
    pages = get_wiki_pages()
    matches = []
    
    for p in pages:
        path = os.path.join(WIKI_DIR, p)
        with open(path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        
        file_matches = []
        for idx, line in enumerate(lines, 1):
            if query in line.lower():
                file_matches.append((idx, line.strip()))
        
        if file_matches:
            matches.append((p, file_matches))

    print(f"\n🔍 RESULTADOS DE BÚSQUEDA PARA: '{args.query}'\n")
    if not matches:
        print("  No se encontraron coincidencias.")
        return

    for page, hits in matches:
        print(f"📄 [[{page[:-3]}]] ({len(hits)} coincidencias):")
        for line_num, text in hits[:5]:
            snippet = text if len(text) < 100 else text[:97] + "..."
            print(f"   L{line_num:03d}: {snippet}")
        if len(hits) > 5:
            print(f"   ... y {len(hits) - 5} más.")
        print()

def cmd_lint(args):
    pages = get_wiki_pages()
    page_stems = {os.path.splitext(p)[0] for p in pages}
    link_pattern = re.compile(r'\[\[(.*?)\]\]')

    broken_links = []
    missing_frontmatter = []
    inbound_links = {stem: 0 for stem in page_stems}

    for p in pages:
        stem = os.path.splitext(p)[0]
        filepath = os.path.join(WIKI_DIR, p)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        if p not in ["index.md", "log.md", "schema.md"]:
            fm = parse_frontmatter(content)
            if not fm or "title" not in fm or "type" not in fm:
                missing_frontmatter.append(p)

        if p == "schema.md":
            continue

        links = link_pattern.findall(content)
        for target in links:
            target_stem = target.split("|")[0].strip()
            if target_stem not in page_stems:
                broken_links.append((p, target_stem))
            else:
                inbound_links[target_stem] += 1

    print("==================================================")
    print("🩺 AUDITORÍA DE SALUD DE LA WIKI (LINT)")
    print("==================================================")
    
    has_errors = False
    if broken_links:
        has_errors = True
        print(f"\n❌ ENLACES ROTOS ENCONTRADOS ({len(broken_links)}):")
        for src, dest in broken_links:
            print(f"  • {src} -> [[{dest}]] (la página destino no existe)")
    else:
        print("\n✅ Todos los enlaces bidireccionales resuelven correctamente.")

    if missing_frontmatter:
        has_errors = True
        print(f"\n⚠️ PÁGINAS CON METADATOS YAML INCOMPLETOS ({len(missing_frontmatter)}):")
        for p in missing_frontmatter:
            print(f"  • {p}")
    else:
        print("✅ Todas las páginas conceptuales tienen cabecera YAML válida.")

    orphans = [s for s, count in inbound_links.items() if count == 0 and s not in ["index", "log", "schema"]]
    if orphans:
        print(f"\n⚠️ PÁGINAS POTENCIALMENTE HUÉRFANAS ({len(orphans)}):")
        for o in orphans:
            print(f"  • {o}.md (no tiene enlaces entrantes)")
    else:
        print("✅ No se detectaron páginas huérfanas sin enlaces.")

    print("==================================================")
    if not has_errors:
        print("🎉 ESTADO DE SALUD: EXCELENTE")
    else:
        print("⚠️ ESTADO DE SALUD: REQUIERE ATENCIÓN")
    print("==================================================")

def cmd_log(args):
    log_path = os.path.join(WIKI_DIR, "log.md")
    if not os.path.isfile(log_path):
        print("No existe log.md aún.")
        return
    with open(log_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    entries = []
    current_entry = []
    for line in lines:
        if line.startswith("## ["):
            if current_entry:
                entries.append("".join(current_entry))
            current_entry = [line]
        elif current_entry:
            current_entry.append(line)
    if current_entry:
        entries.append("".join(current_entry))

    count = args.limit or 5
    print(f"\n📜 ÚLTIMAS {min(count, len(entries))} OPERACIONES EN LOG.MD:\n")
    for e in entries[-count:]:
        print(e.strip())
        print("-" * 40)

def main():
    parser = argparse.ArgumentParser(description="CLI de gestión de la LLM-Wiki de Anticitera")
    subparsers = parser.add_subparsers(dest="command", help="Comandos disponibles")

    subparsers.add_parser("status", help="Muestra el estado general de la wiki")
    subparsers.add_parser("list", help="Lista todas las páginas por categoría")
    subparsers.add_parser("lint", help="Audita enlaces rotos y formato")
    
    search_parser = subparsers.add_parser("search", help="Busca un término en las páginas")
    search_parser.add_argument("query", help="Término a buscar")

    log_parser = subparsers.add_parser("log", help="Muestra las últimas entradas del log")
    log_parser.add_argument("-n", "--limit", type=int, default=5, help="Número de entradas a mostrar")

    args = parser.parse_args()
    if not args.command:
        parser.print_help()
        sys.exit(1)

    if args.command == "status":
        cmd_status(args)
    elif args.command == "list":
        cmd_list(args)
    elif args.command == "search":
        cmd_search(args)
    elif args.command == "lint":
        cmd_lint(args)
    elif args.command == "log":
        cmd_log(args)

if __name__ == "__main__":
    main()
