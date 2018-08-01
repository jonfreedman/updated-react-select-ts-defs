import * as React from 'react';

import { ReactSelectProps } from '..';


export class Creatable<TValue> extends React.Component<ReactCreatableSelectProps<TValue>> { }

export interface ReactCreatableSelectProps<TValue> extends ReactSelectProps<TValue> { 
    // TODO: implement
}
