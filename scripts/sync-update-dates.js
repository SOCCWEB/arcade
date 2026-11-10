#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const scriptPath = path.join(rootDir, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

console.log('Checking last commit dates for all games in games/...');

const gamesDir = path.join(rootDir, 'games');
const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(file => {
  const relPath = `games/${file}`;
  try {
    const gitDate = execSync(`git log -1 --format=%cs -- "${relPath}"`, { cwd: rootDir, encoding: 'utf8' }).trim();
    if (!gitDate) return;

    // Match `{...href:'games/filename'...updatedAt:'YYYY-MM-DD'...}`
    const regex = new RegExp(`(href:\\s*['"]${relPath}['"][^}]*?updatedAt:\\s*['"])[^'"]+(['"])`, 'g');
    if (regex.test(scriptContent)) {
      scriptContent = scriptContent.replace(regex, (match, prefix, suffix) => {
        return `${prefix}${gitDate}${suffix}`;
      });
      console.log(`✓ ${relPath} -> updatedAt: '${gitDate}'`);
      updatedCount++;
    }
  } catch (err) {
    console.warn(`Could not get git log for ${relPath}:`, err.message);
  }
});

fs.writeFileSync(scriptPath, scriptContent, 'utf8');
console.log(`Done! Synced dates for ${updatedCount} games in script.js.`);
