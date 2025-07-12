const { execSync } = require('child_process');

const dependencies = [
  'express',
  'cors',
  '@supabase/supabase-js',
  'dotenv'
];

const devDependencies = [
  'typescript',
  'ts-node',
  '@types/node',
  '@types/express',
  '@types/cors'
];

try {
  console.log('📦 Installing dependencies...');
  execSync(`npm install ${dependencies.join(' ')}`, { stdio: 'inherit' });

  console.log('🛠️ Installing dev dependencies...');
  execSync(`npm install -D ${devDependencies.join(' ')}`, { stdio: 'inherit' });

  console.log('✅ All backend packages installed successfully.');
} catch (error) {
  console.error('❌ Failed to install some packages:', error.message);
}
