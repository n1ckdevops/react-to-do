/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)<{ isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isDone }) => (isDone ? "lightgreen" : "lightcoral")};
`;
