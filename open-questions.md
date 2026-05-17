# Open Questions

## 1. Performance cost
How should engines optimize mutation tracking to avoid overhead?

## 2. Deep tracking behavior
Should nested objects be tracked by default or opt-in?

## 3. Array mutations
Should methods like push/splice generate individual history entries?

## 4. History storage limits
Should history be capped, and what should default limits be?

## 5. Circular references
How should mutation history handle circular object graphs?

## 6. Function tracking
Should function calls on observable objects be recorded?

## 7. Async mutations
Should async updates be grouped or tracked individually?
