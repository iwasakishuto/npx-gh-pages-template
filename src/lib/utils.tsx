/**
 * @summary 日付を "YYYY-MM-DD hh:MM:ss" の書式で返す
 * @param {number} val 数
 * @return {string} "YYYY-MM-DD hh:MM:ss" で表された Date
 */
export function formatDate(dt: Date): string {
  return dt.toLocaleString("ja-JP").replaceAll("/", "-");
}
