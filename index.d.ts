// Type definitions for react-select 2.0
// Project: https://github.com/JedWatson/react-select
// TypeScript Version: 3.0
import * as React from 'react';


export default class ReactSelectClass<TValue = OptionValues> extends React.Component<ReactSelectProps<TValue>>{
    focus(): void;
    blur() : void;
}

export interface NoOptionArg{
    inputValue: string;
}


// Handlers
export type OnBlurHandler = React.FocusEventHandler<HTMLInputElement>;
export type OnFocusHandler = React.FocusEventHandler<HTMLInputElement>;
export type OnInputChangeHandler = (inputValue: string) => string;
export type OnMenuScrollToBottomHandler = () => void;
export type OnMenuCloseHandler = () => void;
export type OnMenuOpenHandler = () => void;
export type OnKeyDownHandler = React.KeyboardEventHandler<HTMLElement>;

export type NoOptionsHandler = (arg: NoOptionArg) => string | null

export interface ReactSelectProps<TValue = OptionValues> extends React.Props<ReactSelectClass<TValue>>{
    /**
     * html id(s) of element(s) that should be used to describe this input (for assistive tech)
     */
    'aria-describedBy'?: string;

    /**
     * aria label (for assistive tech)
     */
    'aria-label'?: string;

    /**
     * aria label (for assistive tech)
     */
    'aria-labelledby'?: string;

    /**
     * autofocus the component on mount
     * @default false
     */
    autoFocus?: boolean;

    /**
     * Remove the currently focused option when the user presses backspace
     * @default true
      */
    backspaceRemoves?: boolean;

    /**
     * Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices)
     * @default false
     */
    blurInputOnSelect?: boolean;

    /**
     * CSS className for the outer element
     */
    className?: string;

    /**
     * Close the select menu when the user selects an option
     * @default true
     */
    closeMenuOnSelect?: boolean;

    /**
     * delimiter to use to join multiple values
     * @default ","
     */
    delimiter?: string;

    /**
     * whether escape clears the value when the menu is closed
     * @default true
     */
    escapeClearsValue?: boolean;

    /**
     * Hide the selected option from the menu
     * @default false - for single select
     * @default true - for multi select
     */
    hideSelectedOptions?: boolean;

    /**
     * id for the underlying HTML input element
     * @default undefined
     */
    id?: string;

    /**
     * allows for synchronization of component id's on server and client.
     * @see https://github.com/JedWatson/react-select/pull/1105
     */
    instanceId?: string;

    /**
     * whether it is possible to reset value. if enabled, an X button will appear at the right side.
     * @default true - for single select
     * @default false - for multi select
     */
    isClearable?: boolean;

    /**
     * Is the select disabled
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Is the select value clearable
     * @default false
     */
    isLoading?: boolean;

    /**
     * Support multiple selected options
     * @default false
     */
    isMulti?: boolean;

    /**
     * Is the select direction right-to-left
     * @default false
     */
    isRtl?: boolean;

    /**
     * Whether to enable search functionality
     * @default true;
     */
    isSearchable?: boolean;

    /**
     * Whether the menu should be scrolled into view when it opens
     * @default !isMobileDevice()
     */
    menuShouldScrollIntoView?: boolean;

    /**
     * field name, for hidden `<input>` tag
     */
    name?: string;

    /**
     * Text to display when there are no options
     * @default 'No options',
     */
    noOptionsMessage?: NoOptionsHandler

    /**
     * onBlur handler: function (event) {}
     */
    onBlur?: OnBlurHandler;

    /**
     * onFocus handler: function (event) {}
     */
    onFocus?: OnFocusHandler;

    /**
     * Handle change events on the input
     */
    onInputChange?: OnInputChangeHandler;

    /**
     * Handle key down events on the select
     */
    onKeyDown?: OnKeyDownHandler;

    /**
     * Handle the menu closing
     */
    onMenuClose?: OnMenuCloseHandler;

    /**
     * Handle the menu opening
     */
    onMenuOpen?: OnMenuOpenHandler;

    /**
     * fires when the menu is scrolled to the bottom; can be used to paginate options
     */
    onMenuScrollToBottom?: OnMenuScrollToBottomHandler;

    /**
     * Allows control of whether the menu is opened when the Select is clicked
     * @default true
     */
    openMenuOnClick?: boolean;

    /**
     * Allows control of whether the menu is opened when the Select is focused
     * @default false
     */
    openMenuOnFocus?: boolean;

    /**
     * array of Select options
     * @default false
     */
    options?: Options<TValue>;

    /**
     * number of options to jump when using page up/down keys
     * @default 5
     */
    pageSize?: number;

    /**
     * Placeholder text for the select value
     * @default "Select..."
     */
    placeholder?: string

    /**
     *  optional tab index of the control
     */
    tabIndex?: string | number;

    /**
     * whether to select the currently focused value when the  [tab]  key is pressed
     */
    tabSelectsValue?: boolean;

    /**
     * initial field value
     */
     value?: Option<TValue> | Options<TValue> | string | string[] | number | number[] | boolean;
}




export type OptionValues = string | number | boolean;

export type Options<TValue = OptionValues> = Array<Option<TValue>>;

export interface Option<TValue = OptionValues> { }
