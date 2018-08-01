import * as React from 'react';

type IndicatorComponentType = React.ComponentType<IndicatorProps>;

export type SelectComponents = {
    ClearIndicator: IndicatorComponentType | null,
    Control: React.ComponentType<ControlProps>,
    DropdownIndicator: IndicatorComponentType | null,
    DownChevron: React.ComponentType<any>,
    CrossIcon: React.ComponentType<any>,
    Group: React.ComponentType<GroupProps>,
    GroupHeading: React.ComponentType<any>,
    IndicatorsContainer: React.ComponentType<IndicatorContainerProps>,
    IndicatorSeparator: IndicatorComponentType | null,
    Input: React.ComponentType<InputProps>,
    LoadingIndicator: React.ComponentType<LoadingIconProps> | null,
    Menu: React.ComponentType<MenuProps>,
    MenuList: React.ComponentType<MenuListComponentProps>,
    MenuPortal: React.ComponentType<MenuPortalProps>,
    LoadingMessage: React.ComponentType<NoticeProps>,
    NoOptionsMessage: React.ComponentType<NoticeProps>,
    MultiValue: React.ComponentType<MultiValueProps>,
    MultiValueContainer: React.ComponentType<any>,
    MultiValueLabel: React.ComponentType<any>,
    MultiValueRemove: React.ComponentType<any>,
    Option: React.ComponentType<OptionProps>,
    Placeholder: React.ComponentType<PlaceholderProps>,
    SelectContainer: React.ComponentType<ContainerProps>,
    SingleValue: React.ComponentType<SingleValueProps>,
    ValueContainer: React.ComponentType<ValueContainerProps>,
  };

// TODO: do we want to pull these out into separate files?

  export interface IndicatorProps{
    //   TODO: Implement
  }

  export interface ControlProps{
    //   TODO: Implement
  }

  export interface GroupProps{
    //   TODO: Implement
  }

  export interface OptionProps{
    //   TODO: Implement
  }

  export interface PlaceholderProps{
    //   TODO: Implement
  }

  export interface ContainerProps{
    //   TODO: Implement
  }

  export interface SingleValueProps{
    //   TODO: Implement
  }

  export interface IndicatorContainerProps{
    //   TODO: Implement
  }

  export interface ValueContainerProps{
    //   TODO: Implement
  }

  export interface InputProps{
    //   TODO: Implement
  }

  export interface LoadingIconProps{
    //   TODO: Implement
  }

  export interface MenuProps{
    //   TODO: Implement
  }

  export interface MenuListComponentProps{
    //   TODO: Implement
  }

  export interface MenuPortalProps{
    //   TODO: Implement
  }

  export interface NoticeProps{
    //   TODO: Implement
  }

  export interface MultiValueProps{
    //   TODO: Implement
  }
