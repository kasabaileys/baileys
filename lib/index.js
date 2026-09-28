import chalk from 'chalk';
import { createRequire } from 'module';
import makeWASocket from './Socket/index.js';

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Store/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;

// Ambil data langsung dari package.json biar otomatis update
const require = createRequire(import.meta.url);
const pkg = require('../package.json'); // sesuaikan path kalau file ini di folder lain

console.clear();

const line = chalk.cyan('════════════════════════════════════════════════════════════════════════════════════');
const thin  = chalk.gray('────────────────────────────────────────────────────────────────────────────────────');

console.log('');
console.log(line);
console.log(chalk.bold.cyan('                                K A S A B A I L E Y S'));
console.log(chalk.gray(`                                 •  V{pkg.version}  •`));
console.log(line);
console.log('');
console.log(chalk.white('██╗  ██╗ █████╗ ███████╗ █████╗ ██████╗  █████╗ ██╗██╗     ███████╗██╗   ██╗███████╗'));
console.log(chalk.white('██║ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗██║██║     ██╔════╝╚██╗ ██╔╝██╔════╝'));
console.log(chalk.cyan('█████╔╝ ███████║███████╗███████║██████╔╝███████║██║██║     █████╗   ╚████╔╝ ███████╗'));
console.log(chalk.cyan('██╔═██╗ ██╔══██║╚════██║██╔══██║██╔══██╗██╔══██║██║██║     ██╔══╝    ╚██╔╝  ╚════██║'));
console.log(chalk.blue('██║  ██╗██║  ██║███████║██║  ██║██████╔╝██║  ██║██║███████╗███████╗   ██║   ███████║'));
console.log(chalk.blue('╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝   ╚═╝   ╚══════╝'));
console.log('');
console.log(thin);
console.log(chalk.bold.white('  📦  PACKAGE        ') + chalk.gray('  ›  ') + chalk.cyan(pkg.name));
console.log(chalk.bold.white('  📌  VERSION        ') + chalk.gray('  ›  ') + chalk.yellow(`v${pkg.version}`));
console.log(chalk.bold.white('  💰  PAYMENT GATEWAY') + chalk.gray('  ›  ') + chalk.bold.cyan('https://kasapay.my.id'));
console.log(chalk.bold.white('  🛡  STATUS         ') + chalk.gray('  ›  ') + chalk.green('Online & Ready'));
console.log(chalk.bold.white('  🔗  REPOSITORY     ') + chalk.gray('  ›  ') + chalk.blue('github.com/kasabaileys/baileys-new'));
console.log(thin);
console.log(chalk.gray('             Powered by ') + chalk.bold.magenta('Angkasa') + chalk.gray('    •  Author: ') + chalk.bold.cyan(pkg.author) + chalk.gray('    •  MIT License'));
console.log(line);
console.log('');
