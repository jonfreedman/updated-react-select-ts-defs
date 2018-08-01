import * as React from 'react';

import { ReactAsyncSelectProps } from '..';
import { ReactCreatableSelectProps } from './Createable';

export class AsyncCreatable<TValue> extends React.Component<ReactAsyncCreatableSelectProps<TValue>> { }

export type ReactAsyncCreatableSelectProps<TValue> = ReactAsyncSelectProps<TValue> & ReactCreatableSelectProps<TValue>;
