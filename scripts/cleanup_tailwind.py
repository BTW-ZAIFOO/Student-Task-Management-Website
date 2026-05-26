from pathlib import Path

root = Path(".")
paths = list(root.rglob("*.tsx")) + list(root.rglob("*.ts"))
changed = 0
for path in paths:
    text = path.read_text(encoding="utf-8")
    new = text.replace("dark:", "").replace("bg-gradient-to-br", "bg-linear-to-br").replace("bg-gradient-to-r", "bg-linear-to-r")
    if new != text:
        path.write_text(new, encoding="utf-8")
        changed += 1
print(f"cleaned {changed} files")
