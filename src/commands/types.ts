export interface YargsOptions {
    /** Non-option arguments */
    _: Array<string | number>;
    /** The script name or node command */
    $0: string;
}

export interface CommandOptions extends YargsOptions {}
