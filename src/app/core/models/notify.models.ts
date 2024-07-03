export type Severity = 'success' | 'info' | 'error'


export interface Notify {
  message: string
  severity: Severity
}
