export function FormatSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsRest = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minutes}:${secondsRest}`;
}
