import chalk from 'chalk';
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

console.clear();
const banner = `
███████╗ █████╗ ██╗██████╗ ██╗██████╗ ███████╗██╗   ██╗
██╔════╝██╔══██╗██║██╔══██╗██║██╔══██╗██╔════╝██║   ██║
███████╗███████║██║██████╔╝██║██║  ██║█████╗  ██║   ██║
╚════██║██╔══██║██║██╔══██╗██║██║  ██║██╔══╝  ╚██╗ ██╔╝
███████║██║  ██║██║██║  ██║██║██████╔╝███████╗ ╚████╔╝ 
╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝  ╚═══╝  
`;
const colors = [
  chalk.red,
  chalk.yellow,
  chalk.green,
  chalk.cyan,
  chalk.blue,
  chalk.magenta
];
let result = '';
for (let i = 0; i < banner.length; i++) {
  const char = banner[i];
  const color = colors[i % colors.length];
  result += char === '\n' ? '\n' : color(char);
}
console.log(result);
console.log(chalk.bold.white('  💰 PAYMENT GATEWAY  : ') + chalk.bold.cyan('https://kasapay.my.id'));
console.log('');
//# sourceMappingURL=index.js.map
