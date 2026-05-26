from pathlib import Path
import re
root = Path('.')
components = sorted([p.stem for p in (root/'components').glob('*.tsx')])
files = list(root.rglob('*.tsx'))
for comp in components:
    count = 0
    for f in files:
        if f.parent == root/'components' and f.stem == comp:
            continue
        text = f.read_text(encoding='utf-8')
        if (
            f"from '@/components/{comp}'" in text
            or f"from '../../components/{comp}'" in text
            or f"from '../components/{comp}'" in text
            or f"from './{comp}'" in text
            or f"from 'components/{comp}'" in text
            or f'from "@/components/{comp}"' in text
            or f'from "../../components/{comp}"' in text
            or f'from "../components/{comp}"' in text
            or f'from "./{comp}"' in text
        ):
            count += 1
    print(f'{comp} {count}')
