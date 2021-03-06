//  Type definitions for react-select 2.0
// Project: https://github.com/JedWatson/react-select
// TypeScript Version: 2.9

// tslint:disable-next-line strict-export-declare-modifiers
import * as React from 'react';

export default class ReactSelectClass<TValue> extends React.Component<ReactSelectProps<TValue>> {
    focus(): void;

    blur(): void;
}

export interface ClassNamesState {
    [key: string]: boolean;
}

export type ActionTypes =
    'select-option'
    | 'deselect-option'
    | 'remove-value'
    | 'pop-value'
    | 'set-value'
    | 'clear'
    | 'create-option';

export interface NoOptionArg {
    inputValue: string;
}

// Handlers
export type NoOptionsHandler = (arg: NoOptionArg) => string;
export type OnBlurHandler = React.FocusEventHandler<HTMLElement>;
export type OnChangeHandler<TValue> = (newValue: TValue, actionMeta: ActionTypes) => void;
export type OnFocusHandler = React.FocusEventHandler<HTMLElement>;
export type OnInputChangeHandler = (inputValue: string, actionMeta: ActionTypes) => string;
export type OnKeyDownHandler = React.KeyboardEventHandler<HTMLElement>;
export type OnMenuCloseHandler = () => void;
export type OnMenuOpenHandler = () => void;
export type OnMenuScrollToBottomHandler = (e: React.SyntheticEvent<HTMLElement>) => void;
export type OnMenuScrollToTopHandler = (e: React.SyntheticEvent<HTMLElement>) => void;

// Options Handling
export type OptionFilter<TValue> = (option: TValue, inputValue: string) => boolean;
export type OptionFormatter<TValue> = (option: TValue, context: any) => Node;
export type OptionPredicate<TValue> = (option: TValue, value: Options<TValue>) => boolean;

export interface CommonProps<TValue> {
    clearValue?: () => void;

    /**
     * CSS className for the outer element
     */
    className?: string;

    // TODO: Can't figure out what this is doing or what the arguments should be called
    cx?: (arg1: (string | undefined), arg2: (ClassNamesState | undefined), arg3: (string | undefined)) => (string | undefined);

    // TODO: Pull this out in to it's own props interface
    /**
     * Get the styles of a particular part of the select. Pass in the name of the
     * property as the first argument, and the current props as the second argument.
     * See the `styles` object for the properties available.
     */
    getStyles?: (key: string, props: any) => {};

    getValue?: () => TValue;

    hasValue?: boolean;
    /**
     * Support multiple selected options
     * @default false
     */
    isMulti?: boolean;

    /**
     * Array of options that populate the select menu
     * @default []
     */
    options?: Options<TValue>;

    selectOption?: (newValue: TValue) => void;

    selectProps?: any;

    setValue?: (newValue: TValue, action: ActionTypes) => void;
}

export interface ReactSelectProps<TValue> extends CommonProps<TValue> {
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
     * @default isTouchCapable()
     */
    blurInputOnSelect?: boolean;

    /**
     * When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
     * @default !isTouchCapable()
     */
    captureMenuScroll?: boolean;

    /**
     * classNamePrefix attribute used as a base for inner component classNames
     */
    classNamePrefix?: string | null;

    /**
     * Close the select menu when the user selects an option
     * @default true
     */
    closeMenuOnSelect?: boolean;

    /**
     * If true, close the select menu when the user scrolls the document/body.
     *
     * If a function, takes a standard javascript ScrollEvent you return a boolean:
     *
     * true => The menu closes
     * false => The menu stays open
     *
     * This is useful when you have a scrollable modal and want to portal the menu out, but want to avoid graphical issues.
     */
    closeMenuOnScroll?: boolean | EventListener;

    /**
     * This complex object includes all the compositional components that are used in react-select. If you wish to overwrite
     * a component, pass in an object with the appropriate namespace.  * If you only wish to restyle a component, we recommend
     * using the styles prop instead. For a list of the components that can be passed in, and the shape that will be passed to
     * them, see the components docs
     */
    // components: SelectComponentsConfig
    // TODO: How do we define this type? Maybe we need to import it?

    /**
     * Whether the value of the select, e.g. SingleValue, should be displayed in the control.
     * @default true
     */
    controlShouldRenderValue?: boolean;

    /**
     * initial value displayed to user
     */
    defaultValue?: TValue;

    /**
     * string initially displayed to user
     */
    defaultInputValue?: string;

    /**
     * True if menu should be open when mounted
     */
    defaultMenuIsOpen?: boolean;

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
     * Function to filter options based on user input
     */
    filterOption?: OptionFilter<TValue>;

    // TODO: Expose Format Group Label

    /**
     * Function to render option
     */
    formatOptionLabel?: OptionFormatter<TValue>;

    /**
     * Function to stringify option as a label, use if your option shape does not contain a label property
     * @param option Option value
     */
    getOptionLabel?: (option: TValue) => string;

    /**
     * Function to stringify option as a value, use if your option shape does not contain a value property
     * @param option Option value
     */
    getOptionValue?: (option: TValue) => string;

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
     * The value of the search input
     */
    inputValue?: string;

    /**
     * The id of the search input
     */
    inputId?: string;

    /**
     * Define an id prefix for the select components e.g. {your-id}-value
     */
    instanceId?: number | string;

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

    isOptionDisabled?: OptionPredicate<TValue>;

    isOptionSelected?: OptionPredicate<TValue>;

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

    // TODO: Expose loadingMessage

    /**
     * Minimum height of the menu before flipping
     * @default 140
     */
    minMenuHeight?: number;

    /**
     *  Maximum height of the menu before scrolling
     *  @default 300
     */
    maxMenuHeight?: number;

    /**
     * Whether the menu is open
     * @default false
     */
    menuIsOpen?: boolean;

    // TODO: expose MenuPlacement

    // TODO: Expose menuPosition

    // TODO: Expose menuPortalTarget

    /**
     * Whether to block scroll events when the menu is open
     * @default false
     */
    menuShouldBlockScroll?: boolean;

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
    noOptionsMessage?: NoOptionsHandler;

    /**
     * onBlur handler: function (event) {}
     */
    onBlur?: OnBlurHandler;

    /**
     * subscribe to change events
     */
    onChange?: OnChangeHandler<TValue>;

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
     * Fired when the user scrolls to the bottom of the menu
     */
    onMenuScrollToBottom?: OnMenuScrollToBottomHandler;

    /**
     * Fired when the user scrolls to the top of the menu
     */
    onMenuScrollToTop?: OnMenuScrollToTopHandler;

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
     * number of options to jump when using page up/down keys
     * @default 5
     */
    pageSize?: number;

    /**
     * Placeholder text for the select value
     * @default "Select..."
     */
    placeholder?: string;

    // TODO: Expose screenReaderStatus

    // TODO: Expose styles

    /**
     *  optional tab index of the control
     */
    tabIndex?: string | number;

    /**
     * whether to select the currently focused value when the  [tab]  key is pressed
     */
    tabSelectsValue?: boolean;

    /**
     * TODO: are the raw types still valid?
     * initial field value
     */
    value?: TValue | Options<TValue> | string | string[] | number | number[] | boolean;
}

// Advanced
export interface FilterConfig<TValue> {
    ignoreCase: boolean;
    ignoreAccents: boolean;
    stringify?: (value: TValue) => string;
    trim: boolean;
    matchFrom: 'start' | 'any';
}

export function createFilter<TValue>(config: FilterConfig<TValue>): OptionFilter<TValue>;

export type Options<TValue> = TValue[];
