import { PositionsType } from 'toasted-notes/lib/Message';
declare class Toaster {
    show(message: string, color?: string, position?: PositionsType): void;
    error(message: string): void;
    info(message: string): void;
    success(message: string): void;
}
export default Toaster;
