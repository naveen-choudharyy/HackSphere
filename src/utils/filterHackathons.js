/**
 * Pure client-side filtering utility for HackSphere directory.
 * No external APIs, no AI search.
 */

export const filterHackathons = (hackathons, {
  searchQuery = '',
  track = 'All',
  format = 'All',
  status = 'All'
}) => {
  return hackathons.filter((event) => {
    // 1. Search Query (name, organiser, tagline, location)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchName = event.name.toLowerCase().includes(q);
      const matchOrganiser = event.organiser.toLowerCase().includes(q);
      const matchTagline = event.tagline ? event.tagline.toLowerCase().includes(q) : false;
      const matchLocation = event.location ? event.location.toLowerCase().includes(q) : false;
      const matchTrack = event.tracks.some(t => t.toLowerCase().includes(q));

      if (!matchName && !matchOrganiser && !matchTagline && !matchLocation && !matchTrack) {
        return false;
      }
    }

    // 2. Track Filter
    if (track !== 'All') {
      const hasTrack = event.tracks.some(t => t.toLowerCase() === track.toLowerCase());
      if (!hasTrack) return false;
    }

    // 3. Format Filter ('All', 'Offline', 'Online', 'Hybrid')
    if (format !== 'All') {
      if (event.format.toLowerCase() !== format.toLowerCase()) {
        return false;
      }
    }

    // 4. Status Filter ('All', 'Upcoming', 'Completed', 'Registration Open')
    if (status !== 'All') {
      if (status === 'Upcoming') {
        if (event.status !== 'Upcoming' && event.status !== 'Registration Open') {
          return false;
        }
      } else if (status === 'Completed') {
        if (event.status !== 'Completed' && event.status !== 'Registration Closed') {
          return false;
        }
      } else if (event.status !== status) {
        return false;
      }
    }

    return true;
  });
};
