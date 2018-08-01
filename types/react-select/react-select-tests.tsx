import * as React from 'react';
import Select, { components, createFilter, FilterConfig, Options, SingleValueProps } from 'react-select';
import Async from 'react-select/lib/Async';

interface ColourOption {
    value: string;
    label: string;
    color: string;
    disabled?: boolean;
}

const colourOptions: ColourOption[] = [
    {value: 'ocean', label: 'Ocean', color: '#00B8D9'},
    {value: 'blue', label: 'Blue', color: '#0052CC', disabled: true},
    {value: 'purple', label: 'Purple', color: '#5243AA'},
    {value: 'red', label: 'Red', color: '#FF5630'},
    {value: 'orange', label: 'Orange', color: '#FF8B00'},
    {value: 'yellow', label: 'Yellow', color: '#FFC400'},
    {value: 'green', label: 'Green', color: '#36B37E'},
    {value: 'forest', label: 'Forest', color: '#00875A'},
    {value: 'slate', label: 'Slate', color: '#253858'},
    {value: 'silver', label: 'Silver', color: '#666666'},
];

interface FlavourOption {
    value: string;
    label: string;
    rating: 'safe' | 'good' | 'wild' | 'crazy';
}

const flavourOptions: FlavourOption[] = [
    {value: 'vanilla', label: 'Vanilla', rating: 'safe'},
    {value: 'chocolate', label: 'Chocolate', rating: 'good'},
    {value: 'strawberry', label: 'Strawberry', rating: 'wild'},
    {value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy'},
];

interface SelectCreateFilterProps {
    ignoreCase: boolean;
    ignoreAccents: boolean;
    trim: boolean;
    matchFromStart: boolean;
}

export class SelectCreateFilter extends React.PureComponent<SelectCreateFilterProps> {
    render() {
        const {
            ignoreCase,
            ignoreAccents,
            trim,
            matchFromStart,
        } = this.props;

        const filterConfig: FilterConfig<ColourOption> = {
            ignoreCase,
            ignoreAccents,
            trim,
            matchFrom: matchFromStart ? 'start' : 'any',
        };

        return (
            <Select<ColourOption>
                defaultValue={colourOptions[0]}
                isClearable
                isSearchable
                name="color"
                options={colourOptions}
                filterOption={createFilter(filterConfig)}
            />
        );
    }
}

export class CustomIsOptionDisabled extends React.PureComponent<any> {
    render() {
        return (
            <Select<FlavourOption>
                defaultValue={flavourOptions[0]}
                isClearable
                isSearchable
                name="color"
                options={flavourOptions}
                isOptionDisabled={(option: FlavourOption) => option.rating !== 'safe'}
            />
        );
    }
}

interface WithCallbacksState {
    inputValue: string;
}

export class WithCallbacks extends React.PureComponent<any, WithCallbacksState> {
    state: WithCallbacksState = {
        inputValue: ''
    };

    private readonly filterColors = (inputValue: string): Options<ColourOption> => colourOptions.filter(
        i => i.label.toLowerCase().includes(inputValue.toLowerCase())
    )

    private readonly loadOptions = (inputValue: string, callback: (options: Options<ColourOption>) => void) => {
        setTimeout(() => {
            callback(this.filterColors(inputValue));
        }, 1000);
    }

    private readonly handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({inputValue});
        return inputValue;
    }

    render() {
        return (
            <Async<ColourOption>
                cacheOptions
                loadOptions={this.loadOptions}
                onInputChange={this.handleInputChange}
            />
        );
    }
}

const SingleValue = ({children, ...props}: SingleValueProps<ColourOption>):JSX.Element => {
    const boxStyle = {
        height: '10px',
        width: '10px',
        margin: '4px 5px 0 0',
        background: props.data.color
    };
    return (
        <components.SingleValue {...props}>
            <div style={boxStyle} />
            {children}
        </components.SingleValue>
    );
};

export default class CustomControl extends React.PureComponent<any> {
    render() {
        return (
            <Select
                defaultValue={colourOptions[0]}
                isClearable
                styles={{
                    singleValue: (base) => ({
                        ...base,
                        padding: 5,
                        borderRadius: 5,
                        background: colourOptions[2].color,
                        color: 'white',
                        display: 'flex'
                    })
                }}
                components={{SingleValue}}
                isSearchable
                name="color"
                options={colourOptions}
            />
        );
    }
}