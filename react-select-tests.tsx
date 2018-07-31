import * as React from 'react';
import Select, { createFilter, FilterConfig } from '.';

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
    ignoreCase: boolean,
    ignoreAccents: boolean,
    trim: boolean,
    matchFromStart: boolean,
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
                isOptionDisabled={(option) => option.rating !== 'safe'}
            />
        );
    }
}