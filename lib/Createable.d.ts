import * as React from 'react';
import Node from 'react';

import { Options, ReactSelectProps } from '..';


export class Creatable<TValue> extends React.Component<ReactCreatableSelectProps<TValue>> { 
    focus(): void;
    blur(): void;
}

export interface ReactCreatableSelectProps<TValue> extends ReactSelectProps<TValue> { 
    /**
     *  Allow options to be created while the `isLoading` prop is true. Useful to
     *  prevent the "create new ..." option being displayed while async results are
     *  still being loaded. 
     *  @default false
     */
    allowCreateWhileLoading?: boolean;
    /** 
     * Gets the label for the "create new ..." option in the menu. Is given the
     * current input value. 
     */
    formatCreateLabel?: (inputValue: string) => Node;
    /** 
     * Determines whether the "create new ..." option should be displayed based on
     * the current input value, select value and options array. 
     */
    isValidNewOption?: (inputValue: string, selectValue: TValue, selectOptions: Options<TValue>) => boolean;
    /**
     * Returns the data for the new option when it is created. Used to display the
     * value, and is passed to `onChange`.
     */
    getNewOptionData?: (inputValue: string, optionValue: Node) => TValue;
    /**
     * If provided, this will be called with the input value when a new option is
     * created, and `onChange` will **not** be called. Use this when you need more
     * control over what happens when new options are created.
     */
    onCreateOption?: (string) => void;
    /**
     * Sets the position of the createOption element in your options list. Defaults to 'last'
     * @default 'last'
     */ 
    createOptionPosition?: 'first' | 'last';
}
