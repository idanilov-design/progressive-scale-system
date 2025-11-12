# Progressive Scale System

A mathematical and practical rule for design systems and tokens: **when `Value / Step = 10`, the Step doubles**.  
This creates dense values for micro-UI and wider spacing for layouts.

## Rule
- **Values** — the scale numbers (0, 2, 4, …)  
- **Steps** — the increment values (2, 4, 8, 16, …)  
- **Doubling condition:** if `Value / Step = 10` → `Step = Step × 2`

## Example
- 0→20 (Step = 2): 0, 2, 4, …, 20 → 20/2 = 10 ⇒ next Step = 4  
- 20→40 (Step = 4): 24, 28, 32, 36, 40 → 40/4 = 10 ⇒ next Step = 8  
- 40→80 (Step = 8): 48, 56, 64, 72, 80 → 80/8 = 10 ⇒ next Step = 16

## Use Cases
- Figma Variables (Spacing / Sizing)  
- CSS Variables / Design Tokens  
- Token Generators (JS / TS)

## License
MIT
