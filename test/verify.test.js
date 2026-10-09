import assert from 'node:assert';
import { hackathons, getHackathonBySlug, getAllTracks } from '../src/data/hackathons.js';
import { faqData, faqCategories } from '../src/data/faq.js';
import { getRemainingDays, formatDateString, sortHackathonsByDate } from '../src/utils/dateUtils.js';
import { filterHackathons } from '../src/utils/filterHackathons.js';
import fs from 'node:fs';
import path from 'node:path';

console.log('🧪 Starting HackSphere Verification Tests...\n');

// 1. DATA INTEGRITY CHECKS
console.log('1. Checking Data Integrity & AI-Free Compliance...');
assert(Array.isArray(hackathons) && hackathons.length > 0, 'Hackathons data must be a non-empty array');
assert(Array.isArray(faqData) && faqData.length > 0, 'FAQ data must be a non-empty array');

// Check that no forbidden AI claims or AI APIs exist
const forbiddenAIKeywords = [
  'openai', 'chatgpt', 'gemini-pro', 'claude', 'ai-powered',
  'ai chatbot', 'ai recommendation', 'ai prediction', 'generative ai'
];

hackathons.forEach((h) => {
  assert(h.id, `Hackathon missing id: ${JSON.stringify(h)}`);
  assert(h.slug, `Hackathon missing slug: ${h.name}`);
  assert(h.name, `Hackathon missing name: ${h.id}`);
  assert(h.organiser, `Hackathon missing organiser: ${h.name}`);
  assert(['Offline', 'Online', 'Hybrid'].includes(h.format), `Invalid format: ${h.format} in ${h.name}`);
  assert(['Upcoming', 'Registration Open', 'Registration Closed', 'Completed'].includes(h.status), `Invalid status: ${h.status} in ${h.name}`);
  assert(Array.isArray(h.tracks) && h.tracks.length > 0, `Hackathon must have tracks: ${h.name}`);
  assert(typeof h.eligibilitySummary === 'string', `Hackathon missing eligibility summary: ${h.name}`);

  // Check text content does not claim AI-powered
  const textBlob = `${h.name} ${h.tagline || ''} ${h.eligibilitySummary} ${h.rulesSummary || ''}`.toLowerCase();
  forbiddenAIKeywords.forEach((kw) => {
    assert(!textBlob.includes(kw), `Hackathon "${h.name}" contains forbidden keyword: "${kw}"`);
  });
});

console.log(`  ✓ All ${hackathons.length} hackathons have verified fields and adhere to AI-free compliance.`);

// 2. DATE AND DEADLINE UTILITIES
console.log('2. Checking Date and Deadline Utilities...');

// Test getRemainingDays
const futureDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString();
const pastDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString();

const futureRemaining = getRemainingDays(futureDate);
assert(futureRemaining !== null && futureRemaining.days >= 4, 'Future date must return remaining days');
assert(futureRemaining.isExpired === false, 'Future date is not expired');

const pastRemaining = getRemainingDays(pastDate);
assert(pastRemaining !== null && pastRemaining.isExpired === true, 'Past date must indicate expired');

const nullRemaining = getRemainingDays(null);
assert(nullRemaining === null, 'Null date must return null');

const unannouncedRemaining = getRemainingDays('To be announced');
assert(unannouncedRemaining === null, 'Unannounced date must return null');

console.log('  ✓ getRemainingDays handles future, past, null, and unannounced dates correctly.');

// Test formatDateString
assert(formatDateString('28 February – 1 March 2026') === '28 February – 1 March 2026', 'Preserves manual readable strings');
assert(formatDateString(null) === 'To be announced', 'Returns fallback for null');

// Test sortHackathonsByDate
const sorted = sortHackathonsByDate(hackathons);
assert(sorted.length === hackathons.length, 'Sorted list must keep all items');
// Upcoming should come before Completed
const firstUpcomingIdx = sorted.findIndex(h => h.status === 'Upcoming' || h.status === 'Registration Open');
const firstCompletedIdx = sorted.findIndex(h => h.status === 'Completed' || h.status === 'Registration Closed');
assert(firstUpcomingIdx < firstCompletedIdx, 'Upcoming events should appear before completed events');
console.log('  ✓ sortHackathonsByDate places upcoming events before archived events.');

// 3. SEARCH AND FILTER UTILITIES
console.log('3. Checking Search and Filter Logic...');

// Search by name
const searchByName = filterHackathons(hackathons, { searchQuery: 'Phantasia' });
assert(searchByName.length === 1 && searchByName[0].slug === 'phantasia-3-hackathon', 'Search by name must find Phantasia');

// Search by organiser
const searchByOrg = filterHackathons(hackathons, { searchQuery: 'GDG' });
assert(searchByOrg.length === 1 && searchByOrg[0].slug === 'techsprint-hackathon-2026', 'Search by organiser must find GDG TechSprint');

// Filter by format
const offlineOnly = filterHackathons(hackathons, { format: 'Offline' });
assert(offlineOnly.every(h => h.format === 'Offline'), 'All results must be Offline');
assert(offlineOnly.length >= 4, 'Should find multiple offline events');

const onlineOnly = filterHackathons(hackathons, { format: 'Online' });
assert(onlineOnly.every(h => h.format === 'Online'), 'All results must be Online');

// Filter by status
const upcomingOnly = filterHackathons(hackathons, { status: 'Upcoming' });
assert(upcomingOnly.every(h => h.status === 'Upcoming' || h.status === 'Registration Open'), 'Must be upcoming');

const completedOnly = filterHackathons(hackathons, { status: 'Completed' });
assert(completedOnly.every(h => h.status === 'Completed' || h.status === 'Registration Closed'), 'Must be completed');

// Filter by track
const tracks = getAllTracks();
assert(tracks.length > 0, 'getAllTracks must return non-empty track list');
const firstTrack = tracks[0];
const trackFiltered = filterHackathons(hackathons, { track: firstTrack });
assert(trackFiltered.every(h => h.tracks.includes(firstTrack)), 'Must include filtered track');

// Empty search match
const noMatch = filterHackathons(hackathons, { searchQuery: 'xyznonexistentterm123' });
assert(noMatch.length === 0, 'Unmatched search must return empty array');

console.log('  ✓ Search and filters passed all test cases.');

// 4. SEO & PUBLIC ASSETS VERIFICATION
console.log('4. Verifying SEO & Public Assets...');

const robotsPath = path.resolve('public/robots.txt');
assert(fs.existsSync(robotsPath), 'robots.txt must exist in public directory');
const robotsContent = fs.readFileSync(robotsPath, 'utf8');
assert(robotsContent.includes('Allow: /'), 'robots.txt must allow root');
assert(robotsContent.includes('sitemap.xml'), 'robots.txt must link to sitemap.xml');

const sitemapPath = path.resolve('public/sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml must exist in public directory');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/</loc>'), 'sitemap.xml must include home');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/hackathons</loc>'), 'sitemap.xml must include hackathons');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/registration</loc>'), 'sitemap.xml must include registration');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/eligibility</loc>'), 'sitemap.xml must include eligibility');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/schedule</loc>'), 'sitemap.xml must include schedule');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/rules</loc>'), 'sitemap.xml must include rules');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/tracks</loc>'), 'sitemap.xml must include tracks');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/speakers</loc>'), 'sitemap.xml must include speakers');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/venue</loc>'), 'sitemap.xml must include venue');
assert(sitemapContent.includes('<loc>https://hacksphere.edu/faq</loc>'), 'sitemap.xml must include faq');

console.log('  ✓ robots.txt and sitemap.xml are valid and complete.');

// 5. SLUG RESOLVER
console.log('5. Verifying Slug Resolver...');
const resolved = getHackathonBySlug('bennett-university-hackathon-2026');
assert(resolved !== null && resolved.name === 'Bennett University Hackathon 2026', 'Slug resolver works for known slug');
const invalidSlug = getHackathonBySlug('invalid-nonexistent-slug');
assert(invalidSlug === null, 'Slug resolver returns null for invalid slug');

console.log('  ✓ Slug resolver handles valid and invalid slugs gracefully.');

console.log('\n🎉 ALL 5 VERIFICATION SUITES PASSED SUCCESSFULLY!');
