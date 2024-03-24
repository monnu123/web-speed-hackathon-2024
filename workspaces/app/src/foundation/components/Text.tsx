import React from 'react';
import styled from 'styled-components';

const _Text = styled.span<{
  $color: string;
  $flexGrow?;
  $flexShrink?;
  $typography: string;
  $weight: string;
}>`
  ${({ $typography }) => $typography};
  color: ${({ $color }) => $color};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  font-weight: ${({ $weight }) => $weight};
`;

type Props = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  color;
  flexGrow?;
  flexShrink?;
  id?: string;
  typography;
  weight?: 'bold' | 'normal';
};

export const Text: React.FC<Props> = ({
  as,
  children,
  color,
  flexGrow,
  flexShrink,
  id,
  typography,
  weight = 'normal',
}) => {
  return (
    <_Text
      $color={color}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $typography={typography}
      $weight={weight}
      as={as}
      id={id}
    >
      {children}
    </_Text>
  );
};
