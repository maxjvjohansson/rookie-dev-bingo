export function getLeaderboardStatus(distance: number | null): {
  text: string;
  emoji?: string;
} {
  if (distance === null) {
    return { text: "No progress yet", emoji: "😴" };
  }

  if (distance === 0) {
    return { text: "Bingo!", emoji: "🎉" };
  }

  if (distance === 1) {
    return { text: "1 tile left", emoji: "🔥" };
  }

  if (distance <= 3) {
    return { text: `${distance} tiles left`, emoji: "😬" };
  }

  return { text: "Just started", emoji: "🙂" };
}
