const fs = require('fs');
const path = 'src/pages/Home.tsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(
  /Discord Bot Hosting<\/h4>\s*<p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">Keep your bot online 24\/7 with zero lag<\/p>\s*<button\s*className="w-full bg-gradient-to-r from-indigo-500 to-blue-600/,
  'Discord Bot Hosting</h4>\n                       <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">Keep your bot online 24/7 with zero lag</p>\n                       <button\n                          onClick={() => navigate(\'/discord-bot-hosting\')}\n                          className="w-full bg-gradient-to-r from-indigo-500 to-blue-600'
);
fs.writeFileSync(path, content);
