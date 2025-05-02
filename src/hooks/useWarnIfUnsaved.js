import { useEffect } from 'react';

/**
 * useWarnIfUnsaved: Zeigt Browser-Dialog, wenn der Nutzer mit ungespeicherten Änderungen die Seite verlassen will.
 * @param {boolean} dirty – true, sobald ein Feld geändert wurde.
 */
export function useWarnIfUnsaved(dirty) {
  useEffect(() => {
    const handler = (e) => {
      if (!dirty) return;
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [dirty]);
}
