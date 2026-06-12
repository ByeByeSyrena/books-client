export const CATALOGUE_RESULT_HEADINGS = [
  'Look What We Found 👀',
  'Fresh Off the Shelf 📚',
  'Bookmarked for You ✨',
  'Well, Well, Well...',
  'Found Some Good Stuff ✨',
  'You Might Like These 👀',
  'Treasure Hunt Results 🗝️',
  'Lucky Finds 🍀',
  'The Search Gods Delivered ✨',
  'Not Bad, Not Bad 👀',
  'Your TBR Just Got Longer 📚',
  'More Books Than Self-Control',
  'Shelf Indulgence Ahead',
  'Literary Temptations ✨',
  'Books Acquired, Regrets Pending',
  'Dangerously Good Finds',
  'Your Wallet Is Concerned',
  "One More Book Won't Hurt",
  'Potential Sleep Schedule Destroyers',
  'The Stars Recommend ✨',
  'Moonlit Finds 🌙',
  'Stories Found Their Way to You',
  'A Little Book Magic ✨',
  'Whispers from the Shelves',
  'Curated by Moonlight 🌙',
  'Books Aligned in Your Favor ✨',
]

export const CATALOGUE_RESULT_COUNT_TEMPLATES = [
  '{count} magical finds',
  '{count} treasures discovered',
  '{count} stories uncovered',
  '{count} adventures await',
  '{count} matches found',
  '{count} stories in your orbit ✨',
  '{count} books emerged from the mist 🌙',
  '{count} moonlit discoveries ✨',
  '{count} literary constellations found 🌌',
  '{count} tales crossed your path ✨',
  '{count} reasons to ignore your to-do list',
  '{count} future bedtime delays',
  '{count} potential book hangovers',
  '{count} opportunities to spend money wisely™',
  '{count} excuses to stay up late',
]

export function getRandomCatalogueResultCopy(count: number) {
  const heading =
    CATALOGUE_RESULT_HEADINGS[
      Math.floor(Math.random() * CATALOGUE_RESULT_HEADINGS.length)
    ]
  const countTemplate =
    CATALOGUE_RESULT_COUNT_TEMPLATES[
      Math.floor(Math.random() * CATALOGUE_RESULT_COUNT_TEMPLATES.length)
    ]

  return {
    countText: countTemplate.replace('{count}', String(count)),
    heading,
  }
}
