#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.resolve(__dirname, "../templates");

async function main() {
  const componentArg = process.argv[2];
  const availableComponents = fs.readdirSync(templatesDir)
    .map(file => path.basename(file, ".tsx"));

  let componentToInstall;

  if (componentArg) {
    if (!availableComponents.includes(componentArg)) {
      console.error(`❌ Component "${componentArg}" not found. Available components:`);
      availableComponents.forEach(comp => console.log(`- ${comp}`));
      process.exit(1);
    }
    componentToInstall = componentArg;
  } else {
    // Only show prompt if no argument was provided
    const { component } = await inquirer.prompt([
      {
        type: "list",
        name: "component",
        message: "Which component would you like to add?",
        choices: availableComponents,
      },
    ]);
    componentToInstall = component;
  }

  installComponent(componentToInstall);
}

function installComponent(component) {
  const source = path.join(templatesDir, `${component}.tsx`);
  const target = path.join(process.cwd(), `${component}.tsx`);

  fs.copyFileSync(source, target);
  console.log(`✅ ${component}.tsx has been added to your project!`);
}

main().catch((error) => {
  console.error("❌ Error:", error.message);
  process.exit(1);
});
