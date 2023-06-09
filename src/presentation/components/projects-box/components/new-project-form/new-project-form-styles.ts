import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type {
  StyledNewProjectInputContainerProps,
  StyledNewProjectFormContainerProps,
} from './new-project-form-types';

export const NewProjectFormContainer = styled.form<StyledNewProjectFormContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-right: 0.25rem;
  opacity: ${({ $isAddingNewProject }) => ($isAddingNewProject ? 1 : 0)};
  transition: opacity 150ms ease-in-out;
`;

export const NewProjectInputContainer = styled.div<StyledNewProjectInputContainerProps>`
  position: relative;
  display: flex;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    width: ${({ $hasError }) => ($hasError ? '100%' : '0')};
    height: 2px;
    display: block;
    background-color: ${({ $hasError }) => {
      return $hasError ? theme.colors.red : theme.colors.secondary;
    }};
    bottom: 0;
    left: 0;
    transition: width 150ms ease-in-out;
  }

  &:focus-within {
    &::before {
      width: 100%;
    }
  }
`;

export const NewProjectInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${theme.colors.subtitle};
  color: ${theme.colors.subtitle};
  font-size: 0.75rem;
  padding: 0.5rem 0;

  &::placeholder {
    color: ${theme.colors.subtitle};
  }

  &:focus {
    outline: none;
  }
`;

export const NewProjectActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
