import process from 'node:process';
import { gray, yellow } from '@kabeep/palette';

const BRAND = `   .-.                 .;           .      .   
  (_) )-.             .;'       ...;......;... 
    .:   \\  .-.      .;  .-.     .'     .'.-.  
   .:'    );   :    :: .;.-'   .;     .;.;.-'  
 .-:. \`--' \`:::'-'_;;_.-\`:::'.;     .;   \`:::' 
(_/`;

function createPrint() {
    const print = (...contents: string[]) =>
        process.stdout.write(contents.join(''));

    print.brand = () => print(yellow(BRAND), '\n\n');

    print.title = (title: string) => print(yellow(title), '\n\n');

    print.tip = (tip: string) => print(gray(tip), '\n');

    print.linebreak = (length: number) =>
        print(new Array(length).fill('\n').join(''));

    return print;
}

export default createPrint();
