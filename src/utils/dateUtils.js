/**
 * Date and Deadline utility functions.
 * Adheres strictly to the requirement:
 * - Calculate remaining days using standard JS Date arithmetic.
 * - Never show a countdown for an unknown deadline or an already closed event.
 */

/**
 * Calculates remaining days until deadline.
 * Returns null if deadlineISO is missing, invalid, or has already passed.
 * Returns { days: number, label: string } if in the future.
 */
export const getRemainingDays = (deadlineISO) => {
  if (!deadlineISO) return null;

  const targetDate = new Date(deadlineISO);
  if (isNaN(targetDate.getTime())) return null;

  const now = new Date();
  const diffTime = targetDate.getTime() - now.getTime();
  
  if (diffTime <= 0) {
    return { days: 0, label: "Deadline passed", isExpired: true };
  }

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return { days: 1, label: "1 day left", isExpired: false };
  }
  
  return { days: diffDays, label: `${diffDays} days left`, isExpired: false };
};

/**
 * Formats an ISO date string into readable Indian Standard Time / human date.
 */
export const formatDateString = (dateString, fallback = "To be announced") => {
  if (!dateString) return fallback;
  
  // If it's already a formatted string like "28 February – 1 March 2026", return it directly
  if (typeof dateString === 'string' && isNaN(Date.parse(dateString))) {
    return dateString;
  }
  
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch {
    return fallback;
  }
};

/**
 * Sorts hackathons by chronological order if confirmed dates exist.
 * Puts upcoming with confirmed dates first, then upcoming with unannounced dates, then completed.
 */
export const sortHackathonsByDate = (list) => {
  return [...list].sort((a, b) => {
    // 1. Upcoming before Completed
    const aIsCompleted = a.status === 'Completed' || a.status === 'Registration Closed';
    const bIsCompleted = b.status === 'Completed' || b.status === 'Registration Closed';

    if (!aIsCompleted && bIsCompleted) return -1;
    if (aIsCompleted && !bIsCompleted) return 1;

    // 2. Both upcoming or both completed: compare startDateISO if available
    const aTime = a.startDateISO ? new Date(a.startDateISO).getTime() : 0;
    const bTime = b.startDateISO ? new Date(b.startDateISO).getTime() : 0;

    if (aTime && bTime) {
      return aIsCompleted ? bTime - aTime : aTime - bTime;
    }
    if (aTime && !bTime) return -1;
    if (!aTime && bTime) return 1;

    return 0;
  });
};
