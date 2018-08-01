import * as React from 'react';
import {Options, ReactSelectProps} from "../index";

export type CallbackOptions<TValue> = (inputValue: string, callback: (options: Options<TValue>) => void) => void;
export type PromiseOptions<TValue> = (inputValue: string) => Promise<Options<TValue>>;

export interface ReactSelectAsyncProps<TValue> extends ReactSelectProps<TValue> {
    cacheOptions: boolean;

    loadOptions: CallbackOptions<TValue> | PromiseOptions<TValue>
}

export default class ReactSelectAsyncClass<TValue> extends React.Component<ReactSelectAsyncProps<TValue>> {
    focus(): void;
    blur(): void;
}
