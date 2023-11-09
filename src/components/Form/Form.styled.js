import styled from 'styled-components';
import { Form, Field } from "formik";

export const FormStyled = styled(Form)`
width: 350px;
padding: 10px;
margin: 20px;
border: solid black 1px;
/* background-color: red; */
`;

export const FieldStyled = styled(Field)`
font-style: italic;
/* background-color: red; */
`;

// export const ErrorMessageStyled = styled(ErrorMessage)`
// background-color: red;
// `;

export const LabelStyled = styled.div`
margin-bottom: 20px;
`;